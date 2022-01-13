// import { isEmpty } from "lodash";
import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../client/dashboard/Dashboard';

const ClinetLayout = (props) => {
  const { url } = props.match;
  const { user } = props;

  //     // if (isEmpty(user)) {
  //     //   return <AppLoader />;
  //     // }
  return (
    <Fragment>
      <Switch>
        <Route exact path={`${url}/dashboard`} component={Dashboard} />
        <Redirect from={url} to={'/'} />
      </Switch>
    </Fragment>
  );
};
export default ClinetLayout;
