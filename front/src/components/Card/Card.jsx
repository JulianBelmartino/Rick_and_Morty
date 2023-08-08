import styles from './Card.module.css'

export default function Card(props) {
   return (
      <div className={styles.container}>
         <button className={styles.button} onClick={props.onClose}>X</button>
            <img className={styles.image} src={props.image} alt='' />
         <div className={styles.info}>
            <h2 className={styles.titulo}>{props.name}</h2>
            <h2 className={styles.text}>Status: {props.status}</h2>
            <h2 className={styles.text}>Species: {props.species}</h2>
            <h2 className={styles.text}>Gender: {props.gender}</h2>
            <h2 className={styles.text}>Origin: {props.origin}</h2>
         </div>
      </div>
   );
}
