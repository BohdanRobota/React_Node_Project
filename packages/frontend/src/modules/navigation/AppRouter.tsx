import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RouteNames } from '../common/consts/app-keys.const';
import { privateRoutes, publicRoutes } from '.';
import { Context } from '../app';
import { observer } from 'mobx-react-lite';
import Home from '../pages/Home';

const AppRouter = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
      console.log(store.user.isActivated);
    }
  }, []);

  return store.isAuth && store.user.isActivated ? (
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
      <Route path="*" element={<Navigate to={RouteNames.HOME} replace />} />
    </Routes>
  );
};
export default observer(AppRouter);
