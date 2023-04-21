import { Button, Heading, Text,Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import gif404 from '../../public/404.gif'

//Handling 404 page not found in React Router
function Page404() {
    return (
        <Text >
            <Heading m={10}  size='4xl' >
                Page not found
            </Heading>  
            <Image margin="auto" display="block" src={gif404}/>
            <Button colorScheme='green'><Link to="/">Back To Homepage </Link></Button>
        </Text>
    )
}

export default Page404