
export default function Dados (props) {

     const n1 =6
     const n2 = 7

     return (

          <div>
               <p>A soma de {n1} + {n2}  =  {props.somar(n1,n2)}</p>
         
          </div>
     )

}