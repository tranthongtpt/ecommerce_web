import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import image from './img-list-item1.png'
import {listProduct} from "../../redux/Actions/ProductActions"
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const ShopSection = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const {loading, error, products} = productList

  useEffect(() => {
    dispatch(listProduct())
  }, [dispatch])
  return (
    <>
    <div className="productInfo__header">
        <div className="container-detail">
            <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                <li className="breadcrumb-item"><a href="#">Danh mục sản phẩm</a></li>
                <li className="breadcrumb-item active">Dược phẩm</li>
            </ul>
        </div>
    </div>
    <div className="productInfo__body">
        <div className="container">
            <div className="category_box">
                <div className="category_aside">
                    <div className="category_aside-title">
                        <h3>Danh mục</h3>
                    </div>
                    <div className="category_aside-box">
                        <div className="categoryAside_list-items">
                            <div className="categoryAside_list-box">
                                <figure>
                                    <img src={image} title="Sản phẩm xxxxxx" alt="" />
                                </figure>
                                <h3>Sản phẩm xxx....</h3>
                            </div>
                        </div>
                        <div className="categoryAside_list-items">
                            <div className="categoryAside_list-box">
                                <figure>
                                    <img src={image}title="Sản phẩm xxxxxx" />
                                </figure>
                                <h3>Sản phẩm xxx....</h3>
                            </div>
                        </div>
                        <div className="categoryAside_list-items">
                            <div className="categoryAside_list-box">
                                <figure>
                                    <img src={image}title="Sản phẩm xxxxxx" />
                                </figure>
                                <h3>Sản phẩm xxx....</h3>
                            </div>
                        </div>
                        <div className="categoryAside_list-items">
                            <div className="categoryAside_list-box">
                                <figure>
                                    <img src={image}title="Sản phẩm xxxxxx" />
                                </figure>
                                <h3>Sản phẩm xxx....</h3>
                            </div>
                        </div>
                        <div className="categoryAside_list-items">
                            <div className="categoryAside_list-box">
                                <figure>
                                    <img src={image}title="Sản phẩm xxxxxx" />
                                </figure>
                                <h3>Sản phẩm xxx....</h3>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="category_product">
                    <div className="category_product-head">
                        <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle fs-4" data-bs-toggle="dropdown">
                              Sắp xếp
                            </button>
                            <ul className="dropdown-menu fs-4">
                              <li><a className="dropdown-item" href="#">Giá giảm dần</a></li>
                              <li><a className="dropdown-item" href="#">Giá tăng dần</a></li>
                              <li><a className="dropdown-item" href="#">Giá mới nhất</a></li>
                            </ul>
                          </div>
                    </div>
                    <div className="box-container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 article">
                    <div className="shopcontainer row">
                    {
                      loading ? (<div className="mb-5"><Loading /></div>) : error ? (<Message variant="alert-danger">{error}</Message>)
                      :
                      (
                        <>
                        {
                          products.map((product) => (
                            <div
                              className="shop col-lg-4 col-md-6 col-sm-6"
                              key={product._id}
                            >
                              <div className="border-product">
                                <Link to={`/products/${product._id}`}>
                                  <div className="shopBack">
                                    <img src={product.image} alt={product.name} />
                                  </div>
                                </Link>
          
                                <div className="shoptext">
                                  <p>
                                    <Link to={`/products/${product._id}`}>
                                      {product.name}
                                    </Link>
                                  </p>
                                  <h3>{product.price}VNĐ/sản phẩm</h3>
                                </div>
                              </div>


                              
                            </div>
                            
                          ))
                        }
                        </>
                      )
                    }
                    {/* Pagination */}
                    <Pagination />
                    </div>
                    </div> 
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default ShopSection;
