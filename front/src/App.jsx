import './App.css';
import Nav from './components/Nav/nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import Form from './components/Form/Form.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Favorites from './components/Favorites/Favorites';
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function App() {
   const [characters, setCharacters] = useState([])
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   
   
   const regex = /^(826|([1-9]|[1-9][0-9]|[1-7][0-9][0-9])|([1-7][0-9]{2}))$/;


   useEffect(() => {
      !access && navigate('/')
   },[access])
   
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = `http://localhost:3001/rickandmorty/login/?email=${email}&password=${password}`;
         
         const response = await axios.get(URL);
         const { access } = response.data;
         
         setAccess(response.data);
         
         if (access) {
            navigate('/home'); 
         }
      } catch (error) {
         console.error('Error during login:', error);
      }
   }

   async function onSearch(id) {
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

   function onClose(id) {
      setCharacters(characters.filter(char => char.id !== parseInt(id)))

   }
const {pathname} = useLocation()

   return (
      <div className='App'>
         
         {pathname !== '/' && <Nav onSearch={onSearch}/> }
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> } />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/detail/:detailid' element={<Detail />} />
        </Routes>

      </div>
   );
}

export default App;
