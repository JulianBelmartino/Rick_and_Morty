const {Favorite} =require('../DB_connection')

module.exports = async(req,res) =>{
const {name,origin,gender,status,image,species,id} = req.body

if(![name,origin,gender,status,image,species,id].every(Boolean)) return
 res.status(401).json('Faltan datos')

 
 try {
     await Favorite.findOrCreate({
         where:
         {name, origin, gender, status, image, species, id}
     })
    const allFavs = await Favorite.findAll()
    return res.status(200).json({allFavs})
 } catch (error) {
    return res.status(500).json({error: error.message})
 }
}