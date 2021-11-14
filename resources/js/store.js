import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dataReducer from './dataSlice';
import videoReducer from './videoSlice';
import quizReducer from './QuizSlice';

export default configureStore ({
    reducer: {
      dataId: dataReducer,
      videoData: videoReducer,
      quizData: quizReducer,
    },
});
