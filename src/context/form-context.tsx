import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type Props = {
  isOpen: boolean | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean>> | undefined;
};

export const FormContext = createContext<Props>({
  isOpen: undefined,
  setIsOpen: undefined,
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FormContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </FormContext.Provider>
  );
};
