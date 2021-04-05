import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { 
  ChevronLeft,
  ChevronRight,
  Clear,
  FirstPage,
  LastPage,
  Search
} from '@material-ui/icons/';
const drawerWidth = 240


//Compras.js
export const styleBi = makeStyles((theme) => ({
    root: {
      display: 'flex',
      background: '#f1f8e9',    
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
      background: '#fff',
      color: '#373737'
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 28px',
      ...theme.mixins.toolbar,
      
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: '#cddc39',
      color: 'black'
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
      
    },
    menuButtonHidden: {
      display: 'none',
      
    },
    title: {
      flexGrow: 1,
      margin: 'auto 0'
      
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 3,
      height: '100vh',
      overflow: 'auto',
    }
}));

//CargaFactura.js
export const tableIcons = {
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
};

// RegistroObra.js
export const styleRegistroObra = makeStyles((theme) => ({   
   
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  hr:{
      background: 'linear-gradient(#d4e157, #afb42b)',
      alignItems: 'center',
      textAlign: 'center',
      width: '50%',
      borderColor:'#d4e157',
      boxShadow:'2px 2px 5px #999',
      height:'8px',
      borderRadius: '5px',
      marginTop:'1px'
  }
}))