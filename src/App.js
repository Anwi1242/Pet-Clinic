
import {Button,Container} from '@mui/material';
import {useEffect } from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import AppBar from './components/appbar';
import Banner from './components/banner';


function App() {
  useEffect(() => {
    document.title="material ui --Home"
  
   
  }, [])
  
  return (
    <ThemeProvider theme = {theme}>
 <Container maxWidth="xl" sx={{backgroundColor:"#fff"}}>
      
      <AppBar></AppBar>
      <Banner></Banner>
      {/*
 appbar 
  promotions
  tittle
  products
  searchbox
  appdrawer*/}
    
    </Container>

    </ThemeProvider>
   
 
  );
}

export default App;