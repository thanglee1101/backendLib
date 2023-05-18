const Book = require("../model/book");

class BookController {
    async getAllBook(req, res, next) {
        try {
            const listBooks = await Book.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            res.status(200).json({
                status: "Success",
                data: listBooks
            })
        } catch (error) {
            next(error)
        }
    }
    async getOneBookById(req, res, next) {
        try {
            const bookId = req.params.id
            const book = await Book.findOne({ where: { id: bookId } })
            if (!book) {
                res.status(400).json({
                    status: "Fail",
                    message: "Don't found book"
                })
            }
            res.status(200).json({
                status: "Success",
                data: book
            })
        } catch (error) {
            next(error)
        }
    }
    async addNewBook(req, res, next) {
        try {
            const { tittle, author, description, release_date, numberOfpages, categoryId } = req.body
            if (!tittle) {
                res.status(400).json({
                    status: "fail",
                    message: "Tittle is required"
                })
            }
            if (!author) {
                res.status(400).json({
                    status: "fail",
                    message: "author is required"
                })
            }
            if (!release_date) {
                res.status(400).json({
                    status: "fail",
                    message: "release_date is required"
                })
            }

            const newBook = await Book.create({
                tittle: tittle,
                author: author,
                description: description,
                release_date: release_date,
                numberOfpages: numberOfpages,
                categoryId: categoryId
            })
            if (!newBook) {
                res.status(401).json({
                    status: "fail"
                })
            }
            res.status(201).json({
                status: "Success"
            })
        } catch (error) {
            next(error)
        }
    }
    async updateBook(req, res, next) {
        try {
            const { bookCode, tittle, author, description, release_date, numberOfpages, categoryId } = req.body
            if (!bookCode) {
                res.status(400).json({
                    status: "fail",
                    message: "id is required"
                })
            }
            if (!tittle) {
                res.status(400).json({
                    status: "fail",
                    message: "Tittle is required"
                })
            }
            if (!author) {
                res.status(400).json({
                    status: "fail",
                    message: "author is required"
                })
            }
            if (!release_date) {
                res.status(400).json({
                    status: "fail",
                    message: "release_date is required"
                })
            }
            const existBook = await Book.findOne({ where: { bookCode: bookCode } })
            if (!existBook) {
                res.status(401).json({
                    status: "fail",
                    message: "Book not found"
                })
            }
            const updateBook = await Book.update({
                tittle: tittle,
                author: author,
                description: description,
                release_date: release_date,
                numberOfpages: numberOfpages,
                categoryId: categoryId
            })
            if (!updateBook) {
                res.status(401).json({
                    status: "fail"
                })
            }
            res.status(201).json({
                status: "Success"
            })
        } catch (error) {
            next(error)
        }
    }
    async deletebook(req, res, next) {
        try {
            const bookCode = req.body.bookCode
            if (!bookCode) {
                res.status(400).json({
                    status: "fail",
                    message: "Bookcode is required"
                })
            }
            const existBook = await Book.findOne({ where: { bookCode: bookCode } })
            if (!existBook) {
                req.status(400).json({
                    status: "fail",
                    message: "book not found"
                })
            }
            await existBook.destroy()
            res.status(200).json({
                status: "Success"
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = new BookController