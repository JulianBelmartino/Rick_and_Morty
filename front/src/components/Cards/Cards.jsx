import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {

   return <div className={styles.container} >
      {props.characters.map((personaje) =>{
         return <Card
                     name={personaje.name}
                     status={personaje.status}
                     species={personaje.species}
                     gender={personaje.gender}
                     origin={personaje.origin.name}
                     image={personaje.image}
                     key={personaje.id}
                     onClose={() => window.alert('Emulamos que se cierra la card')}
                     />
      })}
   </div>;
}
