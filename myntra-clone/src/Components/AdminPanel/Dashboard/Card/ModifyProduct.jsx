import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text, Button, useDisclosure, Input, Stack, Textarea
} from '@chakra-ui/react'
function ModifyProduct({el}) {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Button onClick={onOpen} variant='solid' colorScheme='blue'>Modify</Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">Modify Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <Text>Title</Text>
                            <Input value={el.title} />
                            <Text>Categorie</Text>
                            <Input  value={el.categories} />
                            <Text>Price</Text>
                            <Input  value={el.price}/>
                            <Text>Description</Text>
                            <Textarea   value={el.description} />
                        </Stack>

                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                        <Button colorScheme='blue' >
                            Confirm Change
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModifyProduct