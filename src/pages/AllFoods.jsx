import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProductData } from "../store/Actions/Action";
import ProductCard from "../components/UI/product-card/ProductCard";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const dispatch = useDispatch();
  const { ProductData } = useSelector((state) => state.custom);
  useEffect(() => {
    dispatch(fetchProductData(ProductData));
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState("");
  const [productShow, setProductShow] = useState(ProductData);

  const searchedProduct = (value) => {
    let val = [];
    setSearchTerm(value);
    console.log(value);
    if (value === "") {
      setProductShow(ProductData);
    } else {
      ProductData.filter((item) => {
        if (searchTerm === "") {
          return item;
        }
        if (item.title.includes(value)) {
          //  console.log([item])
          val.push(item);
          // console.log(JSON.parse(JSON.stringify(item)))
        }
      });
      setProductShow(val);
    }
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => searchedProduct(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <ProductCard fetchdata={productShow} />
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
