import { forwardRef, Module } from '@nestjs/common';
import { SkusService } from './skus.service';
import { SkusResolver } from './skus.resolver';
import { Sku, SkuSchema } from './entities/sku.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from 'src/products/products.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Sku.name,
                schema: SkuSchema,
            },
        ]),
        forwardRef(() => ProductsModule),
    ],
    providers: [SkusService, SkusResolver],
    exports: [SkusService],
})
export class SkusModule {}
