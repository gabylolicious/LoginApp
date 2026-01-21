function Mensaje({msg, visible}){
    return visible ?
        <div className="mt-4 bg-violet-300">
            { msg }
        </div>
        : null
}
export default Mensaje