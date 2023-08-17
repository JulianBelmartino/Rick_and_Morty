import axios from 'axios'
import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './detail.module.css'


export default function Detail(){
    const { detailid } = useParams();
    const [character,setCharacter]  = useState({})


    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${detailid}?key={henrym-julianbelmartino}`).then(( response ) => {
         setCharacter(response.data);
        });
     }, []);

     return(
      <div className={styles.container}>
      <div>
      <h1>{character.name}</h1>
      <h3>Species: {character.species}</h3>
      <h3>Origin: {character.origin?.name}</h3>
      <h3>Gender: {character.gender}</h3>
      <h3>Status: {character.status}</h3>
      </div>
      <div>
      <img className={styles.imgs} src={character.image} />
      </div>
      </div>
      )
     
    }