import { useEffect, useState } from "react"
import { auth } from "../../FirebaseConfig"
import { signOut } from "firebase/auth"

export const SecendSection = () => {
    const [obj, setObj] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user)
        })  
        return () => unsubscribe()
    },[])
    
    
    
    const language = ['EN' , 'RU']

    const hsignOut = async () => {
        try {
            await signOut(auth)
            window.location.href='/'
        } catch (error) {
            
        }
    }

    return (
        <div className="secendSection_container">
                <label>
                    <img className="search" src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="" />
                    <input type="search" placeholder='Search' />
                </label>
                <div>
                {!obj ? (<img className="flag" src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"/>)
                : obj == 'EN' ? (<img className="flag" src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"/>) 
                : obj == 'RU' ? (<img className="flag" src="https://upload.wikimedia.org/wikipedia/en/archive/f/f3/20120812153730%21Flag_of_Russia.svg"/>) 
                :''}
                <select onChange={e => setObj (e.target.value)}>
                    {language.map(e => (
                        <option value={e}>{e}</option>
                    ))}
                </select>
                </div>
                <div>
                    {!user ? (<div className="auth">
                        <a href="/signin">Sign In</a>
                        <a href="/signup">Sign Up</a>
                    </div>)
                    : user ? (<div className="email">
                        <div>
                            <img src={user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/5705/5705372.png"} alt="" />
                            <div>
                                <h4>
                                    {user.email}
                                </h4>
                                <button onClick={hsignOut}>Sign out</button>
                            </div>
                        </div>
                    </div>)
                    :''}
                </div>
        </div>
    )
}