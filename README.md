kafka-spring-cloud-streams
C:\kafka_2.13-2.7.0>start bin\windows\zookeeper-server-start.bat config/zookeeper.properties

C:\kafka_2.13-2.7.0>start bin\windows\kafka-server-start.bat config/server.properties

C:\kafka_2.13-2.7.0>start bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic R1

C:\kafka_2.13-2.7.0>start bin\windows\kafka-console-producer.bat --broker-list localhost:9092 --topic R1

C:\kafka_2.13-2.7.0>start bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic R4 --property print.key=true --property print.value=true --property key.deserializer=org.apache.kafka.common.serialization.StringDeserializer --property value.deserializer=org.apache.kafka.common.serialization.LongDeserializer
