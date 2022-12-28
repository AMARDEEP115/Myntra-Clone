import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import MenuIcon from '@mui/icons-material/Menu';

function NavSlider() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>



            <Button variant='ghost' onClick={onOpen}>
             <MenuIcon/>
            </Button>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default NavSlider;
