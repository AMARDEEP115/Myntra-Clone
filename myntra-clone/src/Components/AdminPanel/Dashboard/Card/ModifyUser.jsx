import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text, Button, useDisclosure, Input, Stack, Select
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductAdmin, updateProductAdmin } from '../../../../Redux/Adminreducer/action'
import ModiyUserButton from './Buttons/ModiFyUserButton'

function ModifyUser({ el }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userDetails, setUserDetails] = useState({ ...el })
    const dispatch = useDispatch()
    const modifyuser = () => {

        dispatch(updateProductAdmin("user", userDetails.id, userDetails)).then(()=>{
            dispatch(getProductAdmin("user"))
        })
       

    }




    return (
        <>
            <Button onClick={onOpen} variant='solid' colorScheme='blue'>Modify</Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader textAlign="center">Modify Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <Text>Name</Text>
                            <Input value={userDetails.name} onChange={(e) => {
                                setUserDetails({ ...userDetails, name: e.target.value })
                            }} />
                            <Text>Email</Text>
                            <Input value={userDetails.email} onChange={(e) => {
                                setUserDetails({ ...userDetails, email: e.target.value })
                            }} />
                            <Text>Number</Text>
                            <Input value={userDetails.number} onChange={(e) => {
                                setUserDetails({ ...userDetails, number: e.target.value })
                            }} />
                            <Text>Status</Text>
                            <Select placeholder='Status' value={userDetails.status} onChange={(e) => {
                                setUserDetails({ ...userDetails, status: e.target.value })
                            }}>
                                <option value='user'>User</option>
                                <option value='employee'>Employee</option>
                            </Select>
                        </Stack>

                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                        <ModiyUserButton modifyuser={modifyuser} status={userDetails.status} />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModifyUser