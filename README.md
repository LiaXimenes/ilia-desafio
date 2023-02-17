# Ilía (back-end)

## About
This is an web application as a test case for Ilia.
Below are the implemented features:

* /v1/batidas
* /v1/alocacoes
* /v1/folhas-de-ponto/:mes

## Technologies
The following tools and frameworks were used in the construction of the project:

* Node.js
* Express
* PostgreSQL
* Typescrypit
* Jest
* TypeORM

## How to Run

1. Clone this repository
2. Install dependencies
```bash
npm i
```
3. Call the routes with postman.

You can also try to run the migrations and set the connections that are commented to connect to the database
4. Run the migrations 
```bash
npm run typeorm migration:run
```
