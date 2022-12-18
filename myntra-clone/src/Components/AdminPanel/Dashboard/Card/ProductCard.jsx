import React from 'react'
import {   ButtonGroup, CardFooter, Divider, Text, Heading, Stack, Image, CardBody, Card } from '@chakra-ui/react'
import ModifyProduct from './ModifyProduct'
import RemoveProduct from './Buttons/RemoveProduct'

const ProductCard = ({el,theme}) => {

    return (
        <Card maxW='sm' boxShadow="lg" color={theme && "white"} h="100vh" >
            <CardBody>
                <Image
                    src={el.images.image1}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    w="100%"
                    h="50%"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{el.title}</Heading>
                    <Heading size="sm">
                    Category: {el.categories}
                    </Heading>
                    <Text h="10vh" overflowY="scroll">
                        {el.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                    Price:  ₹{el.price}
                    </Text>
                </Stack>
            </CardBody>
       
                <ButtonGroup spacing='35' ml={10} mt="-40px" mb={10}>
                <ModifyProduct el={el}/>
                    <RemoveProduct id={el.id}/>
                </ButtonGroup>
            

        </Card>
    )
}

export default ProductCard