import React from 'react';
    
import './style.css';

const UsernameCard = (props) => {


    return(
     <>
        <div className='username_card'>
           <div className='username_card_image'>
           {
            props.user.picture == "" ?  
             <h3 className='profile_caratere'> { props.user.firstname[0] }</h3> :
             <img src='https://images.pexels.com/photos/16129409/pexels-photo-16129409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
           }
             
           </div>
           <div className='username_card_info'>
             <h3 className='username'> { props.user.firstname + ' ' + props.user.lastname  } </h3>
             <span className='small'> @yacoubiyassine</span>
           
           </div>
        </div>




     </>


    )
}
export default UsernameCard