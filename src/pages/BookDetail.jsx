import React from 'react'
import { useQuery } from 'react-query'
import { fetchDetailApi } from '../api/fetchDetailApi'
import { useParams } from 'react-router'
import { Spinner, Box, Card, Image, Stack, CardBody, Heading, Text, Button, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowBackIcon, WarningTwoIcon, InfoIcon } from '@chakra-ui/icons'


const BookDetail = () => {

  const { id } = useParams();  //id capture by click with router
  
  //Throwing request based on react query id parameter
  const { isLoading, error, data } = useQuery(['BookDetail', id], () => fetchDetailApi(id))

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" m="10" >
        <Spinner size="lg"
          thickness='4px'
          speed='0.50s'
          emptyColor='gray.200'
          color='blue.500' />
        <Box p="3">Details is loading...</Box>
      </Flex>
    );
  }
  if (error) {
    return (
      <Flex justifyContent="center" alignItems="center" m="10" >
        <WarningTwoIcon w={10} h={10} />
        <Box p="3">An error has occurred...</Box>
      </Flex>
    );
  }

  //console.log(data);
  return (
    <Flex justifyContent="center" align="center"  >
      <Link to="/"><ArrowBackIcon color="blue.100" _hover={{ color: "blue.400", cursor: "pointer", transition: "0.5s" }}  
      w={{
        base:'6',
        md: '8',
        xl: '10',
      }}
      h={{
        base:'6',
        md: '8',
        xl: '10',
      }} 
      
      /></Link>
      <Card boxShadow="lg" maxW='800px' overflowY="hidden" 
            p={{ base: '0',
            md: '3',
            xl: '5',}}
      >
        <CardBody>
          <Flex direction={{
            base: 'column',
            md: 'row',
            xl: 'row',
          }} justifyContent='space-evenly'
            alignItems={{
              base: 'stretch',
              md: 'space-evenly',
              xl: 'space-evenly',
            }}
            gap="2" align="center">
            <Image
              src={data?.volumeInfo.imageLinks?.thumbnail}
              alt={data?.volumeInfo.title}
              borderRadius='md'
              boxShadow="lg"
            />

            <Stack textAlign="justify"  >
              <Text>
                <Text as="span" fontSize='1xl' fontWeight="700px" color="blue.300">Page: </Text>{data?.volumeInfo.pageCount}
              </Text>
              <Text ><Text as="span" color="blue.300">Date: </Text>{data?.volumeInfo.publishedDate}</Text>
              <Text >
                <Text as="span" color="blue.300">Author: </Text>{data?.volumeInfo.authors}
              </Text>
              <Text >
                <Text as="span" color="blue.300">Lanugage: </Text>{data?.volumeInfo.language.toUpperCase()}
              </Text>
            </Stack>
          </Flex>
          <Heading mt="5" size='md'>{data?.volumeInfo.title}</Heading>
          <Stack maxH="350px" overflowY="scroll" sx={{
            '&::-webkit-scrollbar': {
              width: '12px',
              borderRadius: '8px',
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            pr: "3"
          }} textAlign="justify" mt='3' spacing='3' >
            <Text color="gray.500" >
              {data?.volumeInfo.description ? data?.volumeInfo.description.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '') : <Text>Nothing description   <InfoIcon /></Text>}
            </Text>
          </Stack>
          <Button mt="4">
            <Link to={data?.volumeInfo.previewLink}><Text p="5" mr="2">Info Book Google</Text></Link>
          </Button>
        </CardBody>
      </Card>
    </Flex>

  )
}

export default BookDetail