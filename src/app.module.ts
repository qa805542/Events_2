import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RedisModule } from './redis/redis.module';
import { PubSubService } from './tokens/events/pubsub.service';
import { ConsumerService } from './tokens/events/tokenEvents.handler';
import { RedisKeysService } from './redis/redis-keys.service'


@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(process.env.MONGODB_URI),
    // DatabaseModule,
    RedisModule,
    // ClientsModule.register([
    //   {
    //     name: 'REDIS_CLIENT',
    //     transport: Transport.REDIS,
    //     options: {
    //       host: process.env.REDIS_HOST,
    //       port: parseInt(process.env.REDIS_PORT)
    //     },
    //   },
    // ])
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PubSubService,
    ConsumerService,
    RedisKeysService
  ],
})
export class AppModule { }
