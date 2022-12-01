import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Container, Row, Col } from "reactstrap";
import { getCate } from "../../../store/shopping-cart/categorySlice";

import "../../../styles/category.css";

const Category = () => {
  //const categoryData = useSelector(getCate);
  const categoryData = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCate())
    console.log(categoryData);
  }, [dispatch])

  useEffect(() => { 
  }, [categoryData])
  
  return (
    <Container>
      <Row>
        {categoryData.map((item, id) => {
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={id}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        })}
      </Row>
    </Container>
  );
};

export default Category;
