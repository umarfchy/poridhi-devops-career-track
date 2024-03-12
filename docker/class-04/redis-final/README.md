# Nextjs Express Redis Microservice Architecture

## Introduction

<figure > 
<p align="center">
  <img src="./assets/dataflow_diagram.jpg" alt="Dataflow Diagram" style="background-color:white" />
  <p align="center">Dataflow Diagram</p> 
</p>
</figure>

Explanation:

1. The nextjs client is the front end of the application and it communicates with the express api server to get and post data to the worker server and the mysql database.

1. The express api server is the middle layer of the application. When it receives a post request from the nextjs client, it publishes a message to the redis pub/sub. When it receives a get request from the nextjs client, it checks the redis cache for the data. If the data is not in the redis cache, it sends a request to the database to get the data and caches the data in the redis cache for future requests. If the data is in the redis cache, it sends the data to the nextjs client. It is also responsible for sending responses to the nextjs client.

1. The worker server is a microservice that subscribes to the redis pub/sub and receives messages from the express api server when a post request is made from the nextjs client. It is responsible for sending requests to the mysql database to store the data.

Components:

1. Nextjs Client
1. Express Server
1. Worker (Nodejs) Server
1. Redis Cache and Pub/Sub
1. MySQL Database

Following is a demonstration of the system:

<figure >
<p align="center">
  <img src="./assets/demo.gif" alt="Demo" style="background-color:white" />
  <figcaption>Demonstration of the system</figcaption>
</p>
</figure>

You can try it out yourself by cloning the repo and following the instructions below.

```bash
git clone www.github.com/umarfchy/nextjs-express-redis-microservice-architecture
cd nextjs-express-redis-microservice-architecture
docker compose up
```

Thanks for reading!
