import React from 'react'
import { Badge, ButtonGroup, CardFooter, Divider, Text, Heading, Stack, Image, CardBody, Card } from '@chakra-ui/react'
import ModifyUser from './ModifyUser'
import RemoveUserButton from './Buttons/RemoveUserButton'


const UserCard = ({ el, theme ,setTogalDash }) => {
    return (
        <Card  boxShadow="lg" color={theme && "white"} h="80vh">
            <CardBody >

                <Image
                    src='data:image/png;base64,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'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    w={{sm:"30%",md:"100%",lg:"100%"}}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{el.name}</Heading>
                    <Text>
                        {el.email}
                    </Text>
                    <Text>
                        {el.number}
                    </Text>

                </Stack>
            </CardBody>
            {el.status === "user" && <Badge colorScheme='green'>User</Badge>}
            {el.status === "employee" && <Badge colorScheme='purple'>Employee</Badge>}
            {el.status === "admin" && <Badge colorScheme='red'>Admin</Badge>}
            <CardFooter>
                <ButtonGroup spacing='35' ml={10}>
                    <ModifyUser el={el} setTogalDash={setTogalDash} />
                    <RemoveUserButton id={el.id} status={el.status} />
                </ButtonGroup>


                {/* {!el.admin && <ButtonGroup spacing='35' ml={10}>
                    <ModifyUser el={el}  />
                    <RemoveUserButton />
                </ButtonGroup>} */}
            </CardFooter>
            <Divider />


        </Card>
    )
}

export default UserCard