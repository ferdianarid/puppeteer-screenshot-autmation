import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto'

@Controller('product')
export class ProductController {
       constructor(private readonly productService: ProductService) {}
       @Get()
		findAll() : string {
			return `Hello Product`
		}
	@Post()
		create(@Body() productDtoParams: CreateProductDto) {
			return `Data Product : ${productDtoParams.name} and quantity : ${productDtoParams.quantity}`
		}
}