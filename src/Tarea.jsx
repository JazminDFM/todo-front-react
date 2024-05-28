import { useState } from "react";

function Tarea({id, tarea, terminada,toggleEstado, editarTexto, borrarTarea}){

    let [editando, setEditando] = useState(false)
    let [textoTemporal, setTextoTemporal] = useState(tarea)

    return(
        <div className="tarea">
            <h2 className={ !editando ? "visible" : "" }>{ tarea }</h2>
            <input className={ editando ? "visible" : "" }
                type="text"
                value={textoTemporal}
                onChange={ evento => setTextoTemporal(evento.target.value)}/>
            <button className="boton" onClick={ () => {
                if(editando){
                    //Comparar
                    if(textoTemporal.trim() != "" && textoTemporal.trim() != tarea){
                        setTextoTemporal(textoTemporal.trim())
                        setEditando(false)
                        return editarTexto(id, textoTemporal.trim())
                    }
                    setTextoTemporal(tarea)
                    setEditando(false)
                }else{
                    setEditando(true)
                }
            } }>{ editando ? "guardar" : "editar" }</button>
            <button className="boton" onClick={() => borrarTarea(id) }>Borrar</button>
            <button 
                    className={ `estado ${ terminada ? "terminada" : "" }`}
                    onClick={ () => toggleEstado(id) }
                    ><span></span></button>
        </div>
    )
}

export default Tarea