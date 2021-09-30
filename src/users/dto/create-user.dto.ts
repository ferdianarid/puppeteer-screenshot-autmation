export class CreateUserDto {
       name: string
       profession: string
       address: {
              subdistrict: string,
              district: string,
              province: string,
              nationality: string
       }
       hobbies: string
       isCompleted: boolean
}
