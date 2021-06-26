import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql';
import { Sku } from 'src/skus/entities/sku.entity';
import { SkusService } from 'src/skus/skus.service';
import { ProductArgs } from './dto/args/product.args';
import { ProductsArgs } from './dto/args/products.args';
import { CreateProductInput } from './dto/input/create-product.inputt';
import { DeleteProductInput } from './dto/input/delete-product.input';
import { UpdateProductInput } from './dto/input/update-product.input';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver(() => Product)
export class ProductsResolver {
    constructor(
        private readonly productService: ProductsService,
        private readonly skuService: SkusService,
    ) {}

    @Mutation(() => Product)
    async createProduct(
        @Args('input') createProduct: CreateProductInput,
    ): Promise<Product> {
        return this.productService.save(createProduct);
    }

    @Query(() => Product, { name: 'product', nullable: true })
    async findOne(@Args() productArgs: ProductArgs): Promise<Product> {
        return this.productService.findOne(productArgs.id);
    }

    @Query(() => [Product], { name: 'products', nullable: 'items' })
    find(@Args() productsArgs: ProductsArgs): Promise<Product[]> {
        return this.productService.find();
    }

    @Mutation(() => Product)
    async updateProduct(
        @Args('input') updateProduct: UpdateProductInput,
    ): Promise<Product> {
        return this.productService.update(updateProduct.id, updateProduct);
    }

    @Mutation(() => Product)
    async deleteProduct(
        @Args('input') deleteProduct: DeleteProductInput,
    ): Promise<Product> {
        return this.productService.delete(deleteProduct.id);
    }

    @ResolveField('skus', () => [Sku])
    async findSkus(@Parent() product: Product) {
        return this.skuService.findByProduct(product);
    }
}
