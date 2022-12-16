import React from 'react'
import {  Button, ButtonGroup, CardFooter, Divider, Text, Heading, Stack, Image, CardBody, Card } from '@chakra-ui/react'
import ModifyProduct from './ModifyProduct'

const ProductCard = ({el,theme}) => {

    return (
        <Card maxW='sm' boxShadow="lg" color={theme && "white"}>
            <CardBody>
                <Image
                    src={el.images.image1}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    w="100%"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{el.title}</Heading>
                    <Heading size="sm">
                    Categorie: {el.categories}
                    </Heading>
                    <Text>
                        {el.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                    Price:  ₹{el.price}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing='35' ml={10}>
                <ModifyProduct el={el}/>
                    <Button variant='solid' colorScheme='blue'>
                        Remove
                    </Button>
                </ButtonGroup>
            </CardFooter>
            <Divider />

        </Card>
    )
}

export default ProductCard