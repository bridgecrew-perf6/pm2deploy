import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';
import './Message.css';
import * as util from '../../../helpers/util';

export class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  close = () => {
    MessageManager.close(this);
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
    const title = this.getTitle(this.props.type);
    return (
      <span className={"message__content"}>
        <span className={"message__content--title"}>{`${title} :`}</span>
        <span className={"message__content--caption"}>{content}</span>
      </span>
    );
  }
  //Default Message
  getDefaultClass = (type, show) => {
    let list = ["message"];
    list[list.length] = `message--${type}`;
    list[list.length] = show ? `message--show` : ``;

    return list.join(" ");
  }
  //getIcon
  getIcon = (type) => {
    return {
      'success': 'tick',
      'info': 'info',
      'error': 'warning'
    }[type];
  }
  //getTitle
  getTitle = (type) => {
    return {
      'success': 'Success',
      'info': 'Info',
      'error': 'Error'
    }[type];
  }
  onClose = (callback) => {
    this.setState({
      show: false
    }, () => setTimeout(callback, 200));
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 50);

    setTimeout(() => 
      this.close()
    , this.props.autocloseTimer);
  }
  render() {
    const { type, children } = this.props;
    const { show } = this.state;
    const icon = this.getIcon(type);
    return (
      <div className={this.getDefaultClass(type, show)}>
        <React.Fragment>
          {this.renderIcon(icon, "m", "left")}
          {this.renderContent(children)}
        </React.Fragment>
      </div>
    );
  }
}

Message.defaultProps = {
  type: "info",
  children: "Default Text",
  autocloseTimer: 3000,
  show: false
}

Message.propTypes = {
  type: PropTypes.string,
  close: PropTypes.bool,
  show: PropTypes.bool
}

// Render
var nodes = [];
var nodesIndex = [];
var messages = [];

const renderMessage = (targetElement) => {
  const component = messages.shift();
  const newNodeIndex = nodes.length;
  nodes[newNodeIndex] = document.createElement('div');
  nodes[newNodeIndex].className = 'message__wrapper';
  targetElement.appendChild(nodes[newNodeIndex]);
  ReactDOM.render(component, nodes[newNodeIndex]);
}

export const MessageManager = {
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
    messages.push(component);
    renderMessage(targetElement);
  },
  close(messageClass) {
    const id = messageClass.props.id;
    messageClass.onClose(() => {
      this.unreg(id);
    });
  }
}