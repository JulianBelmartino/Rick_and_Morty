import styles from './Card.module.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { addFavorite, removeFavorite } from '../../redux/action';
import { useState } from 'react';
import { useEffect } from 'react';


function Card({name,status,species,gender,id, onClose,image,addFavorite,removeFavorite,myFavorites}) {
   const [isFav,setFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setFav(false)
         removeFavorite(id)
      }else{
         setFav(false)
         addFavorite({name,status,species,gender,id,image})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>
         {
          isFav ? (<button className={styles.favbutton} onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)
         }
         <button className={styles.button} onClick={() => onClose(id)}>X</button>
            <img className={styles.image} src={image} alt='' />
            <div className={styles.info}>
               <Link className={styles.titulo} to={`/detail/${id}`}> <h2 className={styles.titulo}>{name}</h2></Link>
            </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
return{
   addFavorite: (character) => {dispatch(addFavorite(character))},
   removeFavorite: (id) => {dispatch(removeFavorite(id))}
}
}
const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites}
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)
