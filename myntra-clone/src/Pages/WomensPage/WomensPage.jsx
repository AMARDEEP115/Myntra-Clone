import React, { useState } from "react";
import Filter from "../../Components/WomensPage/Filter";
import WomensCard from "../../Components/WomensPage/WomensCard";
import "./WomensPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWomensData } from "../../REDUX/action";
import Pagination from "../../Components/WomensPage/Pagination";
import SortData from "../../Components/WomensPage/SortData";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
const WomensPage = () => {
  // https://scary-fly-gilet.cyclic.app/women
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const womens = useSelector((store) => store.womendata.womens);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);
  // useEffect(() => {
  //  dispatch(getWomensData);
  // }, []);
  console.log(womens);

  const indexLastPost = currentPage + postPerPage;
  const indexOffirstPage = indexLastPost - postPerPage;
  const currentPosts = womens.slice(indexOffirstPage, indexLastPost);

  // change page
  console.log(currentPosts);
  console.log(location);
  useEffect(() => {
    if (location || womens.length === 0) {
      const brand = searchParams.getAll("brand");
      console.log("brand", brand);
      const categories = searchParams.getAll("categories");
      const queryParams = {
        params: {
          brand: brand,
          categories: categories,
          _sort: searchParams.get("sortBy") && "price",
          _order: searchParams.get("sortBy"),
        },
      };

      dispatch(getWomensData(queryParams));
    }
  }, [location]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
    <Navbar/>
    
    <div className="womenspage">
      <div className="sort-head">
        <SortData />
      </div>
      <div className="product-section">
        <div className="filter-section">
          <Filter />
        </div>
        <div className="products ">
          {womens.length > 0 &&
            womens.map((data, index) => {
              return (
                <div key={index} >
                  <Link
                    to={`/womens/${data.id}`}
                   
                  >
                    <WomensCard key={index} womensData={data} />
                  </Link>
                </div>
              );
            })}
          {/* {womens.length > 0 &&
            womens.map((data, index) => (
              <WomensCard key={index} womensData={data} />
            ))} */}
        </div>
      </div>
      <div>
        {/* <Pagination postPerPage={postPerPage} totalPosts={womens.length} paginate={paginate}/> */}
      </div>
    </div>

    <Footer/>
    </>

  );
};

export default WomensPage;
