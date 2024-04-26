import { useState } from 'react'
import './App.css'
import data from './data/data.js'
import MediaCard from './components/employeeCard.jsx'
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import Typography from '@mui/material/Typography';

function App() {

   
  
    const [showinactive, setshowinactive] = useState(false);
    const filteredData = showinactive ? data.filter((employee) => employee.onLeave) : data;

    const handleToggle = (event) => {
    setshowinactive(event.target.checked);
    }
    console.log (showinactive); 
   return ( 

    <Container fixed>
     <Typography variant="h3" gutterBottom>
      Employee dashboard
    </Typography>
    <Typography variant="p1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
    <Switch {...label} onClick={handleToggle} />
   <MediaCard employee= {filteredData}/>
   
    </Container>
    
    );
}

export default App
