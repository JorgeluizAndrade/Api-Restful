import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import { IDeleteUserController, IDeleteUsersRepository } from "./protocols";

export class DeleteUserController implements IDeleteUserController {
  constructor(private readonly deleteUserRepositoriy: IDeleteUsersRepository) {}
  async handle(HttpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {
    try {
      const id = HttpRequest?.params?.id;
      if (!id) {
        return {
          statusCode: 400,
          body: "Missing user id",
        };
      }
      const user = await this.deleteUserRepositoriy.deleteUser(id);
      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
