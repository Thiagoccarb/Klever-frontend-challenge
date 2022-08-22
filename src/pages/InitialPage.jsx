import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function InitialPage() {
  return (
    <>
      <Navigate to="/tokens" />
      <Outlet />
    </>
  );
}

export default InitialPage;
