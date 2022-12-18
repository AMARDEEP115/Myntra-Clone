import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text, Button, useDisclosure, Input, Stack, Select, useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductAdmin, getProductAdmin } from '../../../Redux/Adminreducer/action'
const initialUser = {
    name: "",
    email: "",
    number: "",
    status: "user"
}
function AddUser() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user, setUser] = useState(initialUser)
    const dispatch = useDispatch()
    const toast = useToast()
    const adduser = () => {
        dispatch(addProductAdmin("user", user)).then(() => {
            dispatch(getProductAdmin("user"))
        })
    }


    return (
        <>
            <Text onClick={onOpen} >Add New User</Text>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">Add User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <Text>Name</Text>
                            <Input value={user.name} onChange={(e) => {
                                setUser({ ...user, name: e.target.value })
                            }} />
                            <Text>Email</Text>
                            <Input value={user.email} onChange={(e) => {
                                setUser({ ...user, email: e.target.value })
                            }} />
                            <Text>Number</Text>
                            <Input value={user.number} onChange={(e) => {
                                setUser({ ...user, number: e.target.value })
                            }} />
                            <Text>Status</Text>
                            <Select placeholder='Status' value={user.status} onChange={(e) => {
                                setUser({ ...user, status: e.target.value })
                            }}>
                                <option value='user'>User</option>
                                <option value='employee'>Employee</option>
                            </Select>
                        </Stack>

                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                        <Button colorScheme='blue' onClick={() => {
                            adduser()
                            toast({
                                title: 'Account created.',
                                description: "We've created your account for you.",
                                status: 'success',
                                duration: 9000,
                                isClosable: true,
                            })
                        }


                        } >
                            Add User
                        </Button>


                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default AddUser