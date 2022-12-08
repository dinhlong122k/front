import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import {
  getProducts,
  selectPageNumber,
  selectProducts,
  selectProductPerPage,
  selectTotalPage,
} from "../store/shopping-cart/productSlice";
import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [searchItem, setSearchItem] = useState("");

  const [pageNumber, setPageNumber] = useState(1);
  
  const [pageSize, setPageSize] = useState(12);

  const [properties, setProperties] = useState("");

  const [orderby, setOrderBy] = useState("");
  

  const searchedProduct = products.filter((item) => {
    if (searchItem.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchItem.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const dispatch = useDispatch();
  const productsData = useSelector(selectProducts);
  const productNumberPage = useSelector(selectTotalPage);
  // const productPerPage = useSelector(selectProductPerPage);
  // // const productPageNumber = useSelector(selectPageNumber);

  useEffect(() => {
    setPageSize(pageSize);
    setProperties("title");
    setOrderBy("asc");
    dispatch(getProducts({pageNumber: pageNumber, pageSize: pageSize, properties: properties, orderby: orderby, search : searchItem}));
  }, []);

  const visitedPage = pageNumber * pageSize;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + pageSize
  );

  const pageCount = Math.ceil(productNumberPage / pageSize);

  const changePage = ({ selected }) => {  
    setPageNumber(selected);
    dispatch(getProducts({pageNumber: selected + 1, pageSize: pageSize}));
  };

  const searchProducts = (e) =>{
    console.log(e);
    dispatch(getProducts({pageNumber: pageNumber, pageSize: pageSize, properties: properties, orderby: orderby,search: e}))
  }

  const handleChange = (e) =>{
    if(e.target.value === 'default'){
      dispatch(getProducts({pageNumber: pageNumber, pageSize: pageSize, properties: properties, orderby: orderby}));
      setProperties("");
      setOrderBy("");
    }
    if(e.target.value === 'ascending'){
      setProperties("title");
      setOrderBy("asc");
      dispatch(getProducts({pageNumber: pageNumber, pageSize: pageSize, properties: "title", orderby: "asc"}));
    }
    if(e.target.value === 'descending'){
      setProperties("title");
      setOrderBy("desc");
      dispatch(getProducts({pageNumber: pageNumber, pageSize: pageSize, properties: "title", orderby: "desc"}));
    }
    if(e.target.value === 'high-price'){
      setProperties("price");
      setOrderBy("desc");
      dispatch(getProducts({pageNumber: pageNumber, pageSize: pageSize, properties: "price", orderby: "desc"}));
    }
    if(e.target.value === 'low-price'){
      setProperties("price");
      setOrderBy("asc");
      dispatch(getProducts({pageNumber: pageNumber, pageSize: pageSize, properties: "price", orderby: "asc"}));
    }
  }

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text" style={{width: "100%", backgroundColor: "transparent"}}
                  placeholder="I'm looking for...."
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <span>
                  <i className="ri-search-line" onClick={(e) => searchProducts(searchItem)}></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select onChange={handleChange} className="w-50">
                  <option value="default">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {productsData.length > 0 && productsData.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns"
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                disableInitialCallback={true}
                initialPage={1}
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
