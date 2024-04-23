import { useState } from 'react'
import './App.css'
import data from './data/data.js'
import MediaCard from './components/employeeCard.jsx'
import Container from '@mui/material/Container';
function App() {
  
   return (

    <Container fixed>
   <MediaCard employee= {data}/>
   
    </Container>
    
    );
}

export default App
