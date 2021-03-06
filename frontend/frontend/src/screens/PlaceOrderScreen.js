import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { createOrder } from "../redux/Actions/OrderActions";
import { ORDER_CREATE_RESET } from "../redux/Constants/OrderConstants";
import Header from "./../components/Header";
import Message from "./../components/LoadingError/Error"

const PlaceOrderScreen = ({history}) => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  // Calculate price
  const addDecimals = (num => {
    return (Math.round(num * 100)/100).toFixed(2)
  })

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )

  cart.shippingPrice = 30000
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice)+
    Number(cart.shippingPrice)+
    Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const {order,success, error} = orderCreate

  useEffect(() => {
    if(success){
      history.push(`/order/${order._id}`)
      dispatch({type: ORDER_CREATE_RESET})
    }
  },[history, dispatch ,success , order])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
      orderItems: cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice
    })
    )
    
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row  order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row ">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i class="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Kh??ch h??ng</strong>
                </h5>
                <p>{userInfo.name}</p>
                <p>{userInfo.email}</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Th??ng tin ?????t h??ng</strong>
                </h5>
                <p>Shipping: {cart.shippingAddress.city}</p>
                <p>Ph????ng th???c thanh to??n: {cart.paymentMethod}</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Giao h??ng ?????n</strong>
                </h5>
                <p>
                  ?????a ch???: {cart.shippingAddress.address},{" "} {cart.shippingAddress.district},
                </p>
                <p>
                  S??? ??i???n tho???i: {cart.shippingAddress.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">{
            cart.cartItems.length === 0 ? (
              <Message variant="alert-info mt-5">Gi??? h??ng ??ang tr???ng</Message>
            )
            :
            (
              <>
              {
                cart.cartItems.map((item, index) => (
                  <div className="order-product row" key={index}>
                  <div className="col-md-3 col-6">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="col-md-5 col-6 d-flex align-items-center">
                    <Link to={`/products/${item.product}`}>
                      <h4>{item.name}</h4>
                    </Link>
                  </div>
                  <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                    <h4>S??? l?????ng</h4>
                    <h4>{item.qty}</h4>
                  </div>
                  <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                    <h4>T???ng ti???n</h4>
                    <h4>{item.qty * item.price}</h4>
                  </div>
                </div>
                ))
              }
              </>
            )
          }
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>T???ng ti???n s???n ph???m : </strong>
                  </td>
                  <td>{cart.itemsPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping :</strong>
                  </td>
                  <td>{cart.shippingPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Thu??? :</strong>
                  </td>
                  <td>{cart.taxPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>T???ng :</strong>
                  </td>
                  <td>{cart.totalPrice}VN??</td>
                </tr>
              </tbody>
            </table>
            {
              cart.cartItems.length === 0 ? null : (
                <button type="submit" onClick={placeOrderHandler}>
                     Ti???p t???c ?????t h??ng
                </button>
              )
            }
            {
              error && (
                <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div>
              )
            }
            
          </div>
        </div>
      </div>
      <br/>
      <Footer />
    </>
  );
};

export default PlaceOrderScreen;
