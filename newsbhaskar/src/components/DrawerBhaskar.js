import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import categories from '../data/category';


export default function SwipeableTemporaryDrawer({setCategory}) {

  const [state, setState] = React.useState({
   
    left: false,
    
  });


 
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box 
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
          <ListItem disablePadding >
             
         <span style={{paddingLeft:27,height:40,paddingTop:15,fontWeight:"bold"}}>Categories</span>
         
          </ListItem>
        
      </List>
      <Divider />

      <div style={{paddingLeft:10}}>
      <List>
        {categories.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton style={{height:40,borderRadius:3,}} onClick={()=>setCategory(text)}>
  
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </div>
    
    </Box>
  );

  return (
    <div>
      
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{paddingRight:30}} color='action'/> </Button> 
         
         <ThemeProvider theme={darkTheme}>
         <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
         </ThemeProvider>
      
        </React.Fragment>
      
    </div>
  );
}