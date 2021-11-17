import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dataReducer from './dataSlice';
import videoReducer from './videoSlice';
import quizReducer from './QuizSlice';
import categoryReducer from './categorySlice';

export default configureStore ({
    reducer: {
      dataId: dataReducer,
      videoData: videoReducer,
      quizData: quizReducer,
      categoryId: categoryReducer,
    },
});
