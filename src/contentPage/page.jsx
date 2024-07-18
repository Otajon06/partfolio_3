import { Footer } from "../details/footer"
import { Navbar } from "../details/navbar"
import { Content_Section } from "../details/sections/content/section"



export const ContentPage = () => {
    return (
        <div>
            <Navbar/>
            <Content_Section/>
            <Footer/>
        </div>
    )
}