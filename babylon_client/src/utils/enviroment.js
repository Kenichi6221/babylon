const babylonApiDefault = 'http://192.168.0.6:5000';
export const environment = {
  api: {
    url: process.env.API_URL || babylonApiDefault,
  },
};
