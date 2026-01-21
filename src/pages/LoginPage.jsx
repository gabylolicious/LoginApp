import { useState } from "react"
import Cabecera from "../components/Cabecera"
import Formulario from "../components/Formulario"
import Mensaje from "../components/Mensaje"
import { Link, useNavigate } from "react-router-dom"

function LoginPage() {
    const [mensajeVisible, setMensajeVisible] = useState(false)

    const navigate = useNavigate()

    function login(correo, password){
        if(correo == "PW" && password == "123"){
            console.log("Login correcto")
            navigate("/main")
        }
        else{
            setMensajeVisible(true)
        }
    }

    return <div className="flex justify-center">
        <div className="border-2 rounded-lg border-gray-300 shadow-md p-4">
            <Cabecera />
            <Formulario onLogin={ login } />
            <Mensaje msg={"Login error"} visible={mensajeVisible} />
        </div>
    </div>
}
export default LoginPage