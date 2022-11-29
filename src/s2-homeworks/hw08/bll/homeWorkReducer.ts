import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state]
            return copyState.sort((a, b) => (action.payload === 'up')
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name))
            // return action.payload === "up"
            //     ? state.sort((a, b) => a.name > b.name ? 1 : -1)
            //     : state.sort((a, b) => a.name < b.name ? 1 : -1)
        }
        case 'check': {
            return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}
