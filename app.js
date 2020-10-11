const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({
    extended: true
});

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAdress");
app.use("*", ipFn);

/**borrar 2 lineas para que tengas
 *el token luego volver a ponerlas y 
 copiar token en header */
/**tkfn = require("./middleware/verifyToken");
app.use(tkfn);*/

app.get("/", (req, res, next)=>{
    res.send("welcome to academic rest api");
});

const studentRoutes = require("./routes/student.routes");
studentRoutes(app);

const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app);

const courseRoutes = require("./routes/course.routes");
courseRoutes(app);

const periodRoutes = require("./routes/period.routes");
periodRoutes(app);

const userRoutes = require("./routes/user.routes");
userRoutes(app);

const facultyRoutes = require("./routes/faculty.routes");
facultyRoutes(app);

const departmentRoutes = require("./routes/department.routes");
departmentRoutes(app);

app.listen(port, ()=>{
    console.log("Server is running...")
});