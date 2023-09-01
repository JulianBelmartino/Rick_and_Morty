import { useSelector,useDispatch } from "react-redux"
import Card from '../Card/Card.jsx'
import { filterCards, orderCards } from "../../redux/action.js"
import { useState } from "react"

const Favorites = () => {
const favorites = useSelector((state) => state.myFavorites)
const [aux, setAux] = useState(false)

const dispatch = useDispatch()

const handleOrder = (event) => {
const order = event.target.value
dispatch(orderCards(order))
setAux(!aux)
}
const handleFilter = (event) => {
const filter = event.target.value
dispatch(filterCards(filter))
}
    return(
    <div>
        <select onChange={handleOrder}>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">Unknown</option>
            <option value="Genderless">Genderless</option>
            <option value="all">All</option>
        </select>
 {favorites.map(({name,species,gender,image,status,id}) =>{
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

)

}

export default Favorites