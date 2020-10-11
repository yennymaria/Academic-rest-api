
const controller = require("../controller/logic/department.controller");

module.exports = (app)=>{
    
    app.get("/department", (req, res, next)=>{
        controller.getAll(req, res, next);
    });

    app.get("/department/bycode/:code", (req, res, next)=>{
        console.log("getting student by code");
        controller.getByCode(req, res, next);
    });
    
    app.post("/department/:_id", (req, res, next)=>{
        controller.createDepartment(req, res, next);
    });

    app.put("/department/:_id", (req, res, next)=>{ 
        controller.updateDepartment(req, res, next);
    });
    
    app.delete("/student", (req, res, next)=>{
        controller.deleteStudent(req, res, next);
    });
}