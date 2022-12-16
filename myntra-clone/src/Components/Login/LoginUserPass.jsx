import { Container, Flex, Grid, Heading, InputRightElement, Alert, Image, InputGroup,  Input, Text, Button, GridItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const initialState = {
    email: "",
    password: "",

}

const LoginUserPass = () => {
    const [user, setUser] = useState(initialState)
    const [userData,setUserData]=useState([])
    const [otpAlert, setOtpAlert] = useState(false)
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [authen, setAuthen] = useState(false)
    const navigate = useNavigate()
    const getData = () => {
        axios.get(`https://scary-fly-gilet.cyclic.app/user`).then((res) => {
            setUserData(res.data)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    let handelChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;

        setUser({ ...user, [name]: val });
    };

    const auth = () => {

        userData.forEach((el) => {
            if (user.email === el.email && user.password===el.password) {

                setAuthen(prev => !prev)
                localStorage.setItem("user",JSON.stringify(el))

            }
        })


    }
    const submitOTP = () => {
        auth()

        

    }
    console.log('authen:', authen)




    return (

        <Grid bg="#FFF5F5" w="100%" h="100vh" display="grid" justifyContent="center" alignItems="center">
            {otpAlert && <Alert status='success'> Data uploaded to the server. Fire on!  </Alert>}
            <Container  >
                <Grid w="400px" bg="#FFF" boxShadow="xl">
                    <Grid>
                        <Image w="400px" h="160px" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg" alt="" />
                    </Grid>
                    <Grid gap={5} p={8} display="grid" justifyContent="center">

                        <Grid display="grid" alignItems="baseline" textAlign="left" gap={2} >
                            <Heading size="md">Login</Heading>
                            <Text>Enter Your Email and Password</Text>
                        </Grid>
                        <Grid>

                            <GridItem>
                                <Input variant='outline' placeholder='Enter Your Email' value={user.email} onChange={handelChange} name="email" />
                            </GridItem>
                            <GridItem>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter Your  Password'
                                        value={user.password} onChange={handelChange} name="password"
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </GridItem>

                        </Grid>
                        <Flex >
                            <Text  >By Continuing, I agree To the Terms of Use & Privacy Policy</Text>

                        </Flex>
                        <Flex>
                            <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={submitOTP}>
                                <b>   CONTINUE</b>
                            </Button>
                        </Flex>
                        <Flex color="#FF3F6C"> <Link to="/login" >Want's To Login With Mobile ?</Link></Flex>

                    </Grid>
                </Grid>

            </Container>
        </Grid>
    )
}

export default LoginUserPass
