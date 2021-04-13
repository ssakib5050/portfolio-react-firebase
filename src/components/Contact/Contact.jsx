import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="px-5">
      <h1 className="font-weight-bold my-5 ">Contact</h1>

      <table class="table border">
        <tbody>
          <tr>
            <th scope="row">Email</th>
            <td>alisohrab5050@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">Facebook</th>
            <td>https://www.facebook.com/profile.php?id=100066087566338</td>
          </tr>
          <tr>
            <th scope="row">LinkedIn</th>
            <td>https://www.linkedin.com/in/sohrab-ali-30377120b/</td>
          </tr>
          <tr>
            <th scope="row">Instagram</th>
            <td>https://www.instagram.com/alisohrab5050/</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
