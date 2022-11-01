
import Main from './Components/Main'
import somar from './Components/Dados'
import React,{useState} from 'react';



export default function App () {

const [name, setName] = useState('Marcus')

  return (
    <>
    

    <h1>Meu Nome é :  {name} </h1>


    <button onClick={() =>  setName(name + " Vinicius") } > Add 2° nome: </button>

    </>
  )

}
