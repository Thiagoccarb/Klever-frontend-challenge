import * as React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function InitialPage() {
  const { pathname } = useLocation();
  const isHome = pathname === '/tokens';
  return (
    <>
      {
        !isHome
        && <Navigate to="/tokens" />
      }
      <Outlet />
    </>
  );
}

export default InitialPage;
