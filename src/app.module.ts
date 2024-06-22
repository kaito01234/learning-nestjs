import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LoggerModule } from 'nestjs-pino';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { AModule } from './a/a.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.graphql'),
      sortSchema: true,
    }),
    LoggerModule.forRoot(),
    // LoggerModule.forRootAsync({
    //   imports: [
    //     JwtModule.registerAsync({
    //       imports: [ConfigModule],
    //       useFactory: () => ({
    //         secretOrKeyProvider: () => process.env.AUTH_TOKEN_SECRET ?? '',
    //       }),
    //       inject: [ConfigService],
    //     }),
    //   ],
    //   inject: [JwtService],
    //   useFactory: (jwtService: JwtService) => {
    //     return {
    //       pinoHttp: {
    //         level: process.env.LOG_LEVEL,
    //         logger: pino(),
    //         autoLogging: false,
    //         customProps: (_req) => {
    //           const bearerToken = _req.headers.authorization;
    //           if (bearerToken) {
    //             try {
    //               const token = bearerToken.replace('Bearer ', '');
    //               const user: JwtPayload = jwtService.verify(token);
    //               return { user };
    //             } catch (e) {
    //               return {};
    //             }
    //           }
    //           return {};
    //         },
    //       },
    //     };
    //   },
    // }),
    FirstModule,
    SecondModule,
    AModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
