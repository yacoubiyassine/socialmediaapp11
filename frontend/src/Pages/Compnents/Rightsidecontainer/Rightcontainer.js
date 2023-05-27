import React from "react";
import "./Rightcontainer.css";
import image from "../Images/image4.jpg"
import image3 from "../Images/image3.jpg"
import image2 from "../Images/image2.jpg"
import image1 from "../Images/image1.jpg"

const Rightcontainer = () => {
  return (
    <div className="rightcontainer">
    <div className="NotificationsContainer">
         <div style={{display:'flex',justifyContent:'space-around'}}>
               <p style={{color:'blue'}}>Notifications</p>
               <p style={{color:"blue", marginLeft:'100px'}}>See all</p>
         
         </div>
         <div style={{display:"flex" , alignItems:"center", marginTop:-10}}>
              <img src={`${image}`} className="notificationimg" alt="" />
              <p style={{marginLeft : "80px" , color:"#aaa" , fontSize:13,width:"120px", textAlign:"start"}}>Mahmoud like your post</p>
              <img src={`${image1}`} className="likeimage" alt="" />
         </div>
         <div style={{display:"flex" , alignItems:"center",marginTop:-10}}>
              <img src={`${image}`} className="notificationimg" alt="" />
              <p style={{marginLeft : "120px" , color:"#aaa" , fontSize:13, textAlign:"start",width:"120px"}}>Mohamed started to following your post</p>
              <img src={`${image2}`} className="followinguserimage" alt="" />
         </div>
         <div style={{display:"flex" , alignItems:"center",marginTop:-10}}>
              <img src={`${image}`} className="notificationimg" alt="" />
              <p style={{marginLeft : "78px" , color:"#aaa" , fontSize:13, textAlign:"start",width:"120px"}}>Salah like your post </p>
              <img src={`${image3}`} className="likeimage" alt="" />
         </div>
         <div style={{display:"flex" , alignItems:"center",marginTop:-10}}>
              <img src={`${image}`} className="notificationimg" alt="" />
              <p style={{marginLeft : "120px" , color:"#aaa" , fontSize:13, textAlign:"start",width:"120px"}}>Mongi started to following your post </p>
              <img src={`${image1}`} className="followinguserimage" alt="" />
         </div>
         <div style={{display:"flex" , alignItems:"center",marginTop:-10}}>
              <img src={`${image}`} className="notificationimg" alt="" />
              <p style={{marginLeft : "80px" , color:"#aaa" , fontSize:13, textAlign:"start",width:"120px"}}>Mongi like your post </p>
              <img src={`${image2}`} className="likeimage" alt="" />
         </div>
         <div style={{display:"flex" , alignItems:"center",marginTop:-10}}>
              <img src={`${image}`} className="notificationimg" alt="" />
              <p style={{marginLeft : "120px" , color:"#aaa" , fontSize:13, textAlign:"start",width:"120px"}}>  Mongi started to following your post </p>
              <img src={`${image3}`} className="followinguserimage" alt="" />
         </div>
         <div style={{display:"flex" , alignItems:"center",marginTop:-10}}>
         <img src={`${image}`} className="notificationimg" alt="" />
         <p style={{marginLeft : "80px" , color:"#aaa" , fontSize:13, textAlign:"start",width:"120px"}}>Mongi like your post </p>
         <img src={`${image2}`} className="likeimage" alt="" />
    </div>
         <div style={{display:"flex" , alignItems:"center",marginTop:-10}}>
              <img src={`${image}`} className="notificationimg" alt="" />
              <p style={{marginLeft : "120px" , color:"#aaa" , fontSize:13, textAlign:"start",width:"120px"}}>  Mongi started to following your post </p>
              <img src={`${image3}`} className="followinguserimage" alt="" />
         </div>
         
         <div className="NotificationsContainer">
         <div style={{display:'flex',justifyContent:'space-around'}}>
               <p style={{color:"blue", marginLeft:'-100px'}}>Explore</p>
               <p style={{color:"blue", marginLeft:'-100px'}}>See all</p>
         
         </div>
         <div>
            <img src={`${image}`} className="exploreimage" alt="" />
            <img src={`${image1}`} className="exploreimage" alt="" />
            <img src={`${image2}`} className="exploreimage" alt="" />
            <img src={`${image3}`} className="exploreimage" alt="" />
            <img src={`${image1}`} className="exploreimage" alt="" />
            <img src={`${image2}`} className="exploreimage" alt="" />
            <img src={`${image3}`} className="exploreimage" alt="" />
            <img src={`${image2}`} className="exploreimage" alt="" />
            <img src={`${image1}`} className="exploreimage" alt="" />
            <img src={`${image3}`} className="exploreimage" alt="" />
            <img src={`${image2}`} className="exploreimage" alt="" />
            <img src={`${image1}`} className="exploreimage" alt="" />
            <img src={`${image3}`} className="exploreimage" alt="" />
            <img src={`${image2}`} className="exploreimage" alt="" />
            <img src={`${image1}`} className="exploreimage" alt="" />
            <img src={`${image1}`} className="exploreimage" alt="" />
            <img src={`${image3}`} className="exploreimage" alt="" />
            <img src={`${image2}`} className="exploreimage" alt="" />
            <img src={`${image1}`} className="exploreimage" alt="" />
            <img src={`${image3}`} className="exploreimage" alt="" />
         </div>
        
    </div>
    </div>
    </div>
  )
}

export default Rightcontainer