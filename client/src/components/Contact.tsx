import * as React from 'react';

class Contact extends React.Component{
    public render(){
            return (
                <div>
                    <div>
                        <form method="post">
                        <input type="text" className="form-control" required={true} placeholder="Name"/>
                        <input type="email" className="form-control" required={true} placeholder="E-mail"/>
                        <input type="text" className="form-control" required={true} placeholder="Subject"/>
                        <textarea className="form-control" placeholder="Message" cols={30} rows={10} />
                        <button className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            );
    }
}

export default Contact;