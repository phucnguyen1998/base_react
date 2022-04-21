import React from "react";
import {
  Routes as SW,
  Route,
  Navigate,
  Outlet
} from "react-router-dom"
import { shallowEqual, useSelector } from 'react-redux'

const ProtectedRoute = ({ user, redirectPath = '/' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

const Routes = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual)
  return (
    <SW>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/login" element={null} />
      <Route path="/services" element={null} />
      <Route path="/about" element={null} />
      <Route path="/contact" element={null} />
      <Route element={<ProtectedRoute user={user} />}>
        <Route path="/profile" element={<h1>profile</h1>} />
      </Route>
    </SW>
  )
};

export default Routes;
