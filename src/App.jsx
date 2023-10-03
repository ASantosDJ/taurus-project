import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material"; 

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
/*import useStyles from "./styles";*/
import {Routes, Route} from 'react-router-dom'
import Appbar from './components/Appbar'

const cards = [1,2,3,4,5,6,7,8,9]


const App = () => {
  {
  //const classes = useStyles();
  }
  return (  
      <>
      <Appbar />
      <Routes>
        <Route exact path='/home' component={<App/>} /> 
      </Routes>
      <div>
        <Typography variant="h3" align="center" gutterBottom> Hero section</Typography>
        <Typography variant="body1" align="center" gutterBottom> Some text here that explaining the many features that can be accessed here on the website, only if you create an account and login.</Typography>
      </div>
      <div className={"classes.container"}>
          <Container maxWidth="md">
              <div>
              <Grid container spacing={4} alignItems="baseline">
                      {cards.map((card) => (
                          <Grid item key={card} xs={12} sm={6} md={4}>
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                            sx={{ height: 280 }}
                              image="https://source.unsplash.com/random"
                              title="Image Title"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5">Heading</Typography>
                              <Typography> Describe something here, this is the purpose of the section</Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small" color="primary">View</Button>
                              <Button size="small">Learn More</Button>
                            </CardActions>
                          </Card>
                      </Grid>
                      ))}
                  </Grid>
              </div>
          </Container>
      </div>
    <footer>
      <Typography variant="h6" align="center" gutterBottom>Terms of service, private policy, contact details</Typography>
      <Typography variant="subtitle1" align="center" color="textsecondary">2023</Typography>
    </footer>
    </>
    );
  }
  export default App