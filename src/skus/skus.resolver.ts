import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';
import { SkuArgs } from './dto/args/sku.args';
import { SkusArgs } from './dto/args/skus.args';
import { CreateSkuInput } from './dto/input/create-sku.input';
import { DeleteSkuInput } from './dto/input/delete-sku.input';
import { UpdateSkuInput } from './dto/input/update-sku.input';
import { Sku } from './entities/sku.entity';
import { SkusService } from './skus.service';

@Resolver(() => Sku)
export class SkusResolver {
    constructor(
        private readonly skuService: SkusService,
        private readonly productService: ProductsService,
    ) {}

    @Mutation(() => Sku)
    async createSku(@Args('input') createSku: CreateSkuInput): Promise<Sku> {
        return this.skuService.save(createSku);
    }

    @Query(() => Sku, { name: 'sku', nullable: true })
    async findOne(@Args() skuArgs: SkuArgs): Promise<SkuArgs> {
        return this.skuService.findOne(skuArgs.id);
    }

    @Query(() => [Sku], { name: 'skus', nullable: 'items' })
    find(@Args() skusArgs: SkusArgs): Promise<Sku[]> {
        return this.skuService.find();
    }

    @Mutation(() => Sku)
    async updateSku(@Args('input') updateSku: UpdateSkuInput): Promise<Sku> {
        return this.skuService.update(updateSku.id, updateSku);
    }

    @Mutation(() => Sku)
    async deleteSku(@Args('input') deleteSku: DeleteSkuInput): Promise<Sku> {
        return this.skuService.delete(deleteSku.id);
    }

    @ResolveField('product', () => Product)
    async findProduct(@Parent() sku: Sku) {
        return this.productService.findOne(sku.product.toString());
    }
}
