import toast, { Toaster }  from 'react-hot-toast';
import React, { useState } from 'react'
import UserService from '../Services/UserService'
const Register = () =>{
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [bio,setBio]=useState('')
    const [picture,setPicture]=useState('')
    const [birthdate,setBirthdate]=useState('')
    const [errors, setErrors] = useState(
      {
        firstname : '',
        lastname : '',
        email : '',
        password : '',
        bio : '',
        birthdate : '',
      }
    )

    const formValidation = () => {

      let status =true;
      let localErrors =  {...errors}

       if(firstname == "") {
          localErrors.firstname = 'Firstname required';
          status = false;
       }
       if (lastname == "") {
        localErrors.lastname = 'Lastname required';
        status = false;
       }
       if (email == "") {
        localErrors.email = 'Email required';
        status = false;
       }
       if (password == "" || password.length < 8 ) {
        localErrors.password= 'Password required and min 8 caracteres';
        status = false;
       }

       setErrors(localErrors)
       //console.log(localErrors)
       return status;
   
    }

    const register = async (e) => {
        e.preventDefault();
        
        console.log("form submited")  
        console.log("form data", firstname, lastname, email, password, bio, birthdate)  
        

        if(formValidation()) { // form valid
          const data = {
            firstname : firstname,
            lastname : lastname,
            email : email,
            password : password,
            bio : bio,
            birthdate : birthdate,
            picture : picture,
          }
          try {

            const response = await UserService.register( data )
            console.log("response ===>", response);
            toast.success('User created Successfully ... ');
            setFirstname('')
            setLastname('')
            setEmail('')
            setPassword('')
            setBio('')
            setBirthdate('')
  
          } catch (err) {
            console.log(err)
            toast.error('failed while Signup... ');
          }
        }else{
            console.log("form invalid");
        }
        
       
       
    }
   return(
    <div className='register'>
    <Toaster />
         <div className='register-cover'>

         </div>
         <div className='register-content'>
               <div>
               <h1> DARK SPACE </h1>
               <p> Dark space Social media Apllication </p>
               </div>
               <div>
                <form onSubmit={register}>

                  <div className='form-group'>

                    <label> Firstname </label>
                    <input className='input' type='text'
                     value={firstname} 
                     onChange={ (e)=>setFirstname(e.target.value)}/>

                     {
                      errors.firstname != " " ? 
                      <div style={{ textAlign:'left', color : 'orangered'}}>
                      { errors.firstname}
                      </div> : ''
                     }
                  </div>

                  <div className='form-group'>
                    <label> Lastname </label>
                    <input  className='input'type='text'
                    value={lastname}
                    onChange={(e)=>setLastname(e.target.value)}
                    />
                    {
                      errors.lastname != " " ? 
                      <div style={{ textAlign:'left', color : 'orangered'}}>
                      { errors.lastname}
                      </div> : ''
                     }
                  </div>

                  <div className='form-group'>
                    <label> Email </label>
                    <input className='input' type='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                    {
                      errors.email != " " ? 
                      <div style={{ textAlign:'left', color : 'orangered'}}>
                      { errors.email}
                      </div> : ''
                     }
                  </div>

                  <div className='form-group'>
                    <label> Password </label>
                    <input  className='input'type='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    {
                      errors.password != " " ? 
                      <div style={{ textAlign:'left', color : 'orangered'}}>
                      { errors.password}
                      </div> : ''
                     }
                  </div>
                  <div className='form-group'>
                    <label> Bio </label>
                    <textarea 
                    value={bio}
                    onChange={(e)=>setBio(e.target.value)}></textarea>
                  </div>


                  <div className='form-group'>
                  <label> Birthdate </label>
                  <input className='input' type='date'
                  value={birthdate}
                    onChange={(e)=>setBirthdate(e.target.value)}/>
                </div>

                  <button className='btn signup' type='submit'> Sign up</button>
                  
                
                </form>
               
               
               </div>
         </div>
          
         
    </div>


   )


}
export default Register;