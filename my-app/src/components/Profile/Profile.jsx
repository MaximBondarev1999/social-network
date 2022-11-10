import React from "react";
import Post from "./MyPosts/MyPosts";
import './Profile.css'


const Profile = () => {
   return (
      <div className="content">
         <div className="content__photo">
            <img className="content__photo-img" src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="zopa"></img>
         </div>
         <Post messagga='hello bro' like='5' />
         <Post messagga='I litle speak js and react' like='30' />
      </div >
   )
}

export default Profile;