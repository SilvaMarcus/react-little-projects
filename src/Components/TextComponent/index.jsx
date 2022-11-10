import './index.css'

export const TextComponent = (props) => {

     const placeholdermodificada = `${props.placeholder}...`

     return (
          <div className="campo-texto">
               <label>
                    {props.label}
               </label>

               <input placeholder={props.placeholder}/>
          </div>
     )
}