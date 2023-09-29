import { Badge, HStack } from "@chakra-ui/react";

interface Props {
  badgeList: String[];
}

const SkillBadge = ({badgeList}:Props) => {
  return (
    <>
      <HStack>
{badgeList.map((skill)=>
        <Badge 

fontWeight={'500'}
        fontSize={"8px"}
bg={'teal.50'}
        colorScheme={'#037092'}
        borderRadius={"10px"}
        px={"10px"}
        py={'5px'}
      >
        {skill}
      </Badge>
)}
      </HStack>
    </>
  );
};

export default SkillBadge;
