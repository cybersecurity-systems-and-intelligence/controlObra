import clienteAxios from '../config/axios'
// import { mTokenGeneral } from '../config/config'

const baseUrl = 'https://apicotizacion.herokuapp.com/api'

//request interceptor to add the auth token header to requests
clienteAxios.interceptors.request.use(
    (config) => {

        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        if(accessToken){
            config.headers['Autorizado'] = accessToken
            //config.headers['AutorizadoG'] = "holamundo"
        }
        config.headers['AutorizadoG'] = 'holamundo'
        return config
    }, (error) => {
        Promise.reject(error)
    }
)

//response interceptor to refresh token on receiving on receiving token expired error
clienteAxios.interceptors.response.use(
    (response) => {
        return response
    },
    function(error){
        const originalRequest = error.config
        let refreshToken = JSON.parse(localStorage.getItem('refreshToken'))

        if(error.response.status === 401){
            return Promise.reject(error)
        }else if(refreshToken && !originalRequest._retry){

            originalRequest._retry = true
            return clienteAxios.post(`${baseUrl}/autorizacion/refreshToken`, { refreshToken: refreshToken })
                        .then((res) => {                           
                            if (res.status === 200) {
                                localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken))                                
                                return clienteAxios(originalRequest)
                            }
                        })
        }
        return Promise.reject(error)
    }
)

//Functions to make api calls
const api = {
    login: (body) => {
        return clienteAxios.post(`${baseUrl}/autorizacion`, { objeto: body })
    },
    auth: () => {
        return clienteAxios.get(`${baseUrl}/auth`)
    },
    refreshToken: (body) => {
        return clienteAxios.post(`${baseUrl}/autorizacion/refreshToken`, body)
    },
    logout: (body) => {
        return clienteAxios.delete(`${baseUrl}/autorizacion/logout`, { data: body })
    },
    obrasVigentes: () => {
        return clienteAxios.get(`${baseUrl}/obras/vigentes`)
    },
    obrasCotizadasProv: (correo) => {
        return clienteAxios.get(`${baseUrl}/cotizaciones/cotizadas/${correo}`)
    },
    perfilProv: (correo) => {
        return clienteAxios.get(`${baseUrl}/proveedores/datos_personales/${correo}`)
    },
    crearObraAdmin: (body) => {
        return clienteAxios.post(`${baseUrl}/obras`,{objeto:body})
    },
    cargarObrasAdmin: () => {
        return clienteAxios.get(`${baseUrl}/obras`)
    },
    cargarCotizacionesAdmin: (folio_obra) => {
        return clienteAxios.get(`${baseUrl}/cotizaciones/${folio_obra}`)
    },
    crearCotizacionProv: (body) => {
        return clienteAxios.post(`${baseUrl}/cotizaciones`,{objeto:body})
    },
    crearProv: (body) => {
        return clienteAxios.post(`${baseUrl}/proveedores`, {objeto:body})
    },
    enviarCorreo: (body) => {
        return clienteAxios.post(`${baseUrl}/correos/sendEmail`, { objeto: body })
    },
    crearRequisicion: (body) => {
        return clienteAxios.post(`${baseUrl}/ordenCompra`, { objeto: body })
    },
    buscarOrdenCompra: (folio_cotizacion) => {
        return clienteAxios.get(`${baseUrl}/ordenCompra/${folio_cotizacion}`)
    }
}

export default api