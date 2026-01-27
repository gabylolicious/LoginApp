import { useEffect, useState } from "react"
import Filtro from "../components/Filtro"
import GrillaVideojuegos from "../components/GrillaVideojuegos"
import Titulo from "../components/Titulo"
import { useNavigate } from "react-router-dom"

const lista =
    [
        {
            nombre: "CSGO",
            imagen: "./images/csgo.jpg",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident laudantium mollitia voluptatibus velit id suscipit distinctio, enim rem illo?",
            categoria: "FPS"
        },
        {
            nombre: "GTA6",
            imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/698780/capsule_616x353.jpg?t=1681943582",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident laudantium mollitia voluptatibus velit id suscipit distinctio, enim rem illo?",
            categoria: "OpenWorld"
        }
    ]

function VideojuegosPage(){
    const categorias = [
        "FPS", "OpenWorld"
    ]
    const [listaVideojuegos, setListaVideojuegos] = useState([])
    
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

    function filtrar(categoria){
        if(categoria == "-1"){
            setListaVideojuegos(lista)
        }
        else {
            const listaVideojuegosModificado = lista.filter(function (vj) {
                return vj.categoria == categoria
            })
            setListaVideojuegos(listaVideojuegosModificado)
        }
    }

    function logout(){
        /* Borra todo lo del LocalStorage */
        localStorage.clear()
        /* De vuelta a la pagina de login */
        navigate("/")
    }

    useEffect(function() {
        obtenerVideojuegosHTTP()       
    }, [])

    return <div className="px-4">
        <Titulo onLogout={ logout }/>
        <Filtro categorias={ categorias } onFiltro={ filtrar } />
        <hr className="mb-4" />
        <GrillaVideojuegos listaVideojuegos={ listaVideojuegos }/>
    </div>
}
export default VideojuegosPage