import React from 'react';
import ContactForm from '../ContactFrom/ContactForm';

const ContactArea = (props) => {
  const styles = {
    top: {
      marginBottom: '0px',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start', // Align items to the top
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    contactFormContainer: {
      flex: 1, // Take up remaining space
      marginRight: '20px', // Adjust margin as needed
    },
  };

  return (
    <section
      className={`wpo-contact-area section-padding ${props.contactclass}`}
      id="contact"
      style={styles.top}
    >
      <div className="wpo-wpo-contact-form-map">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="wpo-section-title">
                <h2>Let's Talk</h2>
              </div>
            </div>
          </div>
          <div className="row" style={styles.container}>
            <div className="col col-lg-8 col-md-8 col-12" style={styles.contactFormContainer}>
              <div className="wpo-contact-form">
                <h2>Get In Touch</h2>
                <ContactForm />
              </div>
            </div>
            <div className="col col-lg-4 col-md-12 col-12" style={styles.cardContainer}>


              
              <div className="info-item" style={{ marginBottom: '10px',padding:'15px 5px' }}> 
                <h2 style={{ fontSize: '16px', marginBottom: '5px' }}> 
                  Address
                </h2>
                <div className="info-wrap">
                  <div className="info-icon" style={{ boxShadow: 'none' }}>
                    <i className="fi flaticon-location"></i>
                  </div>
                  <div className="info-text">
                    <span style={{ fontSize: '14px' }}> 
                      #763, 16th Main,<br /> BSK 2nd Stage,
                      Bengaluru 560 070
                    </span>
                  </div>
                </div>
              </div>


              
              <div className="info-item" style={{ marginBottom: '10px',padding:'15px 5px' }}> 
                <h2 style={{ fontSize: '16px', marginBottom: '5px' }}>
                  Mail Us
                </h2>
                <div className="info-wrap">
                  <div className="info-icon" style={{ boxShadow: 'none' }}>
                    <i className="fi flaticon-mail"></i>
                  </div>
                  <div className="info-text">
                    <span style={{ fontSize: '12px' }}>
                      <a
                        style={{ color: '#888888',fontSize: '14px' }}
                        href={'mailto:businessboostersclub@gmail.com'}
                      >
                        businessboostersclub@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="info-item" style={{ marginBottom: '10px',padding:'15px 5px' }}> 
                <h2 style={{ fontSize: '16px', marginBottom: '5px' }}> 
                  Phone Us
                </h2>
                <div className="info-wrap">
                  <div className="info-icon" style={{ boxShadow: 'none' }}>
                    <i className="fi flaticon-phone-call"></i>
                  </div>
                  <div className="info-text">
                    <span style={{ fontSize: '12px' }}> {/* Adjusted font size */}
                      <a
                        style={{ color: '#888888',fontSize: '14px' }}
                        href={'tel:+919341666007'}
                      >
                        +91 9341666007
                      </a>
                    </span>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>
      <div className="shape-wk">
        <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
          <g opacity="0.45" filter="url(#filter0_f_39_4214)">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4214"
              x="0"
              y="0"
              width="1500"
              height="1500"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="275"
                result="effect1_foregroundBlur_39_4212"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ContactArea;
