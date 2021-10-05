import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { UsersModule } from 'src/users/users.module'

@Module({
       imports: [
              UsersModule
       ],
       controllers: [ProductController],
       providers: [ProductService]
})

export class ProductModule {}