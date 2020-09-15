const connection = require("../db/mysql_connection");


//@desc 즐겨찾기 등록
//@route POST api/v1/favorite
//@parameters favorite

exports.addFavorite = async (req, res, next) => {
    let favorite = req.body.favorite;
    let user_id = req.user.id;

}
