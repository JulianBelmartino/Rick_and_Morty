import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards({characters, onClose}) {



   return <div className={styles.container} >
      {characters.map(({name,species,gender,image,status,id}) =>{
         return <Card
                     onClose={onClose}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     key={id}
                     
                     />
      })}
   </div>;
}
