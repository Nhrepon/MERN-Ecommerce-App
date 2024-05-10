const app=require('./app');

app.listen(process.env.PORT, () => {
    console.log('App listening on port 3000!');
});