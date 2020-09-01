import UserModel, { IUserInput, IUser, IToken } from '../../models/user';
import { generateToken, getUserFromToken } from '../../utils/jwtManagement';
import bcrypt from 'bcrypt';

export class UserServices {
  public async getUserFromToken(token: string): Promise<IUser> {
    return getUserFromToken(token);
  }
  public async userLogin(email: string, password: string): Promise<IToken> {
    const found = await UserModel.findOne({ email }).exec();

    if (!found) {
      throw new Error('User not found');
    }

    const correctPassword = bcrypt.compareSync(password, found.password);
    if (!correctPassword) {
      throw new Error('check your password please');
    }

    const token = generateToken(found);

    const user = {
      userId: found.id,
      name: found.name,
      token,
      email: found.email,
      role: found.role,
    };

    return user as IToken;
  }
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
