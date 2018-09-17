import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import ButtonGroup from '../../Button/ButtonGroup';
import Icon from '../../Icon/Icon';
import './Dialog.css';
import * as util from '../../../helpers/util';

export class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  close = () => {
    DialogManager.close(this);
    const { btnSecondary } = this.props;
    if (btnSecondary && btnSecondary.onClick && typeof (btnSecondary.onClick) === "function")
      btnSecondary.onClick();
  }
  handlePrimaryBtn = () => {
    const { btnPrimary } = this.props;
    if (btnPrimary && btnPrimary.onClick && typeof (btnPrimary.onClick) === "function") {
      let ret = btnPrimary.onClick();
      if (ret)
        DialogManager.close(this);
    }
  }
  renderIcon = (icon, size, pos) => {
    if (icon !== "")
      return (<Icon type={icon} size={size} position={pos} />);

    return null;
  }
  renderBody = () => {
    let dialogBody;
    const {type, icon, title, children} = this.props
    if (type === "confirmation") {
      dialogBody = 
        <div className={"dialog__body"}>
          <div className={"dialog__body--l"}>
            <div className={"dialog__icon"}>{this.renderIcon(icon, "l", "left")}</div>
          </div>
          <div className={"dialog__body--r"}>
            <div className={"dialog__title"}>{title}</div>
            <div className={"dialog__caption"}>{children}</div>
          </div>
        </div>
    } else {
      dialogBody = 
        <div className={"dialog__body"}>
          <div className={"dialog__icon"}>{this.renderIcon(icon, "l")}</div>
          <div className={"dialog__title"}>{title}</div>
          <div className={"dialog__caption"}>{children}</div>
        </div>
    }
    return dialogBody;
  }
  renderFooter = () => {
    let dialogFooter;
    const {type, btnPrimary, btnSecondary} = this.props
    if (type === "confirmation") {
      dialogFooter = 
        <div className={"dialog__footer"}>
          <ButtonGroup position="right">
            <div className={"dialog__footer__btn dialog__footer__btn--secondary"}>
              <Button {...btnSecondary} onClick={this.close} />
            </div>
            <div className={"dialog__footer__btn dialog__footer__btn--primary"}>
              <Button {...btnPrimary} onClick={this.handlePrimaryBtn} />
            </div>
          </ButtonGroup>
        </div>
    } else {
      dialogFooter = 
        <div className={"dialog__footer"}>
          <ButtonGroup position="center">
            <div className={"dialog__footer__btn__primary"}>
              <Button {...btnPrimary} onClick={this.handlePrimaryBtn} />
            </div>
          </ButtonGroup>
        </div>
    }
    return dialogFooter;
  }
  //Default Dialog
  getDefaultClass = (show, type) => {
    let list = ["dialog"];
    list[list.length] = type ? `dialog--${type}` : ``;
    list[list.length] = show ? `dialog--show` : ``;

    return list.join(" ");
  }
  onClose = (callback) => {
    if (this.props.clickOutsideToClose)
      document.removeEventListener('mousedown', this.handleClickOutside);
    this.setState({
      show: false
    }, () => setTimeout(callback, 200));
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
  setDialogRef = (node) => {
    this.dialogRef = node;
  }
  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }
  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.dialogRef === event.target)
      this.close();
  }
  handleKeyDown = (e) => {
    util.keyDownListener(e, 27, this.close);
    util.keyDownListener(e, 13, this.handlePrimaryBtn);
  }
  render() {
    const { id, type } = this.props;
    const { show } = this.state;
    return (
      <div tabIndex={id} className={this.getDefaultClass(show, type)} onKeyDown={(e) => this.handleKeyDown(e)} ref={this.setDialogRef}>
        <div className="dialog__container">
          <div className="dialog__content" ref={this.setWrapperRef}>
            {this.renderBody()}
            {this.renderFooter()}
          </div>
        </div>
      </div>
    );
  }
}

Dialog.defaultProps = {
  show: false,
  title: "Put Title Here", 
  clickOutsideToClose: true
}

Dialog.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  clickOutsideToClose: PropTypes.bool
}

// Render
var nodes = [];
var nodesIndex = [];
var dialogs = [];

const renderDialog = (targetElement) => {
  document.body.style.overflow = "hidden";
  const component = dialogs.shift();
  const newNodeIndex = nodes.length;
  nodes[newNodeIndex] = document.createElement('div');
  nodes[newNodeIndex].className = 'dialog__wrapper';
  targetElement.appendChild(nodes[newNodeIndex]);
  ReactDOM.render(component, nodes[newNodeIndex]);
  setTimeout(() => {
    nodes[newNodeIndex].children[0].focus();
  }, 100);
}

export const DialogManager = {
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
    dialogs.push(component);
    renderDialog(targetElement);
  },
  close(dialogClass) {
    const id = dialogClass.props.id;
    dialogClass.onClose(() => {
      this.unreg(id);
    });
    document.body.style.overflow = "auto";
  }
}