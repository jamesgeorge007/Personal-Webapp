import * as React from 'react';
import './assets/css/Portfolio.css';

class Portfolio extends React.Component{
    public render(){
            return (
                <div>
                    <div className="jumbotron">
                        <p className="lead">
                        I build solutions for the web, mobile and pc.
                        </p>
                    </div>
                    <div className="row card-wrapper">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="card">
                                <img className="portfolio-img" src="https://png.icons8.com/small/1600/browser-window.png" alt="web"/>
                                <div className="desc">
                                    <p className="lead">
                                        Web apps built with popular technology stacks like LAMP, MEVN and MERN folllowing responsive guidelines.
                                    </p>
                                </div>
                            </div>    
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="card">
                                <img className="portfolio-img" src="https://cdn4.iconfinder.com/data/icons/miu/24/device-iPhone-smartphone-vertical-outline-stroke-512.png" alt="mobile"/>
                                <div className="desc">
                                    <p className="lead">
                                        Native mobile apps built the normal Java, kotlin way or even using cross platform frameworks like React Native.
                                    </p>
                                </div>
                            </div>    
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="card">
                                <img className="portfolio-img" src="https://www.shareicon.net/download/2015/08/26/91130_monitor.ico" alt="pc"/>
                                <div className="desc">
                                    <p className="lead">
                                        Cross platform Desktop apps built on top of Electron adopting modern design principles.
                                    </p>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            );
    }
}

export default Portfolio;