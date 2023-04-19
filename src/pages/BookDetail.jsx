import React from 'react'
import { useQuery } from 'react-query'
import { fetchDetailApi } from '../api/fetchDetailApi'
import { useParams } from 'react-router'
import { Spinner, Box,Card,Image,Stack,CardBody,Heading,Text,Button,CardFooter, Flex } from '@chakra-ui/react'

const BookDetail = () => {

  const { id } = useParams();

  const { isLoading, error, data } = useQuery(['BookDetail', id], () => fetchDetailApi(id))

  if (isLoading) {
    return (
      <Box p="10" >
        <Spinner />
        data is loading....
      </Box>
    );
  }

  //console.log(data);
  return (
    <Card
  direction={{ base: "column", sm: "row" }}
  overflow="hidden"
  variant="outline"
  mt="3"
  boxShadow="md"
>
  <Image
    objectFit="cover"
    maxW={{ base: "100%", sm: "200px" }}
    src={data?.volumeInfo.imageLinks?.medium}
    alt={data?.volumeInfo.title}
  />

  <Stack ml={{ sm: "3" }} mt={{ base: "3", sm: "0" }}>
    <CardBody>
      <Heading size="md">{data?.volumeInfo.title}</Heading>

      <Text py="2">{data?.volumeInfo.description}</Text>
    </CardBody>
    <CardFooter>
      <Text mr="2">Page: {data?.volumeInfo.pageCount}</Text>
      <Text>Author: {data?.volumeInfo.authors?.join(", ")}</Text>
    </CardFooter>
  </Stack>
</Card>

)}

export default BookDetail