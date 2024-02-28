import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import Main from './components/Main';
import Redirect from './components/Redirect';



const font = "'Montserrat', sans-serif"

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FEFBF6',
    },
    background: {
      default: '#141414',
      paper: '#18181e',
    },
  },
  typography: {
    fontFamily: font,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/rickandmorty' element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;