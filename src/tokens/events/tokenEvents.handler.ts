// consumer/consumer.service.ts
import { Injectable } from '@nestjs/common';
import { PubSubService } from './pubsub.service';
import { RedisKeysService } from '../../redis/redis-keys.service'

@Injectable()
export class ConsumerService {
  constructor(
    private readonly pubSubService: PubSubService,
    private readonly redisStateService: RedisKeysService
  ) {
    this.subscribeToChannels();
  }

  private subscribeToChannels() {
    // Subscribe to channel 1
    this.pubSubService.subscribe('channel1', (message) => {
      console.log('Received message on channel1:', message);
      // Perform actions based on the received message for channel1
    });

    // Subscribe to channel 2
    this.pubSubService.subscribe('channel2', (message) => {
      console.log('Received message on channel2:', message);
      // Perform actions based on the received message for channel2
    });

    // Add more subscriptions as needed
    this.pubSubService.subscribe('token_created', async (message) => {
      console.log('Received message on token_created:', message);
      // Perform actions based on the received message for channel1
      
      try {
        //const data = JSON.parse(message);
        const userId = message.userId;
        
        this.redisStateService.setKey(userId, message)
      } catch (error) {
        // log error msgs
        console.log("Error:", error, message)
      }
    });
  }
}
