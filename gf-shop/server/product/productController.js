var {Product,Users} = require('./product.js');
const bcrypt =require('bcryptjs')
const jwt =require('jsonwebtoken')
exports.createOne = function (req, res) {
    Product.create(req.body,(err,result)=>{
        console.log(err)
        
            
            res.json(result)
    })
}
exports.signup= async (req, res) => {
	
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await Users.create({
			User: req.body.name,
			
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
}
exports.login=async (req, res) => {
	const user = await Users.findOne({
		User: req.body.name,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				User: user.name,
				
			},
			'secretKey'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
}
exports.retrieve = function (req, res) {
    Product.find({},(err,Res)=>{
        if(err) console.log(err)
        else {res.send(Res)};
    })
};

exports.retrieveOne = function (req, res) {
    Product.findOne({id:req.params.id},(err,Res)=>{
        if(err) console.log(err)
        else {res.json(Res)};
    })

};

exports.updateOne = function (req, res) {
    Product.findOneAndUpdate({id:req.params.id},req.body)
    .then((result)=>{res.send(result)})

.catch((err)=>console.log(err))
}
exports.deleteOne = function (req, res) {
    Product.deleteOne({id:req.params.id})
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
};