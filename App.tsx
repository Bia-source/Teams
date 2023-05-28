import { ThemeProps, ThemeProvider } from "styled-components";
import { Groups } from '@screens/Groups';
import theme from "./src/shared/global/theme/index";

export default function App() {
  return (
   <ThemeProvider theme={theme}>
    <Groups/>
   </ThemeProvider>
  );
}
