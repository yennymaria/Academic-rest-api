
const controller = require("../controller/logic/faculty.controller");

module.exports = (app)=>{
    console.log("loading routes of faculty");
    app.get("/faculty", (req, res, next)=>{
        controller.getAll(req, res, next);
    });

    app.get("/faculty/:_id", (req, res, next)=>{
        console.log("getting faculty by id");
        controller.getById(req, res, next);
    });

    app.post("/faculty", (req, res, next)=>{
        controller.createFaculty(req, res, next);
    });

    app.put("/faculty", (req, res, next)=>{ 
        controller.updateFaculty(req, res, next);
    });
    
    app.delete("/faculty", (req, res, next)=>{
        controller.deleteFaculty(req, res, next);
    });
}