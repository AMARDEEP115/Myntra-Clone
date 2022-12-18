import React from "react";
// import "./WishList.css";
import "../App.css";
import { Link } from "react-router-dom";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, getCartItems } from "../REDUX/Cart/action";
import {AiOutlineRight,AiOutlineDown} from "react-icons/ai";
import {GoTag} from "react-icons/go";
import {getWishListItems} from "../REDUX/Wishlist/action";
import axios from "axios";
// import Wishlist from "./Wishlist";

function Cart(){
    const [update,setUpdate]=React.useState(0);
    const [bag,setBag]=React.useState(true);
    const [address,setAddress]=React.useState(false);
    const [payment,setPayment]=React.useState(false);
    const [off,setOff]=React.useState(false);
    const [red,setRed]=React.useState(true);
    const handleHeightOffer=()=>{
        setOff(prev=>!prev);
    }
    const [pay,setPay]=React.useState(true);
    const cartItems=useSelector(store=>store.CartReducer.items);
    const WishlistItems=useSelector(store=>store.WishReducer.items);
    const dispatch=useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleAddToCart=(el)=>{
        addItemToCart(el);
        setUpdate(prev=>prev+1);
    }

    React.useEffect(()=>{
        dispatch(getCartItems());
        dispatch(getWishListItems());
    },[dispatch,update]);
    let x=0;
    let y=0;
    if(cartItems.length>0){
        const sum = cartItems.map((el)=>x+=el.off_price);
        const sum2= cartItems.map((el)=>y+=el.price);
    }
    const handlePlaceOrder=()=>{
        setBag(false);
        setAddress(true);
    };
    const handleAddAddress=()=>{
        setAddress(false);
        setPayment(true);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("clicked form");
    }

    const handleOrder=()=>{
        axios.post("https://scary-fly-gilet.cyclic.app/order",cartItems);
    }
    // if(cartItems.length>0){
    //     console.log(cartItems);
    // }

    return <div>
        <div id="cartNavbar">
            {/* data:image/png;base64,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 */}
            <div style={{width:"55px",height:"30px",marginLeft:"50px"}}></div>
            <div style={{display:"flex",gap:"10px",alignItems:"center",margin:"auto"}}>
                <div style={{fontSize:"18px",fontWeight:"500",color:bag?"teal":"black",textDecoration:bag?"underline":"none"}}>B A G</div>
                <div>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</div>
                <div style={{fontSize:"18px",fontWeight:"500",color:address?"teal":"black",textDecoration:address?"underline":"none"}}>A D D R E S S</div>
                <div>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</div>
                <div style={{fontSize:"18px",fontWeight:"500",color:payment?"teal":"black",textDecoration:payment?"underline":"none"}}>P A Y M E N T</div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"20px",marginRight:"70px"}}>
                <img width="35px" src="https://thumbs.dreamstime.com/z/shield-check-mark-icon-d-vector-illustration-security-guaranteed-secure-protection-symbol-free-to-edit-233403684.jpg" alt="secure" />
                <p style={{fontSize:"14px",fontWeight:"700"}}> 100 % S E C U R E</p>
            </div>
        </div>
        <hr backgroundColor="#eaeaec" style={{marginTop:"20px",marginBottom:"40px"}}/>
        <div style={{width:"100%",display:bag?"block":"none"}}>
        <div style={{display:"flex",gap:"20px",width:"80%",margin:"auto"}}>
            <div>
                <div style={{border:"1px solid #eaeaec",width:"92.7%",margin:"auto",marginLeft:"55px",display:"flex",justifyContent:"space-between",alignItems:"center",height:"55px",padding:"10px"}}>
                    <p style={{fontSize:"14px",fontWeight:"500"}}>Check delivery time & services</p>
                    <button style={{border:"1px solid red",paddingLeft:"10px",paddingRight:"10px",height:"35px",color:"red",fontSize:"12px",fontWeight:"500"}}>ENTER PIN CODE</button>
                </div>
                <div>
                    <Accordion allowMultiple h={off?"400px":"35px"}  mt="10px">
                        <AccordionItem border="1px solid #eaeaec" h="55px" ml="55px">
                            <h2 style={{width:"100%", height:"100%",display:"flex"}}>
                                <AccordionButton onClick={handleHeightOffer}>
                                    <Box as="span" flex='1' textAlign='left' display="flex" gap="10">
                                        <img style={{width:"20px",height:"20px"}} src="https://cdn-icons-png.flaticon.com/512/372/372754.png" alt="offerlogo" />
                                        <Text fontSize="14px" fontWeight="500">Availbale Offers</Text>
                                    </Box>
                                    <Box color="red"  fontSize="14px" fontWeight="500">
                                        Show More
                                        <AccordionIcon color="red" />
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <div style={{display:"block",width:"550px"}}>
                            <AccordionPanel pb={0} >
                                <Text>∙ 10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of Rs 3,500.TCA</Text>
                                <Text>∙ 10% Instant Discount on Kotak Credit and Debit Cards on a min spend of Rs 3,000.TCA</Text>
                                <Text>∙ Flat Rs 150 Cashback on Paytm Wallet and Postpaid transaction on a min spend of Rs 1,500. TCA</Text>
                                <Text>∙ Get up to Rs 500 Cashback on CRED Pay UPI on a min spend of Rs 1000. Available only on Android Devices. TCA</Text>
                                <Text>∙ Get up to Rs 500 Cashback on LazyPay transactions on a min spend of Rs 1999. TCA</Text>
                                <Text>∙ 5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</Text>
                                <Text>∙ 10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA</Text>
                                <Text>∙ Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a min spend of Rs 999.Use code MBK500 on Mobikwik.TCA</Text>
                            </AccordionPanel>
                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div style={{display:"flex",alignItems:"center",border:"1px solid #eaeaec",height:"45px",marginLeft:"55px",marginTop:"30px",fontSize:"14px"}}>
                    <img width="45px" src="https://cdn.shopify.com/s/files/1/0770/6953/files/iconmonstr-delivery-6-240_2_400x.png?v=1613795639" alt="deliverlogo" />
                    Yay! <span style={{fontWeight:"500",marginLeft:"5px",marginRight:"5px"}}> No convenience fee </span>on this oreder
                </div>
                <div style={{display:"flex",border:"1px solid #eaeaec",height:"50px",marginLeft:"55px",marginTop:"10px"}}>
                    <img style={{with:"35px",height:"35px"}} src="https://constant.myntassets.com/checkout/assets/img/price-drop.webp" alt="pricerupee" />
                    <div>
                        <p style={{fontWeight:"500",fontSize:"14px"}}>Prices Have Dropped</p>
                        <p style={{fontSize:"14px"}}>The price of one or more item in your bag has dropped. But them now!</p>
                    </div>
                </div>
                <div style={{display:"flex",gap:"20px",height:"55px",alignItems:"center",marginLeft:"75px",marginLeft:"60%"}}>
                    <button style={{fontSize:"14px",fontWeight:"500"}}>REMOVE</button> | <Link to="/wishlist"><button style={{fontSize:"14px",fontWeight:"500"}}>MOVE TO WISHLIST</button></Link>
                </div>
                <div>
                    {cartItems?.map((el)=>{
                    return <div style={{border:"1px solid #eaeaec",marginLeft:"60px",marginBottom:"10px"}}>
                        <div style={{display:"flex",padding:"10px",gap:"20px"}}>
                            <div style={{height:"20px",width:"20px",fontSize:"12px",textAlign:"center",position:"absolute",border:"1px solid black",borderRadius:"50%",backgroundColor:"white",marginLeft:"38%",marginTop:"2px"}}>X</div>
                            <img style={{width:"110px",height:"150px"}} src={el.images?.image1} alt={`${el.gender} ${el.id}`} />
                            <div>
                                <p style={{fontSize:"14px",fontWeight:"500"}}>{el.brand}</p>
                                <p style={{fontSize:"14px"}}>{el.title}</p>
                                <div style={{display:"flex",alignItems:"center",gap:"15px"}}>
                                    <div>
                                    <Button onClick={onOpen} fontSize="14px">Size: sizes <AiOutlineDown/></Button>
                                    <Modal isOpen={isOpen} onClose={onClose}>
                                      <ModalOverlay />
                                      <ModalContent>
                                        <ModalHeader></ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <div style={{display:"flex",gap:"20px"}}>
                                                <img style={{border:"1px solid black",width:'70px',height:"90px"}} src={el.images.image1} alt="poster" />
                                                <div>
                                                    <h3>{el.title}</h3>
                                                    {/* <p>{el.description}</p> */}
                                                    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                                                         <p style={{fontSize:"14px",fontWeight:"500"}}>₹ {el.price}</p> {/* Rs.{el.price} */}
                                                         <p style={{fontSize:"14px",textDecoration:"line-through"}}>{el.off_Price}</p> {/* Rs.{el.off_price} */}
                                                         <p style={{fontSize:"14px",color:"#ff905a"}}>({el.discount}% OFF)</p> {/* ({el.discount}% OFF) */}
                                                    </div>
                                                </div>
                                            </div>
                                            <hr style={{marginTop:"20px",marginBottom:"20px"}}/>
                                            <h3>Select Size :</h3>
                                            <div style={{display:"flex",gap:"20px"}}>
                                                <div style={{border:"1px solid #eaeaec",borderRadius:"50%",width:"40px",textAlign:"center"}} className="SizeItemCart">S</div>
                                                <div style={{border:"1px solid #eaeaec",borderRadius:"50%",width:"40px",textAlign:"center"}} className="SizeItemCart">M</div>
                                                <div style={{border:"1px solid #eaeaec",borderRadius:"50%",width:"40px",textAlign:"center"}} className="SizeItemCart">L</div>
                                                <div style={{border:"1px solid #eaeaec",borderRadius:"50%",width:"40px",textAlign:"center"}} className="SizeItemCart">XL</div>
                                                <div style={{border:"1px solid #eaeaec",borderRadius:"50%",width:"40px",textAlign:"center"}} className="SizeItemCart">XXL</div>
                                            </div>
                                        </ModalBody>
                              
                                        <ModalFooter>
                                          <Button bgColor='#ff3e6c' color="white" w="100%" mr={3} onClick={onClose}>
                                            Done
                                          </Button>
                                        </ModalFooter>
                                      </ModalContent>
                                    </Modal>
                                    </div>
                                    <div style={{display:"flex",gap:"10px",fontSize:"14px",fontWeight:"500"}}>
                                        Qty: 1 <div><button style={{border:"1px solid black",height:"20px",width:"20px",textAlign:"center"}} onClick={()=>console.log("xx")}>+</button><button style={{border:"1px solid black",height:"20px",width:"20px",textAlign:"center"}} onClick={()=>console.log("xx")}>-</button></div>
                                    </div>
                                </div>
                                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                                    <p style={{fontSize:"16px",fontWeight:"500"}}>₹ {el.price}</p> {/* Rs.{el.price} */}
                                    <p style={{fontSize:"16px",textDecoration:"line-through"}}>{el.off_price}</p> {/* Rs.{el.off_price} */}
                                    <p style={{fontSize:"16px",color:"#ff905a"}}>({el.discount}% OFF)</p> {/* ({el.discount}% OFF) */}
                                </div>
                                <p style={{color:"teal"}}>Coupen Discount ₹100</p>
                                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                                    <img style={{width:"15px",height:"13px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7Wpi9EW9xNGc7kMjPO_rgzX8jjw2bsvSgMAk6qYYhYWQDgvqy041Zw8FPXaoac73xNE&usqp=CAU" alt="checked" />
                                    <p style={{display:"flex",gap:"10px"}}>Delivery By <p style={{fontWeight:"500"}}>{new Date().getDate()+3} - {new Date().getMonth()+1} - {new Date().getFullYear()}</p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    })};
                </div>
                <Link to="/wishlist"><div style={{border:"1px solid #eaeaec",display:"flex",alignItems:"center",gap:"20px",marginLeft:"60px",paddingLeft:"10px"}}>
                    <img style={{width:"12px",height:"18px"}} src="data:image/png;base64,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" alt="saveIcon" />
                    <div style={{display:"flex",alignItems:"center",height:"45px",padding:"10px",width:"100%",justifyContent:"space-between"}}>
                        Add More From Wishlist
                        <AiOutlineRight/>
                    </div>
                </div></Link>
            </div>
            <hr backgroundColor="#eaeaec" style={{marginTop:"10px",marginBottom:"10px"}}/>
            <div style={{border:"1px solid #eaeaec",width:"0px",backgroundColor:"#eaeaec",marginTop:"-20px"}}></div>
            <div style={{width:'360px'}}>
                <p style={{fontSize:"14px",fontWeight:"500"}}>COUPONS</p>
                <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>
                    <GoTag size="25px"/>
                    <div>
                        <p style={{fontSize:"14px"}}>1 Coupon applied</p>
                        <p style={{color:"teal",fontSize:"14px"}}>You saved additional ₹100</p>
                    </div>
                    <button style={{border:"1px solid #ff3e6c",color:"#ff3e6c",height:"30px",width:"60px",fontSize:"14px"}}>EDIT</button>
                </div>
                <hr backgroundColor="#eaeaec" style={{marginTop:"20px",marginBottom:"20px"}}/>
                <p style={{fontSize:"14px", fontWeight:"500"}}>GIFTING & PERSONILATION</p>
                <div style={{backgroundColor:"#FFF1EC",width:"100%",height:"100px",marginTop:"10px"}}>
                    <div style={{position:"absolute",height:"100%",marginLeft:"80px"}}>
                        <p style={{fontSize:"13px"}}>Buying for a loved one ?</p>
                        <p style={{fontSize:"13px"}}>Gift wrap and personalise message on card,</p>
                        <p style={{fontSize:"13px"}}>Only for ₹25</p>
                        <h3 style={{fontWeight:"500",color:"red"}}>ADD GIFT WRAP</h3>
                    </div>
                    <img style={{height:"100%",marginLeft:"20px"}} src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="giftLogo" />
                </div>
                <hr backgroundColor="#eaeaec" style={{marginTop:"20px",marginBottom:"20px"}}/>
                <p style={{fontSize:"14px",fontWeight:"500"}}>SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</p>
                <div style={{display:"flex",gap:"20px",marginTop:"10px"}}>
                    <div style={{border:"1px solid black" ,paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",width:"55px"}}>₹10</div>
                    <div style={{border:"1px solid black" ,paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",width:"55px"}}>₹50</div>
                    <div style={{border:"1px solid black" ,paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",width:"65px"}}>₹100</div>
                    <input style={{border:"1px solid black" ,paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",width:"65px"}} value="Other" />
                </div>
                <button style={{color:"#ff3e6c",fontWeight:"500",marginTop:"10px"}}>Know More</button>
                <br/>
                <br/>
                <hr backgroundColor="#eaeaec" style={{marginTop:"20px",marginBottom:"20px"}}/>
                <p style={{fontSize:"14px",fontWeight:"500"}}>PRICE DETAILS ({cartItems?.length} item)</p>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Total MRP</p><p>{x}</p></div>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Discount on MRP</p><p style={{color:"teal"}}>- ₹499</p></div>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Coupon Discount</p><p style={{color:"teal"}}>- ₹199</p></div>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Convenience Fee <p>Know More</p></p><p style={{color:"teal",display:"flex",gap:"10px"}}><p style={{textDecoration:"line-through",color:"black"}}>₹99</p> FREE</p></div>
                <hr backgroundColor="#eaeaec" style={{marginTop:"20px",marginBottom:"20px"}}/>
                <div style={{display:"flex",justifyContent:"space-between"}}><p style={{fontWeight:"500",fontSize:"14px"}}>Total Amount</p><p>₹{x-499-199}</p></div>
                <button onClick={handlePlaceOrder} style={{backgroundColor:"#ff3e6c",height:"40px",paddingLeft:"20px",paddingRight:"20px",color:"white",marginTop:"20px"}}> PLACE ORDER</button>
            </div>
        </div>
        <div style={{backgroundColor:"#fff5f7",width:"84%",margin:"auto",paddingTop:"40px",paddingLeft:"20px",paddingRight:"20px",marginTop:"20px",marginBottom:"10px",paddingBottom:"20px"}}>
            <div style={{marginBottom:"20px",color:"black",border:"0.1px solid black",backgroundColor:"black"}}></div>
            <h2>You may also like:</h2>
            <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
                {WishlistItems?.map((el)=>{
                return <div style={{border:"1px solid black",width:"180px",padding:"7px",height:"320px"}}>
                    <img style={{width:"100%"}} src={el.images.image1} alt="product" />
                    <p style={{fontSize:"14px",maxLines:"1",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>{el.title}</p>
                    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                        <p style={{fontSize:"14px",fontWeight:"500"}}>₹ {el.price}</p>
                        <p style={{fontSize:"14px",textDecoration:"line-through"}}>{el.off_price}</p>
                        <p style={{fontSize:"14px",color:"#ff905a"}}>({el.discount}% OFF)</p>
                    </div>
                    <hr style={{marginTop:"10px",marginBottom:"10px"}}/>
                    <button style={{color:"red",marginLeft:"40px",fontSize:"14px",fontWeight:"500"}} onClick={()=>handleAddToCart(el)}>Add To Bag</button>
                </div>
                })};
            </div>
        </div>
        </div>

        <div style={{width:"100%",display:address?"block":"none"}}>
            <div style={{display:"flex",gap:"25px",width:"70%",margin:"auto"}}>
                <div>
                    <form onSubmit={(e)=>handleSubmit(e)} style={{display:"flex",flexDirection:"column",gap:"20px",border:"1px solid #eaeaec",padding:"20px"}}>
                        <p style={{fontSize:"12px",fontWeight:"700"}}>CONTACT DETAILS</p>
                        <input style={{border:"2px solid #eaeaec",borderRadius:"7px",height:"45px"}} placeholder="Name*" />
                        <input style={{border:"2px solid #eaeaec",borderRadius:"7px",height:"45px"}} placeholder="Mobile No*" />
                        <p style={{fontSize:"12px",fontWeight:"700"}}>ADDRESS</p>
                        <input style={{border:"2px solid #eaeaec",borderRadius:"7px",height:"45px"}} placeholder="Pin Code*" />
                        <input style={{border:"2px solid #eaeaec",borderRadius:"7px",height:"45px"}} placeholder="Address (House No, Bulding, Street, Area)*" />
                        <input style={{border:"2px solid #eaeaec",borderRadius:"7px",height:"45px"}} placeholder="Locality / Town*" />
                        <div>
                            <input style={{border:"2px solid #eaeaec",backgroundColor:"#eaeaec",borderRadius:"7px",height:"45px",width:"190px"}} placeholder="City / District*" />
                            <input style={{border:"2px solid #eaeaec",backgroundColor:"#eaeaec",borderRadius:"7px",height:"45px",width:"190px",marginLeft:"20px"}} placeholder="State*" />
                        </div>
                        <p style={{fontSize:"12px",fontWeight:"700"}}>SAVE ADDRESS AS</p>
                        <div>
                            <button style={{fontSize:"12px",border:red?"1px solid red":"1px solid black",borderRadius:"10px",color:red?"red":"black",height:"30px",width:"50px"}} onClick={()=>setRed(prev=>!prev)}>Home</button>
                            <button style={{fontSize:"12px",border:red?"1px solid black":"1px solid red",borderRadius:"10px",color:red?"black":"red",height:"30px",width:"50px",marginLeft:"20px"}} onClick={()=>setRed(prev=>!prev)}>Work</button>
                        </div>
                        <div style={{display:"flex",gap:"20px"}}><input type="checkbox" /> <p>Make this my default address.</p></div>
                        <button type="submit" style={{backgroundColor:"#ff3e6c",height:"40px",paddingLeft:"20px",paddingRight:"20px",color:"white",marginTop:"20px"}} onClick={handleAddAddress}>ADD ADDRESS</button>
                    </form>
                </div>
                <div style={{width:"350px"}}>
                    <p style={{fontSize:"14px",fontWeight:"500"}}>PRICE DETAILS ({cartItems?.length} item)</p>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Total MRP</p><p>{x}</p></div>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Discount on MRP</p><p style={{color:"teal"}}>- ₹499</p></div>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Coupon Discount</p><p style={{color:"teal"}}>- ₹199</p></div>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Convenience Fee <p>Know More</p></p><p style={{color:"teal",display:"flex",gap:"10px"}}><p style={{textDecoration:"line-through",color:"black"}}>₹99</p> FREE</p></div>
                    <hr backgroundColor="#eaeaec" style={{marginTop:"20px",marginBottom:"20px"}}/>
                    <div style={{display:"flex",justifyContent:"space-between"}}><p style={{fontWeight:"500",fontSize:"14px"}}>Total Amount</p><p>₹{x-499-199}</p></div>
                </div>
            </div>
        </div>

        <div style={{display:payment?"block":"none"}}>
            <div style={{display:"flex",width:"72%",gap:"25px",margin:"auto"}}>
            <div>
                <div style={{display:"flex",gap:"20px",border:"1px solid #eaeaec",height:"45px"}}><img style={{width:"20px",height:"20px"}} src="https://cdn-icons-png.flaticon.com/128/372/372754.png" alt="offer" /> <p style={{fontSize:"14px",fontWeight:"500"}}>Bank Offer</p></div>
                <p style={{fontSize:"14px",fontWeight:"500"}}>Choose Payment Mode</p>
                <div style={{display:"flex",gap:"20px"}}>
                    <div style={{border:"1px solid #eaeaec",marginTop:"20px",height:"40px",width:"200px"}} onClick={()=>setPay(false)}>Cash On Delivery</div>
                    <div style={{border:"1px solid #eaeaec",marginTop:"20px",height:"40px",width:"200px"}} onClick={()=>setPay(true)}>Credit/Debit Card</div>
                </div>
                <div style={{display:pay?"block":"none"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <p style={{fontSize:"14px",fontWeight:"500"}}>CREDIT / DEBIT CARD</p>
                    <p style={{fontSize:"14px",fontWeight:"500"}}>Please ensure your card can be used fro online transactions.</p>
                    <p style={{fontSize:"14px",fontWeight:"500"}}>Kone More</p>
                    <input style={{border:"1px solid #eaeaec",borderRadius:"10px",height:"50px",marginBottom:"20px",marginTop:"20px"}} type="number" placeholder="Card Number" />
                    <input style={{border:"1px solid #eaeaec",borderRadius:"10px",height:"50px",marginBottom:"20px"}} type="number" placeholder="Nameon card" />
                    <div><input style={{border:"1px solid #eaeaec",borderRadius:"10px",height:"50px",marginRight:"20px"}} type="date" placeholder="Vaild Thru"/><input style={{border:"1px solid #eaeaec",borderRadius:"10px",height:"50px"}} type="number" placeholder="CVV"/></div>
                </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}><div style={{display:"flex",gap:"20px"}}><img style={{width:"20px",height:"20px"}} src="https://cdn.iconscout.com/icon/free/png-128/gift-3239302-2699141.png" alt="gift" />Have a gift card?</div> <div>APPLY GIFT CARD</div></div>
            </div>
            <div style={{border:"1px solid #eaeaec",width:"2px",height:"100%"}}></div>
            <div style={{width:"350px"}}>
                <p style={{fontSize:"14px",fontWeight:"500"}}>PRICE DETAILS ({cartItems?.length} item)</p>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Total MRP</p><p>{x}</p></div>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Discount on MRP</p><p style={{color:"teal"}}>- ₹499</p></div>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Coupon Discount</p><p style={{color:"teal"}}>- ₹199</p></div>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}><p>Convenience Fee <p>Know More</p></p><p style={{color:"teal",display:"flex",gap:"10px"}}><p style={{textDecoration:"line-through",color:"black"}}>₹99</p> FREE</p></div>
                <hr backgroundColor="#eaeaec" style={{marginTop:"20px",marginBottom:"20px"}}/>
                <div style={{display:"flex",justifyContent:"space-between"}}><p style={{fontWeight:"500",fontSize:"14px"}}>Total Amount</p><p>₹{x-499-199}</p></div>
            </div>
            </div>
            <button style={{border:"4px solid #ff3e6c",color:"#ff3e6c",padding:"20px",marginLeft:"47%",marginTop:"20px"}} onClick={handleOrder}><Link to="/"> PLACE ORDER</Link></button>
        </div>



        <div style={{display:"flex",gap:"5px", width:"78%",margin:"auto",marginTop:"80px"}}>
            <img style={{border:"1px solid #eaeaec",width:"60px"}} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" alt="lock"/>
            <img style={{border:"1px solid #eaeaec",width:"60px"}} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt="visa"/>
            <img style={{border:"1px solid #eaeaec",width:"60px"}} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt="mastercard"/>
            <img style={{border:"1px solid #eaeaec",width:"60px"}} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt="lock"/>
            <img style={{border:"1px solid #eaeaec",width:"60px"}} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" alt="lock"/>
            <img style={{border:"1px solid #eaeaec",width:"60px"}} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" alt="netbanking"/>
            <img style={{border:"1px solid #eaeaec",width:"60px"}} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" alt="cod"/>
            <img style={{border:"1px solid #eaeaec",width:"60px"}} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" alt="rupay"/>
            <img style={{border:"1px solid #eaeaec",width:"60px"}} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" alt="paypal"/>
            <img style={{border:"1px solid #eaeaec",width:"60px"}} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt="bhim"/>
        </div>
    </div>
}

export default Cart;
