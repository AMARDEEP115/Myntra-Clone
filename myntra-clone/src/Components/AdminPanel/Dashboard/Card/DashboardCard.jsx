import React from 'react'
import { Divider, Text, Heading, Stack, Image, CardBody, Card, } from '@chakra-ui/react'


const DashboardCard = ({ el, theme }) => {
    return (
        <Card maxW='sm' boxShadow="lg" color={theme && "white"} p={5}>
            <CardBody>
                <Image
                    src={el.images.image1}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    w="100%"
                    h="90%"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{el.categories}</Heading>

                </Stack>
            </CardBody>

            <Divider />

        </Card>
    )
}

export default DashboardCard