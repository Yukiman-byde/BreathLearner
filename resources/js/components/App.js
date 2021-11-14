import React from 'react'
import TopHeader from './HomePage/TopHeader';
import SecondTopHeader from './HomePage/SecondTopHeader';
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import HomePage from './HomePage/HomePage';
  import QuizPage from './Quiz/QuizPage';
  import Footer from './HomePage/Footer';
  import LessonPage from './Lesson/LessonPage';
  import { useSelector } from 'react-redux';
  import { selectNumber } from '../dataSlice';

function App() {
    const titles = ['Info', 'Japanese-Language', 'Culture', 'About', 'News(Reading)'];
    const dataId = useSelector(selectNumber);
    //const dataId = 1;
    return (
        <Router>
            <TopHeader titles={titles}/>
                   <Routes>
                      <Route path="/Info"/>
                      <Route />
                      <Route />
                      <Route />
                      <Route />
                   </Routes>
            <SecondTopHeader />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path={`/video=${dataId}`} element={<QuizPage/>}/>
                    <Route path="/quiz=1" element={<LessonPage />} />
                </Routes>
            <Footer />
    </Router>
    )
}

export default App