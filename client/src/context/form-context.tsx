import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type Props = {
  isOpen: boolean | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean>> | undefined;
  setIsSubmit: Dispatch<SetStateAction<boolean>> | undefined;
};

export const FormContext = createContext<Props>({
  isOpen: undefined,
  setIsOpen: undefined,
  setIsSubmit: undefined,
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    if (isSubmit) {
      clearTimeout(timeoutId);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSubmit]);
  return (
    <FormContext.Provider value={{ isOpen, setIsOpen, setIsSubmit }}>
      {children}
    </FormContext.Provider>
  );
};
