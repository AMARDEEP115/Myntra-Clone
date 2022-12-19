
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'
import { useRef } from 'react'
const initialuser = {
    id: null,
    name: "",
    password: "",
    email: "",
    number: null,
    status: ""
}
function Logout() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const toast=useToast()

   const  setLogout=()=>{
    localStorage.setItem("user",JSON.stringify(initialuser))

    }

    return (
        <>
            <span  onClick={onOpen}>
                Logout
            </span>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Customer
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You Want's to Logout.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={()=>{
                                onClose()
                                setLogout()
                                toast({
                                    title: 'Logged Out.',
                                    description: "We've Logged Out.",
                                    status: 'error',
                                    duration: 5000,
                                    isClosable: true,
                                  })
                            }} ml={3}>
                               Logout
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}
export default Logout