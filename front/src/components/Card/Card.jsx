import styles from './Card.module.css'
import {Link} from 'react-router-dom'

export default function Card({name,status,species,gender,id, onClose,image}) {
   return (
      <div className={styles.container}>
         <button className={styles.button} onClick={() => onClose(id)}>X</button>
            <img className={styles.image} src={image} alt='' />
         <div className={styles.info}>
           <Link to={`/detail/${id}`}> <h2 className={styles.titulo}>{name}</h2></Link>
            <h2 className={styles.text}>Status: {status}</h2>
            <h2 className={styles.text}>Species: {species}</h2>
            <h2 className={styles.text}>Gender: {gender}</h2>
         </div>
      </div>
   );
}
