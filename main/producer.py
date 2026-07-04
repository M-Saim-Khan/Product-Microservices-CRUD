import pika , json

params = pika.URLParameters('amqps://kndeptvn:Hn1mTzY0ciNcqX9ZyUowKCk3Lha3gxv2@warthog.lmq.cloudamqp.com/kndeptvn')

connection = pika.BlockingConnection(params)

channel = connection.channel()

def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='admin', body=json.dumps(body), properties=properties)