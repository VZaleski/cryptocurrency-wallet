import valueTableRow from "./reducers/reducerTableRow";

function mapStateToProps(component) {
	switch (component) {
		case "TableRow": {
			return function (state) {
				return {
					valueTableRow: state.valueTableRow
				};
			}
		}
		default: return undefined;
	}
}

export default mapStateToProps;