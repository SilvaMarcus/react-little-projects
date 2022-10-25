import styles from './styles.module.css'
import cardimage from './imagens/vinisorriso.code.png'
import Dados from '../Dados'
import Relogio from '../Relogio'



export default function Main (props) {
   


     function somar  (n1, n2) {

          return n1 + n2
     }

     return (
          <main className={styles.main}>
               
               <div className={styles.cardcontainer}>

                    <div className={styles.card}>
                         <div className={styles.texto}>
                              <h2>Marcus Vinicius</h2>
                              <p>{props.job}</p>
                              <p>React | Typescript | SQL | NodeJs | </p>
                              <button  className={styles.btn}>Saiba Mais</button>
                              <Dados somar={somar} />
                              <Relogio />
                         </div>

                         <div className={styles.divimage}>
                              <img src={cardimage} alt="vini sorriso" />
                         </div>
                    </div>
               </div>

          </main>
     )
}