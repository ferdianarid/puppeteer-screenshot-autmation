import { Injectable } from '@nestjs/common';

@Injectable()
       export class ProductService {
              getProductDetails() {
                     return `Successfuly get product details`
              }
              updateProduct(name: string, quantity ) : any {
                     return `Product ${name} and quantity ${quantity}`
              }
              getProduct( name: string, quantity: number) : any {
			return `Product name is ${name} and available ${quantity} qty`
		}
		registerProduct( id: number, name: string, colour: string, fresh: boolean): any {
			return {
				id, name, colour, fresh
			}
		}
       }