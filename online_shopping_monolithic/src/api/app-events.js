const ProductService = require("../services/product-service");
const ShoppingService = require("../services/shopping-service");

module.exports = (app) => {
    
    const pservice = new ProductService();
    const sservice = new ShoppingService();
    app.use('/product/app-events',async (req,res,next) => {

        const { payload } = req.body;

        //handle subscribe events
        pservice.SubscribeEvents(payload);

        console.log("============= Product Service Received Events================");
        console.log(payload);
        res.json(payload);

    });

    app.use('/shopping/app-events',async (req,res,next) => {

        const { payload } = req.body;

        //handle subscribe events
        sservice.SubscribeEvents(payload);

        console.log("============= Shopping Service Received Events================");
        console.log(payload);
        res.json(payload);

    });

}
