import * as React from 'react';
import './assets/css/Portfolio.css';

class Portfolio extends React.Component{
    public render(){
            return (
                <div>
                    <div className="row card-wrapper">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="card">
                                <img className="portfolio-img" src="https://png.icons8.com/small/1600/browser-window.png" alt="web"/>
                            </div>    
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="card">
                                <img className="portfolio-img" src="https://cdn4.iconfinder.com/data/icons/miu/24/device-iPhone-smartphone-vertical-outline-stroke-512.png" alt="mobile"/>
                            </div>    
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="card">
                                <img className="portfolio-img" src="https://www.shareicon.net/download/2015/08/26/91130_monitor.ico" alt="pc"/>
                            </div>    
                        </div>
                    </div>
                </div>
            );
    }
}

export default Portfolio;