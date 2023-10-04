/* eslint-disable no-unused-vars */
import '/Users/luis_/my-react-app/src/components/AppBar';
import '/Users/luis_/my-react-app/src/components/astros.css';
import { useEffect, useState } from "react"
const DATA_URL = "http://api.open-notify.org/astros.json"
const Astro = ({name, craft})=>{
    return(
        <div className="Astro--container">
            <h2 className="Astro--name">{name}</h2>
            <p className="Astro--station">Space Stattion {craft}</p>
        </div>
    )
}
const Astros = () =>{
    const [astros,setAstros]= useState([])

    useEffect(()=>{
        fastros();
    },[])
    const fastros=()=>{
        fetch(DATA_URL)
        .then(res=>res.json())
        .then(data=>setAstros(data.people))
        .catch(err=>console.error(err))
    }
    console.log(astros)
    return(
        <>
        <h2>Astros</h2>
        {
            astros.length !==0
            ?
            astros.map((astro, index)=> (
                <Astro key={index} {...astro}/>
            ))
            :
            <progress></progress>
        }
        </>
    )
}
export default Astros   