import { Flex, Grid, Card, CardBody, Image, Stack, CardFooter, Divider, Center, Heading, background, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
    return (
        <Flex direction="row"  >
            <Grid templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
            ]}
                gap={7}></Grid>
            <Card m="4"
                
                _hover={{
                    boxShadow: "10px 10px 47px 0px rgba(99, 99, 99, 0.2)",
                    transition: "400ms",

                }}
                width="200px" height="270px"
            >
                <CardBody>
                    <Link to={`/detail/${book.id}`}>
                        <Image
                            src={book.volumeInfo.imageLinks?.thumbnail}
                            objectFit='cover' boxSize='200px'

                        />
                    </Link>
                    <Stack>
                        <Heading size="xs" mt="1">
                            {book.volumeInfo.title.slice(0, 10)}
                        </Heading>
                    </Stack>
                </CardBody>
            </Card>
        </Flex >
    )
}

export default BookCard