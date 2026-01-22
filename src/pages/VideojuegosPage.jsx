import { useState } from "react"
import Filtro from "../components/Filtro"
import GrillaVideojuegos from "../components/GrillaVideojuegos"
import Titulo from "../components/Titulo"

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

    const [listaVideojuegos, setListaVideojuegos] = useState(lista)

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

    return <div className="px-4">
        <Titulo />
        <Filtro categorias={ categorias } onFiltro={ filtrar } />
        <hr className="mb-4" />
        <GrillaVideojuegos listaVideojuegos={ listaVideojuegos }/>
    </div>
}
export default VideojuegosPage