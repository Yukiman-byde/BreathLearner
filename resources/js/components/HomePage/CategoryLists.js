import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';


function CategoryLists({category}) {
    return (
        <>
            <CardContainer>
                <CardActionArea>
                  <CardMedia 
                  component="img"
                  alt=".../"
                  width="200"
                  height="250"
                  src={category.picture}
                  />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {category.name}
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </CardContainer>
        </>
    );
}

export default CategoryLists;

const CardContainer = styled(Card)`
width: 450px;
margin: 40px;
`;
