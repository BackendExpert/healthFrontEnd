import React from 'react'

const PrivateRoute = ({ element: Component, ...rest }) => {
    const token = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      element={token ? <Component /> : <Navigate to="/PatientPortal" />}
    />
  )
}

export default PrivateRoute