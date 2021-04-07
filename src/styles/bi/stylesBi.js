import React, { forwardRef } from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
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
      background: '#ECF5FC',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
      background: '#fff',
      color: '#373737'
    },
    toolbarIcon: {
      display: 'flex',
      ...theme.mixins.toolbar,
      color: '#fff',
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
      background: 'radial-gradient(circle at 50% -20.71%, #d1fff8 0, #befff6 10%, #a7fff4 20%, #8dfff3 30%, #6cfbf2 40%, #3cf2f2 50%, #00e8f3 60%, #00dff5 70%, #00d6f9 80%, #00cefd 90%, #00c6ff 100%)',
      alignItems: 'center',
      textAlign: 'center',
      width: '50%',
      borderColor:'#2286c3',
      boxShadow:'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
      height:'8px',
      borderRadius: '5px',
      marginTop:'1px',
  },
}))


export const NuevaObraStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(5)
  },
  box:{
    background:'#e3f2fd',
    border: '1px solid #64b5f6',
    borderRadius: 16,
    marginBottom: theme.spacing(5)
  }
}));

export const BootstrapInput = withStyles((theme) => ({
root: {
  'label + &': {
    marginTop: theme.spacing(3),
  },
},
input: {
  borderRadius: 8,
  position: 'relative',
  backgroundColor: '#FFF',
  border: '2px solid #64b5f6',
  fontSize: 20,
  width: '100%',
  padding: '10px 12px',
  transition: theme.transitions.create(['border-color', 'box-shadow']),

  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:focus': {
    boxShadow:'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'  /*`${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`*/,
    borderColor: '#64b5f6',
  },
},
}))(InputBase);