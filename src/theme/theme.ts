// theme.ts
import {DefaultTheme} from 'react-native-paper';

export const customTheme = {
  ...DefaultTheme, // Extends the default theme provided by react-native-paper
  colors: {
    ...DefaultTheme.colors,
    primary: '#AD88C6', // Example primary color
    background: '#F5EFFF',
    text: '#7469B6',

  },
};
