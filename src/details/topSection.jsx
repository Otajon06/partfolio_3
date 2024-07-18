import { Card } from "./cards"

export const TopSection = () => {
    return (
        <div className="default_section_container">
            <div className="back_img">
                <img src="https://ayubkhan-webdev.000webhostapp.com/projects/visma/img/bg.jpg" alt="" />
            </div>
            <div>
                <div>
                    <h1>Tavima seaport VISMA</h1>
                    <p>Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget nunc scelerisque etiam felis facilisi ante viverra sem. Nunc eros elementum.</p>
                    <a href="#"> </a>
                </div>
                <div>
                    <Card style='top_card' top='SERVICES' bottum='Loading and unloading activities' />
                    <Card style='top_card' top='SERVICES' bottum='Warehouse operations' />
                    <Card style='top_card' top='SERVICES' bottum='Cargo storage' />
                    <Card style='top_card' top='SERVICES' bottum='Mooring operations' />
                </div>
            </div>
        </div>
    )
}