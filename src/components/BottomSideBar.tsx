import { VStack, Center, Icon, Avatar , Button } from "@chakra-ui/react";
import { PiGearSixLight } from "react-icons/pi";


const BottomSideBar = () => {
  return (
    <VStack mt={'100%'} pb={'24px'} >
      <Center width={"48px"} height={"48px"} mb={"24px"} as={Button} bg={'white'}>
        <Icon as={PiGearSixLight} boxSize={"24px"}  m={'auto'} />
      </Center>
      <Center width={"48px"} height={"48px"} >
       <Avatar name="ap" size={'sm'} bg={'tomato'}   />
     
      </Center>
     
    </VStack>
  );
};

export default BottomSideBar;
