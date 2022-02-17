import TableRow from "../TableRow/TableRow";
import mapStateToProps from "../../../store/mapStateToProps";
import mapDispatchToProps from "../../../store/mapDispatchToProps";
import connect from "react-redux/lib/connect/connect";

const TableRowWrapper = connect(mapStateToProps("TableRow"), mapDispatchToProps("TableRow"))(TableRow);

export default TableRowWrapper;