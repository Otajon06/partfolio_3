import { useState } from "react"
import { Navbar } from "../details/navbar"
import { auth } from "../FirebaseConfig"
import { Home_Section } from "../details/sections/home/section"
import { Footer } from "../details/footer"


export const About = () => {
    const [user, setUser] = useState(null)



    return (
        <div>
            <Navbar/>
            <Home_Section/>
            <Footer/>
        </div>
    )
}