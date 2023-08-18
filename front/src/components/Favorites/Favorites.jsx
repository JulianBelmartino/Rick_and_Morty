import { useSelector } from "react-redux"
import Card from '../Card/Card.jsx'

const Favorites = () => {
const favorites = useSelector((state) => state.favorites)

    return(
    <div>
       { favorites.map(({name,species,gender,image,status,id}) => {
        return <Card
                id={id}
                name={name}
                status={status}
                species={species}
                 gender={gender}
                origin={origin.name}
                image={image}
                 key={id}
        
        />
        })
    }
    </div>

)

}

export default Favorites