import './Dropdown.css'

export const Dropdown = ({times,label}) => {
     return(
          <div className='Dropdown'>
               <label>{label}</label>
               <select>
                    {times.map(item => <option key={item}>{item}</option> )}
               </select>
          </div>
     )
}