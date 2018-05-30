import React, { Component } from 'react';
import './style.css'; //TODO: delete

export default class Contact extends Component {

  render() {

    const { contactData } = this.props;

    return (
      <div id="about">
        <div className="contact-highest-parent">
          <div className="contact-name">
            {contactData.contactName}
          </div>
          <div className="contact-phone-number">
            {contactData.phoneNumber}
          </div>
          <div className="contact-email">
            {contactData.email}
          </div>
          <div className="contact-address">
            {contactData.address}
          </div>
        </div>
      </div>
    );

  }
}
