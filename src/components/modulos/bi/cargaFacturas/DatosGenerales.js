import React, { Fragment, useContext } from 'react';
import { makeStyles, Grid, Card, Input, styled, Fab, createMuiTheme, TextField } from '@material-ui/core';
import { styleCargaFacturas } from '../../../../styles/bi/stylesBi'

// se importan los context
import cargaFacturaContext from '../../../../context/cargaFacturas/cargaFacturaContext'

const DatosGenerales = () => {

    const css = styleCargaFacturas()

    const cargaFacturasContext = useContext(cargaFacturaContext)

    const { informacion } = cargaFacturasContext

    const { receptor, rfc, fecha, total, subtotal, moneda } = informacion
    
    return (
        <Fragment>
            <Grid
                container
                spacing={3}
                alignItems="center"
                justify="center"
            >                
                <Grid item xs={12} md={3}>
                    <TextField                    
                        id="receptor"
                        name="receptor"
                        label="Receptor"
                        value={receptor}       
                        className={css.ancho}
                        color="secondary"
                    />
                </Grid>
                <Grid item xs={12} md={3}>                        
                    <TextField                      
                        id="rfc"
                        name="rfc"
                        label="RFC"
                        value={rfc}       
                        className={css.ancho}
                        color="secondary"
                    />                      
                </Grid>
                <Grid item xs={12} md={3}>                        
                    <TextField                                              
                                
                        id="fecha"
                        name="fecha"
                        label="fecha"
                        value={fecha}       
                        className={css.ancho}
                        color="secondary"
                    />                     
                </Grid>                
            </Grid> 
            <Grid
                container
                spacing={3}
                alignItems="center"
                justify="center"
            >                
                <Grid item xs={12} md={3}>
                    <TextField                    
                        id="total"
                        name="total"
                        label="Total"
                        value={total}       
                        className={css.ancho}
                        color="secondary"
                    />
                </Grid>
                <Grid item xs={12} md={3}>                        
                    <TextField                      
                        id="subtotal"
                        name="subtotal"
                        label="Subtotal"
                        value={subtotal}       
                        className={css.ancho}
                        color="secondary"
                    />                      
                </Grid>
                <Grid item xs={12} md={3}>                        
                    <TextField                                              
                                
                        id="moneda"
                        name="moneda"
                        label="Moneda"
                        value={moneda}       
                        className={css.ancho}
                        color="secondary"
                    />                     
                </Grid>                
            </Grid> 
        </Fragment>
    );
}
 
export default DatosGenerales;