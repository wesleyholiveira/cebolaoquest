import { readFileSync } from 'fs'
import express from 'express'

const app = express()

app.get('/uploads/:filename', (req, res) => {
    const { filename } = req.params

    try {
        if (filename) {
            return res.end(readFileSync(`./uploads/${filename}`))
        }
    } catch(err) {
        console.log(err)
        return res.status(404).end()
    }
})

module.exports = app