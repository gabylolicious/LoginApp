import CardVideojuego from "./CardVideojuego"

function GrillaVideojuegos({ listaVideojuegos }) {
    return <div className="grid grid-cols-3 gap-2">
        {
            // Creando una funcion anonima adentro
            (function(){
                // Dentro podemos usar lo que queramos (if, for, etc)
                if(listaVideojuegos.length == 0){
                    return <div>Cargando... (no hay videojuegos :c ) </div>
                }
                else{
                    return listaVideojuegos.map(function (videojuego) {
                        return <CardVideojuego
                        key={videojuego.nombre}
                        videojuego={videojuego}
                        />
                    })
                }  
            })()
        }
    </div>
}
export default GrillaVideojuegos