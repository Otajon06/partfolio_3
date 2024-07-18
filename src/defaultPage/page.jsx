import { useEffect, useState } from "react"
import { Navbar } from "../details/navbar"
import { Default_Section } from "../details/sections/default/section"
import { auth } from "../FirebaseConfig"

export const Default = () => {
    const [user, setUser] = useState(null)

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user=> {
            setUser(user)
        })
        return () => unsubscribe();
    },[])


    if ( !user ){
        return (
            <div>
                <Navbar/>
                <Default_Section/>
            </div>
        )
    }

    if ( user ){
        window.location.href="/home"
    }
}