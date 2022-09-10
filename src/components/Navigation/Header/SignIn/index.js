import * as React from 'react';
import Button from '../../../Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Register from './Register';
import Login from './Login';

import './styles.scss';

export default function SignIn(props) {
    const [option, setOption] = React.useState('register');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOption = (value) => setOption(value);
    return (
        <div>
        <Button onClick={handleOpen} variant="contained">Iniciar sesion</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='modal-container'>
                <div className='img-container'>
                    
                </div>
                <div className='content'>
                    <Stack spacing={2} direction="row" justifyContent="center" style={{margin:'1em'}}>
                        <Button variant="contained" color={option==="login" ? "primary" : "secondary"} onClick={()=>handleOption('login')}>Iniciar sesion</Button>
                        <Button variant="contained" color={option==="register" ? "primary" : "secondary"} onClick={()=>handleOption('register')}>Registrarse</Button>
                    </Stack>
                    {option==='register'?
                        <Register
                            onSubmit={(event)=>{

                            }}
                            onChange={()=>handleOption('login')}
                        />
                        :
                        <Login
                            onSubmit={(event)=>{

                            }}
                            onChange={()=>handleOption('register')}
                        />
                    }   
                </div>
            </div>
        </Modal>
        </div>
    );
}
