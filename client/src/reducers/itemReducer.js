import {v1 as uuid} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
	items: [    
		{id: uuid(), name: 'eggs'},
    {id: uuid(), name: 'milk'},
    {id: uuid(), name: 'steak'},
    {id: uuid(), name: 'water'}
	]
}

export default function(state = initialState, action) {
	switch(action.type){
		case GET_ITEMS:
			return {
				...state
			};
		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload)
			};
			case ADD_ITEM:
			return {
				...state,
				items: [action.payload, ...state.items]
			}
		default:
			return state
	}
}

// const itemsFunction = (state = initialState, action) => {
// 	switch(action.type){
// 		case GET_ITEMS:
// 			return {
// 				...state
// 			};
// 		default:
// 			return state
// 	}
// }

// export default itemsFunction