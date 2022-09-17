import React, { useState, createContext, useContext } from "react";
import { createPortal } from "react-dom";

type ToastTypes = "normal" | "error";

// eslint-disable-next-line @typescript-eslint/no-empty-function,no-empty-pattern
const ToastContext = createContext(({}: { text: string; type?: ToastTypes }) => {});
ToastContext.displayName = "ToastContext";

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider: React.FC = ({ children }) => {
  const [showable, setShowable] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastType, setToastType] = useState<ToastTypes>("normal");

  const showToast = ({text, type = "normal"}: {text: string; type?: ToastTypes}) => {
    console.log('show toast start')
    setToastText(text);
    setToastType(type);
    setShowable(true);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {createPortal(
        <Toast visible={showable} toastType={toastType}>
          {toastText}
        </Toast>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

const Toast: React.FC<{visible: boolean, toastType: ToastTypes }>
    = ({visible, toastType}) => {
      return <div style={{display: visible ? "block" : "none", backgroundColor: toastType === "normal" ? "blue" : "red"}}>
        {children}
      </div>
    }
