import React, { Fragment } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Dashboard from '../client/dashboard/Dashboard';

const ClinetLayout = (props) => {
  const location = useLocation();

  //     // if (isEmpty(user)) {
  //     //   return <AppLoader />;
  //     // }
  return (
    <Fragment>
      <Routes>
        <Route path={`dashboard`} element={<Dashboard />} />
        <Route path={`*`} element={<Navigate to="/" state={{ path: location.pathname }} />} />
      </Routes>{' '}
    </Fragment>
  );
};
export default ClinetLayout;
