
//Take in a filter string and an array of search results; return the filtered text.
export const searchFilter = (filterString, ...searchResults) => {
    //Only try this if the length is < 100 for now
    if(searchResults.length() < 100) {
        return searchResults.filter( searchResults => {
            return searchResults.toLowerCase().includes(filterString.toLowerCase())
          })
    }
}