import React,{ useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';
import LaravelApi from '../API/LaravelApi';
import {Link} from 'react-router-dom';

function Trnscription() {
    const [tip, setTip] = useState(null);
    const inputRef = useRef(null);
    const TransRef = useRef(null);
    const [shows, setShows] = useState([]);
    const [transcription, setTranscriptions] = useState('');
    const [audio, setAudio] = useState('');

    const clickClear = () => {
        setTranscriptions('');
        setTip(null);
    }

    const clickTrans = () => {
        setTranscriptions(TransRef.current.value);
        setTip(inputRef.current.value);
    }

    const clickTransAsync = () => {
        const arrangement = {content: transcription,
                             audio: audio};
        LaravelApi.post('transcriptions', arrangement).then((response)=>{
            console.log(response.data);
        })
    }

    const clickTipAsync = () => {
        const art = {tip: tip,
                     audio: audio};
        LaravelApi.post('tips', art).then((response) => {
            console.log(response);
        })
    }

    useEffect(() => {
        LaravelApi.get('shows').then((res)=>{
            //console.log(res.data);
            setShows(res.data);
        })
       }, [])

       const handleClick =(show)=>{
        setAudio(show.id);
    }

    return (
        <div>
        <TranscriptionContainer>
            <ShowsContainer>
                {shows.map((show)=> (
                    <Button key={show.id} onClick={()=>handleClick(show)} style={{backgroundColor: 'skyblue', margin: 10,borderRadius: 30}}>{show.id} :  {show.title}</Button>
                    ))}
            </ShowsContainer>
            <InputTextContainer>
                <TextareaAutosize
                        ref={TransRef}
                        minRows={2}
                        maxRows={10}
                        placeholder="type some transcriptions of video"
                        aria-label="Transcription"
                        style={{width: 1000, height: 100, marginLeft: 100, backgroundColor: 'whitesmoke', color: 'blueviolet', marginTop: 50}}
                        />
                         <Button onClick={clickTrans}>セット</Button>
                         <Button onClick={clickTransAsync}>Transcriptionを保存</Button>
            </InputTextContainer>
            <InputTipsContainer>
                 <input type="text" placeholder="tipを入力してください" ref={inputRef}/>
                 <Button onClick={clickTrans}>セット</Button>
                 <Button onClick={clickTipAsync}>Tipを保存</Button>
                 <Button onClick={clickClear}>Clear</Button>
            </InputTipsContainer>
        </TranscriptionContainer>
        <Button
               variant="contained"
               color="primary"
               component={Link}
               to="/"
               >
                 <p>go back to home</p>
               </Button>
        </div>
    )
}

export default Trnscription;
const TranscriptionContainer = styled.div``;

const ShowsContainer = styled.div`
   display: flex;
   max-width: 1200px;
   width: 100%;
   margin-left: auto;
   margin-right: auto;
   padding: 30px;
   border-radius: 30px;
   background-color: whitesmoke;
`;

const InputTextContainer = styled.div`
   display: flex;
   flex-direction: column;

   .MuiButton-root {
       background-color: skyblue;
       color: ghostwhite;
       font-size: 20px;
       margin: 20px;
       padding: 3px;
       transition: .3s;
       width: 15%;
       margin-left: auto;
       margin-right: auto;
   }

   .MuiButton-root:hover {
    background-color: skyblue;
   }
`;

const InputTipsContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 300px;
   margin-left: auto;
   margin-right: auto;
   padding: 30px;
   color: ghostwhite;

   input {
       height: 50px;
       border-radius: 10px;
   }

   .MuiButton-root {
       background-color: skyblue;
       color: ghostwhite;
       font-size: 20px;
       margin: 20px;
       padding: 3px;
       transition: .3s;
   }

   .MuiButton-root:hover {
    background-color: skyblue;
   }
`;
