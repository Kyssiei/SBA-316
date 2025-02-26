
import {searchBar} from "./api.js";

async function searchBooks() {
    const books = await searchBar("harry potter")
    console.log(books);
}

searchBooks();
