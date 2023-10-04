import { Module } from '@nestjs/common';
import { SecondResolver } from './second.resolver';

@Module({
  providers: [SecondResolver],
})
export class SecondModule {}
