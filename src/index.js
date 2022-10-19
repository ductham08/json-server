const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");
var cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({
    noCors: false,
});
server.db = router.db;

const rules = auth.rewriter({
    // Permission rules
    // users: 600,
    // messages: 640
});

const corsOptions = {
    origin: 'https://bee-navy.vercel.app',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

// You must apply the middlewares in the following order
app.use(cors());
server.use(rules);
server.use(auth);

server.use(middlewares);
server.use((req, res, next) => {

    /*Le Trong Dat*/
    // if (req.method === "POST") {
    //     req.body.createAt = Date.now();
    //     req.body.updateAt = Date.now();
    // } else if (req.method === "PATCH") {
    //     req.body.updateAt = Date.now();
    // }

    // Code new
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x - client - key, x - client - token, x - client - secret, Authorization ");
    next();
});

server.use("/api", router);
server.listen(8080, () => {
    console.log("JSON Server is running");
});