function Titulo({ onLogout }){
    return <h1 className="text-4xl">
        Grilla de Videojuegos

        <button type="button" 
        className="text-xs ml-6 bg-orange-600 py-2 px-4 rounded-md text-white hover:bg-orange-200 hover:text-gray-700"
        onClick={ function() { onLogout() }}
                >
            Logout
        </button>

        </h1>
}
export default Titulo