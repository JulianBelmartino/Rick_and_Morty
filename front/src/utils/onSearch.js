/*import axios from 'axios';
import {useState} from 'react';

const regex = /^(826|([1-9]|[1-9][0-9]|[1-7][0-9][0-9])|([1-7][0-9]{2}))$/;

export default async function onSearch(id) {

    if(regex.test(id)){
    try {
       const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
       const data = response.data;
        if (data.name && !characters.find(char => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡Ya agregaste ese personaje!');
          }
       } catch (error) {
          console.error('Error fetching character data:', error);
       }
    }else{
       window.alert('¡Ingresa un numero valido!');
    }
 }
 */