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
  let count = 0;
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setIsOpen(true);
      count++;
    }, 10000);
    let intervalId = setInterval(() => {
      if (count === 3) {
        clearInterval(intervalId);
      }
      if (!isOpen) {
        count++;
        setIsOpen(true);
      }
    }, 40000);
    if (isSubmit) {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    }
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isSubmit]);
  return (
    <FormContext.Provider value={{ isOpen, setIsOpen, setIsSubmit }}>
      {children}
    </FormContext.Provider>
  );
};
