import React from "react";
// import Tooltip from "../templates/Tooltip";
import CookieNotification from "../templates/CookieNotification";

const Dashboard = () => (
  <div style={{ marginTop: "50px" }}>
    {/* <Tooltip content="this is a dashboard">
      <button>Dashboard</button>
    </Tooltip> */}

    <CookieNotification>
      {({ close, isOpen }) => (
        <div className={`cm ${!isOpen ? "none" : ""}`}>
          <div className="cm__body">
            <div className="cm__title">Cookies</div>
            <div className="cm__subtitle">This site uses Cookies.</div>
            <div className="cm__content">
              We do this to remember your preferences and compile analytics of
              visit. By using our site, you agree to our use of all cookies.
            </div>
            <div className="cm__footer">
              <button className="cm__btn" onClick={close}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </CookieNotification>
  </div>
);

export default Dashboard;
