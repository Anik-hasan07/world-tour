import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import useStyles from './styles';



const Tour = (props) => {
  const classes = useStyles();
 
  const{id,image,name,info,price} = props.tour;
  return(
    <main>

    <Container className={classes.cardGrid} maxWidth = "md">
      <Grid container spacing={4}>

        
          
            <Grid item xs={12}   >
          <Card className={classes.card}>
          <CardMedia
          className={classes.cardMedia}
          image={image}
          title="Image title"
          
          
          />

        <CardContent className={classes.cordContent}>
            <Typography gutterBottom vartant="h5">
              <div className={classes.tourPrice}>
                <div>
                <h4>{name}</h4>

                </div>
                <div>
                <h4 >${price}</h4>

                </div>
              </div>
              
              


              </Typography>
              <p>{info}</p>
              

        </CardContent>
        
      
        <CardActions container justify="center">
            <Button  variant="outlined"  size="small" color="primary">Not Interested</Button>

          </CardActions>

       
       

        

        
          </Card>
        </Grid>

          
          

        
      </Grid>

    </Container>
</main>

  ); 
};

export default Tour;