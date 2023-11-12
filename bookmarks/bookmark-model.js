import mongoose from 'mongoose';
import bookmarkSchema from './bookmark-schema.js'
const bookmarkModel = mongoose
    .model('BookmarkModel', bookmarkSchema);
export default bookmarkModel;