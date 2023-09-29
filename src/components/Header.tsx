import { Heading, Text ,Box} from "@chakra-ui/react";
interface Props{
  title: String,
  text:String

}

const Header = ({title,text}:Props) => {
  return (
    <>
    <Box  width={'385px'}>
    <Heading as="h1" fontSize={'20px'} color={'#1D4ED8'}>{title}</Heading>
      <Text fontSize='md'>
        {text}
      </Text>
    </Box>


    </>
  );
};

export default Header;
