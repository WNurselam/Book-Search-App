import React from 'react'
import { useBookContext } from '../context/BookContext'
import { Box,Flex,Spinner } from '@chakra-ui/react';
import BookCard from './BookCard';

const BookList = () => {
const { books,isLoading } = useBookContext();

///console.log(books);
if(isLoading){
  return (
    <Box  p="10" >
      <Spinner  />
      data is loading....
    </Box>
  );
}

  return (
    <Flex justifyContent="space-evenly" flexWrap="wrap">
      {
          books.length > 0 ? books.map((book) => (
          <BookCard key={book.id}  book={book}/>
        )):<Box mt="24">You haven't searched for any books yet!</Box>
      }
      </Flex>
  )
}

export default BookList

//<Box key={book.id}>{book.volumeInfo.title}</Box>