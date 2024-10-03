import './index.css';
import {useLazyGetItemsQuery} from './redux/api';
import { AppBar, Button, Input, Toolbar } from '@mui/material';
import { useState } from 'react';
import List from './components/List';

function App() {

  const [input, setInput] = useState('')
  const [trigger, {data}] = useLazyGetItemsQuery({arg: input})

  const GetData = () => {
    trigger(input)
    return data
  }

  return (
    <div className="App">
      <div className='header'>
        <AppBar position='static' sx={{ backgroundColor: '#00838F' }}>
            <Toolbar>
                <Input  value={input} onChange={e => setInput(e.target.value)} sx={{ width: '68%', padding: '9px 16px', backgroundColor: 'white', mr: '8px'  }} placeholder='Введите поисковый запрос' />
                <Button onClick={GetData} variant='contained'>ИСКАТЬ</Button>
            </Toolbar>
        </AppBar>
      </div>
      {data === undefined ? <p className='welcome_text'>Добро пожаловать</p> : null }
      <div className="list_section">
        {data !== undefined ? <List data={data} /> : null}
      </div>
    </div>
  );

}


export default App
