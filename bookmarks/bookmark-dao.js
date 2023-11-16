import bookmarkModel from "./bookmark-model.js";
export const findBookMarkById = (userid) => bookmarkModel.find({ user_id: userid });
export const findBookMark = () => bookmarkModel.find();
export const createBookMark = (bookmark) => bookmarkModel.create(bookmark);
export const deleteBookMark = (bid) => bookmarkModel.deleteOne({ _id: bid });
