import styles from './styles.module.css'
import cardimage from './imagens/vinisorriso.code.png'

export default function Main () {
     return (

          <main className={styles.main}>
               
               <div className={styles.cardcontainer}>

                    <div className={styles.card}>
                         <div className={styles.texto}>
                              <h2>Marcus Vinicius</h2>
                              <p>Full Stack Developer</p>
                              <p>React | Typescript | SQL | NodeJs | </p>
                         </div>

                         <div className={styles.divimage}>
                              <img src={cardimage} alt="vini sorriso" />
                         </div>
                    </div>

               </div>

          </main>
     )
}