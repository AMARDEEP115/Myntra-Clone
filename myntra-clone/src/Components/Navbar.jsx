import "./Navbar1.css";

import { useRef, useState } from "react";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import React from 'react';
import { SlMagnifier } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logout from "../Pages/AdminPanel/Dashboard/Card/Logout";

export default function Navbar() {
  const [q, setQ] = useState("")
  const focusRef = useRef(null)
  const [dropdwn, setdropdwn] = useState(false);
  const activeB = (x) => {
    if (x) {
      focusRef.current.className = styles.activeB
    } else {
      focusRef.current.className = null
    }
  }
  const searchData = () => {
    alert('yet to be declared')
  }

  return (
  <div className={styles.stick}>

    <div className={styles.main}>

      <div>
        <div>
          <Link to="/"><img src={"https://doubtful-bell-2631.netlify.app/static/media/Myntra.64e73cf807ba3072649f.png"}  width="40px" height={"45px"} alt="" /></Link>
        </div>
        <div>
          <div  className={styles.navpadding}>

            <Link to="/mens">MEN</Link>
          </div>
          <div  className={styles.navpadding}>
          <Link to="/womens">WOMEN</Link>
          </div>
          <div  className={styles.navpadding}>
            KIDS
          </div>
          <div  className={styles.navpadding}>
            HOME & LIVING
          </div>
          <div  className={styles.navpadding}>
            BEAUTY
          </div>
          <div  className={styles.navpadding}>
            STUDIO <sup style={{ color: "#ff3f6c", fontWeight: "600", fontSize: "10px" }}>NEW</sup>
          </div>
        </div>

      </div>

      <div>
        <div ref={focusRef}>
          <div>
            <SlMagnifier className={styles.icon} />
            <input onChange={(e) => setQ(e.target.value)}

              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  searchData()
                }
              }}

              onMouseEnter={() => activeB(true)} onMouseLeave={() => activeB(false)} type="text" placeholder="Search for products, brands and more" />
          </div>
        </div>
        <div>
          <div onMouseEnter={() => setdropdwn(true)} onMouseLeave={() => setdropdwn(false)} className={styles.profile}>
            < SlUser/>
            <p>Profile</p>

            <div className={dropdwn ? styles.dropDown : styles.dropDown_hidden}>
              <div>
                <div>
                  <b>Welcome</b>
                  <p style={{ fontWeight: "400" }}>
                 To access account and manage orders
                  </p>
                  </div>
                 <Link to="/login"><button>LOGIN/SIGNUP</button></Link>
              </div>

              <div style={{fontSize:"20px"}}>
                <p>Orders</p>
              </div>
              <div>
                <p>Wishlist</p>
              </div>
              <div>
                <p>Gift Cards</p>
              </div>
              <div>
                <p><Logout/></p>
              </div>
             
            </div>
          </div>

          <Link to="/wishlist"><div style={{ cursor: "pointer" }} className={styles.navpadding} >
          <IoMdHeartEmpty/>
            <p>Wishlist</p>
          </div>
          </Link>
          <Link to="/cart"> <div style={{ cursor: "pointer" }} className={styles.navpadding}>
                <HiOutlineShoppingBag/>
            <p>Bag</p>
          </div>
          </Link>
        </div>

      </div>

    </div>
  </div>
  )
};