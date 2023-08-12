import axios from 'axios'
import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Detail(){
    const { id } = useParams();
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     return(
      <h1>{character.name}</h1>
     )
     
    }