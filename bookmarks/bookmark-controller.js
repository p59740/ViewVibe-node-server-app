import * as bookmarkDao from '../bookmarks/bookmark-dao.js'



const findBookmarksByUserId = async (req, res) => {
    const userid = req.params.uid;
    const bookmarks = await bookmarkDao.findBookMarkById(userid)
    res.json(bookmarks);
}
const findBookmarks = async (req, res) => {
    const bookmarks = await bookmarkDao.findBookMark()
    res.json(bookmarks);
}

const createBookmarks = async (req, res) => {
    const newBookmark = req.body;
    const insertBookmark = await bookmarkDao.createBookMark(newBookmark)
    res.json(insertBookmark);
}

const deleteBookmarks = async (req, res) => {
    const bookmarkId = req.params.bid;
    const status = await bookmarkDao.deleteBookMark(bookmarkId)
    res.json(status);
}

export default (app) =>{
    app.get('/bookmark/',findBookmarks);
    app.get('/bookmark/:uid',findBookmarksByUserId);
    app.post('/bookmark/',createBookmarks);
    app.delete('/bookmark/:bid',deleteBookmarks);
}