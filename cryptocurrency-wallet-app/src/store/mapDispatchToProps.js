import { bindActionCreators } from 'redux';
import tableRowActionCreator from './actionCreators/tableRowActionCreator';

function mapDispatchToProps(component) {
	switch (component) {
		case "TableRow": return function (dispatch) {
			return {
				changeValueTableRow: bindActionCreators(tableRowActionCreator, dispatch)
			};
		};
		default: return undefined;
	}
}

export default mapDispatchToProps;