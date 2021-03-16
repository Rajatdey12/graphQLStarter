const books = [
    { id: 1, name: 'harry potter and soccerer stone', authorid: 1},
    { id: 2, name: 'harry potter and Chamber of secrets', authorid: 2},
    { id: 3, name: 'harry potter and goblet of fire', authorid: 3},
    { id: 4, name: 'harry potter and Prisoner of Azkaban', authorid: 2},
    { id: 5, name: 'harry potter and Half blood prince', authorid: 1}
]

const authors = [
    {Aid: 1, AuthName: 'J.K. Rowlings'},
    {Aid: 2, AuthName: 'J.K. Wellings'},
    {Aid: 3, AuthName: 'daniel Redcliff'}
]


module.exports.booksList = books;
module.exports.authorList = authors;