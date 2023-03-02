
 const userRouter =  require('./users');

const appRouter = ( app, fs) =>{
    app.get('/',(req,res) => {
        res.send('welcome');
    });

    userRouter(app,fs);
};

module.exports = appRouter;