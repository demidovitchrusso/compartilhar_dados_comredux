import  { 
    createStore, 
    combineReducers,  
} from 'redux'

import DataReducer from './data/Data.producer'


const reducers = combineReducers({
    dataStore: DataReducer
})

export default createStore(
    reducers,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
