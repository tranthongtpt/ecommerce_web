import React from 'react'
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Image1 from './icon/banner-ads-big.png'
import Image2 from './icon/banner-ads1.webp'
import Image3 from './icon/banner-ads2.webp'
import duocpham from './icon/img-list-item7.png'
import chamsocsuckhoe from './icon/img-list-item6.png'
import chamsoccanhan from './icon/img-list-item5.png'
import sanphamtienloi from './icon/img-list-item24.png'
import thucphamchucnang from './icon/img-list-item3.png'
import mevabe from './icon/img-list-item2.png'
import dekhang from './icon/Protect-Green-icon.png'
import banchai from './icon/P22588_1.jpg'
import danhmuc from './icon/text-editor-icon.png'
import thuonghieu from './icon/atom-icon.png'
import about from './icon/brand-1.jpg'
import adv from './icon/ads.svg'
function Home() {
  window.scrollTo(0, 0);
  return (
    <>
    <Header />
    <section className="home" id="home">
          <div className="bannertop">
              <div className="bannertop-left">
                  <div className="slide active"></div>
                  <div className="slide"></div>
                  <div id="next-slide" onclick="next()" className="fas fa-angle-right"></div>
                  <div id="prev-slide" onclick="prev()" className="fas fa-angle-left"></div>
              </div>
              <div className="bannertop-right">
                  <img className="bannertop-image"src={Image1} alt="" />
                  <img className="bannertop-image"src={Image2} alt="" />
              </div>
          </div>
      </section>
      <section className="category">
          <div className="category-list__header">
              <img className="icon__title" src={danhmuc} alt="" />
              <p className="category-list__header-title">Danh mục sản phẩm</p>
          </div>
          <div className="container">
              <a href="#" className="box">
                  <img src={duocpham} />
                  <p>Dược phẩm</p>
              </a>
              <a href="#" className="box">
                  <img src={chamsocsuckhoe} alt="" />
                  <p>Chăm sóc sức khỏe</p>
              </a>
              <a href="#" className="box">
                  <img src={chamsoccanhan} alt="" />
                  <p>Chăm sóc cá nhân</p>
              </a>
              <a href="#" className="box">
                  <img src={sanphamtienloi} alt="" />
                  <p>Sản phẩm tiện lợi</p>
              </a>
              <a href="#" className="box">
                  <img src={thucphamchucnang} alt="" />
                  <p>Thực phẩm chức năng</p>
              </a>
              <a href="#" className="box">
                  <img src={mevabe} alt="" />
                  <p>Mẹ và Bé</p>
              </a>
          </div>
      </section>
  
      <section className="featured" id="featured">
  
          <div className="category-list__header">
              <img className="icon__title" src={dekhang} alt="" />
              <p className="category-list__header-title">Tăng sức đề khán mùa dịch</p>
          </div>
  
          <div className="swiper featured-slider">
  
              <div className="swiper-wrapper">
  
                  <div className="swiper-slide box">
                      <div className="image">
                          <img src={banchai} alt="" />
                      </div>
                      <div className="content">
                          <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc chứa muối tr tr hu ji ko</h2>
                          <div className="productItem_original-price"></div>
                          <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                          <button className="btn" >Thêm vào giỏ hàng</button>
                      </div>
                  </div>
  
                  <div className="swiper-slide box">
                      <div className="image">
                          <img src={dekhang} alt="" />
                      </div>
                      <div className="content">
                          <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc nướu chứa muối tre</h2>
                          <div className="productItem_original-price"></div>
                          <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                          <button className="btn" >Thêm vào giỏ hàng</button>
                      </div>
                  </div>
  
                  <div className="swiper-slide box">
                      <div className="image">
                          <img src={banchai} alt="" />
                      </div>
                      <div className="content">
                          <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc nướu chứa muối treê</h2>
                          <div className="productItem_original-price"></div>
                          <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                          <button className="btn" >Thêm vào giỏ hàng</button>
                      </div>
                  </div>
  
                  <div className="swiper-slide box">
                      <div className="image">
                          <img src={banchai} alt="" />
                      </div>
                      <div className="content">
                          <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc nướu chứa muối tre</h2>
                          <div className="productItem_original-price"></div>
                          <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                          <button className="btn" >Thêm vào giỏ hàng</button>
                      </div>
                  </div>
  
                  <div className="swiper-slide box">
                      <div className="image">
                          <img src={banchai} alt="" />
                      </div>
                      <div className="content">
                          <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc nướu chứa muối tre</h2>
                          <div className="productItem_original-price"></div>
                          <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                          <button className="btn">Thêm vào giỏ hàng</button>
                      </div>
                  </div>
  
                  <div className="swiper-slide box">
                      <div className="image">
                          <img src={banchai} alt="" />
                      </div>
                      <div className="content">
                          <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc nướu chứa muối tre</h2>
                          <div className="productItem_original-price"></div>
                          <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                          <button className="btn" >Thêm vào giỏ hàng</button>
                      </div>
                  </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
          </div>
      </section>
      <section className="shop" id="shop">
  
          <div className="category-list__header">
              <img className="icon__title" src={banchai} alt="" />
              <p className="category-list__header-title">Gợi ý hôm nay</p>
          </div>
  
          <div className="box-container">
  
              <div className="box">
                  <div className="image">
                      <img src={banchai} alt="" />
                  </div>
                  <div className="content">
                      <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc chứa muối tr tr hu ji ko
                          gyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h2>
                      <div className="productItem_original-price"></div>
                      <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                      <button className="btn">Thêm vào giỏ hàng</button>
                  </div>
              </div>
              <div className="box">
                  <div className="image">
                      <img src={banchai} alt="" />
                  </div>
                  <div className="content">
                      <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc chứa muối tr tr hu ji ko
                          gyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h2>
                      <div className="productItem_original-price"></div>
                      <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                      <button className="btn">Thêm vào giỏ hàng</button>
                  </div>
              </div>
              <div className="box">
                  <div className="image">
                      <img src={banchai} alt="" />
                  </div>
                  <div className="content">
                      <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc chứa muối tr tr hu ji ko
                          gyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h2>
                      <div className="productItem_original-price"></div>
                      <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                      <button className="btn">Thêm vào giỏ hàng</button>
                  </div>
              </div>
              <div className="box">
                  <div className="image">
                      <img src={banchai} alt="" />
                  </div>
                  <div className="content">
                      <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc chứa muối tr tr hu ji ko
                          gyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h2>
                      <div className="productItem_original-price"></div>
                      <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                      <button className="btn">Thêm vào giỏ hàng</button>
                  </div>
              </div>
              <div className="box">
                  <div className="image">
                      <img src={banchai} alt="" />
                  </div>
                  <div className="content">
                      <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc chứa muối tr tr hu ji ko
                          gyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h2>
                      <div className="productItem_original-price"></div>
                      <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                      <button className="btn">Thêm vào giỏ hàng</button>
                  </div>
              </div>
              <div className="box">
                  <div className="image">
                      <img src={banchai} alt="" />
                  </div>
                  <div className="content">
                      <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc chứa muối tr tr hu ji ko
                          gyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h2>
                      <div className="productItem_original-price"></div>
                      <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                      <button className="btn">Thêm vào giỏ hàng</button>
                  </div>
              </div>
              <div className="box">
                  <div className="image">
                      <img src={banchai} alt="" />
                  </div>
                  <div className="content">
                      <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc chứa muối tr tr hu ji ko
                          gyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h2>
                      <div className="productItem_original-price"></div>
                      <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                      <button className="btn">Thêm vào giỏ hàng</button>
                  </div>
              </div>
              <div className="box">
                  <div className="image">
                      <img src={banchai} alt="" />
                  </div>
                  <div className="content">
                      <h2 className="productItem_title">Bàn chải đánh răng P/S chăm sóc chứa muối tr tr hu ji ko
                          gyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h2>
                      <div className="productItem_original-price"></div>
                      <div className="price"> <span>28.000 VND/Cây</span> <br /> 28.000 VND/Cây </div>
                      <button className="btn">Thêm vào giỏ hàng</button>
                  </div>
              </div>
          </div>
      </section>
      <section className="Outstanding-Brand">
          <div className="container-fluid">
  
              <div className="category-list__header">
                  <img className="icon__title" src={thuonghieu} alt="" />
                  <p className="category-list__header-title">Thương hiệu nổi bật</p>
              </div>
  
              <div className="Outstanding-Brand__body">
  
                  <div className="Outstanding-Brand-slider">
  
                      <div className="swiper-container mySwiper">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <img src={about} alt="" />
                                  <h4>Bao Ngan City1</h4>
                              </div>
                              <div className="swiper-slide">
                                  <img src={about} alt="" />
                                  <h4>Bao Ngan City2</h4>
                              </div>
                              <div className="swiper-slide">
                                  <img src={about} alt="" />
                                  <h4>Bao Ngan City3</h4>
                              </div>
                              <div className="swiper-slide">
                                  <img src={about} alt="" />
                                  <h4>Bao Ngan City4</h4>
                              </div>
                              <div className="swiper-slide">
                                  <img src={about} alt="" />
                                  <h4>Bao Ngan City5</h4>
                              </div>
                              <div className="swiper-slide">
                                  <img src={about} alt="" />
                                  <h4>Bao Ngan City6</h4>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <div className="ads">
          <img className="vvv" src={adv} alt="" />
      </div>
      <section className="icon-container">
          <div className="icons">
              <i className="fas fa-shipping-fast"></i>
              <div className="content-icon">
                  <h3>Miễn phí vận chuyển</h3>
                  <p>Áp dụng cho đơn hàng trên 5 xị</p>
              </div>
          </div>
          <div className="icons">
              <i className="fas fa-capsules"></i>
              <div className="content-icon">
                  <h3>Thuốc tốt giá rẻ</h3>
                  <p>Bán ra thị trường giá gốc</p>
              </div>
          </div>
          <div className="icons">
              <i className="fas fa-user-shield"></i>
              <div className="content-icon">
                  <h3>Cam kết 100%</h3>
                  <p>Đặt chất lượng lên hàng đầu</p>
              </div>
          </div>
          <div className="icons">
              <i className="fas fa-check-circle"></i>
              <div className="content-icon">
                  <h3>Thuốc chính hãng</h3>
                  <p>Bảm đảm an toàn, uy tín</p>
              </div>
          </div>
      </section>
      <section className="newsemail">
          <form action="">
              <h3>Nhập Email để nhận thông tin khuyến mãi từ BaoNgan</h3>
              <input type="email" name="" placeholder="Enter your email" id="" className="box" required />
              <input type="submit" value="subscribe" className="btn" />
          </form>
      </section>
      <Footer />
  </>
  )
}

export default Home