import mongoose from 'mongoose';
const schema = mongoose.Schema({
           user_id: String,
           imdbID: String,
            title: String,
            Poster: String,
       }, {collection: 'bookmarks'});
export default schema;