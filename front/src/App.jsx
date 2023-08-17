import './App.css';
import Nav from './components/Nav/nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import Form from './components/Form/Form.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function App() {
   const [characters, setCharacters] = useState([])
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   
   useEffect(() => {
      !access && navigate('/')
   },[access])
   const email = 'ejemplo@gmail.com';
   const password = 'una';
   
   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true)
         navigate('/home')
      }else{
         alert('nop')
      }
   }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}?key={henrym-julianbelmartino}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
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
            <Route path='/detail/:detailid' element={<Detail />} />
        </Routes>

      </div>
   );
}

export default App;
