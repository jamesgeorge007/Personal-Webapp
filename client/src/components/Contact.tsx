// import * as axios from 'axios';
import * as React from 'react';
import './assets/css/Contact.css';

interface IState{
    email: string;
    message: string,
    name: string,
    subject: string
}
class Contact extends React.Component<{}, IState>{

    private nameField: React.RefObject<HTMLInputElement>;
    private emailField: React.RefObject<HTMLInputElement>;
    private subjectField: React.RefObject<HTMLInputElement>;
    private messageField: React.RefObject<HTMLTextAreaElement>;

    constructor(props: any){
        super(props);

        this.nameField = React.createRef();
        this.emailField = React.createRef();
        this.subjectField = React.createRef();
        this.messageField = React.createRef();

        this.state = {
        email: '',
        message: '',
        name: '',
        subject: ''
    };
    }

    public changeName = (e: any) => {
        this.setState({name: e.currentTarget.value});
    }

    public changeEmail = (e: any) => {
        this.setState({email: e.currentTarget.value});
    }

    public changeSubject = (e: any) => {
        this.setState({subject: e.currentTarget.value});
    }

    public changeMessage = (e: any) => {
        this.setState({message: e.currentTarget.value});
    }

    public submitForm = (e: any) => {
        e.preventDefault();
        alert(this.state.name);
    }

    public render(){
            return (
                <div>
                    <div className="contact-bg" />
                    <div className="contact-wrapper">
                        <form method="post" className="contact-form" onSubmit={this.submitForm}>
                        <input type="text" ref={this.nameField} onChange={this.changeName} className="form-input" required={true} placeholder="Name"/>
                        <br />
                        <input type="email" ref={this.emailField} onChange={this.changeEmail} className="form-input" required={true} placeholder="E-mail"/>
                        <br />
                        <input type="text" ref={this.subjectField} onChange={this.changeSubject} className="form-input" required={true} placeholder="Subject"/>
                        <br />
                        <textarea ref={this.messageField} onChange={this.changeMessage} className="form-textarea" placeholder="Message" />
                        <br />
                        <button className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            );
    }
}

export default Contact;