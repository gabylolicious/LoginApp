import { use, useEffect, useState } from "react"
import Filtro from "../components/Filtro"
import GrillaVideojuegos from "../components/GrillaVideojuegos"
import Titulo from "../components/Titulo"
import { useNavigate } from "react-router-dom"

function VideojuegosPage(){
    const [listaVideojuegos, setListaVideojuegos] = useState([])
    const [categorias, setCategorias] = useState([])
    
    const navigate = useNavigate();

    async function obtenerVideojuegosHTTP(){
        const direccionURL = "https://script.google.com/macros/s/AKfycbxMZbg2ZTtWjfgmRVP25A2Kt6i02_SDLcu1asfc9CKNXDxLISrTxqaoK5pdgBrjmc1Ijw/exec"
        const response = await fetch(direccionURL)
        if (!response.ok){
            // Lo pintamos en consola
            console.error("Error de petición. " + response.status)
            return
        }
        const data = await response.json()
        console.log(data)
        setListaVideojuegos(data)
    }

    async function filtrar(categoria){
        const URL = "https://script.google.com/macros/s/AKfycbxMZbg2ZTtWjfgmRVP25A2Kt6i02_SDLcu1asfc9CKNXDxLISrTxqaoK5pdgBrjmc1Ijw/exec"
        
        let response
        if (categoria == "-1"){
            response = await fetch(URL)
        }
        else{
            response = await fetch(`${URL}?categoria=${categoria}`)
        }

        if (!response.ok){
            // Lo pintamos en consola
            console.error("Error de petición. " + response.status)
            return
        }
        const data = await response.json()
        setListaVideojuegos(data)
    }

    function logout(){
        /* Borra todo lo del LocalStorage */
        localStorage.clear()
        /* De vuelta a la pagina de login */
        navigate("/")
    }

    async function obtenerCategoriasHTTP(){
        const direccionURL = "https://script.google.com/macros/s/AKfycbxMZbg2ZTtWjfgmRVP25A2Kt6i02_SDLcu1asfc9CKNXDxLISrTxqaoK5pdgBrjmc1Ijw/exec?tipo=categorias"
        const response = await fetch(direccionURL)
        if (!response.ok){
            // Lo pintamos en consola
            console.error("Error de petición. " + response.status)
            return
        }
        const data = await response.json()
        setCategorias(data)
    }

    useEffect(function() {
        obtenerVideojuegosHTTP()       
        obtenerCategoriasHTTP()
    }, [])

    return <div className="px-4">
        <Titulo onLogout={ logout }/>
        <Filtro categorias={ categorias } onFiltro={ filtrar } />
        <hr className="mb-4" />
        <GrillaVideojuegos listaVideojuegos={ listaVideojuegos }/>
    </div>
}
export default VideojuegosPage