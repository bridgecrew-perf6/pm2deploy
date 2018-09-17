import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';
import './Alert.css';
import * as util from '../../../helpers/util';

export class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  close = () => {
    AlertManager.close(this);
    const { callback } = this.props;
    if (typeof (callback) === "function")
      callback();
  }
  renderIcon = (icon, size, pos) => {
    if (icon !== "")
      return (<Icon type={icon} size={size} position={pos} />);

    return null;
  }
  renderContent = (content) => {
    return (<span className={"alert__content"}>{content}</span>);
  }
  renderClose = (close) => {
    if (close)
      return (
        <span className={"alert__close"} onClick={this.close}>
          {this.renderIcon("close", "s", "right")}
        </span>
      );

    return null;
  }
  //Default Alert
  getDefaultClass = (type, show) => {
    let list = ["alert"];
    list[list.length] = `alert--${type}`;
    list[list.length] = show ? `alert--show` : ``;

    return list.join(" ");
  }
  //getIcon
  getIcon = (type) => {
    return {
      'success': 'colour-tick',
      'info': 'colour-info',
      'error': 'colour-error',
      'warning': 'colour-alert'
    }[type];
  }
  onClose = (callback) => {
    this.setState({
      show: false
    }, () => setTimeout(callback, 300));
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 50);
  }
  render() {
    const { type, children, close } = this.props;
    const { show } = this.state;
    const icon = this.getIcon(type);
    return (
      <div className={this.getDefaultClass(type, show)}>
        <React.Fragment>
          {this.renderIcon(icon, "s", "left")}
          {this.renderContent(children)}
          {this.renderClose(close)}
        </React.Fragment>
      </div>
    );
  }
}

Alert.defaultProps = {
  type: "info",
  children: "Default Text",
  close: true,
  show: false
}

Alert.propTypes = {
  type: PropTypes.string,
  close: PropTypes.bool,
  show: PropTypes.bool
}

// Render
var nodes = [];
var nodesIndex = [];
var alerts = [];

const renderAlert = (targetElement) => {
  const component = alerts.shift();
  const newNodeIndex = nodes.length;
  nodes[newNodeIndex] = document.createElement('div');
  nodes[newNodeIndex].className = 'alert__wrapper';
  targetElement.appendChild(nodes[newNodeIndex]);
  ReactDOM.render(component, nodes[newNodeIndex]);
}

export const AlertManager = {
  reg() {
    const id = nodesIndex.length > 0 ? Math.max(...nodesIndex) + 1 : Math.max(nodesIndex) + 1;
    nodesIndex.push(id);
    return id;
  },
  unreg(id) {
    const i = nodesIndex.indexOf(id);
    if (i !== -1) {
      const unmounted = ReactDOM.unmountComponentAtNode(nodes[i]);
      if (unmounted) {
        util.removeElement(nodes[i]);
        nodes.splice(i, 1);
        nodesIndex.splice(i, 1);
      }
    }
  },
  open(component, targetElement) {
    alerts.push(component);
    renderAlert(targetElement);
  },
  close(alertClass) {
    const id = alertClass.props.id;
    alertClass.onClose(() => {
      this.unreg(id);
    });
  }
}