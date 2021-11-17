import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function VideoCards({videoData}){
    return(
    <CardContainer key={videoData.id}>
        <CardActionArea>
          <CardMedia 
          component="img"
          src={`${videoData.thumbnail}`}
          />
          <CardContent>
           <Typography variant="h4">
            {videoData.title}
           </Typography>
           <Typography variant="h5" color="whitesmoke">
            {videoData.description}
           </Typography>
          </CardContent>
        </CardActionArea>
    </CardContainer>
    );
}
export default VideoCards;

const CardContainer = styled(Card)`
  width: 450px;
  margin: 40px;
`;
