import { Box, Text, HStack } from "@chakra-ui/react";

interface Props {
  tagArray: String[];
}

const HashTagList = ({ tagArray }: Props) => {
  return (
    <>
      <Box py={"8px"}>
        <HStack fontSize={"sm"}>
          {tagArray.map((tag: String) => (
            <Text  color={"#1D4ED8"}>{tag}</Text>
          ))}
        </HStack>
      </Box>
    </>
  );
};

export default HashTagList;
