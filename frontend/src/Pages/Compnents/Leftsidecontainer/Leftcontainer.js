import React from "react";
import "./Leftcontainer.css";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import addFriends from "../Images/add-user.png"

const Leftcontainer = () => {
  return (
    <div className="leftbar">
      <div className="leftcontainer">
        <img src={`${image6}`} className="adsimg" alt="" />
        <div>
          <p style={{ textAlign: "start", marginLeft: "20px" }}>
            lorem sdfghjkcvbn
          </p>
          <p style={{ textAlign: "start", marginLeft: "20px" }}>
            {" "}
            lorem dfghjklrtyuio
          </p>
        </div>

        <div>
          <img src={`${image5}`} className="adsimg" alt="" />
          <div>
            <p style={{ textAlign: "start", marginLeft: "20px" }}>
              lorem sdfghjkcvbn
            </p>
            <p style={{ textAlign: "start", marginLeft: "20px" }}>
              {" "}
              lorem dfghjklrtyuio
            </p>
          </div>
        </div>
      </div>
      
      <div className="Leftcontainer2">
      <h4 style={{color:"blue", textAlign:'start',margin:'10px'}}>Suggested four you</h4>
      <div style={{margin:'10px'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:"flex" , alignItems:'center'}}>
         <img src={`${image5}`} className="profileimage" alt=""/>
         <p style={{marginLeft:'10px', textAlign:'start'}}>Samira Ben Ali</p>
         <p style={{marginLeft:'10px', textAlign:'start',marginTop:'"30px'}}>Suggested four you</p>
      </div>
         <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:'10px', borderRadius:'50%', cursor:'pointer'}}>
          <img src={`${addFriends}`} className="addfreind" alt=""/>
         </div>
      </div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:"flex" , alignItems:'center'}}>
         <img src={`${image5}`} className="profileimage" alt=""/>
         <p style={{marginLeft:'10px', textAlign:'start'}}>Salah Med</p>
         <p style={{marginLeft:'10px', textAlign:'start',marginTop:'"30px'}}>Followed by Samira</p>
      </div>
         <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:'10px', borderRadius:'50%',cursor:'pointer'}}>
          <img src={`${addFriends}`} className="addfreind" alt=""/>
         </div>
      </div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:"flex" , alignItems:'center'}}>
         <img src={`${image5}`} className="profileimage" alt=""/>
         <p style={{marginLeft:'10px', textAlign:'start'}}>Mahmoud Joudi</p>
         <p style={{marginLeft:'10px', textAlign:'start',marginTop:'"30px'}}>Suggested four you</p>
      </div>
         <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:'10px', borderRadius:'50%',cursor:'pointer'}}>
          <img src={`${addFriends}`} className="addfreind" alt=""/>
         </div>
      </div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:"flex" , alignItems:'center'}}>
         <img src={`${image5}`} className="profileimage" alt=""/>
         <p style={{marginLeft:'10px', textAlign:'start'}}>Ridha Yahia</p>
         <p style={{marginLeft:'10px', textAlign:'start',marginTop:'"30px'}}>Suggested four you</p>
      </div>
         <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:'10px', borderRadius:'50%',cursor:'pointer'}}>
          <img src={`${addFriends}`} className="addfreind" alt=""/>
         </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Leftcontainer;
