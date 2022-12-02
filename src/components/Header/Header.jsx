import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../slices/authSlice";
import { FaUserEdit, FaUserLock, FaUserPlus } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

// import "./style.css";
import "./Header.scss";

// boostrap
import { Container, Navbar, Nav } from "react-bootstrap";
import HamburgerMenue from "react-hamburger-menu";

const Header = () => {
  const [onScroll, setOnScroll] = useState(false);
  const [openMenue, setOpenMenue] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOnScroll(window.scrollY > 80);
    });
  }, []);

  const { user } = useSelector((state) => state.auth);

  const onLogOut = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <div className="header" style={{ top: 0 }}>
      <Navbar
        variant="dark"
        expand="md"
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "999",
        }}
        className={`header ${onScroll ? "on-scroll-header" : ""}`}
        onToggle={() => {
          setOpenMenue(!openMenue);
        }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbars">
            <HamburgerMenue
              isOpen={openMenue}
              menuClicked={null}
              width={25}
              height={15}
              strokeWidth={1.5}
              rotate={0}
              color={"White"}
              borderRadius={0}
              animationDuration={0.6}
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbars">
            <Nav className="mx-auto gap-3 menue">
              <Nav.Link href="#cinemax">Lịch chiếu</Nav.Link>
              <Nav.Link href="#showing">Đặt vé</Nav.Link>
              <Nav.Link href="#footer ">Cụm rạp</Nav.Link>
              <Nav.Link href="#footer">Thông tin</Nav.Link>
            </Nav>
            {user ? (
              <Nav className="signedin">
                <div className="user text-info pt-2">
                  <FaUserEdit />
                  <Link to="/updateAccount" className="mx-2 ">{user.hoTen}</Link>
                  <div
                    onClick={onLogOut}
                    className="btn  btn-info fs-6 btn-logout"
                  >
                    Đăng xuất
                  </div>
                </div>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    size="sm"
                    id="dropdown-basic"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div onClick={onLogOut} className="btn  btn-info fs-6">
                      Đăng xuất
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            ) : (
              <Nav className="auth">
                <div className="signin me-3">
                  <Link to="/signin">
                    <FaUserLock className="logo_sign" />
                    Đăng nhập
                  </Link>
                  <Link to="/signup">
                    <FaUserPlus className="logo_sign" />
                    Đăng ký
                  </Link>
                </div>
                {/* <div className="signup"></div> */}
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
