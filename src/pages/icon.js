import React, { Component } from 'react';
import Icon from './components/Icon/Icon';
import './../App.css';

const iconList = [
  "account",
  "add",
  "adjust",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "ascending-descending",
  "ascending",
  "bank",
  "bell-active",
  "bell",
  "box",
  "briefcase",
  "businessman",
  "camera",
  "check",
  "clip",
  "close",
  "coin-2",
  "coin",
  "colour-alert",
  "colour-error",
  "colour-info",
  "colour-remove",
  "colour-tick",
  "company",
  "contact",
  "credit-card",
  "dash",
  "dashboard",
  "date",
  "descending",
  "download",
  "draft",
  "excel",
  "file-1",
  "file-2",
  "file-waiting",
  "folder-2",
  "folder",
  "gear",
  "graph-2",
  "graph",
  "hamburger-close",
  "hamburger-open",
  "harmony",
  "help",
  "help_1",
  "info",
  "internet",
  "list",
  "lock",
  "magic",
  "mail",
  "mobile-phone",
  "money-1",
  "money-2",
  "money-3",
  "monitor",
  "more",
  "next",
  "pencil",
  "phone",
  "pin",
  "preview",
  "previous",
  "print",
  "quick-access",
  "quickfind",
  "receipt",
  "run",
  "search",
  "send",
  "share",
  "star",
  "style-1",
  "style-2",
  "sync",
  "tick",
  "trash",
  "upload",
  "wallet",
  "warning",
  "wrench",
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          iconList.map((item, index) =>
            <div key={index} >
              <Icon type={item} size="s" />
            </div>
          )
        }
        <div>
          <Button text={"Button"} icon="accounta"></Button>
          To get started, edit <code>src/App.js</code> and save to reload.
          </div>
      </div>
    );
  }
}

export default App;
