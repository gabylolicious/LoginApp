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

            const datosLogin = {
                ingreso : true,
                correo : correo,
                cantidadIntentos : 0
            }

            localStorage.setItem("DATOS_LOGIN", JSON.stringify(datosLogin) )
        }
        else{
            setMensajeVisible(true)
            const datosLogin = localStorage.getItem("DATOS_LOGIN")
            if (datosLogin == null){
                /* Tenemos que declarar el login */
                const login = {
                    ingreso : false,
                    cantidadIntentos : 1
                }
                localStorage.setItem("DATOS_LOGIN", JSON.stringify(login))
            }
            else{
                const login = JSON.parse(datosLogin)
                login.cantidadIntentos++
                /* Y lo chancamos */
                localStorage.setItem("DATOS_LOGIN", JSON.stringify(login))
            }
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