import {List,ListIcon,ListItem,Center,Button} from "@chakra-ui/react";
import {LinkItems, LinkItemProps} from "../util/iconData";
import {BiLogoGooglePlusCircle} from 'react-icons/bi'

const SideNav = () => {


  return (
    <>
      <Center >
        <List margin={"24px"}>
          <Center width={"48px"} height={"48px"} mb={"32px"}>
            <ListIcon as={BiLogoGooglePlusCircle} boxSize={"24px"} mb={"32px"} />
          </Center>
          {LinkItems.map((link: LinkItemProps) => (
            <Center key={link.name} width={"48px"} height={"48px"} mb={"24px"}  as={Button} bg={'white'}>
              <ListItem  >
                <ListIcon as={link.icon} boxSize={"24px"} padding={"auto"}  />
        
              </ListItem>
            </Center>
          ))}
            </List>
      </Center>
    </>
  );
};

export default SideNav;
