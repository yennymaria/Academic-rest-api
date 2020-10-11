const userDto = require("../../model/dto/user.dto");
const config = require("config");
const helper = require("../helpers/general.helper");

exports.login = (req, res, next) => {

    userDto.login({ userName: req.body.userName }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        if (data.length > 0) {
            let pass = helper.DescryptPassword(data[0].password);
            console.log("password bd:" + pass);
            console.log(req.body.password);
            if (req.body.password === pass) {
                tk = helper.GenerateToken(data[0] );
                console.log(tk);
                return res.status(200).json({
                    token: tk
                });
            } else {
                return res.status(400).json({
                    info: "Username or Password are incorrect"
                });
            }

        }
    });
};

exports.getAll = (req, res, next) => {

    userDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json({
            info: data
        });
    });
};
