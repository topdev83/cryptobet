import React from 'react';

import TextField from '../../../../TextField';
import Button from '../../../../Button';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const Login = (props) => {
    
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = () => {

    }
    return (
        <>
            <Stack spacing={2} style={{margin:'0 0 1em 0', width:'100%'}}>
                <TextField label="Introduce tu email" variant="outlined" />
                <div style={{width:'100%', display:'flex', position:'relative', zIndex:'1', alignItems: 'center'}}>
                    <TextField 
                        style={{width:'100%'}}
                        type={showPassword ? 'text' : 'password'}
                        label="Introduce tu contraseña" 
                        variant="outlined" 
                        endAdornment={
                            (
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            )
                        }
                    />
                    <div style={{position: 'absolute', right: '1em'}}>
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff style={{color:'var(--border-color)'}}/> : <Visibility style={{color:'var(--border-color)'}}/>}
                        </IconButton>
                    </div>
                </div>
            </Stack>
            
            <Button variant="contained" style={{marginBottom:'1em'}} disabled>Inicia sesion</Button>

            <Typography variant="subtitle1" gutterBottom>No tienes cuenta? <span className='link' onClick={()=>props.onChange()}>Crea una</span></Typography>
        </>
    )
}

export default Login;