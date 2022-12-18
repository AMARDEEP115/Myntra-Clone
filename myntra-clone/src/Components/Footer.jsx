import "./Footer.css";

let searches="Makeup  Dresses For Girls  T-Shirts  Sandals  Headphones  Babydolls  Blazers For Men  Handbags  Ladies Watches  Bags  Sport Shoes  Reebok Shoes  Puma Shoes  Boxers  Wallets  Tops  Earrings  Fastrack Watches  Kurtis  Nike  Smart Watches  Titan Watches  Designer Blouse  Gowns  Rings  Cricket Shoes  Forever 21  Eye Makeup  Photo Frames  Punjabi Suits  Bikini  Myntra Fashion Show  Lipstick  Saree  Watches  Dresses  Lehenga  Nike Shoes  Goggles  Bras  Suit  Chinos  Shoes  Adidas Shoes  Woodland Shoes  Jewellery  Designers Sarees";


export default function Footer(){


 return <div style={{padding:"0px 100px",background:"#fafbfc"}}>
    
    <div className="main">
       <div>
              <p>ONLINE SHOPPING</p>
              <p>Men</p>
              <p>Women</p>
              <p>Kids</p>
              <p>Home & Living</p>
              <p>Beauty</p>
              <p>Gift Cards</p>
              <p>Myntra Insider</p>
       </div>
       <div>
            <p>CUSTOMER POLICIES</p>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>T&C</p>
            <p>Terms Of Use</p>
            <p>Track Orders</p>
            <p>Shipping</p>
            <p>Cancellation</p>
            <p>Returns</p>
            <p>Privacy policy</p>
            <p>Grievance Officer</p>
       </div>
       <div className="mobile">
         <div >
            <p>EXPERIENCE MYNTRA APP ON MOBILE</p>
            <div>
                <img onClick={()=>window.location.href="https://play.google.com/store/apps/details?id=com.myntra.android&pli=1"} src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" />
                <img onClick={()=> window.location.href="https://apps.apple.com/in/app/myntra-indias-fashion-store/id907394059"} src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" />

            </div>
         </div>

         <div>
            <p>KEEP IN TOUCH</p>
            <div>
                <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="" />
                <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="" />
                <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="" />
                <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="" />
            </div>
         </div>
       </div>
       <div className="div4Footer">
       <div>
          <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" />
              <div>
               <span className="outerP">100% ORIGINAL  </span>    
                <p>guarantee for all products at myntra.com</p>
              </div>
          </div>
          <div>
                <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="" />
               <div>
               <span  className="outerP">Return within 30days  </span>
                <p>of receiving your order</p>
               </div>
          </div> 
       </div>
        <div>
              <p>USEFUL LINKS</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Site Map</p>
              <p>Corporate Information</p>
              <p>Whitehat</p>
       </div>
    </div>
    
    <div className="hr">
        <p>POPULAR SEARCHES</p>
       <div>
       <hr />
       </div>
    </div>
    
    <div className="flexLinks">
        {searches.trim().split("  ").map((el)=>{
            return <div key={el+Math.random(100)}><a className="searches" href="/">{el}</a> | </div>
        })}
    </div>
    
    <div className="lastDiv">
        <div>
            <p>In case of any concern, </p>
            <a href="/contact">Contact Us</a>
        </div>
        <div>
            <p>© 2022 www.myntra.com. All rights reserved.</p>
        </div>
    </div>

    <div>
        <hr />
    </div>
    </div>

}