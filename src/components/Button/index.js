import * as React from 'react';
import Button from '@mui/material/Button';
import './styles.scss';

const CustomButton = (props) => {
    return (
        <>
            <Button
                {...props}
            >
                {
                    props.children
                }
            </Button>
        </>
    )
}

export default CustomButton;