import { Flex, Heading , Text} from "@chakra-ui/react"


const FilterHeader = () => {
  return (
      <Flex justifyContent={'space-between'} padding={'1.3rem'} bg={'white'}>
        <Heading size='sm'>
            Filters
        </Heading>
        <Text>
            0 Selected
        </Text>
      </Flex>
  )
}

export default FilterHeader