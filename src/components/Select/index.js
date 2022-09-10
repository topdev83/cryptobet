import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.scss';

const SelectCustom = (props) => {
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id={props.labelId}>{props.label}</InputLabel>
                <Select
                    labelId={props.labelId}
                    value={props.value}
                    label={props.label}
                    onChange={props.onChange}
                    {...props}
                >
                    {
                        props.options.map((data, index)=>(
                            <MenuItem value={data.value} key={index}>{data.label}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    )
}

export default SelectCustom;