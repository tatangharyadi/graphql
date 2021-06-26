import { Module } from '@nestjs/common';
import { SkusService } from './skus.service';
import { SkusResolver } from './skus.resolver';
import { Sku, SkuSchema } from './entities/sku.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Sku.name,
                schema: SkuSchema,
            },
        ]),
    ],
    providers: [SkusService, SkusResolver],
    exports: [SkusService],
})
export class SkusModule {}
