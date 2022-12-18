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
import { useState } from 'react'
import ModifyProductButton from './Buttons/ModifyProductButton'
function ModifyProduct({el}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [productsDetails,setProductDetails]=useState({...el})


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
                            <Input value={productsDetails.title}  onChange={(e)=>{
                                setProductDetails({...productsDetails,title:e.target.value})
                            }} />
                            <Text>Categorie</Text>
                            <Input  value={productsDetails.categories}  onChange={(e)=>{
                                setProductDetails({...productsDetails,categories:e.target.value})
                            }}  />
                            <Text>Price</Text>
                            <Input  value={productsDetails.price}  onChange={(e)=>{
                                setProductDetails({...productsDetails,price:e.target.value})
                            }} />
                            <Text>Description</Text>
                            <Textarea   value={productsDetails.description}  onChange={(e)=>{
                                setProductDetails({...productsDetails,description:e.target.value})
                            }}  />
                        </Stack>

                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                        <ModifyProductButton productsDetails={productsDetails} />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModifyProduct