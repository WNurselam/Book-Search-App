import React from 'react'
import { useBookContext } from '../context/BookContext'
import { Box, Flex, Spinner } from '@chakra-ui/react';
import BookCard from './BookCard';

const BookList = () => {
  const { books, isLoading, error } = useBookContext();  //Context api steates

  //console.log(books);
  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" m="10" >
        <Spinner size="lg"
          thickness='4px'
          speed='0.50s'
          emptyColor='gray.200'
          color='blue.500' />
        <Box p="3">Books is loading...</Box>
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

  return (
    <Flex justifyContent="space-evenly" flexWrap="wrap" mb="6" mt="5" >
      {
        books.length > 0 ? books.map((book) => (
          <BookCard key={book.id} book={book} />
        )) : <Box fontSize="lg" mt="24">You haven't searched for any books yet!</Box>
      }
    </Flex>
  )
}

export default BookList
