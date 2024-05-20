// import { Module } from '@nestjs/common';
// import Redis from 'ioredis';

// @Module({
//   providers: [
//     {
//       provide: 'REDIS_CLIENT',
//       useFactory: () => {
//         return new Redis({
//           host: 'localhost',
//           port: 6379,
//         });
//       },
//     },
//   ],
//   //exports: ['REDIS_CLIENT'],
//   exports: [{ provide: 'REDIS_CLIENT', useClass: Redis }]
// })
// export class RedisModule {}

import { Module } from '@nestjs/common';
import Redis from 'ioredis';

@Module({
  providers: [
    {
      provide: 'REDIS_SUBSCRIBE_CLIENT',
      useFactory: () => {
        return new Redis({
          host: 'localhost',
          port: 6379,
        });
      },
    },
    {
      provide: 'REDIS_WRITE_CLIENT',
      useFactory: () => {
        return new Redis({
          host: 'localhost',
          port: 6379,
        });
      },
    },
  ],
  exports: ['REDIS_SUBSCRIBE_CLIENT', 'REDIS_WRITE_CLIENT'],
})
export class RedisModule {}
