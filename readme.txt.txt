##Register API

Functionalities:
	1. User can register by using this url : localhost:3000/task/register and provide the required details
	2. Once Registered response will be generated and User details will be saved.
	
##Login API
	Functionalities:
	1. User can login by using this url : localhost:3000/task/login and provide the required details
	2. When API will be called, JWT token and a session will be generated.
	3. Response is also generated as given in the instructions

##Balanced API
	Functionalities:
	1. User can't access the Balanced API if he is not logined; "Access Denied" message will be generated
	2. User can access the API by calling this url : localhost:3000/task/balanced.

Note :
	1. For Authentication purpose, a seperate verify_token.js file is created where JWT token gets verfied.
	2. A session is also generated.
		