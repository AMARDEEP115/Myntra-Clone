import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text, Button, useDisclosure, Input, Stack, Select, Textarea
} from '@chakra-ui/react'
const initialProduct={
    
}
function AddNewProduct() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Text onClick={onOpen} >Add New Product</Text>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">Add Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <Text>Image</Text>
                            <Input  />
                            <Text>Title</Text>
                            <Input />
                            <Text>Category</Text>
                            <Input  />
                            <Text>Description</Text>
                            <Textarea/>
                            <Text>Price</Text>
                            <Input/>
                            <Text>Section</Text>
                            <Select placeholder='Status'>
                                <option value='men'>Mens </option>
                                <option value='women'>Womens</option>
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
export default AddNewProduct