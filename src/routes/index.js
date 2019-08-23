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
import appState from "../states/app/appState";
import TabExamplePage from "./tabExample";
import RadioExamplePage from "./radioExample";
import AlternativePage from "./alternative";

const App = props => {
  const { showAlert, title, message, buttonText } = props;

  const handleClose = () => {
    appState.hideAlert();
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
        <Route path="/alternative" component={AlternativePage} />
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
    showAlert: state.appState.isAlertOpen,
    title: state.appState.errorTitle,
    message: state.appState.errorMessage,
    buttonText: state.appState.errorButtonText
  };
}

export default connect(mapStateToProps)(App);
