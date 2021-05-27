const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// creat route to target specific id
router.delete('/:id', (req,res) =>{
    // grabbing the id of the record to delete from the request params
    const itemToDelete = req.params.id;
    console.log('Item to delete...', itemToDelete)
    const queryString = `DELETE FROM "books" WHERE "books" .id = $1;`;
    pool.query(queryString, [itemToDelete])
    .then( response => {
        console.log(response);
        console.log(`we deleted book with id ${itemToDelete}`);
        res.sendStatus(200); // confirms on client side that info was deleted
    }).catch((err) => {
        console.log('error in server', err);
        res.sendStatus(500); // shows error on this server route
    })
})

module.exports = router;