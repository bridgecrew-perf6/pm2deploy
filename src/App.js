import React, { Component } from 'react';
import Button from './components/Button/Button';
import Pagination from './components/Pagination/Pagination';
import Feedback from './components/Feedback/Feedback';
import TooltipTrigger from './components/Tooltip/TooltipTrigger';
import Tooltip from './components/Tooltip/Tooltip';
import * as util from './helpers/util';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    }
  }
  componentDidMount() {
    // Feedback.openAlert();
    let alert1 = document.getElementById('alert1');
    Feedback.openAlert(alert1); // Alert Default
    Feedback.openAlert(alert1, "success", false, "Success Text"); // Alert Success
    Feedback.openAlert(alert1, "info", false, "Info Text"); // Alert Info
    Feedback.openAlert(alert1, "error", false, "Error Text"); // Alert Error
    Feedback.openAlert(alert1, "warning", false, "Warning Text"); // Alert Warning

    let alert2 = document.getElementById('alert2');
    Feedback.openAlert(alert2, "success", true, "Success Text"); // Alert Success with close
    Feedback.openAlert(alert2, "info", true, "Info Text"); // Alert Info with close
    Feedback.openAlert(alert2, "error", true, "Error Text"); // Alert Error with close
    Feedback.openAlert(alert2, "warning", true, "Warning Text"); // Alert Warning with close
    Feedback.openAlert(alert2, "info", true, "Alert with Callback", () => console.log('Alert callback here!')); // Alert with Callback

    let message = document.getElementById('message');
    Feedback.openMessage(message); // Message Default
    Feedback.openMessage(message, "success", "Updated stuff", 1000); // Message Success
    Feedback.openMessage(message, "info", "User pending action", 1500); // Message Info
    Feedback.openMessage(message, "error", "Something error", 2000); // Message Error
    Feedback.openMessage(message, "info", "Message with Callback", 2500, () => console.log('Message callback here!')); // Message Info with Callback
  }
  generateAlert = () => {
    let alert2 = document.getElementById('alert2');
    Feedback.openAlert(alert2, "info", true, "Generated Alert"); // Generated Alert
  }
  generateMessage = () => {
    let message = document.getElementById('message');
    Feedback.openMessage(message, "info", "Generated Message"); // Generated Message
  }
  generateModal = () => {
    let modal = document.getElementById('modal');
    Feedback.openModal(
      modal,
      "Generated Modal Title",
      <TooltipTrigger
        id={util.randomString(5)}
        placement="bottom" 
        tooltip={
          <Tooltip gap={6}>
            I am Tooltip!
          </Tooltip>
        }
      >
        <Button text="Show Tooltip Top" />
      </TooltipTrigger>,
      true,
      () => console.log("Modal callback here!")
    ); // Generated Modal with Callback
  }
  generateConfirmationDialog = () => {
    let dialog = document.getElementById('dialog');
    Feedback.openDialog(
      dialog,
      "confirmation",
      "ColourRemove",
      "Generated Dialog Title",
      "Generated Dialog Content",
      {
        text: "Action Button",
        background: "red",
        onClick: () => this.confirmationAction()
      },
      {
        text: "Cancel",
        background: "default",
        onClick: () => console.log("Confirmation Secondary clicked!")
      },
      true
    ); // Generated Confirmation Dialog
  }
  confirmationAction = () => {
    console.log("Confirmation Primary clicked!");
    return true; // Must return boolean (return true to close the modal dialog)
  }
  generateInformationDialog = () => {
    let dialog = document.getElementById('dialog');
    Feedback.openDialog(
      dialog,
      "information",
      "ColourTick",
      "Generated Dialog Title",
      "Generated Dialog Content",
      {
        text: "Awesome",
        background: "secondary",
        onClick: () => this.informationAction()
      },
      null,
      true
    ); // Generated Information Dialog
  }
  informationAction = () => {
    console.log("Information Primary clicked!");
    return true; // Must return boolean (return true to close the modal dialog)
  }
  paginationClick = (i) => {
    this.setState({ currentPage: i })
  }
  render() {
    const tooltip = (
      <Tooltip gap={6}>
        I am Tooltip!
      </Tooltip>
    )
    
    const buttonTooltipTop = (
      <TooltipTrigger id={util.randomString(5)} placement="top" tooltip={tooltip}>
        <Button text="Show Tooltip Top" />
      </TooltipTrigger>
    );

    const buttonTooltipRight = (
      <TooltipTrigger id={util.randomString(5)} placement="right" tooltip={tooltip}>
        <Button text="Show Tooltip Right" />
      </TooltipTrigger>
    );

    const buttonTooltipBottom = (
      <TooltipTrigger id={util.randomString(5)} placement="bottom" tooltip={tooltip}>
        <Button text="Show Tooltip Bottom" />
      </TooltipTrigger>
    );

    const buttonTooltipLeft = (
      <TooltipTrigger id={util.randomString(5)} placement="left" tooltip={tooltip}>
        <Button text="Show Tooltip Left" />
      </TooltipTrigger>
    );

    return (
      <div className="App">
        <div style={{ marginTop: '5px' }}>
          <Button text="Generate Alert" onClick={() => this.generateAlert()} />
          <div id="alert1" style={{ marginTop: '5px' }}></div>
          <div id="alert2" style={{ marginTop: '5px' }}></div>
        </div>

        <div style={{ marginTop: '5px' }}>
          <Button text="Generate Message" onClick={() => this.generateMessage()} />
          <div id="message" style={{ marginTop: '5px' }}></div>
        </div>

        <div style={{ marginTop: '5px' }}>
          <Button text="Generate Modal" onClick={() => this.generateModal()} />
          <div id="modal" style={{ marginTop: '5px' }}></div>
        </div>

        <div style={{ marginTop: '5px' }}>
          <Button text="Generate Confirmation Dialog" onClick={() => this.generateConfirmationDialog()} />
          <div id="dialog" style={{ marginTop: '5px' }}></div>
        </div>
        <div style={{ marginTop: '5px' }}>
          <Button text="Generate Information Dialog" onClick={() => this.generateInformationDialog()} />
          <div id="dialog" style={{ marginTop: '5px' }}></div>
        </div>

        <div style={{ marginTop: '5px' }}>
          <Pagination currentPage={this.state.currentPage} totalPage={20} onClick={(i) => this.paginationClick(i)} />
        </div>

        <div style={{ position: 'relative', marginTop: '5px' }}>
          {buttonTooltipLeft}
          {buttonTooltipTop}
          {buttonTooltipBottom}
          {buttonTooltipRight}
        </div>
      </div>
    );
  }
}

export default App;
