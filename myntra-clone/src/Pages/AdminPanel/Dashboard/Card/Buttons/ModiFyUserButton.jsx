import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    AlertDialogCloseButton,
    useToast,
} from '@chakra-ui/react'

const ModiyUserButton = ({ status, modifyuser }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()
    

    return (
        <>
            <Button onClick={onOpen}>Confirm Change</Button>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to discard all of your notes? 44 words will be
                        deleted.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        {status === "admin" ? <Button colorScheme='red' isDisabled ml={3} ref={cancelRef} onClick={() => {
                            toast({
                                title: 'User Details Updeted',
                                description: "We've created your account for you.",
                                status: 'sucess',
                                duration: 3000,
                                isClosable: true,
                            })
                        }}> Can't </Button> :

                            <Button colorScheme='red' ml={3} ref={cancelRef} onClick={() => {
                                modifyuser()
                                toast({
                                    title: 'User Details Updeted',
                                    description: "We've created your account for you.",
                                    status: 'sucess',
                                    duration: 3000,
                                    isClosable: true,
                                })

                            }}> Yes </Button>}
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default ModiyUserButton