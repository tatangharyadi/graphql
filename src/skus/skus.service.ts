import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { MongooseService } from 'src/common/mongoose.service';
import { Product } from 'src/products/entities/product.entity';
import { Sku } from './entities/sku.entity';

@Injectable()
export class SkusService extends MongooseService {
    constructor(@InjectModel(Sku.name) private readonly skuModel: Model<Sku>) {
        super(skuModel);
    }

    async findByProduct(product: Product): Promise<Sku[]> {
        return this.skuModel
            .find({ product: product.id } as FilterQuery<Sku>)
            .exec();
    }
}
