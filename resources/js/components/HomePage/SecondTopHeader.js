import React,{useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import LevelButton from './LevelButton';
import CategoryButton from './CategoryButton';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

function SecondTopHeader() {
    const shows = ['N5', 'N4', 'N3', 'N2', 'N1'];
    const descs = ['入門', '初級者', '中級者', '中上級', '上級'];

    return (
        <SecondTopHeaderContainer>
           <HeaderLeft>
              <MenuIcon />
              <h1>Breath Learner</h1>
           </HeaderLeft>
           <HeaderRight>
               <LevelButton title="レベル分け" shows={shows} descs={descs}/>
               <CategoryButton title="カテゴリー分け" />
               <SearchIcon />
               <InputBase
                 placeholder="Search...."
               />
               <a href="private/" ><Avatar alt="NoOne"/></a>
           </HeaderRight>
        </SecondTopHeaderContainer>
    )
}

export default SecondTopHeader;

const SecondTopHeaderContainer = styled.div`
   align-items: center;
   background: linear-gradient(184deg, rgba(233,205,141,1) 0%, rgba(237,180,49,1) 45%);
   color: white;
   display: flex;
   height: 100px;
   padding-left: 100px;
   padding-right: 100px;
   margin-top: 0;
`;

const HeaderLeft = styled.div`
   display: flex;
   cursor: pointer;
   flex: 0.13;
   justify-content: space-between;
   align-items: center;
   text-align: center;
   transition: .2s;

   .MuiSvgIcon-root{
       font-size: 50px;
       transition: .2s;
    }

    .MuiSvgIcon-root:hover{
    background-color: whitesmoke;
    border-radius: 15px;
    color:gray;
    }

    h1 {
        margin-left: 20px;
        padding-left: 20px;
        flex:0.1;

    }
`;

const HeaderRight = styled.div`
display: flex;
flex:0.8;
justify-content: space-evenly;
text-align: center;
align-items: center;

.MuiInputBase-root {
    color: white;
    background-color:#F5D68E;
    border-radius: 20px;
    width: 200px;
    height: 35px;
    transition: .53s;
    padding: 10px;
    cursor: pointer;
}

.MuiInputBase-root:hover {
    background-color: #F7DDA1;
}

.MuiSvgIcon-root {

}
`;


