const PayStack = require('paystack-node');
const environment = process.env.NODE_ENV;
const paystackTestSecretKey = process.env.paystackTestSecretKey;
const paystackLiveSecretKey = process.env.paystackLiveSecretKey;
const paystack = new PayStack(paystackLiveSecretKey, environment);

const transporter = require('../../utils/mail');

const converter = require('number-to-words');

// const dotenv = require('dotenv');
// dotenv.config();


exports.payments_verify_payment = (req,res,next) => { 
    const {reference, email, mode_of_transport, weight_of_item, country_of_origin, shipment_cost, shipment_time} = req.body;
    
    const promise = paystack.verifyTransaction({
        reference
    })

    promise.then(function ({body}){
        if(body.data.status === 'success') {

            // SEND EMAIL
            const mailOptions = {
                from: `SuperFreighters <ekomboy012@gmail.com>`,
                to: email,
                subject: "Order Details", 
                html: `You have just placed a new order. <br /> Mode of Tranport: ${mode_of_transport} <br /> Weight of Tranport: ${weight_of_item}kg <br/> Country of Origin: ${country_of_origin} <br /> Shipment Cost: ${shipment_cost} <br /> Time of Delivery: Your order will arrive in Nigeria ${converter.toWords(shipment_time)} days after shipment.`
            } 

            transporter.sendMail(mailOptions, function(err,info){
                if(err) {
                    // logger.debug('Error: ' + JSON.stringify(err));
                    console.log(err)
                    return res.status(500).json({error:'An error occured. Please try again!'});
                } else {

                        return res.status(200).json({message:"Your order has been successfully placed."})

                    }
                });

        }
    }).catch(function (error){
        // deal with error
        console.log(error)
        return res.status(200).json({error:"An error occured while trying to verify the transaction"})
    
    })

}