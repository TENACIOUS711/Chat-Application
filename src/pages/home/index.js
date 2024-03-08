import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Sidebar from '../../components/SideBar';
import Chat from './Chat';
import { RoomsProvider } from '../../context/Room.context';
import { useMediaQuery } from '../../misc/custom-hooks';

const Home = () => {
  const isDesktop = useMediaQuery('(min-width: 992px)');
  const { isExact } = useRouteMatch();

  const canRenderSidebar = isDesktop || isExact;
  return (
    <RoomsProvider>
      <Grid fluid className="h-100">
        <Row className="h-100">
          {canRenderSidebar && (
            <Col xs={24} md={8} className="h-100">
              <Sidebar />
            </Col>
          )}
          <Switch>
            <Route exact path="/chat/:chatId">
              <Col xs={24} md={16} className="h-100">
                <Chat />
              </Col>
            </Route>
            <Route>
              {isExact && (
                <Col xs={24} md={16} className="h-100">
                  <div className="text-center mt-page">Please select chat</div>
                </Col>
              )}
            </Route>
          </Switch>
        </Row>
      </Grid>
    </RoomsProvider>
  );
};

export default Home;
