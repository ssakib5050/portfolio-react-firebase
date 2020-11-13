import React from "react";
import "./Resume.css";

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <h2 className="resume-header">Resume</h2>

        <div className="resume-body">
          <ProgressBar title="HTML5" progress="95" />
          <ProgressBar title="CSS3" progress="88" />
          <ProgressBar title="JAVASCRIPT" progress="82" />
          <ProgressBar title="JQUERY" progress="80" />
          <ProgressBar title="BOOTSTRAP" progress="78" />
          <ProgressBar title="PHP" progress="75" />
          <ProgressBar title="REACT" progress="84" />
          <ProgressBar title="NODEJS" progress="74" />
          <ProgressBar title="MONGODB" progress="80" />
          <ProgressBar title="FIREBASE" progress="79" />
        </div>
      </div>
    );
  }
}

function ProgressBar(props) {
  const { title, progress } = props;

  return (
    <div className="resume-item">
      <div className="progress-info">
        <span className="progress-name">{title}</span>
        <span className="progress-percentage">{progress}%</span>
      </div>
      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Resume;
