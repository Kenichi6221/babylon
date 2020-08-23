import { connect } from 'mongoose';
import { STRING_CONNECTION } from '../configurations/configuration';

const connectDB = async (): Promise<void> => {
  try {
    await connect(STRING_CONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
  } catch (error) {
    console.log('we have an error');
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
