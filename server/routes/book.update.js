const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// create PUT route
router.put('/:id', (req, res) =>{
    const itemToUpdate = req.params.id;
    console.log('book updated to read', itemToUpdate);
    // make queryString target isRead column and make boolean true
    const queryString = `UPDATE "books" SET "isRead"=TRUE WHERE "books".id = $1;`;

    pool.query(queryString, [itemToUpdate])
    .then( response => {
        console.log(response);
        console.log(`we read book with id ${itemToUpdate}`);
        res.sendStatus(200); // confirms on client side that info updated
    }).catch((err) => {
        console.log('error in server', err);
        res.sendStatus(500); // shows error on this server route
    })

})

module.exports = router;