import Action from '../action.interface'

export const obterData = (payload: any): Action<any> => {
    return {
        type: 'OBTER_DATA_ACTION',
        payload
    }
}
