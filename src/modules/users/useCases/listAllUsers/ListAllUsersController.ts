import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (!user_id || Array.isArray(user_id)) {
      return response.json({ error: "Invalid user_id in headers." });
    }

    try {
      const userList = this.listAllUsersUseCase.execute({ user_id });
      return response.json(userList);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
