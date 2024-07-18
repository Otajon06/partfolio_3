import { useState } from "react"



export const Colculator_Section = () => {
    const [img,setImg] = useState('')
    return (
        <div className="colculator_section_container">
            <h1>Request rates and conditions for loading and unloading operations</h1>
            <div>
                <label htmlFor="">Shipping Name *
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Batch size *
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">units measurements *
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Transportation direction *
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Transportation destination
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Period of cargo arrival for transshipment
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">The cargo arrives at the port
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">The cargo leaves the port
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Shipment size
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Cargo danger (class)
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Additional information about the cargo:
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Attach file
                    <input className="file" onChange={e=> setImg(e.target.value)} type="file" name="" id="" />
                </label>
            </div>
            <div>
                                
            </div>
            <div>

            </div>
        </div>
    )
}