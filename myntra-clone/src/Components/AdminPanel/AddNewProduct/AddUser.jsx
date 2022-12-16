import { Container, Heading, Stack, Grid,Text} from '@chakra-ui/layout'
import React, { useState } from 'react'
import {
   
    Input,
    Button
} from '@chakra-ui/react'

const AddUser = () => {

    return (
        <Container h="100vh">
            <Grid p={10} display="grid" boxShadow="lg" alignItems="center" justifyContent="center"  >
                <Stack textAlign="left">
                    <Heading>Add New User</Heading>
                    <Text>Title</Text>
                            <Input  />
                            <Text>Categorie</Text>
                            <Input  />
                            <Text>Description</Text>
                            <Input  />
                            <Text>Status</Text>
                            <Input />
                    <Button>ADD User</Button>
                </Stack>
            </Grid>
        </Container>
    )
}

export default AddUser