import React from "react";
import "./Footer.scss";

export class Footer extends React.Component {
    render() {
        return <footer className="container-fluid">
            <div className="main_footer">
                <div className="row">
                    <div className="col-md-4 footer_item">
                        <h5>Office address:</h5>
                        <p>31-810 Cracow</p>
                        <p>NIP: 6751519438</p>
                        <p>REGON: 999999999</p>
                    </div>
                    <div className="col-md-4 footer_item">
                        <h5>
                            Social media
                        </h5>
                        <button class="soc_btn_white">
                            <i class="fab fa-facebook-f"></i>
                        </button>
                    </div>
                    <div class="col-md-4 footer_item">
                        <div class="footer_item">
                            <h5>Contact details:</h5>
                            <p>Tel: <b>+48 570 042 478</b></p>
                            <p>Email: <b>welcometocracow@onet.pl</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright_block">
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 copy_txt">
                        2018 &copy; VALEN Sp z o. o. &bull; All rights reserved
                    </div>
                </div>
            </div>
        </footer>;
    }
}
