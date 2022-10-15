const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

const getTheTitles = function(books) {
    const result = books.map(book => book.title)
    return result
};
getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
