import React, { useState } from "react";
import Filter from "../../Components/MensPage/Filter";
import "./MensPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMensData, getWomensData } from "../../REDUX/action";
import Pagination from "../../Components/WomensPage/Pagination";
import SortData from "../../Components/WomensPage/SortData";
import { useLocation, useSearchParams } from "react-router-dom";
import MensCard from "../../Components/MensPage/MensCard";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
const MensPage = () => {
  // https://scary-fly-gilet.cyclic.app/women
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const mens = useSelector((store) => store.mensdata.mens);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);
  //   useEffect(() => {
  //    dispatch(getMensData);
  //   }, []);
  // console.log("data",mens);

  const indexLastPost = currentPage + postPerPage;
  const indexOffirstPage = indexLastPost - postPerPage;
  const currentPosts = mens?.slice(indexOffirstPage, indexLastPost);

  //   change page
  console.log(currentPosts);
  console.log(location);
  useEffect(() => {
    if (location || mens.length === 0) {
      const brand = searchParams.getAll("brand");
      console.log("brand", brand);
      const category = searchParams.getAll("category");
      const queryParams = {
        params: {
          brand: brand,
          category: category,
          _sort: searchParams.get("sortBy") && "price",
          _order: searchParams.get("sortBy"),
        },
      };

      dispatch(getMensData(queryParams));
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
          {mens.length > 0 &&
            mens.map((data, index) => {
              return (
                <div key={data.id}>
                  <Link to={`/mens/${data.id}`}>
                    <MensCard key={index} mensData={data} />
                  </Link>
                </div>
              );
            })}
          {/* {mens?.length > 0 &&
            mens?.map((data, index) => (
              <MensCard key={index} mensData={data} />
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

export default MensPage;
