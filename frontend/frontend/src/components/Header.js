import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/Actions/userActions";

const Header = () => {
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart


  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div>
      {/* Top Header */}
      <header className="header">
        <div className="grid">
            <div className="header__navbar py-2">
                <ul className="header__navbar-list mb-0">
                    <li className="header__navbar-item ">
                        <span className="header__navbar-title--no-pointer fw-bold">Hotline đặt hàng</span>
                        <i className="header__navbar-icon fas fa-phone-alt header__navbar-title--no-pointer"></i>
                        <span className="header__navbar-title--no-pointer fw-bold">(+84) 0395557279</span>
                    </li>
                </ul>
                <ul className="header__navbar-list mb-0">
                    <li className="header__navbar-item">
                        <a href="https://goo.gl/maps/X5kujfbjCT33HymV7" target="_blank" rel="noopener"
                        className="text-decoration-none col-black">
                            <i className="header__navbar-icon fas fa-map-marker-alt fw-bold ">Địa điểm</i></a>
                    </li>
                    {
                        userInfo ? (
                            <>
                                <li id="" className="header__navbar-item fw-bold" ><Link to="/profile">Hello, {userInfo.name}</Link></li>
                                <li id="" className="header__navbar-item fw-bold" ><Link to="#" onClick={logoutHandler}>Đăng xuất</Link></li>
                            </>
                        )
                        :
                        (
                            <>
                                <li id="sign-btn" className="header__navbar-item fw-bold" ><Link to="/register">Đăng ký</Link></li>
                                <li id="login-btn1" className="header__navbar-item fw-bold" ><Link to="/login">Đăng nhập</Link></li>
                            </>
                        )
                    }
                </ul>
            </div>
            <div className="header-with-search">
                <div id="list-cetagory" className="fas fa-map-marker-alt"></div>
                <Link to="/">
                    <img src="/assets/img/logo2.png" alt="bn-logo" /><Link to="/home"></Link>
                </Link>
                <form className="search-form">
                    <input type="search" id="search-box"header__navbar placeholder="Bạn đang tìm gì hôm nay..." required />
                    <label for="search-box" className="fas fa-search fs-3 pe-3  "></label>
                </form>
                
                <div className="header__cart-icon">
                     <a className="text-decoration-none pe-3" href="#">
                        <i className="fas fa-heart"></i>
                    </a>   
                        <a className="text-decoration-none "><Link to="/cart">
                        <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                        <span id="checkout_items" className="checkout_items">{cartItems.length}</span>
                        </Link>
                        </a>
                             
                    <div id="login-btn" className="fas fa-user"></div>
                </div>
            </div>
            <div id="header-with-search1">
                <form className="search-form1">
                    <input type="search" id="search-box"header__navbar placeholder="Bạn đang tìm gì hôm nay..." required />
                    <label for="search-box" className="fas fa-search fs-3 pe-3  "></label>
                </form>
            </div>
        </div>
        <div className="main-menu">
            <div className="navbar justify-content-center py-0">
                <ul id="nav">
                    <li>
                        <a href="#"><i className="fas fa-bars"></i>Danh mục</a>
                        <ul className="subnav">
                            <li><a href="#">Dược phẩm</a></li>
                            <li><a href="#">Chám sóc sức khỏe</a></li>
                            <li><a href="#">Sản phẩm tiện lợi</a></li>
                            <li><a href="#">Thực phẩm chức năng</a></li>
                            <li><a href="#">Mẹ và bé</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Nhãn hàng<i className="pd-l fas fa-angle-down"></i></a>
                        <ul className="subnav">
                            <li><a href="#">Dược phẩm</a></li>
                            <li><a href="#">Chám sóc sức khỏe</a></li>
                            <li><a href="#">Sản phẩm tiện lợi</a></li>
                            <li><a href="#">Thực phẩm chức năng</a></li>
                            <li><a href="#">Mẹ và bé</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">Sản phẩm Covid19</Link>
                    </li>
                    <li>
                        <Link to="/products">Dược mỹ phẩm</Link>
                    </li>
                    <li>
                        <a href="#">Góc sức khỏe</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Khuyễn mãi Hot</a>
                    </li>
                </ul>
            </div>
        </div>
        
    </header>
    </div>
    )
  }

export default Header;
