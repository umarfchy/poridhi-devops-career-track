const kafka = require("kafka-node");
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const consumer = new Consumer(client, [{ topic: "test", partition: 0 }], {
  autoCommit: true,
});

consumer.on("message", function (message) {
  setTimeout(() => console.log("Message received: ", message), 2000);
});

consumer.on("error", function (err) {
  console.log("Error: ", err);
});
