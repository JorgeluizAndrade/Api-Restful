import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersContrellers implements IGetUsersController {
  constructor(private readonly getUserRepository: IGetUsersRepository) {}
  async handle() {
        try{
            const users = await this.getUserRepository.getUsers();
            return{
                statusCode: 200,
                body:users
            }
        } catch(error){
            return{
                statusCode: 500,
                body: "Something went wrong"
            }
        }
  }
}
