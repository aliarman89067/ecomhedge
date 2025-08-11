import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const FormContext = createContext<Props>({
  isOpen: false,
  setIsOpen: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FormContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </FormContext.Provider>
  );
};
