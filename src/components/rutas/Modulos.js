// se importan las librerias
import React, { useContext, useEffect } from 'react';
import { 
    Grid,
    Typography,
    Container,
    Button,
    CssBaseline,
    Card,
    CardActionArea,
    CardMedia,
    CardActions,
    CardContent
} from '@material-ui/core';

// se importan componentes
import Barra from '../layout/Barra'

// se importan los context
import authContext from '../../context/autenticacion/authContext'

// se importan las imagenes o archivos
import imagenes from '../../asets/img/imagenes';

// se importan los estilos
import { styleModulos } from '../../styles/styles'

// se crea el componente
const Proyectos = () => {

    // se instancia el estilo
    const classes = styleModulos();

    // Extraer la informacion de autenticacion
    const authsContext = useContext(authContext)
    const { usuarioAutenticado } = authsContext

    // se autentica el usuario
    useEffect(() => {
        usuarioAutenticado()
    }, [])
    
    // arreglo de los documentos con la informaicon de los modulos
    const rows = [
        { folioObra: '1', nombre: 'COMPRAS' },
        { folioObra: '2', nombre: 'CONTROL DE OBRA' },
        { folioObra: '3', nombre: 'CONTABILIDAD' },
        { folioObra: '4', nombre: 'INVENTARIOS' },
        { folioObra: '4', nombre: 'DASHBOARD' },
        { folioObra: '4', nombre: 'NOTIFY CENTER' },
    ]

    return (
        <Container component="main">
            <Barra/>
            <CssBaseline />
            <div className={classes.paper}>
                <div>
                    <img style={{width: 200}} src={imagenes.imgjpg} alt='PALA' />
                </div>
                <Typography component="h1" variant="h5" className={classes.letra}>
                    SELECCIONA UN MODULO
                    <hr className={classes.hr}/>
                </Typography>
                <br/>
                <br/>
                <main>
                    <Grid container spacing={2}>
                        {rows.map((row) => (
                        <Grid item key={row.folioCotizacion} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imagenes.imgjpg}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            { row.nombre }
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Seleccionar
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </main>
            </div>
        </Container>
    )
}
 
export default Proyectos;