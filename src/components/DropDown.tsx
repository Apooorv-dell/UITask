import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
  Text,
  Badge,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MenuData, MenuType } from "../util/MenuData";
interface Props {
  onSelectedOpportunity: (opportunity: MenuType) => void;
  selectedOpportunity: MenuType | null;
}
const DropDown = ({ onSelectedOpportunity, selectedOpportunity }: Props) => {
  return (
    <>
      <Menu>
        <MenuButton
          bg={"white"}
          as={Button}
          rightIcon={<ChevronDownIcon color={"1D4ED8"} />}
        >
          <Text color={"#1D4ED8"} ml={"10px"} paddingRight={"4em"}>
            {selectedOpportunity?.title || "Opportunity Browsing"}
          </Text>
        </MenuButton>
        <MenuList width={"300px"}>
          {MenuData.map((data: MenuType) => (
            <MenuItem 

              onClick={() => onSelectedOpportunity(data)}
              display={"flex"}
              justifyContent={"space-between"}
              padding={"1em"}
            >
              <Text > {data.title} </Text>
              <Badge
                fontSize={"14px"}
                borderRadius={"10"}
                px={"2"}
                fontWeight={"light"}
              >
                {data.count.toString()}ʼ
              </Badge>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default DropDown;
