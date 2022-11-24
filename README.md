# A template for node express APIs

Things that it contains:

- An example of what a functional, basic CRUD API using MongoDB looks like
- Model, Controller template. Views were left out but they would be easy to integrate if needed
- Swagger documentation on localhost:PORT/api-docs

Setup Steps:

1. `npm i`
1. [Create an Atlas account and deploy a free cluster](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/) OR use your local mongodb instance as a db
1. Copy .env.example to .env and populate it with desired values
1. `npm run dev`
