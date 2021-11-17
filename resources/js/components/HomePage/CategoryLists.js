import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setId} from '../../categorySlice';


function CategoryLists({category}) {
    const dispatch = useDispatch();

    return (
        <>
            <CardContainer
                style={{textDecoration: 'none',color: "#33EBFF"}}
                component={Link}
                to={`/lesson=${category.id}`}
                onClick={()=>dispatch(setId({
                categoryId: category.id
                }))}
                >
                <CardActionArea>
                  <CardMedia 
                  component="img"
                  alt=".../"
                  width="200"
                  height="250"
                  src={category.picture}
                  />
                      <CardContent>
                        <Typography style={{textDecoration: 'none',color: "#33EBFF"}} gutterBottom variant="h5">
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
