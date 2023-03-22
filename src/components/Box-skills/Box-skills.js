import React from "react";
import PropTypes from 'prop-types';

function BoxSkills(props) {
  return (
    <div className="box-skills">
      {props.title && (
        <div className="bg--info box--shadow">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="font--uppercase text--white text--shadow --no-margin-bottom">
                  {props.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.subtitle && (
        <div className="container">
          <div className={"row " + props.subtitle.class}>
            <div className="col-12">
              <h3 className="box-skills__sub-title --no-margin">
                {props.subtitle.content}
              </h3>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-12">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

BoxSkills.propTypes = {
  title: PropTypes.object,
  subtitle: PropTypes.object
};

export default BoxSkills;
