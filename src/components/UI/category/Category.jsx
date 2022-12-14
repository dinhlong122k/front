import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Container, Row, Col } from "reactstrap";
import {
  getCate,
  selectCategories,
} from "../../../store/shopping-cart/categorySlice";

import "../../../styles/category.css";

const Category = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector(selectCategories);
  console.log(categoryData);

  useEffect(() => {
    dispatch(getCate());
  }, []);

  return (
    <Container>
      <Row>
        {categoryData.length > 0 &&
          categoryData.map((item, index) => (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
              <div className="category__item d-flex align-items-center gap-3">
                <div className="category__img">
                  <img src={item.imgUrl} alt="category__item" />
                </div>
                <h6>{item.display}</h6>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Category;
