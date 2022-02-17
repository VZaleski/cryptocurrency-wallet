import ACTION_TABLE_ROW from '../actions/actionTableRow';

function tableRowActionCreator(value) {
	return {
		type: ACTION_TABLE_ROW,
		valueTableRow: value
	};
}

export default tableRowActionCreator;