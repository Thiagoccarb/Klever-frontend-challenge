import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Home, InitialPage, NotFound, AddToken,
} from './pages';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />}>
          <Route path="tokens" element={<Home />} />
          <Route path="tokens/add" element={<AddToken />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
