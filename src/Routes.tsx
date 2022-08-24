import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Home, InitialPage, NotFound, AddToken, EditToken,
} from './pages';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />}>
          <Route path="tokens" element={<Home />} />
          <Route path="tokens/add" element={<AddToken />} />
          <Route path="tokens/edit/:id" element={<EditToken />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
