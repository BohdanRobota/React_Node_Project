import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RouteNames } from '../common/consts/app-keys.const';
import { privateRoutes, publicRoutes } from '.';

export const AppRouter = () => {
  const isAuth = true;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} Component={route.component} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.TODOS} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} Component={route.component} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} replace />} />
    </Routes>
  );
};
