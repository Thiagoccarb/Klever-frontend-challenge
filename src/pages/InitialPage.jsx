import * as React from 'react';
import { Navigate } from 'react-router-dom';

function InitialPage() {
  return (
    <Navigate to="/tokens" />
  );
}

export default InitialPage;
