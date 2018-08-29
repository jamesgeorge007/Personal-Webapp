import * as React from 'react';
import './assets/css/Portfolio.css';

class Portfolio extends React.Component{
    public render(){
            return (
                <div>
                    <div className="card">
  <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">John Doe</h4>
    <p className="card-text">Some example text.</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
</div>
                </div>
            );
    }
}

export default Portfolio;