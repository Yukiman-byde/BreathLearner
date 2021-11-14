import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import CategoryLists from './CategoryLists';
import LaravelApi from '../API/LaravelApi';


function Categories() {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        LaravelApi.get('displaygroup').then((response) => {
            setCategories(response.data);
        })
    })


    return (
        <CategoriesContainer>
            <CateogoryTitle>
              <h1>Start Your Journy</h1>
            </CateogoryTitle>
            <h1 style={{textAlign: 'center', background: 'fff'}}>~Updated Category~</h1>
            <CategoryListsContainer>
             {categories.map((category) => (
               <CategoryLists category={category}/>
             ))};
            </CategoryListsContainer>
        </CategoriesContainer>
    )
}

export default Categories;

const CategoriesContainer = styled.div`
  margin-top: 100px;
  height: 100vh;
`;

const CategoryListsContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`;

const CateogoryTitle = styled.div`
position: relative;
   width: 100%;
   height: 300px;
   background-attachment: scroll;
   background-image: url(https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_1280.jpg);
   opacity: 0.79;
   margin-bottom: 120px;

   h1 {
       color: black;
       font-size: 50px;
       text-shadow: 0 0 10px #fff,0 0 15px #fff;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translateY(-60%) translateX(-50%);
   }
`;



