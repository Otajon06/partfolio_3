import { Card } from "./cards"
import { ImgCard } from "./imgCards"

export const BottumSection = () => {
    return (
        <div className="bottum_section_container">
            <div className="bottum_section_title">
                <h1>News</h1>
                <a href="#">ALL NEWS <p>↦</p></a>
            </div>
            <div className="bottum_section_cards">
                <ImgCard img='https://ayubkhan-webdev.000webhostapp.com/projects/visma/img/news/1.png' data='20/05/22' top='Semper eu pulvinar eget integer' bottum='Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.' />
                <ImgCard img='https://ayubkhan-webdev.000webhostapp.com/projects/visma/img/news/2.png' data='20/02/22' top='Vitae id nec nulla sit nunc cursus curabitur tempus vel enim.' bottum='Cras arcu ac commodo suspendisse commodo ipsum turpis dui. Quis pharetra malesuada eget sit egestas et integer. Suspendisse a.' />
                <ImgCard img='https://ayubkhan-webdev.000webhostapp.com/projects/visma/img/news/3.png' data='30/12/22' top='Integer nisi sagittis in aliquet. Enim eget varius lacinia est a.' bottum='Lectus tempus felis pretium vitae. Tempor massa vestibulum condimentum cursus diam quam. Mattis facilisi dignissim donec eget vel.' />
                <ImgCard img='https://ayubkhan-webdev.000webhostapp.com/projects/visma/img/news/4.png' data='29/06/21' top='Facilisis vitae proin quis' bottum='Iaculis diam quam velit sit nunc turpis ultricies elementum. Vitae lacinia tristique rutrum faucibus nulla quis ultricies. Risus.' />
            </div>
        </div>
    )
}