import { useApolloClient, useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserActions } from 'redux/actions';

const LOGIN_USER = gql`
  mutation userLogin($email: String!, $password: String!) {
    token: userLogin(email: $email, password: $password) {
      id
      name
      email
      role
      token
      bio
      website
    }
  }
`;
const useLogin = () => {
  const dispatch = useDispatch();
  const client = useApolloClient();
  const router = useRouter();
  const [loginErrors, setLoginErrors] = useState(null);
  const [response, setResponse] = useState({ token: '' });
  const [login] = useMutation(LOGIN_USER);
  return {
    response,
    loginErrors,
    handleLoginSubmit: async (loginInfo) => {
      const { email, password } = loginInfo;
      try {
        localStorage.removeItem('token');
        const { data } = await login({
          variables: { email, password },
        });

        const { token, ...user } = data.token;

        setResponse(data.token);
        client.resetStore();
        localStorage.setItem('token', token);

        dispatch(UserActions.userLoged({ user }));
        router.push('/home');
      } catch (exception) {
        if (exception.errors) {
          setLoginErrors(exception.errors);
        } else {
          setLoginErrors([exception]);
        }
      }
    },
  };
};

export default useLogin;
