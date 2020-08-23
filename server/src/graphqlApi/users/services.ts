import UserModel, { IUserInput, IUser } from "../../models/user";

export class UserServices {
  public async getUserById(id: string): Promise<IUser | null> {
    const found = UserModel.findOne({ _id: id });
    return found;
  }
  public async createUser(input: IUserInput): Promise<IUser> {
    const newUser = new UserModel(input);
    await newUser.save();
    return newUser;
  }
}
