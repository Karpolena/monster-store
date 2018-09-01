import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as R from "ramda";
import {Link} from "react-router";

import {
    getBasketPhonesWithCount,
    getTotalBasketPrice
} from "../../selectors";
import {
    removePhoneFromBasket,
    basketCheckout,
    cleanBasket
} from "../../actions/index";




const Basket = ({
    phones, 
    totalPrice, 
    removePhoneFromBasket,
    basketCheckout,
    cleanBasket
}) => {
    const isBasketEmpty = R.isEmpty(phones)

    const renderContent = () => (
        <div>
            {isBasketEmpty && <div>Your shopping cart is empty</div>}
            <div className="table-responsive">
                <table className="table-bordered table-striped table-condensed cf">
                    <tbody>
                        {phones.map ((phone, index) => (
                            <tr 
                                key={index}
                                className="item-checout"
                            >
                                <td className="first-column-checkout">
                                    <img
                                        className="img-thumbnail"
                                        src={phone.image}
                                        alt={phone.name}
                                    />
                                </td>
                                <td>{phone.name}</td>
                                <td>${phone.price}</td>
                                <td>{phone.count}</td>
                                <td>
                                    <span 
                                    onClick={() => removePhoneFromBasket(phone.id)}
                                    className="delete-cart"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                {
                    R.not(isBasketEmpty) && 
                        <div className="row">
                            <div className="pull-right total-user-checkout">
                                <b>Total:</b>
                                ${totalPrice}
                            </div>
                        </div>
                }
        </div>
    )

    const renderSidebar = () => (
        <div>
            <Link 
                to="/"
                className="btn btn-info"
            >
                <span className="glyphicon glyphicon-info-sing" />
                <span>Continue shopping</span>
            </Link>
            {
                R.not(isBasketEmpty) &&
                <div>
                    <button
                        onClick={cleanBasket}
                        className="btn btn-danger"
                    >
                        <span className="glyphicon glyphicon-trash" />
                        Clear cart
                    </button>
                    <button
                    className="btn btn-succes"
                    onClick={() => basketCheckout(phones)}
                    >
                        <span className="glyphicon glyphicon-envelope"/>
                        Checkout
                    </button>
                </div>
            }
        </div>
    ) 
    return(
        <div className="view-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {renderContent()}
                    </div>
                    <div className="col-md-3 btn-user-checkout">
                        {renderSidebar()}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state)
}) 

const mapDispatchToProps = {
    removePhoneFromBasket,
    basketCheckout,
    cleanBasket
}


export default connect(mapStateToProps, mapDispatchToProps)(Basket)

Basket.propTypes = {
    totalPrice: PropTypes.number,
    phones: PropTypes.array,
    removePhoneFromBasket: PropTypes.func,
    basketCheckout: PropTypes.func,
    cleanBasket: PropTypes.func
}