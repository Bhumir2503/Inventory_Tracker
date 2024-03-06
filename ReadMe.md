# Express App

This is a basic Express application that uses the `dotenv` package to manage environment variables.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. To check if you have Node.js installed, run this command in your terminal:

```bash

//check Node.js Version
node -v

//check NPM Version
npm -v

```

### Installing

Clone the repository:

```bash
//Clone the repository:
git clone <your-repository-url>

//Navigate into the project directory:
cd <your-project-name>

//Install the dependencies:
npm install

```

Replace <your-repository-url> and <your-project-name> with your actual repository URL, and project name respectively. Users who download this template will replace these placeholders with their own details.

### Dotenv Init

This project uses dotenv for managing environment variables. Create a .env file in the root of your project.

```bash

MONGO_URI = "YourMongoURI" //Get from Mongodb
JWT_SECRET = "SecretKey" //Can be anything

```

### Running The App

to Start the server, run:

```bash
npm start
```

The server will start running at "http://localhost:port".

