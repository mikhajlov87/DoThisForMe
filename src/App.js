import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PrivateRoute from './decorators/privateRoute';
import * as Routes from './constants/routes';
import * as Components from './components';
import * as Layouts from './layouts';
import * as Screens from './screens';

const App = ({ uid }) => (
  <Fragment>
    <Layouts.Header/>
    <Switch>
      <PrivateRoute path={Routes.MOTION_CREATE} component={Components.OperatorCreate} condition={uid} redirectRoute={Routes.SIGN_IN} />
      <PrivateRoute path={Routes.MOTION_PROCESS} component={Components.OperatorProcess} condition={uid} redirectRoute={Routes.SIGN_IN} />
      <Route exact path={Routes.HOME} component={Components.Home} />
      <Route path={Routes.PRIVACY_POLICY} component={Screens.InfoPage} />
      <Route path={Routes.TERMS_OF_SERVICE} component={Screens.InfoPage} />
      <Route path={Routes.ABOUT_US} component={Screens.InfoPage} />
      <Route path={Routes.HOW_IT_WORKS} component={Screens.InfoPage} />
      <Route component={Screens.NotFound} />
    </Switch>
    <Layouts.Footer />
  </Fragment>
);

App.propTypes = {
    uid: PropTypes.string,
};

App.defaultProps = {
    uid: null,
};

const mapStateToProps = ({ authReducer: { uid } }) => ({ uid });

export default connect(mapStateToProps)(App);
