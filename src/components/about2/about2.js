import React from 'react';
import icon3 from '../../images/utkarsh.png';
import icon1 from '../../images/unnati.png';
import icon2 from '../../images/udayan.png';
import icon4 from '../../images/comingsoon.jpg';
import about from '../../images/about_us.jpg';

const About2 = (props) => {
  return (
    <div className={`wpo-about-area-s2 section-padding ${props.aClass}`} id="about" style={{ paddingTop: '80px 0' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="wpo-about-img">
              <div className="wpo-about-img">
                <img src={about} alt="" />
                <div className="icon-1 floating-item" style={{ padding: '0px' }}><img src={icon1} alt="" /></div>
                <div className="icon-2 floating-item" style={{ padding: '0px' }}><img src={icon2} alt="" /></div>
                <div className="icon-3 floating-item" style={{ padding: '0px', bottom: '0%', right: 'auto', left: '0' }}><img src={icon3} alt="" /></div>
                <div className="icon-3 floating-item" style={{ padding: '0px', bottom: '0%', right: '0', left: 'auto' }}><img src={icon4} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-16 col-sm-16">
            <div className="wpo-about-content">
              <div className="wpo-about-title">
                <h2>About Us</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ textAlign: 'justify' }}>
                      {/* Your long paragraph */}
                      The new digital world is very different from the old traditional business world. Advantage of this world is only enjoyed by large multiple chains of stores and online giant sellers. The small and medium business persons are slowly and surely suffering and losing out. In such a scenario the need was to fight back with these giants collectively hence the thought of forming a decent and family type businesses group came to Mr. Bhupendra Kotwal, Mr. Umesh Tulsiyan and Mr. Narendra Gehlot who took the lead and started consulting and convincing business friends who not only joined the mission but supported the idea. Purpose of the group is simple. Give and take referrals for business to boost business of each other. Give the best services and rates with priority to the referral business. This will make the group and its members popular and finally winning from the digital competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
