import React from "react";
import "./Resume.css";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <h1 className="font-weight-bold my-5 ">Resume</h1>

        <div>
          <ProgressBar title="HTML5" progress="95" />
          <ProgressBar title="CSS3" progress="82" />
          <ProgressBar title="JAVASCRIPT" progress="80" />
          <ProgressBar title="JQUERY" progress="92" />
          <ProgressBar title="BOOTSTRAP" progress="85" />
          <ProgressBar title="PHP" progress="78" />
          <ProgressBar title="Wordpress" progress="83" />
          <ProgressBar title="REACT" progress="82" />
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
