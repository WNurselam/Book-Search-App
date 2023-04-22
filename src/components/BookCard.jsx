import { Flex, Grid, Card, CardBody, Image, Stack, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowForwardIcon } from '@chakra-ui/icons'

//Printing to the screen with the prop taken from the BookList
const BookCard = ({ book }) => {
    return (
        <Flex direction="row">
            <Grid templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
            ]}
                gap={7}></Grid>
            <Card m="4" mb="6"
                _hover={{
                    boxShadow: "10px 10px 47px 0px rgba(99, 99, 99, 0.2)",
                    transition: "400ms",

                }}
                width="200px" height="270px"
            >
                <CardBody>
                    <Image
                        src={book.volumeInfo.imageLinks?.thumbnail}
                        objectFit='cover' boxSize='200px'
                        borderRadius="sm"

                    />
                    <Stack>
                        <Heading size="xs" mt="1">
                            {book.volumeInfo.title.slice(0, 10)}
                        </Heading>
                    </Stack>
                </CardBody>
                <Button _hover={{
                    background: "#4FD1C5",
                    transition: "800ms",
                }} ><Link to={`/detail/${book.id}`}><ArrowForwardIcon boxSize={6} /> </Link></Button>

            </Card>
        </Flex >
    )
}

export default BookCard