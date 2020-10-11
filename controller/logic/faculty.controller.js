const facultyDto = require("../../model/dto/faculty.dto");
const config = require("config");

exports.createFaculty = (req, res, next) => {
    let faculty = {
        code: req.body.code,
        namef: req.body.namef,
        named: req.body.named

    };
    facultyDto.create(faculty, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json({
            info: data
        });
    });
};

exports.updateFaculty = (req, res, next) => {
    let faculty = {
        code: req.body.code,
        namef: req.body.namef,
        named: req.body.named
    };
    facultyDto.update({ _id: req.body.id }, faculty, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json({
            info: data
        });
    });
};

exports.getAll = (req, res, next) => {

    facultyDto.getAll({}, (err, data) => {
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

exports.getById = (req, res, next) => {
   
    facultyDto.getById({_id: req.params}, (err, data) => {
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

exports.deleteFaculty = () => {
    facultyDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
};