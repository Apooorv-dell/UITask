import { Center, Button, Icon, HStack } from "@chakra-ui/react";
import { CallToActionItems, LinkItemProps } from "../util/iconData";

const CallToAction = () => {
  return (
    <>
      <HStack>
        {CallToActionItems.map((link: LinkItemProps) => (
          <Center
            key={link.name}
            width={"40px"}
            height={"40px"}
            as={Button}
            bg={"white"}
          >
            <Icon as={link.icon} boxSize={"24px"} />
          </Center>
        ))}

        <Button
          px={"16px"}
          py={"8px"}
          bg="#1D5ECD"
          color={"white"}
          variant={"solid"}
          fontWeight={"medium"}
        >
          Move to Video interview 1
        </Button>
      </HStack>
    </>
  );
};

export default CallToAction;
