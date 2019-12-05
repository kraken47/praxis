const Book = require('../../models/book.model')

class CreateBook {
    constructor(req) {
        (this.bookId = req.body.bookId),
        (this.tittle = req.body.tittle) ,
        (this.author = req.body.author), 
        (this.year = req.body.year),
        (this.publisher = req.body.publisher),
        (this.price = req.body.price),
        (this.stock = req.body.stock)
    }
    async exec() {
        try {
            let data = new Book({
                    bookId: this.bookId,
                    tittle: this.tittle,
                    author: this.author,
                    year: this. year,
                    publisher: this.publisher,
                    price: this.price,
                    stock: this.stock,
                    created_at: Date.now()
            }) 
            await data.save()
            return data
        } catch(err){
            throw err
        }
    }
}

class BookDetails {
    constructor(req){
        this.query = req.query
    }
    async exec() {
        try {
        let { bookId, tittle, author, year, publisher } = this.query
        let params = { deleted_at: null }
        if (tittle) {
            params.tittle = {$regex: tittle, $options: '$i'}
        } if (author) {
            paranms.author = author
        } if (bookId) {
            params.bookId = bookId
        } if (year) {
            params.year = year
        } if (publisher) {
            params.publisher = publisher
        }

        let newQuery = await Book.findOne(params).exec()
        return newQuery

        } catch(err){
            throw err
        }
    }
}

class AllBook {
    constructor(req){
        this.query = req.query
    }
    async exec() {
        try {
        let { bookId, tittle, author, year, publisher } = this.query
        let params = { deleted_at: null }
        if (tittle) {
            params.tittle = {$regex: tittle, $options: '$i'}
        } if (author) {
            paranms.author = author
        } if (bookId) {
            params.bookId = bookId
        } if (year) {
            params.year = year
        } if (publisher) {
            params.publisher = publisher
        }

        let newQuery = await Book.find(params).exec()
        return newQuery

        } catch(err){
            throw err
        }
    }
}

class UpdateBook {
    constructor(req) {
        (this.bookId = req.body.bookId),
        (this.tittle = req.body.tittle) ,
        (this.author = req.body.author), 
        (this.year = req.body.year),
        (this.publisher = req.body.publisher),
        (this.price = req.body.price),
        (this.stock = req.body.stock)
        (this.id = id)
    }
    async update() {
        try {
            let data = new Book({
                bookId: this.bookId,
                tittle: this.tittle,
                author: this.author,
                year: this. year,
                publisher: this.publisher,
                price: this.price,
                stock: this.stock,
                updated_at: Date.now()
            })
            let query = await Book.findByIdAndUpdate({ _id: this.id }, data, { new: true }).exec()
            return query

        } catch(err) {
            throw err
        }
    }
}

class DeleteBook {constructor(id) {
    this.id = id
}

async delete() {
    try {
        let query = await Book.findByIdAndUpdate({ _id: this.id }, { deleted_at: Date.now() }, { new: true }).exec()
        return query
    } catch(err){
        throw err
    }
}
}
module.exports = {
    CreateBook,
    AllBook,
    BookDetails,
    UpdateBook,
    DeleteBook
}