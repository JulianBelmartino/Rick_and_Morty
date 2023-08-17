import { useState } from "react"
import styles from './Form.module.css'

const validation = (userData,setErrors,errors) =>{
if(!userData.email) setErrors({...errors, email:"email vacio"})
else setErrors({...errors, email:''})

if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email.value)){
    setErrors({...errors, email:''})
}else{
    setErrors({...errors, email:'Email Ivalido'})
}
}

export default function Form({login}){
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
const submitHandler = (event) => {
    event.preventDefault()
    login(userData)
}

    return(
        <form  className={styles.forma} onSubmit={submitHandler}>
            <div className={styles.container}>
            <img className={styles.image} src="./logo.png" />
            <div>
                <label className={styles.label} htmlFor="email">Email: </label>
                <input className={styles.inputs} type="text" name="email" onChange={handleChange} value={userData.email}/>
            </div>

            <div>
                <label className={styles.label} htmlFor="password">Password: </label>
                <input className={styles.inputs} type="text" name="password" onChange={handleChange} value={userData.password} />
            </div>
            
            <button className={styles.button} type="submit" value="Submit">LOGIN</button>
            </div>
        </form>
    )
    }