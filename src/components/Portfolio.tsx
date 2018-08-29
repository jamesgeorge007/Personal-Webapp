import * as React from 'react';
import './assets/css/Portfolio.css';

class Portfolio extends React.Component{
    public render(){
            return (
            <div>
                <div className="jumbotron">
                    <p className="lead">
                        I build cross platform solutions for the web, mobile and pc keeping up with the latest industry standards.
                    </p>
                </div>
                <div className="card-wrapper">
                    <div className="card" style={{width: '22em', textAlign: 'center'}}>
                        <i className="card-img-top fas fa-globe fa-5x" />
                        <div className="card-body">
                            <h5 className="card-title">Web</h5>
                            <p className="card-text">Web apps built with popular technology stacks like LAMP, MEVN and MERN folllowing responsive guidelines.</p>
                            <a href="https://www.github.com/jamesgeorge007" target="_blank" className="btn">Explore</a>
                        </div>
                    </div>

                    <div className="card" style={{width: '22em', textAlign: 'center'}}>
                    <i className="card-img-top fas fa-mobile-alt fa-5x" />
                        <div className="card-body">
                            <h5 className="card-title">Mobile</h5>
                            <p className="card-text">Native mobile apps built the normal Java, kotlin way as well as using cross platform frameworks like React Native.</p>
                            <a href="https://www.github.com/jamesgeorge007" target="_blank" className="btn">Explore</a>
                        </div>
                    </div>

                    <div className="card" style={{width: '22em', textAlign: 'center'}}>
                    <i className="card-img-top fas fa-desktop fa-5x" />
                    <div className="card-body">
                            <h5 className="card-title">PC</h5>
                            <p className="card-text">Cross platform Desktop apps built on top of Electron adopting modern design principles.</p>
                            <a href="https://www.github.com/jamesgeorge007" target="_blank" className="btn">Explore</a>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Portfolio;