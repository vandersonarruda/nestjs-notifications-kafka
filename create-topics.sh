#!/bin/bash

# Cria o tópico
kafka-topics.sh \
  --create \
  --topic notifications.send-notification \
  --bootstrap-server localhost:9092 \
  --replication-factor 1 \
  --partitions 1 \
  --config retention.ms=604800000