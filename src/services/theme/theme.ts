import { createTheme } from '@mui/material/styles';
import {danger, facebookBGButton, googleBGButton} from "../../constants/colors";
import { ThemeMode } from './enums/enums';

  const theme = createTheme({
    palette: {
      mode: ThemeMode.LIGHT,
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  // types

  declare module '@mui/material/styles' {
    interface Theme {
      palette: {
        mode: ThemeMode,
        primary: {
          light: string,
          main: string,
          dark: string,
          contrastText?: string,
        },
        secondary: {
          light: string,
          main: string,
          dark: string,
          contrastText: string,
        },
      },
   }
   // allow configuration using `createTheme`
   interface ThemeOptions {
    [palette: string]: {
      mode?: ThemeMode,
      primary?: {
        light?: string,
        main?: string,
        dark?: string,
        contrastText?: string,
      },
      secondary?: {
        light?: string,
        main?: string,
        dark?: string,
        contrastText?: string,
      },
  },
   }
  }

  export default theme;

