/* eslint-disable promise/always-return */
const { db } = require('../util/admin');

exports.getAllQuestions = (request, response) => {
	db
		.collection('questions')
		.where('email', '==', request.user.email)
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let questions = [];
			data.forEach((doc) => {
				questions.push({
					todoId: doc.id,
					title: doc.data().title,
					email: doc.data().email,
					body: doc.data().body,
					createdAt: doc.data().createdAt,
				});
			});
			return response.json(questions);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};

exports.getOneQuestion = (request, response) => {
	db
		.doc(`/questions/${request.params.questionId}`)
		.get()
		.then((doc) => {
			if (!doc.exists) {
				return response.status(404).json(
					{
						error: 'Question not found'
					});
			}
			if (doc.data().username !== request.user.username) {
				return response.status(403).json({ error: "UnAuthorized" })
			}
			QuestionData = doc.data();
			QuestionData.questionId = doc.id;
			return response.json(QuestionData);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: error.code });
		});
};

exports.postOneQuestion = (request, response) => {
	if (request.body.body.trim() === '') {
		return response.status(400).json({ body: 'Must not be empty' });
	}

	if (request.body.title.trim() === '') {
		return response.status(400).json({ title: 'Must not be empty' });
	}

	const newQuestionItem = {
		title: request.body.title,
		username: request.user.username,
		body: request.body.body,
		createdAt: new Date().toISOString()
	}

	db
		.collection('questions')
		.add(newQuestionItem)
		.then((doc) => {
			const responseQuestionItem = newQuestionItem;
			responseQuestionItem.id = doc.id;
			return response.json(responseQuestionItem);
		})
		.catch((error) => {
			console.error(error);
			response.status(500).json({ error: 'Something went wrong' });
		});
};

exports.deleteQuestion = (request, response) => {
	const document = db.doc(`/questions/${request.params.questionId}`);
	document
		.get()
		.then((doc) => {
			if (!doc.exists) {
				return response.status(404).json({
					error: 'Question not found'
				})
			}
			if (doc.data().username !== request.user.username) {
				return response.status(403).json({ error: "UnAuthorized" })
			}
			return document.delete();
		})
		.then(() => {
			response.json({ message: 'Delete successfull' });
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({
				error: err.code
			});
		});
};

exports.editQuestion = (request, response) => {
	if (request.body.questionId || request.body.createdAt) {
		response.status(403).json({ message: 'Not allowed to edit' });
	}
	let document = db.collection('questions').doc(`${request.params.questionId}`);
	document.update(request.body)
		.then((doc) => {
			response.json({ message: 'Updated successfully' });
		})
		.catch((error) => {
			if (error.code === 5) {
				response.status(404).json({ message: 'Not Found' });
			}
			console.error(error);
			return response.status(500).json({
				error: error.code
			});
		});
};