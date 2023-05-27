import React, { useEffect, useState } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faPhotoFilm, faUser, faGear, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import profileimage from './Images/image3.jpg'
import imageIcone from './Images/cat-face.jpg'
import emojiIcon from './Images/imageicon.jpg'
import videoIcon from './Images/video.jpg'
import Profileimage2 from './Images/image3.jpg'
import LikeIcon from './Images/like.jpg'
import CommentIcon from './Images/speech-bubble.jpg'
import Shareicon from './Images/share.jpg'
import anotherLikeicon from './Images/setLike.jpg'
const Sidebar = () => {
  const [Like, setLike] = useState(LikeIcon);
  const [count, setCount] = useState(10);
  const [Comments, setComments] = useState([]);
  const [commentwriting, setcommentwriting] = useState('');
  const [show, setShow] = useState(false);

  const handleLike = async () => {
    if (Like === LikeIcon) {
      setLike(anotherLikeicon);
      setCount(count + 1);
    } else {
      setLike(LikeIcon)
      setCount(count - 1);
    }
  }
  const addComment = () => {
    const comment = {
      "id": "61fzertyuiohjkl1234" ,
        "username" : "Med Salah",
      "title": `${commentwriting}`
    }
    setComments(Comments.concat(comment));
  }
  const handleComment = () => {
    addComment();
  }
  console.log(Comments)
  return (

    <div className='sidebar-container'>
      <div className='sidebar'>
        <div className='sidebar_menu'>

          <a className='active'> {" "}<FontAwesomeIcon icon={faHome} className='me-3' /> <b>Home</b> </a>
          <a href="/people"> {" "} <FontAwesomeIcon icon={faUsers} className='me-3' /><b>People</b> </a>
          <a href="/photos"> {" "}<FontAwesomeIcon icon={faPhotoFilm} className='me-3' /><b>Photos</b> </a>


          <a> {" "}<FontAwesomeIcon icon={faCalendarDays} className='me-3' /><b>News Feed</b> </a>
          <a> {" "}<FontAwesomeIcon icon={faUser} className='me-3' /><b>Profile</b> </a>
          <a> {" "}<FontAwesomeIcon icon={faGear} className='me-3' /><b>Settings</b> </a>

        </div>

      </div>


      <div className='contentCenter'>
        {/* Insérer le contenu à droite du sidebar ici */}

        <div className='ContentUploadContainer'>
          <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
            <img src={`${profileimage}`} className='profileimage' alt='' />
            <input type='text' className='inputCenter' placeholder='Write your real thought ........' />
          </div>
          <div style={{ display: 'flex', marginLeft: '10px' }}>
            <div>
              <img src={`${imageIcone}`} className='icons' alt='' />
              <img src={`${emojiIcon}`} className='icons' alt='' />
              <img src={`${videoIcon}`} className='icons' alt='' />
              <button style={{ marginLeft: '500px', paddingLeft: '8px', paddingRight: '20px', paddingTop: 6, paddingBottom: 3, border: "none", backgroundColor: "black", color: "white", borderRadius: "5px", cursor: "pointer" }}>Post</button>
            </div>

          </div>



        </div>
        <div className='PostContainer'>
          <div className='SubPostContainer'>
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${Profileimage2}`} className='PostImage' alt='' />
                <div>
                  <p style={{ marginLeft: '10px', textAlign: 'start' }}>Med Salah</p>
                  <p style={{ fontSize: '11px', textAlign: 'start ', margingLeft: 10, marginTop: 10, color: 'blue' }}>Following<br></br>by Med Salah</p>
                </div>


              </div>
              <p style={{ textAlign: 'start', width: "90%", marginLeft: 10, marginTop: 0 }}>
                lorem
                ipsm dolor rty dfgh
                ertyui zertyu sdfjk ioxcv ert sdfg yuio <br></br>cvbn
                jkl zer wsderft
                juhygtfddses loki bcfsw mplok ikujyh cdefvc ,lkjh
                ..................</p>
              <img src={`${Profileimage2}`} className='PostImage2' alt='' />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', marginLeft: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <img src={`${Like}`} className='iconsPost' onClick={handleLike} alt='' />
                  <p style={{ marginLeft: '6px' }}>{count} Likes</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', cursor: 'pointer' }}>
                  <img src={`${CommentIcon}`} className='iconsPost' alt='' />
                  <p style={{ marginLeft: '6px' }}>100 Comments</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '150px', cursor: 'pointer' }}>
                  <img src={`${Shareicon}`} className='iconsPost' alt='' />
                  <p style={{ marginLeft: '6px' }}>Share</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={`${profileimage}`} className='profileimage' alt='' />
          {/*<p style={{marginLeft : '20px'}}>Med Salah</p>*/}
          <input type='text' className='commitinput' placeholder='White your thought' onChange={(e) => setcommentwriting(e.target.value)} />
          <button className='addcommentbtn' onClick={handleComment}>Add Comment </button>


        </div>
     
        </div>
        {Comments.map((item) => {
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={`${profileimage}`} className='profileimage' alt='' />
            <p style={{ marginLeft: '6px' }}>{item.username}</p>
            <p style={{ marginLeft: '20px' }}>{item.title}</p>

          </div>

        })}


      </div>

    </div>
    </div>









  )
}
export default Sidebar;