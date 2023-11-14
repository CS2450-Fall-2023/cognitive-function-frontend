const questions = [
	{
		"id": "question_1",
		"title": "Question 1",
		"description": "Description for Question 1",
		"relatedQuestions": [
			"question_1_1",
			"question_1_2",
			"question_1_3",
			"question_1_4",
		]
	},
	{
		"id": "question_2",
		"title": "Question 2",
		"description": "Description for Question 2",
		"relatedQuestions": [
			"question_2_1",
			"question_2_2",
			"question_2_3",
			"question_2_4",
		]
	},
	{
		"id": "question_3",
		"title": "Question 3",
		"description": "Description for Question 3",
		"relatedQuestions": [
			"question_3_1",
			"question_3_2",
			"question_3_3",
			"question_3_4",
		]
	},
	{
		"id": "question_4",
		"title": "Question 4",
		"description": "Description for Question 4",
		"relatedQuestions": [
			"question_4_1",
			"question_4_2",
			"question_4_3",
			"question_4_4",
		]
	},



	{
		"id": "question_1_1",
		"title": "Question 1 1",
		"description": "Description for Question 1 1",
		"relatedQuestions": null
	},
	{
		"id": "question_1_2",
		"title": "Question 1 2",
		"description": "Description for Question 1 2",
		"relatedQuestions": null
	},
	{
		"id": "question_1_3",
		"title": "Question 1 3",
		"description": "Description for Question 1 3",
		"relatedQuestions": null
	},
	{
		"id": "question_1_4",
		"title": "Question 1 4",
		"description": "Description for Question 1 4",
		"relatedQuestions": null
	},

	{
		"id": "question_2_1",
		"title": "Question 2 1",
		"description": "Description for Question 2 1",
		"relatedQuestions": null
	},
	{
		"id": "question_2_2",
		"title": "Question 2 2",
		"description": "Description for Question 2 2",
		"relatedQuestions": null
	},
	{
		"id": "question_2_3",
		"title": "Question 2 3",
		"description": "Description for Question 2 3",
		"relatedQuestions": null
	},
	{
		"id": "question_2_4",
		"title": "Question 2 4",
		"description": "Description for Question 2 4",
		"relatedQuestions": null
	},

	{
		"id": "question_3_1",
		"title": "Question 3 1",
		"description": "Description for Question 3 1",
		"relatedQuestions": null
	},
	{
		"id": "question_3_2",
		"title": "Question 3 2",
		"description": "Description for Question 3 2",
		"relatedQuestions": null
	},
	{
		"id": "question_3_3",
		"title": "Question 3 3",
		"description": "Description for Question 3 3",
		"relatedQuestions": null
	},
	{
		"id": "question_3_4",
		"title": "Question 3 4",
		"description": "Description for Question 3 4",
		"relatedQuestions": null
	},

	{
		"id": "question_4_1",
		"title": "Question 4 1",
		"description": "Description for Question 4 1",
		"relatedQuestions": null
	},
	{
		"id": "question_4_2",
		"title": "Question 4 2",
		"description": "Description for Question 4 2",
		"relatedQuestions": null
	},
	{
		"id": "question_4_3",
		"title": "Question 4 3",
		"description": "Description for Question 4 3",
		"relatedQuestions": null
	},
	{
		"id": "question_4_4",
		"title": "Question 4 4",
		"description": "Description for Question 4 4",
		"relatedQuestions": null
	},
];


document.addEventListener('DOMContentLoaded', () => {
	let initialQuestions = ["question_1", "question_2", "question_3", "question_4"].map((id) => {
		return questions.find((question) => question.id === id);
	});

	console.log(initialQuestions);

	redrawQuestions(initialQuestions);
})

function redrawQuestions(questions) {
	const questionList = document.getElementById('questions');
	questionList.innerHTML = '';

	questions.forEach((question, i) => {
		const questionItem = document.createElement('li');
		questionItem.innerHTML = `
			<h2>${question.title}</h2>
			<p>${question.description}</p>
			<button>Pick this</button>
		`;

		questionList.appendChild(questionItem);
	});
}