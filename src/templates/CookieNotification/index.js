import React from "react";
import Cookies from "js-cookie";

class CookieNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    const { notify, notifyDelay, cookieKey } = this.props;
    const isCookieAccepted = Cookies.get(cookieKey) === "1";

    if (notify && !isCookieAccepted)
      setTimeout(() => {
        this.setState({
          isOpen: true
        });
      }, notifyDelay);
  }

  handleClose = () => {
    const { cookieKey } = this.props;
    Cookies.set(cookieKey, 1, { expires: 7, path: "/" });
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;
    return children({ close: this.handleClose, isOpen });
  }
}

CookieNotification.defaultProps = {
  notify: true,
  notifyDelay: 1000,
  cookieKey: "accept-cookie",
  expiredDuration: 365
};

export default CookieNotification;
