import React from "react"
import GitHub from "../assets/github-icon.png"
import Twitter from "../assets/twitter-icon.png"

export default function Socials() {
    return (
        <div className="flex bg-black px-8 py-4 align-base justify-end gap-4 rounded-b-xl ">
            <a href="https://github.com/DwightTheShark"><img href="https://github.com/DwightTheShark" src={GitHub} /></a>
            <a href="https://twitter.com/witchadora"><img src={Twitter} /></a>
        </div>
        
    )
}