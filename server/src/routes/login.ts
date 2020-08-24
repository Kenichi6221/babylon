import express from 'express';
import UserModel from '../models/user';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwtManagement';
import { IUser } from '../models/user';

const app = express();

app.post('/login', async (req, res) => {
  const userLogin = req.body;
  const { email, password } = userLogin;

  const found = await UserModel.findOne({ email }).exec();
  const savedPass = `${found?.password}`;

  const correctPassword = bcrypt.compareSync(password, savedPass);
  if (correctPassword) {
    const token = generateToken(found as IUser);

    const user = {
      name: found?.name,
      emai: found?.email,
      id: found?.id,
      role: found?.role,
    };

    return res.send({ ok: true, token, user });
  }

  return res.send({ ok: false, error: 'user not found' });
});

export default app;
