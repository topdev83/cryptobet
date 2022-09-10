import React from 'react';
import './styles.scss';
import Typography from '@mui/material/Typography';
import Buttom from '../../../components/Button';
import GradiendProgress from './GradientProgress';


const Boxes = (props) => {
    return (
        <div className='sweet-box'>
            <section className='box-section first'>
                <div>
                    {props.data.title}
                </div>
                <div className='currency-container'>
                    <div className='currency-img'>
                        <img src={props.data.currency.img} alt={props.data.currency.name}/>
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom>Daily profit</Typography>
                        <Typography variant="body1">{`${props.data.daily_profit} ${props.data.currency.name}`}</Typography>
                    </div>
                </div>
            </section>
            <section className='box-section avatar'>
                <img src={props.data.avatar} alt=''/>
            </section>
            <section className='box-section end'>
                <div className='available'>
                    <div> 
                        <Typography variant="body2" gutterBottom>Disponible para retiro</Typography>
                        <Typography variant="subtitle1">{`${props.data.available} ${props.data.currency.name}`}</Typography>
                    </div>
                    <Buttom variant='contained' className={`rounded ${props.data.complete?'rounded-primary':'rounded-secondary'}`} >{/*disabled={props.data.complete}*/}
                        Retirar
                    </Buttom>
                </div>
                <div className='progress-bar-container'>
                    <div className='progress-info'>
                        <span>
                            Cumplimiento de caja
                        </span>
                        <span>
                            {`${props.data.box_value}/${props.data.progress}`}
                        </span>
                    </div>
                    <GradiendProgress/>
                </div>
            </section>
        </div>
    )
}

export default Boxes;