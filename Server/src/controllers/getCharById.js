const axios = require('axios')
const {KEY, URL} = process.env


const getCharById = (req, res) => {
    const [id] = req.params
        axios(`https://rickandmortyapi.com/api/character/${id}?key=henrym-{julianbelmartino}`)
        .then((response)=>{
            const { name, gender, species, origin, location, image, status } = response.data
    
           const character = { id, name, gender, species, origin, location, image, status}
    
           return character.name ? res.status(200).json(character) : res.status(404).send('Not found')
    
        }).catch(err => {
            res.status(500).send(err.message)
        })
    }


module.exports = getCharById