const db = require('../models');
let isNew = false
let count = 0

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({}).then((workouts) => {
            res.json(workouts);
        });
    });

app.post('/api/workouts', (req, res) => {
        db.Workout.create({}).then((workouts) => {
            isNew = true
            res.json(workouts);
        });
    });

    app.put('/api/workouts/:id', (req, res) => {
        db.Workout.findByIdAndUpdate(
            { _id: req.params.id },
            { $push: { excercises: req.body } },
            { new: true, runValidators: true }
        ).then(function (workout){
            res.json(workout);
        });
    });

    app.get('/api/isNew', (req, res) => {
        res.json({isNew})
        isNeq = false
    });

    app.get('/api/workouts/range', function (req, res){
        db.Workout.find({}).then(function (workouts) {
            res.json(workouts);
        });
    });
};