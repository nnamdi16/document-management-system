const mockData = {
	authResponse: {
		status: true,
		message: 'You have successfully signed up',
		data: {
			token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJleHAiOjE1MTM5MzkzMDIsImN1cnJlbnRVc2VyIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJydWtraWV5In0sImlhdCI6MTUxMzg1MjkwMn0.K2P7BAKDkMbk9avQznEE4u8PRtrx3P0mlSzLvFAdH2E'
		}
	},
	signupData: {
		username: 'james',
		fullName: 'John James',
		email: 'john@gmail.com',
		password: '123456'
	}
};

export default mockData;
