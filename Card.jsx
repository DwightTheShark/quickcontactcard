import React from "react"
import ProfilePicture from "./components/ProfilePicture"
import Header from "./components/Header"
import Information from "./components/Information"
import Socials from "./components/Socials"


export default function Card() {

    const slides = [
        {url: "./assets/profile.jpg", title: "Photo"},
        {url: "./assets/linkedinqr.jpg", title: "LinkedIn"}
    ];

      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };
      
    return (
        <div className="container">
            <ProfilePicture slides={slides}/>
            <Header />
            <Information />
            <Socials />
        </div>
    )
}