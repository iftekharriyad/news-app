import { Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React,{useEffect} from 'react'

import News from './News'

const useStyles= makeStyles({
    container:{
        margin:"50px auto"
    }
})
export default function NewsList(props){
    const classes = useStyles()
    useEffect(()=>{
        return function cleanup(){
            props.handleArrived(false)
        }
    },[])
    return(
        <Container className={classes.container}>
            <Typography variant='h5' textAlign="center">
                {props.newsType}
            </Typography>
            <Container maxWidth="md">
            {
                props.news.map((i,index)=>{
                    return(
                        <News title={i.title} key={index} image={i.urlToImage} description={i.description} url={i.url}/>
                    )
                })
            }
            </Container>

        </Container> 
    )
}