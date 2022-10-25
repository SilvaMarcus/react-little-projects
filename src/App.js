import Header from './Components/Header'
import Main from './Components/Main'
import somar from './Components/Dados'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'





export default function App () {
  return (
    <>
    
    <Header />
    <Router>

       <Routes>

           
           <Route path='Main' element={<Main />}/>
          

       </Routes>

    </Router>

    </>
  )
}
