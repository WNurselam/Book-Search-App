import { createContext, useContext, useState } from "react";
import { fetchApi } from "../api/fetchApi"; // immport api
import { useQuery } from "react-query"; // import react-query


export const BookContext = createContext(); // create a context
export const useBookContext = () => useContext(BookContext); // use the this context

const BookProvider = ({ children }) => {
    const [query, setQuery] = useState("query") // state of being searched
    const [books, setBooks] = useState([]);

    const { isLoading, error, data } = useQuery(  // including the api function in react query
        ['books', query],
        () => fetchApi(query),
        { enabled: !!query } 
        //If there is no query, don't make a request this way, we don't make an unnecessary request
      );

    //console.log(query)


     // context states
    const values = {
        query,
        setQuery,
        isLoading,
        error,
        books,
        setBooks,
        data,

    }
    return (
        <BookContext.Provider value={values}>
            {children}
        </BookContext.Provider>
    )

}

export default BookProvider;