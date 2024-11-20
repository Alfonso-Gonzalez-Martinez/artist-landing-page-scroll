import {createContext, ReactNode, useContext, useState} from "react";

interface AlertState {
  isOpen: boolean;
  type: "success" | "error" | "";
  message: string;
}
interface AlertContextType extends AlertState {
  onOpen: (type: "success" | "error" | "", message: string) => void;
  onClose: () => void;
}

export const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [state, setState] = useState<AlertState>({
    isOpen: false,
    type: 'success',
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: "", message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};