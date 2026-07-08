import { createTheme } from '@mui/material/styles';

/**
 * 컬러 팔레트 디자인 시스템.md 의 CSS 변수를 그대로 매핑한 MUI 테마
 */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4CB98C',
      light: '#7ED1AC',
      dark: '#388F6C',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#A9CBEA',
      contrastText: '#1A1A1A',
    },
    accent: {
      main: '#F5C518',
      contrastText: '#1A1A1A',
    },
    background: {
      default: '#FAF4E3',
      paper: '#F1E8D0',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#2B2B2B',
      disabled: '#8A8577',
    },
    link: {
      main: '#3B7DC4',
      hover: '#2F638F',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#4CB98C',
          '&:hover': {
            backgroundColor: '#388F6C',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#3B7DC4',
          '&:hover': {
            color: '#2F638F',
          },
        },
      },
    },
  },
});

export default theme;
