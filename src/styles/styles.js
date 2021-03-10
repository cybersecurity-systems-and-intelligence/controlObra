import { makeStyles } from '@material-ui/core';

export const styleLogin = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    hr:{
        background: '#b3d233',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        borderColor:'#d4e157',
        height:'5px',
        borderRadius: '5px',
        marginTop:'1px',
    }, 
    letra:{
        font: 'caption',
        marginTop:'20px',
        fontWeight:'700',
        fontSize: 25,
        color:'#545658'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        argin: theme.spacing(3, 0, 2),
        background: 'linear-gradient(#d4e157, #b3d233)',
        color:'#424242',
        marginBottom:'20px',
        marginTop:'10px',

        '&:hover': {
            color:'#000',
            fontWeight: '700',
        },
    },
}));

export const styleModulos = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    hr:{
        background: '#b3d233',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        borderColor:'#d4e157',
        height:'5px',
        borderRadius: '5px',
        marginTop:'1px',
    }, 
    letra:{
        font: 'caption',
        marginTop:'20px',
        fontWeight:'700',
        fontSize: 25,
        color:'#545658'
    },
    card: {
      
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      margin: '0 12px auto',
      boxShadow:'#f0f4c3 0px 0px 0px 1px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;',
      transition: 'transform .2s',
  
      '&:hover': {
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.enteringScreen,
        }),
        transform: 'scale(1.1)',
        color: 'black'        
     },  
    }
}));