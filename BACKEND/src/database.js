import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/angular-mongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('mongodb is connected'))
    .catch(err => console.log('mongodb error: ' + err));