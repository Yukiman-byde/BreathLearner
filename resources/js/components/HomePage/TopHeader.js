import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function TopHeader({titles}) {
    return (
        <TopHeaderContainer>
            <Link to="/"><TopHeaderImage src="https://newlanguageapp.s3.ap-northeast-1.amazonaws.com/S__35766274.jpg" /></Link>
            <TopHeaderTitle>
                {titles.map(title=> (
                  <Link style={{textDecoration:"none", color:'#ccc'}} to={`${title}`} key={title.id}><p key={title.id}>{title}</p></Link>
                ))}
            </TopHeaderTitle>
        </TopHeaderContainer>
    )
}

export default TopHeader;

const TopHeaderContainer = styled.div`
   justify-content: space-between;
   align-items: center;
   margin: 0;
   background: linear-gradient(342deg, rgba(232,249,229,1) 8%, rgba(255,255,255,1) 89%);
   color: #ccc;
   height: 50px;
   width: 100%;
   display: flex;
`;

const TopHeaderImage = styled.img`
   width: 100px;
   height: 50px;
   object-fit: contain;
`;

const TopHeaderTitle = styled.div`
   display: flex;

p {
    margin: 0;
    padding-left: 40px;
    padding-right: 40px;
    cursor: pointer;
    transition: 0.4s;
 }
p:hover{
   padding-left: 40px;
   padding-right: 40px;
   border-radius: 10px;
   color: gray;
   background-color: whitesmoke;
}
`;
