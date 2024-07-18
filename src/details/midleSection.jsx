import { Card } from "./cards"

export const MidleSection = () => {
    return (
        <div className="midle_section_container">
            <div>
                <h1>Services</h1>
                <h3>
                    Tariffs for access control services to the VISMA territory for 2022
                </h3>
                    <a href="#">PDF</a>
                <h3>
                    Conditions for determining the contract price and tariffs for work
                </h3>
                    <a href="#">PDF</a>
                <h3>
                    Transshipment agreement (standard form)
                </h3>
                    <a href="#">PDF</a>
            </div>
            <div>
                <Card style='midle_card' top='SERVICES' bottum='Cargo storage' />
                <Card style='midle_card' top='SERVICES' bottum='Mooring operations' />
                <Card style='midle_card' top='SERVICES' bottum='Warehouse operations' />
                <Card style='midle_card' top='SERVICES' bottum='Agency services for ships' />
                <Card style='midle_card' top='SERVICES' bottum='Vessel towing/escort' />
                <Card style='midle_card' top='SERVICES' bottum='Loading and unloading activities' />
            </div>
        </div>
    )
}