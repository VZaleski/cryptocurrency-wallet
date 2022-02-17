import ActionTableRow from '../actions/actionTableRow';
import initialState from '../initialState';

export default function valueTableRow(state = initialState.valueTableRow, action) {
    switch(action.type) {
        case ActionTableRow: return action.valueTableRow;
        
        default: return state;
    }
}