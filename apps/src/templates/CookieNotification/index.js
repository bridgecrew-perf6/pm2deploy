import React from "react";
import PropTypes from "prop-types";
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
    const { cookieKey, expiredDuration } = this.props;
    Cookies.set(cookieKey, "1", { expires: expiredDuration, path: "/" });
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

CookieNotification.propTypes = {
  notify: PropTypes.bool,
  notifyDelay: PropTypes.number,
  cookieKey: PropTypes.string,
  expiredDuration: PropTypes.number
};

CookieNotification.defaultProps = {
  notify: true,
  notifyDelay: 1000,
  cookieKey: "accept-cookie",
  expiredDuration: 365
};

export default CookieNotification;
