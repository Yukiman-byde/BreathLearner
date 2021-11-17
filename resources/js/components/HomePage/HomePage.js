import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {AppBar,Tabs,Tab} from '@material-ui/core';
import GridComponent from './GridComponent';
import Categories from './Categories';
import LaravelApi from '../API/LaravelApi';

function HomePage() {
    const [value, setValue] = useState(0);
    const handleClick =(event, newValue)=> {
      setValue(newValue);
    };
//    useEffect(() => {
//     LaravelApi.get('displays').then((res)=>{
//         setData(res.data);
//     }).catch((error) => console.log(error.message));
//    },[]);

    //const titles = ['Inf0', 'Japanese-Language', 'Culture', 'About', 'News(Reading)'];
    return (
        <HomePageContainer>
            <h4>Information coming...</h4>
            <TabsContainer>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleClick} >
                        <Tab label="初心者" />
                        <Tab label="中級者" />
                        <Tab label="中上級者"/>
                        <Tab label="上級者"/>
                    </Tabs>
            </AppBar>
           </TabsContainer>
           <GridComponent/>
           <Categories />
        </HomePageContainer>
    )
}

export default HomePage;
const HomePageContainer = styled.div`
 margin-top: 0;

h4 {
    padding-top: 8px;
    margin: 10px;
    width: 70%;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: whitesmoke;
    background-color: #B0D5AE;
    border-radius: 20px;
}
.MuiAppBar-root{
    background: linear-gradient(184deg, rgba(104,234,249,1) 21%, rgba(27,193,244,1) 54%);
    color: white;
    align-items: center;
}

.MuiTab-root {
    padding-right: 30px;
    padding-left: 30px;
    margin: 10px;
    font-size: 24px;
}
`;

const TabsContainer = styled.div`
margin-top: 10px;
`;

const FooterContainer = styled.div`

background-color: white;
height: 100vh;
bottom:0;
`;
