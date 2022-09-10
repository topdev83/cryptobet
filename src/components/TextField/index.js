import * as React from 'react';
import TextField from '@mui/material/TextField';
import './styles.scss';

const CustomTextField = (props) => {
    return (
        <>
            <TextField
                {...props}
            />
        </>
    )
}

export default CustomTextField;