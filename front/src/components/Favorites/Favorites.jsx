import { useSelector,useDispatch } from "react-redux"
import Card from '../Card/Card.jsx'
import { filterCards, orderCards } from "../../redux/action.js"
import { useState } from "react"
import styles from './Favorites.module.css'

const Favorites = () => {
const favorites = useSelector((state) => state.myFavorites)
const filtered = useSelector((state) => state.filteredResult)
const [aux, setAux] = useState(false)
const [showFilteredResult, setShowFilteredResult] = useState(false);

const dispatch = useDispatch()


const handleOrder = (event) => {
const order = event.target.value
dispatch(orderCards(order))
setAux(!aux)
}

const handleFilter = (event) => {
const filter = event.target.value
dispatch(filterCards(filter))
console.log(filter)
if(filter != 'all'){
    setShowFilteredResult(true)
}else{
    setShowFilteredResult(false)
}
}
    return(
    <div>
        <select onChange={handleOrder}>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
        </select>
        <select onChange={handleFilter}>
            <option value="all">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">Unknown</option>
            <option value="Genderless">Genderless</option>
        </select>
        <div className={styles.container}  >
        {showFilteredResult
          ? filtered.map(({name,species,gender,image,status,id}) =>{
            return <Card
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        image={image}
                        key={id}
                        
                        />
         })
          : favorites.map(({name,species,gender,image,status,id}) =>{
            return <Card
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        image={image}
                        key={id}
                        
                        />
         })}

      </div>
    </div>

)

}

export default Favorites