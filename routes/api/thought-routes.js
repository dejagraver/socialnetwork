const router = require('express').Router();
const {getAllThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, deleteReaction} = require('../../controllers/thought-controller');

//api/thoughts
//api/thoughts/:id
//api/thoughts/:thoughtId/reactions
//api/thoughts/:thoughtId/reactions/:reactionId

router
.route('/')
.get(getAllThoughts)
.post(createThought);

router
.route('/:id')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router
.route('/:thoughtId/reactions')
.put(addReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;