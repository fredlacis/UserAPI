import { request } from "express";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const requestUser = this.usersRepository.findById(user_id);

    if (!request) {
      throw new Error("Requesting user does not exists.");
    }

    if (!requestUser.admin) {
      throw new Error("Requesting user is not an admin.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
