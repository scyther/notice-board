import { useState } from "react";
import Notice from "./Notice";
import { checkNotificationPromise } from "../utils/notification";

const Main = () => {
  const [permission, setPermission] = useState("default");

  const handlePermission = () => {
    if (!("Notification" in window)) {
      console.log("The Browser does not support Notifications");
    } else {
      if (checkNotificationPromise()) {
        Notification.requestPermission().then((result) => {
          setPermission(result);
        });
      } else {
        Notification.requestPermission((result) => {
          setPermission(result);
        });
      }
    }
  };

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="box" style={{ height: "100%", width: "100%" }}>
          {permission === "granted" || (
            <div className="container">
              <button
                className="button is-link m-auto"
                onClick={handlePermission}
              >
                Turn ON Notifications
              </button>
            </div>
          )}
          {/* <label className="checkbox ">
            <input type='checkbox' value={}/>Turn ON Notifications
          </label> */}
          {/* <p className="sub-title">All Your Notices appear here: </p> */}
          <Notice title="Notification 1" content="Regarding Offline classes" />
          <Notice title="Notification 2" content="End Term Exams" />
          <Notice title="Notification 3" content="Regarding Offline classes" />
        </div>
      </div>
    </section>
  );
};

export default Main;
