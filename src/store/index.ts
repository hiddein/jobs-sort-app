import {applyMiddleware, createStore} from 'redux'
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)