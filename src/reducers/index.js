import { RETRIEVED_NOTIFICATIONS } from '../actions/types'

const initialStore = {
    notifications: []
}

const reducer = function (state = initialStore, action) {
    switch (action.type) {
        case RETRIEVED_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.notifications
            }
    
        default:
            return state
    }
}

export default reducer