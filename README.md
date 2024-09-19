# NestJS Notifications Microservice with Kafka

This project is a **Nest.js** microservice for handling notifications, structured using **Domain-Driven Design (DDD)** principles. It leverages **Kafka** for messaging, **PostgreSQL** as the database, and **Prisma** as the ORM. The entire application runs in Docker containers for seamless development and deployment.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/vandersonarruda/nestjs-notifications-kafka.git
cd nestjs-notifications-kafka
```

### Set Up Environment Variables

Copy the example environment file and adjust it according to your configuration:

```bash
cp .env.example .env
```

Edit the `.env` file to set your database credentials and other environment variables.

### Build and Run Docker Containers

Build and start the application using Docker Compose:

```bash
docker-compose up -d
```

### Create Kafka Topic

Execute the following command to create the necessary Kafka topic:

```bash
docker-compose exec kafka bash /docker-entrypoint-init.d/create-topics.sh
```

### Verify Kafka Topic Creation

To ensure the topic was created successfully, list all Kafka topics:

```bash
docker-compose exec kafka kafka-topics.sh --list --bootstrap-server localhost:9092
```

You should see your topic listed in the output.

## Running Migrations

Apply database migrations using Prisma:

```bash
npx prisma migrate deploy
```

## Usage

With all services running, the microservice is ready to handle notifications. Interact with it through your application or via Kafka messages, depending on your setup.

### Simulating Message Production

In the root directory, there's a folder named ```_producer-send-message``` containing a simple Node.js application. This app simulates a Kafka producer sending messages to the topic, which is useful for testing and development purposes. 

Running the Producer Simulator

```bash
cd _producer-send-message
npm install
node producer.js
```

This script will send sample messages to the Kafka topic, allowing you to observe how the microservice consumes and processes these messages.

## Testing

Run the test suite using:

```bash
npm run test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
