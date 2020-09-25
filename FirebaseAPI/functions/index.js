const functions = require('firebase-functions');
/* const admin = require('firebase-admin');
 */
const app = require('express')();
const auth = require('./util/auth');

const cors = require('cors');
app.use(cors({ origin: true }));

const {
	getAllQuestions,
	getOneQuestion,
	postOneQuestion,
	deleteQuestion,
	editQuestion
} = require('./APIs/questions')

const {
	loginUser,
	signUpUser,
	getUserDetail,
	updateUserDetails
} = require('./APIs/users')

// question
app.get('/questions', auth, getAllQuestions);
app.get('/question/:questionId', auth, getOneQuestion);
app.post('/question', auth, postOneQuestion);
app.delete('/question/:questionId', auth, deleteQuestion);
app.put('/question/:questionId', auth, editQuestion);

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/updateuser', auth, updateUserDetails);
app.get('/getuser', auth, getUserDetail);

exports.api = functions.https.onRequest(app);