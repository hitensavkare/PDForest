import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from '@containers/auth';
import AnimTest from '@containers/AnimTest';
import Home from '@containers/Home';
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  static routesFunction() {
    return (
      <Scene
        key="root"
        panHandlers={null} // for disable swiping back in IOS
        duration={0} // to avoid sliding animation on IOS
        hideNavBar="hideNavBar"
        hideTabBar="hideTabBar"
      >
        <Scene key="Login" title="Login"  component={Login} />
        <Scene key="AnimTest" title="Login" component={AnimTest} />
        <Scene key="Home" title="Home" initial component={Home} />
      </Scene>
    );
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading === true) {
      return null;
    }
    return (
      <Router>
        { Routes.routesFunction() }
      </Router>
    );
  }
}

export default Routes;
