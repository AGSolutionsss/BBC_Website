import React from 'react';

const Footer1 = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <p className="copyright">Copyright &copy; 2023 AG Solutions. All rights reserved.
                        <span style={{float:'right'}}> Visitors No : {localStorage.getItem("visitorCount")}</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer1;