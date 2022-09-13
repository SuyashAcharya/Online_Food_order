import React from "react";
import "../../../styles/product-card.css";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux/es/exports";
import { addCartItem } from "../../../store/Actions/Action";
const ProductCard = ({ fetchdata }) => {
 
  const dispatch = useDispatch();
  const addToCart = (item) => {
    console.log(item);
    dispatch(addCartItem(item));
  };

  return (
    <Container>
      <Row>
        {fetchdata.map((item, i) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mt-5">
            <div className="product__item" key={i}>
              <div className="product__img">
                <img src={item.image01} alt="product-img" className="w-50" />
              </div>

              <div className="product__content">
                <h5>
                  {item.title}
                </h5>
                <div className=" d-flex align-items-center justify-content-between ">
                  <span className="product__price">${item.price}</span>
                  <button
                    className="addTOCart__btn"
                    onClick={(e) => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCard;
