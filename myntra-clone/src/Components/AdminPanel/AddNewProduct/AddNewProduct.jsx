import { Container, Heading, Stack, Grid,Text} from '@chakra-ui/layout'
import React, { useState } from 'react'
import {
   
    Input,
    Button
} from '@chakra-ui/react'

const AddNewProduct = () => {

    return (
        <Container h="100vh">
            <Grid p={10} display="grid" boxShadow="lg" alignItems="center" justifyContent="center"  >
                <Stack textAlign="left">
                    <Heading>Add New Product</Heading>
                    <Text>Title</Text>
                    <Input  placeholder="Enter Title"/>
                    <Text>Categorie</Text>
                    <Input placeholder="Enter Categorie" />
                    <Text>Description</Text>
                    <Input placeholder="Enter Description" />
                    <Text>Status</Text>
                    <Input placeholder="Enter Title"/>
                    <Button>ADD Product</Button>
                </Stack>
            </Grid>
        </Container>
    )
}

export default AddNewProduct