
const controller = require("../controller/logic/teacher.controller");

module.exports = (app)=>{
    console.log("loading routes of teacher");
    app.get("/teacher", (req, res, next)=>{
        controller.getAll(req, res, next);
    });

    app.get("/teacher/bydocument/:document", (req, res, next)=>{
        console.log("getting teacher by document");
        controller.getByDocument(req, res, next);
    });
    
    app.post("/teacher/:_id", (req, res, next)=>{
        controller.createTeacher(req, res, next);
    });

    app.put("/teacher/:_id", (req, res, next)=>{ 
        controller.updateTeacher(req, res, next);
    });
    
    app.delete("/teacher", (req, res, next)=>{
        controller.deleteTeacher(req, res, next);
    });
}