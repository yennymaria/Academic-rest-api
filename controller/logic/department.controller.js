const departmentDto = require("../../model/dto/department.dto");
const facultyDto = require("../../model/dto/faculty.dto");
const config = require("config");
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");
const dto = require("../../model/dto/department.dto");
const { json } = require("express");

exports.createDepartment = (req, res, next) => {
    
    let dpt = {
        code: req.body.code,
        name: req.body.name,
        named: req.body.named,
        faculty_id: req.params
    };
    departmentDto.create(dpt, (err, data) => {
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

exports.updateDepartment = (req, res, next) => {
    let dpt = {
        code: req.body.code,
        name: req.body.name,
        named: req.body.named,
        faculty_id: req.params

    };
    departmentDto.update({_id: req.body.id }, dpt, (err, data) => {
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
   
    departmentDto.getAll({}, (err, data) => {
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

exports.getByCode = (req, res, next) => {
   
    departmentDto.getByCode({code: req.params.code}, (err, data) => {
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

exports.deleteDepartment =()=>{
    departmentDto.delete({_id: req.body.id}, (err, data) => {
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