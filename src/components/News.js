import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  card:{
    margin:"30px auto"
  },
  cardActionArea:{
    display:'flex', 
    flexDirection:'row',
    padding:"5px"
  },  
  cardMedia:{
    maxWidth:"150px",
        flexBasis:"30%",
        flexGrow:"1",
        flexShrink:"1"
    },
  cardContent:{
    flexBasis:"70%",
    flexGrow:"1",
    flexShrink:"1"
  }
})
export default function News(props) {
    const classes = useStyle()
  return (
    <Card className={classes.card} variant="outlined" >
      <CardActionArea className={classes.cardActionArea} href={props.url} target="_blank">
        <CardMedia
            className={classes.cardMedia}
          component="img"
          image={props.image}
          alt="news image"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}