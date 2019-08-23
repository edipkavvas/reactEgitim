import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MasterPage from "./master";
import LogoPage from "./logo";
import DenemePage from "./deneme";
//import NotFoundPage from "./notFound";
import GlobalStatePage from "./global";
import LoginPage from "./login";
import AlertBox from "../components/alertBox";
import { hideAlert } from "../states/actions/app";
import TabExamplePage from "./tabExample";
import RadioExamplePage from "./radioExample";

const App = props => {
  const { showAlert, title, message, buttonText } = props;

  const handleClose = () => {
    hideAlert();
  };

  return (
    <div>
      <Router>
        <Route path="/" exact component={LoginPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/tabexample" exact component={TabExamplePage} />
        <Route path="/master" exact component={MasterPage} />
        <Route path="/logo" component={LogoPage} />
        <Route path="/deneme" component={DenemePage} />
        <Route path="/global" component={GlobalStatePage} />
        <Route path="/radioexample" component={RadioExamplePage} />
        {/* <Route component={NotFoundPage} /> */}
      </Router>
      <AlertBox
        show={showAlert}
        title={title}
        message={message}
        buttonText={buttonText}
        onClose={handleClose}
      />
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    showAlert: state.app.isAlertOpen,
    title: state.app.errorTitle,
    message: state.app.errorMessage,
    buttonText: state.app.errorButtonText
  };
}

export default connect(mapStateToProps)(App);
