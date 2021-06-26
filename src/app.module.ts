import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RootModule } from './common/root.module';
import { ProductsModule } from './products/products.module';
import { SkusModule } from './skus/skus.module';

@Module({
    imports: [
        RootModule,
        GraphQLModule.forRoot({
            autoSchemaFile: true,
            playground: false,
        }),
        ProductsModule,
        SkusModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
