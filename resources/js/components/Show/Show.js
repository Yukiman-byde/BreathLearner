import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import {useSelector} from 'react-redux';
import {selectCategory} from '../../categorySlice';
import LaravelApi from '../API/LaravelApi';
import VideoCards from './VideoCards';
import Footer from '../HomePage/Footer';

function Show(){
    const [category, setCategory] = useState([]);
    const [videos, setVideos] = useState([]);
    const categoryId = useSelector(selectCategory);
    useEffect(() => {
        LaravelApi.get(`displaygroup/${categoryId}`).then((response)=>{
            setCategory(response.data);
        })
    },[]);
    
    useEffect(() => {
        LaravelApi.get(`fetchvideo/${categoryId}`).then((response)=>{
            setVideos(response.data);
        })
    },[]);
    return(
        <>
             <ShowContainer>
             　<img src={category.picture} alt="../"/>
                <h1>~{category.name}~</h1>
             </ShowContainer>
             <VideoCardContainer>
                 {videos && videos.map((video) => (
                   <VideoCards videoData={video}/>
                 ))};
             </VideoCardContainer>
             <Footer />
        </>
        );
}

export default Show;

const ShowContainer = styled.div`
    img {
          margin-top: 0;
          width: 100%;
          height: 60vh;
          position: relative;
          box-shadow: -3px -3px -3px -3px blue inset;
      }
      
      h1 {
          font-size: 70px;
          text-shadow: 0 0 10px #fff,0 0 15px #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-80%) translateX(-50%);
      }
`;

const VideoCardContainer = styled.div`

`;