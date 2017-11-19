const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.post('/send', function(req, res){
	const email = req.body

	if (email.fromemail == null){
		res.json({
			confirmation: 'fail',
			message: 'Missing fromemail parameter'
		})
		return
	}

	if (email.fromname == null){
		res.json({
			confirmation: 'fail',
			message: 'Missing fromname parameter'
		})
		return
	}

	if (email.recipient == null){
		res.json({
			confirmation: 'fail',
			message: 'Missing recipient parameter'
		})
		return
	}

	if (email.content == null){
		res.json({
			confirmation: 'fail',
			message: 'Missing content parameter'
		})
		return
	}

	if (email.subject == null){
		res.json({
			confirmation: 'fail',
			message: 'Missing subject parameter'
		})
		return
	}

	turbo.sendEmail(email)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: 'Email Sent'
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})


// router.get('/', function(req, res){
// 	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
// })

// router.get('/auth', function(req, res){
// 	res.render('auth', null)
// })



module.exports = router
