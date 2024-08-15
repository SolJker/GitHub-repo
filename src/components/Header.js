import { AppBar, Button, TextField, Toolbar } from '@mui/material';
import React from 'react';

function Header() {
    return (
      <div className='header'>
        <AppBar position='static' sx={{ backgroundColor: '#00838F' }}>
            <Toolbar>
                <TextField sx={{ width: '68%', backgroundColor: 'white', mr: '8px'  }} id="filled-basic" label="Введите поисковый запрос" variant="filled" size='small' />
                <Button variant='contained'>ИСКАТЬ</Button>
            </Toolbar>
        </AppBar>
      </div>
    );
  }

export default Header
