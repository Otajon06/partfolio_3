import { Modal } from "./modal"
import { Card } from "./cards"
import { useState } from "react";

export const SecendMidleSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="secend_midle_section_container">
            <div>
                <h1>About company</h1>
                <h3>
                Tristique orci consectetur sit felis. Sed ac auctor tellus lobortis. Enim non turpis nulla nec a sapien sit amet molestie. Et id malesuada gravida sit volutpat. Volutpat sed lectus elementum diam neque facilisis in. Convallis nibh sem in viverra quis. Interdum pharetra.
                </h3>
                <h3>
                Libero nunc porttitor id mi convallis ultricies convallis erat. At sagittis nisi at in diam sit.
                </h3>
                <ul>
                    <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    <li>Vivamus tincidunt non lectus odio magna semper odio risus. Vivamus tincidunt non lectus odio magna semper odio risus.Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                </ul>
                <h3>
                Quam accumsan mauris enim quam. A commodo ultrices urna vitae nibh rhoncus at nisl. Duis nibh libero ut enim. Metus aliquam cursus molestie sapien risus. Suspendisse volutpat.
                </h3>
                <ul>
                    <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                </ul>
            </div>
            <div className="back_img_container">
                <div className="img_container">
                    <img src="https://ayubkhan-webdev.000webhostapp.com/projects/visma/img/about_img.png" alt="" className="img1" />
                    <img onClick={openModal} src="https://www.svgrepo.com/show/6905/play-button.svg" alt="" className="img2" />
                </div>
                <div >
                <Card style='secend_midle_card' top='REQUEST RATES AND CONDITIONS FOR LOADING AND UNLOADING OPERATIONS' bottum='Calculate instantly the cost of full port services at VISMA port' />

                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    )
}