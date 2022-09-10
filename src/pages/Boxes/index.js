import React from 'react';
import './styles.scss';

import Box from './Box';

const sample_data = {
    title:'Gratis BFG Box',
    daily_profit:'0.0000000000',
    available:'0.0000000000',
    progress:'0.0000',
    box_value:'0.0000',
    background:'',
    avatar:'/images/mock/ped-boxes.png',
    currency:{
        name:'BFG',
        img:'/images/mock/currency.png'
    },
    complete:false
}

const sample = [0,0,0,0,0,0,0].fill(sample_data).map(i=>({...i, complete:Math.round(Math.random())===1?true:false}));

const Boxes = (props) => {
    return (
        <div className='content'>
            {
                sample.map((item, index)=>(
                    <Box
                        data={item}
                        key={index}
                    />
                ))
            }
        </div>
    )
}

export default Boxes;