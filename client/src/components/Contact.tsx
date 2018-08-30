import * as React from 'react';
import './assets/css/Contact.css';

class Contact extends React.Component{
    public render(){
            return (
                <div>
                    <div className="contact-bg" />
                    <div className="contact-wrapper">
                        <form method="post" className="contact-form">
                        <input type="text" className="form-input" required={true} placeholder="Name"/>
                        <br />
                        <input type="email" className="form-input" required={true} placeholder="E-mail"/>
                        <br />
                        <input type="text" className="form-input" required={true} placeholder="Subject"/>
                        <br />
                        <textarea className="form-textarea" placeholder="Message" />
                        <br />
                        <button className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            );
    }
}

export default Contact;