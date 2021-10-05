import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { Request, Response } from 'express'
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto'

@Controller('product')
export class ProductController {
       constructor(private readonly productService: ProductService) {}
       @Get()
		findAll(@Req() req: Request, @Res() res: Response) : Response {
                     console.log(req.url)
			return res.send('Hello this is Request')
		}
       @Get(":id")
              findOne(@Param("id") id) : string {
                     return `Product with id ${id}`
              }
	@Post()
		create(@Body() productDtoParams: CreateProductDto) {
			return `Data Product : ${productDtoParams.name} and quantity : ${productDtoParams.quantity}`
		}
       @Delete(":id")
       deleteProduct(@Param("id") id) : string {
              return `Data Product ${id} successfuly deleted`
       }
}