import React, {Component} from 'react';
// import auth0Client from '../Auth';
import './SplashScreen.css';
import "tachyons"

function LoadingMessage() {
  return (
    <div className="splash-screen center pa7">
      Wait a moment while we load your page.
      <div className="loading-dot">.</div>
    </div>
  );
}

function WithSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
    
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1500)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default WithSplashScreen;