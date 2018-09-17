import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';
import './Modal.css';
import * as util from '../../../helpers/util';

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  close = () => {
    ModalManager.close(this);
    const { callback } = this.props;
    if (typeof (callback) === "function")
      callback();
  }
  renderIcon = (icon, size, pos) => {
    if (icon !== "")
      return (<Icon type={icon} size={size} position={pos} />);

    return null;
  }
  renderHeader = (title) => {
    return (
      <div className="modal__header">
        <div className="modal__title">{title}</div>
        <div className="modal__close" onClick={this.close}>
          {this.renderIcon("close", "s", "right")}
        </div>
      </div>
    );
  }
  renderBody = (content) => {
    return (<div className={"modal__body"}>{content}</div>);
  }
  renderFooter = () => {
    return (<div className={"modal__footer"}></div>);
  }
  renderClose = (close) => {
    if (close)
      return (
        <span className={"modal__close"} onClick={this.close}>
          {this.renderIcon("close", "s", "right")}
        </span>
      );

    return null;
  }
  //Default Modal
  getDefaultClass = (show) => {
    let list = ["modal"];
    list[list.length] = show ? `modal--show` : ``;

    return list.join(" ");
  }
  onClose = (callback) => {
    if (this.props.clickOutsideToClose)
      document.removeEventListener('mousedown', this.handleClickOutside);
    this.setState({
      show: false
    }, () => setTimeout(callback, 300));
  };
  componentDidMount() {
    if (this.props.clickOutsideToClose)
      document.addEventListener('mousedown', this.handleClickOutside);

    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 50);
  }
  setModalRef = (node) => {
    this.modalRef = node;
  }
  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }
  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.modalRef === event.target)
      this.close();
  }
  handleKeyDown = (e) => {
    util.keyDownListener(e, 27, this.close);
  }
  render() {
    const { id, title, children } = this.props;
    const { show } = this.state;
    return (
      <div tabIndex={id} className={this.getDefaultClass(show)} onKeyDown={(e) => this.handleKeyDown(e)} ref={this.setModalRef}>
        <div className="modal__container">
          <div className="modal__content" ref={this.setWrapperRef}>
            {this.renderHeader(title)}
            {this.renderBody(children)}
            {this.renderFooter()}
          </div>
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  show: false,
  title: "Put Title Here", 
  clickOutsideToClose: true
}

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  clickOutsideToClose: PropTypes.bool
}

// Render
var nodes = [];
var nodesIndex = [];
var modals = [];

const renderModal = (targetElement) => {
  document.body.style.overflow = "hidden";
  const component = modals.shift();
  const newNodeIndex = nodes.length;
  nodes[newNodeIndex] = document.createElement('div');
  nodes[newNodeIndex].className = 'modal__wrapper';
  targetElement.appendChild(nodes[newNodeIndex]);
  ReactDOM.render(component, nodes[newNodeIndex]);
  setTimeout(() => {
    nodes[newNodeIndex].children[0].focus();
  }, 100);
}

export const ModalManager = {
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
    modals.push(component);
    renderModal(targetElement);
  },
  close(modalClass) {
    const id = modalClass.props.id;
    modalClass.onClose(() => {
      this.unreg(id);
    });
    document.body.style.overflow = "auto";
  }
}