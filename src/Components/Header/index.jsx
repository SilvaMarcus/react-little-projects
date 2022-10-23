import style from './styles.module.css'
import logo from './imagens/cuboMagico.png'

export default function Header (props) {          
     return (

          <header className={style.header}>
             
                    <div className={style.imgcontainer} >
                         <img src={logo} alt="" />
                    </div>

               <div>
                    <ul className={style.itens} >
                         <li><a href="">Home</a></li>
                         <li><a href="">Portfólio</a></li>
                         <li><a href="">contato</a></li>
                         <li><a href="">{props.link}</a></li>
                    </ul>
               </div>

          </header>
     )
} 