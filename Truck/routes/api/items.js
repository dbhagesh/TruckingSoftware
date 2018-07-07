const express = require('express');
const router = express.Router();


const Item = require('../../models/Item');

// @route GET api/items
// @desc GET All Items
// @access Public
router.get('/',(req,res)=>{
   Item.find()
     .then(items => res.json(items));

});
// @route POST api/items
// @desc POST All Items
// @access Public
/*router.post('/',(req,res)=>{
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item));
 
 });

 router.post('/', (req, res) => {
    const newItem = new Item({vehiclenumber: req.body.vehiclenumber,
    drivername: req.body.drivername,
  driverphonenumber: req.body.driverphonenumber});
    newItem.save()
      .then(item => 
        res.json(item),
        res.send(console.log("Fucking Working"))
      )
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });
 // @route DELETE api/items/:id
// @desc DELETE a Items
// @access Public
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
 });
 */
module.exports = router;