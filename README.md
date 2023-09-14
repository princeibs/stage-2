
<!-- TOC -->
<a name="rest-api-to-perform-crud-operation-of-a-person-resources"></a>
# REST API to perform CRUD operation of a "person" resources

- [REST API to perform CRUD operation of a "person" resources](#rest-api-to-perform-crud-operation-of-a-person-resources)
  * [TL;DR](#tldr)
  * [UML Diagram](#uml-diagram)
  * [Prerequisites](#prerequisites)
  * [How to set up](#how-to-set-up)
  * [API Endpoints](#api-endpoints)
  * [Request-Response Formats/ API Usage](#request-response-formats-api-usage)
    + [Create new person](#create-new-person)
    + [Read person details](#read-person-details)
    + [Update person details](#update-person-details)
    + [Delete a Person](#delete-a-person)
  * [Testing (script)](#testing-script)
    + [How to execute the script?](#how-to-execute-the-script)
    + [Things to note while testing the script](#things-to-note-while-testing-the-script)
  * [Known Limitations and Assumptions](#known-limitations-and-assumptions)


This is a simple REST API that can perform create, read, update, and delete operation on a "person" resources. The "person" resources in this case are the details of a user.

<!-- TOC --><a name="tldr"></a>
## TL;DR

- API hosted on <https://hng-stage-2-wewj.onrender.com/api>
- Test endpoints automatically using [./test-script.sh](./test-script.sh)

<!-- TOC --><a name="uml-diagram"></a>
## UML Diagram

<img width="634" alt="image" src="https://github.com/princeibs/stage-2/assets/64266194/14a81cc0-c862-485e-85f5-ad5f78136bd8">

<!-- TOC --><a name="prerequisites"></a>
## Prerequisites

Before starting this project, please ensure you have the following packages installed on your computer:

1. Git
2. Node (v16.x.x and above)
3. NPM (v8.x.x and above)

<!-- TOC --><a name="how-to-set-up"></a>
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

After completing the above steps, you will now have a local server running on port `5000` (<http://localhost:5000>)

Access the api endpoints using <http://localhost:5000/api>

<!-- TOC --><a name="api-endpoints"></a>
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

<!-- TOC --><a name="request-response-formats-api-usage"></a>
## Request-Response Formats/ API Usage

<!-- TOC --><a name="create-new-person"></a>
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

<!-- TOC --><a name="read-person-details"></a>
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

<!-- TOC --><a name="update-person-details"></a>
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

<!-- TOC --><a name="delete-a-person"></a>
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

> **Note** _API is hosted on <https://hng-stage-2-wewj.onrender.com>_

<!-- TOC --><a name="testing-script"></a>
## Testing (script)

A bash script has been developed to test all the endpoints in this API automatically. The script is available is `/test-script.sh` file of this project.

<!-- TOC --><a name="how-to-execute-the-script"></a>
### How to execute the script?

Using a Unix-like terminal (MacOS or Linux), execute the command:

```bash
source test-script.sh
```

The above command will use [curl](https://curl.se/) to test all the endpoints in the API and output the corresponding response in the console.

<!-- TOC --><a name="things-to-note-while-testing-the-script"></a>
### Things to note while testing the script

- The script perform CRUD on a single person resource. i.e it first creates, then read, update, and delete. The first time you run the script, you will get output similar to the one below:
<img width="692" alt="image" src="https://github.com/princeibs/stage-2/assets/64266194/345899bc-bc05-4c97-93aa-9ef866c05cfd">
This is because we are creating a brand new person and then using the id of a deleted user (from our last DELETE operation) to read, update, and delete.
To navigate around this, copy the id of the new person created and replace the `user_id` parameter in the URL of the read, update, and delete request, and then rerun the script to see the other endpoints get executed. To test again, repeat the same step (i.e copy the id of the new user created from the last script execution and then replace the `user_id` parameter of the other endpoints read, update, delete with the new id)

- Running the script for the first time will take some time to respond because the API is hosted on free tier server which shuts down the after 15 minutes of inactivity.

<!-- TOC --><a name="known-limitations-and-assumptions"></a>
## Known Limitations and Assumptions

- The reader already have a basic knowledge of backend web development
- Authentication or authorization not implemented
- Robust error handling not implemented
- API might take some time to respond at first usage. Reason for this is the limitation [Render](https://render.com) placed on free web services. [Learn more](https://render.com/docs/free)
