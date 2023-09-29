import { Menu, MenuButton, Text, Button, Stack } from "@chakra-ui/react";
import { LinkItemProps, FilterItemData } from "../util/iconData";
import { AiOutlineFileText } from "react-icons/ai";
import { ChevronDownIcon } from "@chakra-ui/icons";

const FilterItem = () => {
  return (
    <>
      <Stack direction={"column"} padding={'.5rem'}>
          {FilterItemData.map((item: LinkItemProps) => (
            <Menu key={item.name}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg={'white'} borderRadius={'none'} padding={'2rem'} >
                <Stack direction={'row'}>
                  <AiOutlineFileText />
                  <Text fontWeight={"medium"} > {item.name}</Text>
                </Stack>
              </MenuButton>
            </Menu>
          ))}
      </Stack>
    </>
  );
};

export default FilterItem;
