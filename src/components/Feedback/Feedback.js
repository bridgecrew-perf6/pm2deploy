import React from 'react';
import { Alert, AlertManager } from './Alert/Alert';
import { Message, MessageManager } from './Message/Message';
import { Modal, ModalManager } from './Modal/Modal';
import { Dialog, DialogManager } from './Dialog/Dialog';

export default class Feedback {
  static openAlert(targetElement, type, close, content, callback) {
    const id = AlertManager.reg();
    AlertManager.open(
      <Alert
        id={id}
        type={type}
        close={close}
        callback={callback}
      >
        {content}
      </Alert>, targetElement
    );
  }

  static openMessage(targetElement, type, content, autocloseTimer, callback) {
    const id = MessageManager.reg();
    MessageManager.open(
      <Message
        id={id}
        type={type}
        autocloseTimer={autocloseTimer}
        callback={callback}
      >
        {content}
      </Message>, targetElement
    );
  }

  static openModal(targetElement, title, content, clickOutsideToClose, callback) {
    const id = ModalManager.reg();
    ModalManager.open(
      <Modal
        id={id}
        targetElement={targetElement}
        title={title}
        clickOutsideToClose={clickOutsideToClose}
        callback={callback}
      >
        {content}
      </Modal>, targetElement
    );
  }

  static openDialog(targetElement, type, icon, title, content, btnPrimary, btnSecondary, clickOutsideToClose) {
    const id = DialogManager.reg();
    DialogManager.open(
      <Dialog
        id={id}
        type={type}
        targetElement={targetElement}
        icon={icon}
        title={title}
        btnPrimary={btnPrimary}
        btnSecondary={btnSecondary}
        clickOutsideToClose={clickOutsideToClose}
      >
        {content}
      </Dialog>, targetElement
    );
  }
}