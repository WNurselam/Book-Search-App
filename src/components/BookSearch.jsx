import React from 'react'
import { Search2Icon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useBookContext } from '../context/BookContext'

const BookSearch = () => {
  const {setQuery,setBooks,data,query} = useBookContext(); //context data


  const handleSubmit =  async (e) => {
    e.preventDefault();
    if(query){
      await setBooks(data?.items || [])
    } 
  }

  // useEffect(() => {
  //   if (books.length > 0) {
  //     console.log(books);
  //   }
  // }, [books.length])

  //console.log(books)
  return (
    <Box bgImage="url('https://cdn.pixabay.com/photo/2016/07/31/16/24/banner-1559400__340.jpg')"
      bgSize="cover"
      bgPosition="center"
      h="200px"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <Box w={{ base: "80%", md: "50%", lg: "50%" }} >
      <form onSubmit={handleSubmit}>
        <InputGroup >
          <InputLeftElement pointerEvents="all">
            <Search2Icon onClick={handleSubmit} mt="3" />
          </InputLeftElement >
          <Input 
          onChange={(e) =>setQuery(e.target.value)}
          background="green.100" 
          size="lg" type="text" 
          placeholder="Search books..."   
          />
        </InputGroup>
      </form>
      </Box>
    </Box>
  )
}

export default BookSearch