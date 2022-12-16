import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text, Button, useDisclosure, Input, Stack
} from '@chakra-ui/react'
function ModifyUser({ el }) {
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
                            <Input value={el.name} />
                            <Text>Categorie</Text>
                            <Input value={el.email} />
                            <Text>Description</Text>
                            <Input value={el.number} />
                            <Text>Status</Text>
                            <Input />
                        </Stack>

                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                        {el.admin && <Button colorScheme='blue'  >
                            Confirm Change
                        </Button>}

                        {!el.admin && <Button colorScheme='blue'   >
                            Confirm Change
                        </Button>}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModifyUser