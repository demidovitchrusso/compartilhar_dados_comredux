import Action from '../action.interface'

const DATA_STORE_INIT = {
    data: {  }
}

const DataProducer = (state = DATA_STORE_INIT, action: Action<any>) => {
    switch(action.type) {
        case 'OBTER_DATA_ACTION':
            return { ...state, data: action.payload }
        default:
            return state
    }
}

export default DataProducer
