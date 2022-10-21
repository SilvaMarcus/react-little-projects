import logo from './components/imgs/vinisorriso.code.png'
import React from 'react'



export default function App() {
 
    const titulo = 'Hello World'
    const mensagem = () => {
      return('mensagem')
    }

    return (
      <header>
          <h2>{titulo}</h2>
          <p>{mensagem()}</p>   
          <img src={logo} alt='foto vini sorrindo'/>
      </header>
  )
}

