import Header from './Components/Header'
import Main from './Components/Main'
import somar from './Components/Dados'


 function link () {
    return 'Teste'
}



export default function App () {
  return (
    <>
      <Header link={link()} /> {/* header esta declarando um valor para chave link, este valor é o que va no link do menu */}
      <Main />
    </>
  )
}
