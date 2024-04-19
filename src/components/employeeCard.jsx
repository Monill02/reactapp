import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function MediaCard( {employee}) {
  console.log(employee);
  return (
    <Card sx={{ maxWidth: 345, margin: 10,}}>
      <CardMedia
        sx={{ height: 200, backgroundSize: 'contain', margin: 2 }}
        image= {employee[0].image}
        title="profile"

        
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employee[0].firstName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Stack direction="row" spacing={1} paddingTop={1}>
      <Chip label= {employee[0].department} />
      <Chip label= {employee[0].employmentType} />
    
    </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}