import { Routes, Route } from "react-router-dom";
import { About } from "./aboutPage/page";
import { Default } from "./defaultPage/page";
import { SignIn } from "./signInPage/page";
import { useEffect, useState } from "react";
import { auth } from "./FirebaseConfig";
import SignUp from "./signUp/page";
import { ContentPage } from "./contentPage/page";
import { ColculatorPage } from "./calculatorPage/page";

export const Details = () => {
    const [user, setUser] = useState(null)

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user=>{setUser(user)})
        return () => unsubscribe();
    },[])
    
    if(!user){
        return (
            <Routes>
                <Route path="/" element={<Default/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        )
    }

    if(user){
        return (
            <Routes>
                <Route path="/" element={<Default/>} />
                <Route path="/home"  element={<About/>} />
                <Route path="/content" element={<ContentPage/>} />
                <Route path="/colculator" element={<ColculatorPage/>} />
            </Routes>
        )
    }
}