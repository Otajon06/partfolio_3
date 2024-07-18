

export const SecendSection = () => {

    const arr1 = [
        'ОГРН 11111111111111111 ',
        'ИНН 2222222222222 ',
        'КПП 3333333333333 ',
        'ОКПО 44444444444 ОКВЭД 52.24 ',
        'OKTMO 5555555555555 '
    ]
    const arr2 = [
        'Regulations',
        'Purchasing on VISMA Order',
        'Procurement at VISMA Tender'
    ]
    const arr3 = [
        'VISMA Charter',
        'State registration certificates',
        'List of affiliates',
        'Information',
        'Reports'
    ]
    const arr4 = [
        'Port today',
        'Port characteristics',
        'History',
        'Diplomas and awards',
        'Transport security',
        'Ecology',
        'legal information'
    ]

    return (
        <div className="footer_secend_section_container">
            <div>
                <h3>information about legal entities face</h3>
                {arr1.map(e=>(
                    <p>{e}</p>
                ))}
            </div>
            <div>
            <h3>Procurement</h3>
                {arr2.map(e=>(
                    <p>{e}</p>
                ))}
            </div>
            <div>
            <h3>shareholders</h3>
                {arr3.map(e=>(
                    <p>{e}</p>
                ))}
            </div>
            <div>
            <h3>About company</h3>
                {arr4.map(e=>(
                    <p>{e}</p>
                ))}
            </div>
            <h5>all rights reserved VISMA SA</h5>
        </div>
    )
}