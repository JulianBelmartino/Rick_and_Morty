import { useState } from "react"


const validation = (userData,setErrors,errors) =>{
if(!userData.email) setErrors({...errors, email:"email vacio"})
else setErrors({...errors, email:''})

if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email.value)){
    setErrors({...errors, email:''})
}else{
    setErrors({...errors, email:'Email Ivalido'})
}
}

export default function Form(){
const [errors, setErrors] = useState({
    
    email: '',
    password: ''
})

   const [userData, setData] = useState(
    {
        email: '',
        password: ''
    }
)
const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setData({...userData, [property]: value})
    validation(userData,setErrors, errors)
}
   
    return(
        <form>
            
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={handleChange} value={userData.email}/>
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" onChange={handleChange} value={userData.password} />
            </div>
            <button type="submit" value="Submit">SUBMIT</button>
        </form>
    )
    }