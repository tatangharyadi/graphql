import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseService } from 'src/common/mongoose.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService extends MongooseService{
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<Product>
    ) {super(productModel)}
}
