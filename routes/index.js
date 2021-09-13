const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Order = require('../models/order');
const Platter = require('../models/platter');
const BillSchema = require('../models/billform');
const AppointmentSchema = require('../models/appointment');



router.get('/', (req, res, next) => {
	return res.render('index.ejs');
});
router.get('/', (req, res, next) => {
	return res.render('index.ejs');
});


router.post('/register', (req, res, next) => {
	let personInfo = req.body;

	if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf) {
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			User.findOne({ email: personInfo.email }, (err, data) => {
				if (!data) {
					User.findOne({}, (err, data) => {

						let newPerson = new User({
							email: personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
							passwordConf: personInfo.passwordConf,
						});

						newPerson.save((err, Person) => {
							if (err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({ _id: -1 }).limit(1);
					res.send({ "Success": "You are regestered,You can login now." });
				} else {
					res.send({ "Success": "Email is already used." });
				}

			});
		} else {
			res.send({ "Success": "password is not matched" });
		}
	}
});

router.get('/login', (req, res, next) => {
	return res.render('login.ejs');
});

router.post('/login', (req, res, next) => {
	User.findOne({ email: req.body.email }, (err, data) => {
		if (data) {

			if (data.password == req.body.password) {
				req.session.userId = data.unique_id;
				res.send({ "Success": "Success!" });
			} else {
				res.send({ "Success": "Wrong password!" });
			}
		} else {
			res.send({ "Success": "This Email Is not regestered!" });
		}
	});
});

router.get('/profile', (req, res, next) => {
	User.findOne({ unique_id: req.session.userId }, (err, data) => {
		if (!data) {
			res.redirect('/');
		} else {
			return res.render('data.ejs', { "name": data.username, "email": data.email });
		}
	});
});

router.get('/logout', (req, res, next) => {
	if (req.session) {
		// delete session object
		req.session.destroy((err) => {
			if (err) {
				return next(err);
			} else {
				return res.redirect('/');
			}
		});
	}
});

router.get('/forgetpass', (req, res, next) => {
	res.render("forget.ejs");
});

router.post('/forgetpass', (req, res, next) => {
	User.findOne({ email: req.body.email }, (err, data) => {
		if (!data) {
			res.send({ "Success": "This Email Is not regestered!" });
		} else {
			if (req.body.password == req.body.passwordConf) {
				data.password = req.body.password;
				data.passwordConf = req.body.passwordConf;

				data.save((err, Person) => {
					if (err)
						console.log(err);
					else
						console.log('Success');
					res.send({ "Success": "Password changed!" });
				});
			} else {
				res.send({ "Success": "Password does not matched! Both Password should be same." });
			}
		}
	});

});

router.post("/sendOrder",(req,res)=>{
	const array  = req.body
	let newOrder = new Order({
		cart:array.array
	})

	newOrder.save((err,Order ) => {
		if (err)
			console.log(err);
		else
			console.log('THIS IS THE ORDER', Order);
	});
	res.send({"array":array})
})
router.post("/addPlatters",(req,res)=>{
	const platters  = req.body
	let newPlatter = new Platter({
		name:platters.name,
		price:platters.price,
		description:platters.description,
		image:platters.image,
		count:platters.count
	})

	newPlatter.save((err,platter ) => {
		if (err)
			console.log(err);
		else
			console.log('THIS IS THE ADDED PLATTER', platter);
			res.send({newPlatter})
	});
	
})

router.get("/platters",(req,res)=>{
	Platter.find({}, function (err, platters) {
        res.send(platters);
    });
})
router.get("/cart/billing",(req,res)=>{
	BillSchema.find({}, function (err, orders) {
		if(!err){
			res.send(orders);
		}else{
			res.send(err)
		}
        
    });
})
router.get("/appointment",(req,res)=>{
	AppointmentSchema.find({}, function (err, appointments) {
		if(!err){
			res.send(appointments);
		}else{
			res.send(err)
		}
        
    });
})
router.get("/users",(req,res)=>{
	User.find({}, function (err, users) {
		if(!err){
			res.send(users);
		}else{
			res.send(err)
		}
        
    });
})



router.post("/cart/billing",(req,res)=>{
	const bill = req.body
	let newBill = new BillSchema({
		streetaddress:bill.streetaddress,
		city:bill.city,
		area:bill.area,
		deliveryDate:bill.deliveryDate,
		deliveryTime:bill.deliveryTime,
		option:bill.option,
		cart:bill.cart,
		total:bill.total
	})
	newBill.save((err,bill ) => {
			if (err)
				console.log(err);
			else
				console.log('THIS IS THE BILL', bill);
				res.send({newBill})
		});
})


router.post("/appointment",(req,res)=>{
	const appointment = req.body;
	let newAppointment = new AppointmentSchema({
		name:appointment.name,
		surname:appointment.surname,
		email:appointment.email,
		cellphoneNumber:appointment.cellphoneNumber,
		option:appointment.option,
		reason:appointment.reason,
		slot:appointment.slot
	})
	newAppointment.save((err,appointment)=>{
		if(err){
			console.log(err);
			res.send({"error":err})
		}else{
			console.log("this is the appointment", appointment);
			res.send({newAppointment})
		}
	})
})

// admin delete a user
router.delete('/users/:userId', (req, res) => {
	const userIndex = getUserIndex(req.params.userId)
   
	if (userIndex === -1) return res.status(404).json({})
   
	User.splice(userIndex, 1)
	res.json(users)
   })

module.exports = router;


