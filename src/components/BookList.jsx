import React from 'react'
import { useBookContext } from '../context/BookContext'
import { Box } from '@chakra-ui/react';

const BookList = () => {
const { books } = useBookContext();

///console.log(books);

  return (
    <Box>
      {
        books?.map((book) => (
          <Box key={book.id}>{book.volumeInfo.title}</Box>
        ))
      }
      </Box>
  )
}

export default BookList