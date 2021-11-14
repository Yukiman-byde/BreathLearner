import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import LaravelApi from '../API/LaravelApi';
import {Chip} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Categories() {
   const [categories, setCategories] = useState([]);
   const [classifications, setClassifications] = useState([]);
   const [shows, setShows] = useState([]);
   const [audio, setAudio] = useState('');

   const handleClick =(show)=>{
       setAudio(show.id);
   }

   const valueClick = (category) => {
    if(!classifications.includes(category.id)){
        classifications.push(category.id);
        console.log(classifications);
    }
   }

   const handleClear = () => {
       setClassifications([]);
       setAudio('');
       console.log(classifications);
       console.log(audio);
   }

   const handleAsync = () => {
    const data = {classifications: classifications,
                   audio: audio};
    LaravelApi.post('classifications',data).then((response) => {
        console.log(response);
    }).catch((error) => console.log(error.message));
   }

    useEffect(() => {
     LaravelApi.get('categories').then((res)=>{
         console.log(res.data);
         setCategories(res.data);
     })
    }, [])

    useEffect(() => {
        LaravelApi.get('shows').then((res)=>{
            console.log(res.data);
            setShows(res.data);
        })
       }, [])

    return (
        <CategoryContainer>
            <h1>Loading..</h1>
            <SelectVideoContainer>
                {shows.map((show) => (
                <Button key={show.id} onClick={()=>handleClick(show)} style={{backgroundColor: 'skyblue', margin: 10}}>{show.id} :  {show.title}</Button>
                ))}
            </SelectVideoContainer>
            <CategorySelection>
                {categories && categories.map((category) =>(
                    <Chip key={category.id} value={category.id} onClick={()=>valueClick(category)} label={category.name} variant="outlined"  />
                ))}
            </CategorySelection>
            <Button onClick={handleClear}>クリア</Button>
            <Button onClick={handleAsync}>通信</Button>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/quizzes"
                >
                    <p>go to quizzes</p>
                </Button>
        </CategoryContainer>
    )
}

export default Categories;

const CategoryContainer = styled.div`

`;

const SelectVideoContainer = styled.div`
   background: whitesmoke;
`;

const CategorySelection = styled.div`
   max-width: 85%;
   padding: 20px;
   background-color: #81BB77;
   margin-left: auto;
   margin-right: auto;
   border-radius: 20px;
   margin-bottom: 30px;
   .MuiChip-root{
      padding: 10px;
      margin: 8px;
      font-size: 18px;
    }
`;






