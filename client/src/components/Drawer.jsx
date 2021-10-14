import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PublicIcon from '@mui/icons-material/Public';
import ExploreIcon from '@mui/icons-material/Explore';
import { useHistory } from "react-router-dom";
import MapIcon from '@mui/icons-material/Map';
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageIcon from '@mui/icons-material/Language';
import Clock from './Clock';
const axios = require ('axios');
const URL = 'http://localhost:5000';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft(props) {

  let history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$([^@]+)/, "$1");
  let name = cookieValue.substring(0, cookieValue.lastIndexOf("%"));

 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const delete_cookie= (name)=> {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="relative" open={open}>
       
       <h3 styles={{marginLeft:90}}>Hello,{name}</h3>
       <Clock/>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </DrawerHeader>
      
        <Divider />
        <List>
      
             <ListItem button key={"Global Stats"} onClick={() => history.push("/global")}>
               <ListItemIcon><PublicIcon /></ListItemIcon>
              <ListItemText primary="Global Stats" />
            </ListItem>

             <ListItem button key={"Affected Countries"} onClick={() => history.push("/countries")}>
               <ListItemIcon><ExploreIcon />,</ListItemIcon>
              <ListItemText primary="Affected Countries" />
            </ListItem>

            <ListItem button key={"Affected Continents"} onClick={() => history.push("/continents")}>
               <ListItemIcon><LanguageIcon />,</ListItemIcon>
              <ListItemText primary="Affected Continents" />
            </ListItem>


              <ListItem button key={"Exposure Map"} onClick={() => history.push("/map")}>
               <ListItemIcon><MapIcon /></ListItemIcon>
              <ListItemText primary="Exposure Map" />
            </ListItem>


              <ListItem button key={"Logout"} onClick={() =>{
                 try {
  
                  const url = `${URL}/clearCookies`;
                  return axios.get (url,{withCredentials:true} //for saving cookies
                   ).then (res => {
                    if(res.data==="cookiesCleared"){ 
                      window.location="/"    
                      
                      
                     }
               
                  });
                } catch (error) {
                  console.error (error);
                }  
           }}>
               <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
        
        </List>
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
        
      </Main>
    </Box>
  );
}


