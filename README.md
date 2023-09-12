# REST API to perform CRUD operation of a "person" resources
This is a simple REST API that can perform create, read, update, and delete operation on a "person" resources. The "person" resources in this case are the details of a user.

## TL;DR
- API hosted on https://hng-stage-2-wewj.onrender.com

## UML Diagram
<img width="634" alt="image" src="https://github.com/princeibs/stage-2/assets/64266194/14a81cc0-c862-485e-85f5-ad5f78136bd8">

## Prerequisites
Before starting this project, please ensure you have the following packages installed on your computer:
1. Git
2. Node (v16.x.x and above)
3. NPM (v8.x.x and above)

## How to set up
1. Clone the repository into your computer with the command:
```bash
git clone https://github.com/princeibs/stage-2.git
```
2. Open project folder in any code editor of your choice (VSCode recommended)
3. Open a terminal and navigate to the project directory (folder)
4. Inside the terminal, run the command below to install project dependencies/packages:
```bash
npm install
```
5. After installation is complete, create a `.env` file in the root directory of the project and add the `MONGODB_CONN_URI` environmental variable. (You need to create a cluster in MongoDB Atlas in order to get a connection string)
6. Start the local server using the command:
```bash
npm run start:dev
```

After completing the above steps, you will now have a local server running on port `5000` (http://localhost:5000)

Access the api endpoints using http://localhost:5000/api

## API Endpoints
The API provides the following endpoints to perform CRUD operations of a person
- /api
  - **GET**
  - _/api/<user_id>_
  - Gets the person with id <user_id>
  - 
  - **POST**
  - _/api_
  - Submit person data and store in database through request body
  - 
  - **PUT**
  - _/api/<user_id>_
  - Update data of person with id <user_id>. Send new data through request body
  -  
  - **DELETE**
  - _/api/<user_id>_
  - Delete data of person with id <user_id>


## Request/Response Formats

### Create new person

**Request Format:**
- POST _/api_
- Body:
```json
{
  "firstName": "Ibrahim",
  "lastName": "Suleiman"
}
```

**Response Format (Created - 201):**

```json
{
  "statusCode": 201,
  "message": "User created successfully",
  "data": {
    "firstName": "Ibrahim",
    "lastName": "Suleiman",
    "createdAt": "2023-09-12T06:03:07.936Z",
    "updatedAt": "2023-09-12T06:03:07.936Z",
    "_id": "64ffff1b286c5b986579e364",
    "__v": 0
  }
}
```

### Read person details 

**Request Format:**
- GET _/api/64ffff1b286c5b986579e364_
- Body: empty

**Response Format (Success - 200):**

```json
{
  "statusCode": 200,
  "data": {
    "_id": "64ffff1b286c5b986579e364",
    "firstName": "Ibrahim",
    "lastName": "Suleiman",
    "createdAt": "2023-09-11T15:11:08.921Z",
    "updatedAt": "2023-09-11T15:11:08.921Z",
    "__v": 0
  }
}
```

### Update person details 

**Request Format:**
- PUT _/api/64ffff1b286c5b986579e364_
- Body:
```json
{
  "firstName": "Ibrahim",
  "lastName": "Suleiman",
  "otherNames": "Prince"
}
```
**Response Format (Success - 200):**

```json
{
  "statusCode": 200,
  "message": "User with id 64ffff1b286c5b986579e364 updated successfully",
  "data": {
    "user": {
      "_id": "64ffff1b286c5b986579e364",
      "firstName": "Ibrahim",
      "lastName": "Suleiman",
      "createdAt": "2023-09-11T15:11:08.921Z",
      "updatedAt": "2023-09-12T06:15:16.737Z",
      "__v": 0,
      "otherNames": "Prince"
    }
  }
}
```

### Delete a Person 

**Request Format:**
- DELETE _/api/64ffff1b286c5b986579e364_
- Body: empty

**Response Format (Success - 200):**

```json
{
  "statusCode": 200,
  "message": "User with id 64ffff1b286c5b986579e364 deleted successfully"
}
```

> **Note** _API is hosted on https://hng-stage-2-wewj.onrender.com_

## Known Limitations and Assumptions
- The reader already have a basic knowledge of backend web development
- Authentication or authorization not implemented
- Robust error handling not implemented
- API might take some time to respond at first usage. Reason for this is the limitation [Render](https://render.com) placed on free web services. [Learn more](https://render.com/docs/free)
