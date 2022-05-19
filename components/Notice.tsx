import React from "react";

const Notice = ({ title, content }) => {
  return (
    <div className="tile is-parent">
      <article className="tile is-child notification is-dark ">
        <div className="content">
          {/* <p className="subtitle">{title}</p> */}
          <div className="content">
            <div className="level">
              {content}{" "}
              <div className="level-right">
                <button className="button is-small is-right level-item">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Notice;
