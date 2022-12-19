import React from 'react'
import { Divider,  Heading, Stack, Image, CardBody, Card, } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { getProductAdmin } from '../../../../REDUX/AdminRedux/action'


const DashboardCard = ({ el, theme, setTogalDash }) => {
    const dispatch = useDispatch()
    return (
        <Card maxW='sm' boxShadow="lg" color={theme && "white"} p={5} onClick={() => {
            dispatch(getProductAdmin(el?.parem))
            el.parem === "user" ? setTogalDash("user") : setTogalDash("product")



        }}>
            <CardBody>
                <Image
                    src={el?.images.image1}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    w="100%"
                    h="90%"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{el?.categories}</Heading>

                </Stack>
            </CardBody>

            <Divider />

        </Card>
    )
}

export default DashboardCard