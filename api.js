const baseUrl = "https://openlibrary.org/search.json";

export async function searchBar (query) {
    try {
        const response = await fetch (`${baseUrl}?q=${query}`);
        if(!response.ok) throw new Error("couldnt find book");
        const data = await response.json();
        return data.docs;
        
    } catch (error) {
        console.eror("Couldnt find book", error);
        return[];
    };
};