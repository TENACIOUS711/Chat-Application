import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useProfile } from '../context/profile.context';
import { Container, Loader } from 'rsuite';

const PrivateRoute = ({ children, ...routeProps }) => {
  const { profile, isLoading } = useProfile();

  if (isLoading && !profile) {
    <Container>
      <Loader center vertical size="md" content="Loading..." speed="slow" />
    </Container>;
  }
  if (!profile && !isLoading) {
    return <Redirect to="/SignIn" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
