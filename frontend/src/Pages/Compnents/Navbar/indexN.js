import React from 'react'
import './styleN.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () =>{


    return(
        <>
        
        <div className="navbar">
          <div className="navbar_left">
          <b> DARK SPACE </b>
          
          </div>

            <div className="navbar_right">
                <div className='navbar_profile_search'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='gray small' />
                    <input type='text' placeholder='search ...' />
          
               </div>

              <button className='navbar_profile_button'>
                  <FontAwesomeIcon icon={faSquarePlus} />{" "}
                      Create
          </button>

          <div className='navbar_profile_image'>
          <img src='https://images.pexels.com/photos/16129409/pexels-photo-16129409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
          
          </div>
          
          </div>

        </div>
        
        
        </>
    )
}
export default Navbar;