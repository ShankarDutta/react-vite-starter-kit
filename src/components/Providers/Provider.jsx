import { ThemeProvider } from "./ThemeProvider";

const Provider = ({ children }) => {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
