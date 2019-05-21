import * as React from 'react';
import '../assets/css/Home.css';

class Home extends React.Component<{}, any>{
    public render() {
        const profileIcons = {
            'github': 'https://github.com/jamesgeorge007',
            'linkedin-in': 'https://linekdin.com/in/jamesgeorge007',
            'twitter': 'https://twitter.com/james_madhacks'
        };
        const colors = ['#fff', 'darkblue', 'lightblue'];
        return (
            <div>
                <div className="bg" />
                <div className='home-wrapper'>
                <div className="image-wrapper">
                    <img className="profile-img" src="https://avatars2.githubusercontent.com/u/25279263?s=400&v=4" alt="profile-image"/>
                </div>
                    <h1>James George</h1>
                    <p className="lead" style={{fontWeight: 400}}>Yet another Developer</p>
                    <div className="social-profile-icons">
                    { Object.keys(profileIcons).map((item, key) => {
                            return <a key={key} href={profileIcons[item]} target="__blank"><i className={`fab fa-${item} icon`} style={{color: colors[key]}}/></a>
                        })}
                    </div>
                </div>
                </div>
        );
    }
}

export default Home;