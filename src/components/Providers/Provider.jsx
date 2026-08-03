import { ThemeProvider } from "./ThemeProvider";
import ToastProvider from "./ToastProvider";

const Provider = ({ children }) => {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme">
      {children}

      <ToastProvider />
    </ThemeProvider>
  );
};

export default Provider;
