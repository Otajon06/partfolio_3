

export const FirstSection = () => {

    const hendleClick= () => {
        window.location.href=''
    }

    return (
        <div className="firstSection_container">
                <div onClick={hendleClick}>
                    <img src="https://ayubkhan-webdev.000webhostapp.com/projects/visma/img/logo.svg" alt="" />
                </div>
                <a href="home">About</a>
                <a href="content">Content</a>
                <a href="colculator">Calculator</a>
        </div>
    )
}