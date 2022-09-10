import React from 'react';
import './styles.scss';
import Grid from '@mui/material/Grid';
import New from './New';
import Typography from '@mui/material/Typography';
import Select from '../../components/Select';

const sampleData = {
    date:'00/00/00',
    img:'/images/mock/banner-new.png',
    title:'Entrevista con Ornitorrinco',
    content:'¡Descubre todos los secretos del exito del mejor proveedor!',
}

const sample = [0,0,0,0,0,0,0,0].fill(sampleData);

const News = (props) => {
    return (
        <div className='content'>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="h4" gutterBottom>
                        Sweet News
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Select
                        onChange={(e)=>{}}
                        labelId='news-filter'
                        label=''
                        value='all'
                        options={[{value:'all',label:'Todas las noticias'},{value:'Opcion',label:'Opcion'}]}
                    />
                </Grid>
                <Grid item xs={6}>
                    <div className='main-new-img'>
                        <img src={'/images/mock/main-new.png'} alt=''/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" gutterBottom style={{fontWeight:'bold'}}>
                        Informe mensual de agosto
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat bibendum augue quis commodo. Aliquam ultrices lorem sit amet libero ultricies ornare. Suspendisse dolor dui, consectetur eget convallis nec, semper nec elit. Curabitur a volutpat nulla, in consequat diam. Aliquam porta ligula quis quam cursus, sed luctus neque cursus. Nullam leo tortor, sagittis et augue at, laoreet dapibus tellus. Pellentesque pulvinar pretium massa, nec ultrices felis feugiat at.
                    </Typography>
                </Grid>
                {
                    sample.map((data,index)=>(
                        <Grid item xs={4} key={index}>
                            <New
                                data={data}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default News;