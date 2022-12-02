import React from "react";
import "./Footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillAndroid,
  AiFillApple,
  AiOutlineFacebook,
  AiOutlineGooglePlus,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import ScrollToTop from "react-scroll-to-top";
const Foooter = () => {
  return (

    <Container id="footer" className="footer">
      <ScrollToTop smooth top="20" />
      <Row className="top_footer">
        <Col lg={3} md={12}>
          <h5>LIÊN HỆ</h5>
          <div className="about">
            <div>
              <a href="#">FAQ</a>
            </div>
            <div>
              <a href="#">Brand Guidelines</a>
            </div>
            <div>
              <a href="#">Thỏa thuận sử dụng</a>
            </div>
            <div>
              <a href="#">Chính sách bảo mật</a>
            </div>
          </div>
        </Col>
        <Col lg={5} md={6}>
          <h5 className="title_parner">DOANH NGHIỆP ĐỐI TÁC</h5>
          <div className="partner">
            <div className="logo_partner">
              <a href="https://www.cgv.vn/">
                <img
                  src="https://gigamall.com.vn/data/2019/05/06/11365490_logo-cgv-500x500.jpg"
                  alt="logo-cgv"
                />
              </a>
            </div>
            <div className="logo_partner">
              <a href="https://www.bhdstar.vn/">
                <img
                  src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
                  alt="logo-BHD"
                />
              </a>
            </div>
            <div className="logo_partner">
              <a href="https://www.galaxycine.vn/">
                <img
                  src="https://img.onesignal.com/t/4f4d0ff3-c454-4b4c-a34e-180c41cbf630.png"
                  alt="logo-galaxy"
                />
              </a>
            </div>
            <div className="logo_partner">
              <a href="https://lottecinemavn.com/LCHS/index.aspx">
                <img
                  src="https://media.lottecinemavn.com/Media/WebAdmin/ccc95ee5b9274a12ba3e51317250dcbe.png"
                  alt=""
                />
              </a>
            </div>
            <div className="logo_partner">
              <a href="https://www.megagscinemas.vn/">
                <img
                  src="https://www.megagscinemas.vn/images/home/logo.png"
                  alt="logo-megagscinemas"
                />
              </a>
            </div>
            <div className="logo_partner">
              <a href="https://www.betacinemas.vn/home.htm">
                <img
                  src="https://www.betacinemas.vn/Assets/Common/logo/logo.png"
                  alt=""
                />
              </a>
            </div>
            <div className="logo_partner">
              <a href="http://ddcinema.vn/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_-h4lSsGhZlH--ba424W1ZebOeCt5ARRrA&usqp=CAU" alt="ddc-cinema" />
              </a>
            </div>
            <div className="logo_partner">
              <a href="https://touchcinema.com/">
                <img
                  src="https://touchcinema.com/images/touchcinema.png"
                  alt=""
                />
              </a>
            </div>
            <div className="logo_partner">
              <a href="https://cinemaxvn.com/">
                <img
                  src="https://theme.hstatic.net/1000296517/1000449871/14/logo.png?v=5717"
                  alt=""
                />
              </a>
            </div>
            <div className="logo_partner">
              <a href="https://starlight.vn/">
                <img src="https://starlight.vn/Content/img/logo.png" alt="" />
              </a>
            </div>
            <div className="logo_partner">
              <a href="https://www.dcine.vn/?lg=vi">
                <img src="https://www.dcine.vn/Content/img/logo.png" alt="" />
              </a>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <h5 className="title_bank">NGÂN HÀNG LIÊN KẾT</h5>

          <div className="bank">
            <div className="logo_bank">
              <img
                src="https://portal.vietcombank.com.vn/Resources/v3/img/logo.png"
                alt=""
              />
            </div>
            <div className="logo_bank">
              <img
                src="https://tpb.vn/wps/contenthandler/dav/themelist/custom.portal.theme.TPBThemev1/custom/images/logo-fix.png"
                alt=""
              />
            </div>
            <div className="logo_bank">
              <img
                src="https://cdn.hdbank.com.vn/hdbank-file/picture/logo_1645778839158.png"
                alt=""
              />
            </div>
            <div className="logo_bank">
              <img
                src="https://www.agribank.com.vn/contenthandler/dav/themelist/custom.portal.theme.AGBank/custom/images/logo_agribank.png"
                alt=""
              />
            </div>

            <div className="logo_bank">
              <img
                src="https://www.vietinbank.vn/vtbresource/web/export/system/modules/com.vietinbank.cardtemplate/resources/img/logo.png?v=02262018"
                alt=""
              />
            </div>
            <div className="logo_bank">
              <img
                src="https://www.sacombank.com.vn/Style%20Library/2018/images/Sacombank-Logo.png"
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>

      <Row className="bottom_footer">
        <Col sx={6} className="contact">
          <div className="logo_contact">
            <a href="#">
              <AiOutlineFacebook />
            </a>
          </div>
          <div className="logo_contact">
            <a href="#">
              <AiOutlineGooglePlus />
            </a>
          </div>
          <div className="logo_contact">
            <a href="#">
              <AiOutlineInstagram />
            </a>
          </div>
          <div className="logo_contact">
            <a href="#">
              <AiOutlineYoutube />
            </a>
          </div>
        </Col>

        <Col sx={6} className="app">
          <h5 className="logo_app">APP |</h5>
          <div className="app_logo me-3">
            <AiFillAndroid />
          </div>
          <div className="app_logo">
            <AiFillApple />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Foooter;
