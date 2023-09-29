import { Input, InputGroup, InputLeftElement, HStack } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { PiWarningCircleLight } from "react-icons/pi";

const SearchBox = () => {
  return (
    <>
      <HStack mx='32px' mb={'24px'}

        padding={"1rem"}
        borderRadius={"10px"}
        p={"16px"}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none" margin={".2em"}>
            <Search2Icon color="gray.700" />
          </InputLeftElement>

          <Input
            variant="flushed"
            placeholder="Serach by name, edu, exp or #tag"
            size="lg"
          />
        </InputGroup>
        <PiWarningCircleLight />
      </HStack>
    </>
  );
};

export default SearchBox;
