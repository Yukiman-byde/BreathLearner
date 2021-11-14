import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import { ImageListItem,ImageListItemBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setId} from '../../dataSlice';
import LaravelApi from '../API/LaravelApi';


function GridComponent({}) {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        LaravelApi.get('displays').then((res)=>{
            setData(res.data);
            console.log(res.data[0].thumbnail);
        }).catch((error) => console.log(error.message));
       },[]);


    return (
        <GridFulContainer>
          <GridContainer>
              <Grid container spacing={5}>
                     {data.map((d) => (
                        <Grid item xs={6} sm={6}>
                         <ImageListItem style={{listStyle: 'none'}}>
                         <img style={{borderRadius:20, objectFit: 'contain', width: '100%', height: '100%'}} src={`${d.thumbnail}`} />
                         <ImageListItemBarComponent
                                title={d.title}
                                subtitle={<span>{d.description}</span>}
                                actionIcon={
                                    <IconButton
                                     style={{color: 'white'}}
                                     aria-label={`info about ${d.title}`}
                                     component={Link}
                                     to={`/video=${d.id}`}
                                     onClick={()=>dispatch(setId({
                                         dataId: d.id,
                                     }))}
                                     >
                                        <PlayCircleFilledWhiteIcon  style={{fontSize: 50}}/>
                                    </IconButton>
                                }
                                />
                        </ImageListItem>
                    </Grid>
                     ))}
                </Grid>
           </GridContainer>
        </GridFulContainer>
    )
}

export default GridComponent;

const GridFulContainer = styled.div`
 width: 100%;
 background: lightgrey;
 margin-top: 0;
 height: 50vh;
`;

const GridContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  height: 20vh;
`;

const ImageListItemBarComponent = styled(ImageListItemBar)`
   border-bottom-left-radius: 20px;
   border-bottom-right-radius: 20px;
   padding: 20px;
`;


{/* <Grid item xs={6}>
                    <ImageListItem style={{listStyle: 'none'}}>
                        <img style={{width:'100%', height: '23%',objectFit: 'cover',borderRadius:20}} src={`${data.thumbnail}`}  />
                            <ImageListItemBarComponent
                                        title={data.title}
                                        subtitle={<span>{data.description}</span>}
                                        actionIcon={
                                            <IconButton
                                            style={{color: 'white'}}
                                            aria-label={`info about ${data.title}`}
                                            component={Link}
                                            to={`/video=${data.id}`}
                                            onClick={sendUrl}
                                            >
                                                <PlayCircleFilledWhiteIcon  style={{fontSize: 50}}/>
                                            </IconButton>
                                        }
                                        />
                    </ImageListItem>
                    <GridUnderBar container spacing={4}>
                       <Grid item xs={6}>
                            <ImageListItem style={{listStyle: 'none'}}>
                                <img style={{width:'100%', height: '23%',objectFit: 'cover',borderRadius:20}} src={`${data.thumbnail}`} />
                                <ImageListItemBarComponent
                                        title={data.title}
                                        subtitle={<span>{data.description}</span>}
                                        actionIcon={
                                            <IconButton
                                            style={{color: 'white'}}
                                            aria-label={`info about ${data.title}`}
                                            component={Link}
                                            to={`/video=${data.id}`}
                                            onClick={sendUrl}
                                            >
                                                <PlayCircleFilledWhiteIcon  style={{fontSize: 50}}/>
                                            </IconButton>
                                        }
                                        />
                            </ImageListItem>
                         </Grid>
                        <Grid item xs={6}>
                        <ImageListItem style={{listStyle: 'none'}}>
                            <img style={{width:'100%', height: '23%',objectFit: 'cover',borderRadius:20}} src={`${data.thumbnail}`} />
                        <ImageListItemBarComponent
                                        title={data.title}
                                        subtitle={<span>{data.description}</span>}
                                        actionIcon={
                                           <IconButton
                                            style={{color: 'white'}}
                                            aria-label={`info about ${data.title}`}
                                            component={Link}
                                            to={`/video=${data.id}`}
                                            onClick={sendUrl}
                                            >
                                                <PlayCircleFilledWhiteIcon  style={{fontSize: 50}}/>
                                            </IconButton>
                                        }
                                        />
                        </ImageListItem>
                        </Grid>
                    </GridUnderBar>
                 </Grid> */}
