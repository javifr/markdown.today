// @flow
import type { AppState } from "../reducers";
import React from "react";
import { connect } from "react-redux";
import Snackbar from "material-ui/Snackbar";

import { nextNotification } from "../accessors";
import { resolveFirstNotification } from "../actionCreators";

type Props = {
  message: ?string,
  resolveFirstNotification: () => void
};
const Notifications = (props: Props) =>
  <Snackbar
    open={!!props.message}
    message={props.message}
    autoHideDuration={4000}
    onRequestClose={props.resolveFirstNotification}
  />;

const mapDispatchToProps = { resolveFirstNotification };

const mapStateToProps = (state: AppState) => ({
  message: nextNotification(state) || ""
});
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
