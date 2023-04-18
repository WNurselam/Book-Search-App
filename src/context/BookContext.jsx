import { createContext, useContext, useState } from "react";
import { fetchApi } from "../api/fetchApi";
import { useQuery } from "react-query";


export const BookContext = createContext();
export const useBookContext = () => useContext(BookContext);

const BookProvider = ({ children }) => {
    const [query, setQuery] = useState("query")
    const [books, setBooks] = useState([]);

    const { isLoading, error, data } = useQuery(
        ['books', query],
        () => fetchApi(query),
        { enabled: !!query }
      );

    //console.log(query)

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