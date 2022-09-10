import React from 'react';
import './styles.scss';
import Button from '../../../components/Button';
import Typography from '@mui/material/Typography';

const New = (props) => {
    return (
        <div className='new-container'>
            <div className='new-img'>
                <img src={props.data.img} alt=''/>
            </div>
            <div>
                <div className='new-action'>
                    <span>{props.data.date}</span>
                    <Button variant='contained'>Gaming</Button>
                </div>
                <div className='new-content'>
                    <Typography variant="h6" gutterBottom>
                        {props.data.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {props.data.content}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default New;