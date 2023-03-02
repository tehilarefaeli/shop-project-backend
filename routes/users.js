
const userRouter = (app, fs) =>{
    const dataURL = './data/users.json';

    app.get('/users',(req ,res) =>{
        fs.readFile(dataURL,'utf8',(err, data) =>{
            if (err){
                throw err;
            }
            res.send(JSON.parse(data))
        });
    });
}; 

module.exports = userRouter