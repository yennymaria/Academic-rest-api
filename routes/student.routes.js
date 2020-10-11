
const controller = require("../controller/logic/student.controller");

module.exports = (app)=>{
    console.log("loading routes of student");
    app.get("/student", (req, res, next)=>{
        controller.getAll(req, res, next);
    });

    app.get("/student/bycode/:code", (req, res, next)=>{
        console.log("getting student by code");
        controller.getByCode(req, res, next);
    });
    
    app.post("/student", (req, res, next)=>{
        controller.createStudent(req, res, next);
    });

    app.put("/student", (req, res, next)=>{ 
        controller.updateStudent(req, res, next);
    });
    
    app.delete("/student", (req, res, next)=>{
        controller.deleteStudent(req, res, next);
    });
}