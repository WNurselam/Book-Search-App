import {Box, Text } from '@chakra-ui/react';
import { useBookContext } from '../context/BookContext';
import BookSearch from '../components/BookSearch';
import BookList from '../components/BookList';
const Home = () => {
  return (
    <Box>
      <BookSearch/>
      <BookList/>
    </Box>
  )
}

export default Home