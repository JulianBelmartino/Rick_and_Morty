import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [id, setId] = useState('')
   const handleChange = (event) => {
      setId(event.target.value)
   }
   
   return (
      <div>
          <input className={styles.input} type='search' onChange={handleChange}/>
         <button className={styles.button}  onClick={() => props.onSearch(id)}>AGREGAR</button>
      </div>
   );
}
