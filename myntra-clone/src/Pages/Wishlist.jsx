import React, { useEffect } from "react";
// import "./WishtList.css";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteWishListItem, getWishListItems } from "../REDUX/Wishlist/action";
import {addItemToCart} from "../REDUX/Cart/action";
import {RxCrossCircled} from "react-icons/rx";
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";

function Wishlist(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    // const [move,setMove]=React.useState({id: "",title: "",price: 0,categories: "",gender: "",sizes: "",description: "",brand: "",color: "",discount: 0,off_price: 0,images: "",rating: "",count: ""});
    const [move,setMove]=React.useState({});
    const items=useSelector(store=>store.WishReducer.items);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getWishListItems());
    },[dispatch]);
    const handleDelete=(id)=>{
        dispatch(deleteWishListItem(id));
    };
    const handleAddToCart=(el)=>{
        dispatch(addItemToCart(el));
        console.log(el)
        dispatch(deleteWishListItem(el.id));
    };
    return <div style={{padding:"75px"}}>
        <h3 style={{fontSize: "18px",fontWeight:"500",display:"flex",gap:"5px"}}>My Wishlist <p style={{fontWeight:"normal"}}>{items?.length} item</p></h3>
        {items?.map((el,index)=><div key={index}>
            <div style={{width:"220px"}}>
                <div style={{border:"1px solid #d4d4d4",width:"100%"}}>
                    <div style={{backgroundColor:"white",position:"absolute",borderRadius:"50%",marginTop:"10px",marginLeft:"190px"}} onClick={()=>handleDelete(el.id)}><RxCrossCircled /></div>
                    <img src={el.images.image1} alt="Productimage"/>
                    <div style={{fontSize:"16px",marginTop:"15px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",width:"80%",margin:"auto"}}>{el.title}</div>
                    <div style={{marginLeft:"30px",display:"flex",height:"60px",alignItems:"center",gap:"10px",marginTop:"-15px"}}>
                        <p style={{fontSize:"16px",fontWeight:"500"}}>Rs.{el.price}</p>
                        <p style={{fontSize:"12px",textDecoration:"line-through"}}>Rs.{el.off_price}</p>
                        <p style={{fontSize:"12px",color:"#ff905a"}}>({el.discount}% OFF)</p>
                    </div>
                </div>
                <div>
                    <Button onClick={()=>{
                        onOpen();
                        setMove({id: el.id, title: el.title, price: el.price, categories: el.categories, gender: el.gender, description: el.description, brand: el.brand, color: el.color, discount: el.discount, off_price: el.off_price, images: el.images, rating: el.rating, count: el.count})
                    }} color="#ff3e6c" fontSize="14px" w="100%" bgColor="white" border="1px solid #d4d4d4" borderRadius="none" h="50px" fontWeight="500">MOVE TO BAG</Button>
    
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalCloseButton />
                            <ModalBody mt="25px">
                                <div style={{display:"flex",gap:"15px",marginBottom:"15px"}}>
                                    <img src={el.images.image1} style={{width:"90px"}} alt="Productimage"/>
                                    <p>{el.description}</p>
                                </div>
                                <hr/>
                                <p>Select Size</p>
                                <div style={{display:"flex",gap:"15px"}}>
                                    {el.sizes.map((ele,index)=><div key={index} className="sizeHover" style={{fontSize:"18px",border:"1px solid #d4d4d4",width:"40px",height:"35px",color:"#d4d4d4",borderRadius:"50%",textAlign:"center"}} onClick={()=>setMove({...move,sizes:ele})}>{ele}</div>)}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button bgColor='#ff3e6c' color="white" w="100%" mr={3} onClick={() =>{
                                    handleAddToCart(el);
                                    onClose();
                                    toast({
                                      position: 'top-right',
                                      render: () => (
                                        <Box color='white' p={3} mt="30%" mr="150px" h="70px" padding="10px" bg="blue.900">
                                            <div style={{display:"flex"}}>
                                            <div style={{display:"flex"}}>
                                                <img src={el.images.image1} style={{width:"35px"}} alt="Productimage"/>
                                                Item successully added to bag
                                            </div>
                                            <Link to="/cart"><Button w="55px" h="25px" bg="teal.400" mt="25px" fontSize="10px">VIEW BAG</Button></Link>
                                            </div>
                                        </Box>
                                      ),
                                      duration: 1500,
                                    })}
                                  }
                                >
                                  Done
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </div>
            </div>
        </div>)}
    </div>
}

export default Wishlist;
