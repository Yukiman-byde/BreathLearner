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
  import Show from './Show/Show';
  import QuizPage from './Quiz/QuizPage';
  import LessonPage from './Lesson/LessonPage';
  import { useSelector } from 'react-redux';
  import { selectNumber } from '../dataSlice';
  import { selectCategory } from '../categorySlice';

function App() {
    const titles = ['Info', 'Japanese-Language', 'Culture', 'About', 'News(Reading)'];
    const dataId = useSelector(selectNumber);
    const categoryId = useSelector(selectCategory);
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
                    <Route path={`/lesson=${categoryId}`} element={<Show/>}/>
                    <Route path="/quiz=1" element={<LessonPage />} />
                </Routes>
    </Router>
    )
}

export default App