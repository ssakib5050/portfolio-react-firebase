import React from 'react';
import './Contact.css';

class Contact extends React.Component{
  render(){
    return(
      <div className="test contact-wrapper">
        <h2 className="contact-header">Contact Me</h2>

        <form action="" className="form">
          <div className="form-div">
            <label htmlFor="">Enter you Name</label>
            <input type="text"/>
          </div>

          <div className="form-div">
            <label htmlFor="">Enter you Email</label>
            <input type="text"/>
          </div>

          
          <div className="form-div">
            <label htmlFor="">Enter you Subject</label>
            <input type="text"/>
          </div>

          
          <div className="form-div">
            <label htmlFor="">Enter you Message</label>
            <textarea rows="10"></textarea>
          </div>

          <button className="form-btn">Submit</button>

        </form>
      </div>
    )
  }
}

export default Contact;