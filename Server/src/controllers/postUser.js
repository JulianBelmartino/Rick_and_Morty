const {User} =require('../DB_connection')
   

const postUser = async( req, res)=>{
    const {email,password} = req.body
    console.log(email)
    console.log(password)
    if(!email||!password)return res.status(400).json({error:'faltan datos'})
   
   try {
     await User.findOrCreate({
       where:{
         email,
         password
       }
     })
    res.status(201).json({User})
   } catch (error) {
    res.status(500).json({error: error.message})
   }
   
   }

      module.exports = postUser;