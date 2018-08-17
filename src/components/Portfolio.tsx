import * as React from 'react';
import './assets/css/Portfolio.css';

class Portfolio extends React.Component{
    public render(){
            return (
                <div>
                    <div className="row card-wrapper">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="card">
                                <img className="portfolio-img" src="https://image.flaticon.com/icons/png/512/176/176684.png" alt="work"/>
                            </div>    
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="card">
                                <img className="portfolio-img" src="https://img.clipartxtras.com/11dd8ebdbaeeb7bcbc5bf0e8b104d6ff_android-phone-clipart-clipartxtras-android-mobile-clipart_512-512.png" alt="work"/>
                            </div>    
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="card">
                                <img className="portfolio-img" src="http://www.freebiesgallery.com/wp-content/uploads/2014/04/imac.png" alt="work"/>
                            </div>    
                        </div>
                    </div>
                </div>
            );
    }
}

export default Portfolio;