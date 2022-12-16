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
function AddUser() {
    const { isOpen, onOpen, onClose } = useDisclosure()


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
                            <Input />
                            <Text>Email</Text>
                            <Input />
                            <Text>Number</Text>
                            <Input  />
                            <Text>Status</Text>
                            <Select placeholder='Status'>
                                <option value='option2'>User</option>
                                <option value='option3'>Employee</option>
                            </Select>
                        </Stack>

                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                 <Button colorScheme='blue'  >
                            Confirm Change
                        </Button>

                        
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default AddUser