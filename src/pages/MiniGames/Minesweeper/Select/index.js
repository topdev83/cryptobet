import React from "react";
import './styles.scss';

const Select = (props) => {
    return (
        <>
            <select name="mines" id="mines" className="minimal">
                <option value={null}>Minas</option>
                {
                    props.options.map((data, index)=>{
                        return (
                            <option value={data.value} key={index}>{data.label}</option>
                        )
                    })
                }
            </select>
        </>
    )
}

export default Select;