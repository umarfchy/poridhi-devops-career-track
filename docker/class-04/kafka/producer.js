const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

const payloads = [
    { topic: 'test', messages: 'Another data' }
];

producer.on('ready', function() {
    producer.send(payloads, function(err, data) {
        if (err) {
            console.log('Error sending message: ', err);
        } else {
            console.log('Message sent successfully: ', data);
        }
    });
});

producer.on('error', function(err) {
    console.log('Error: ', err);
});
