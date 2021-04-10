import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1 className="font-weight-bold my-5 ">Contact</h1>

      <table class="table border">
        <tbody>
          <tr>
            <th scope="row">Email</th>
            <td>ssakib5050@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">Facebook</th>
            <td>http://facebook.com/ssakib5050</td>
          </tr>
          <tr>
            <th scope="row">LinkedIn</th>
            <td>http://linkedin.com/ssakib5050</td>
          </tr>
          <tr>
            <th scope="row">Instagram</th>
            <td>http://instagram.com/ssakib5050</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
