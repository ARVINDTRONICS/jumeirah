import { connect } from "react-redux";
import { updateUserByKey } from "../actions/user";
import { LogIn } from "../layouts/Login";
import { bindActionCreators } from "redux";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateUserByKey }, dispatch);
};

export default connect(null, mapDispatchToProps)(LogIn);
