import BookCard from "../BookCard";
import useGetCategoryBooks from "../../hooks/GetCategoryBooksHook";

export default function Books({ categoryId }) {
    const { books } = useGetCategoryBooks(categoryId);

    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-8">
            {
                books.map((book) => {
                    return (
                        <BookCard key={book.id} book={book} />
                    )
                })
            }
        </div>
    )
}