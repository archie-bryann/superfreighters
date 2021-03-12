exports.orders_create_order = (req,res,next) => {

    const {mode_of_transport, weight_of_item, country_of_origin} = req.body;
    var shipment_cost = 0;
    var shipment_time;

    if(mode_of_transport === 'air') {
        shipment_cost += 50000; // base fare    
        shipment_time = 2; // 2 days after shipment
        shipment_cost += weight_of_item*10000 // based on weight of item (kg)
        console.log(shipment_cost);
    } else if (mode_of_transport === 'sea') { 
        shipment_cost += 15000
        shipment_time = 2*10; // 10 times longer than air
        shipment_cost += weight_of_item*2000 // based on weight of item (kg)
    }

    if(country_of_origin === "us") {
        shipment_cost += 1500;
    } else if(country_of_origin === "uk") {
        shipment_cost += 800;
    }

    // 10% Customs Fee
    shipment_cost += 0.1*shipment_cost;


    // the order will be stored in the database

    return res.status(200).json({
        mode_of_transport,
        weight_of_item,
        country_of_origin,
        shipment_cost,
        shipment_time,
    })
    
}   