import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import userSelector from 'redux/selectors';
import { gql, useLazyQuery } from '@apollo/client';
import { UserActions } from 'redux/actions';

const GET_USER_FROM_QUERY = gql`
  query getUserFromToken($token: String!) {
    user: getUserFromToken(token: $token) {
      id
      name
      email
      role
    }
  }
`;

const useSecureAuthentication = () => {
  let token =
    typeof window !== 'undefined' ? localStorage.getItem('token') || '' : '';

  const router = useRouter();
  const dispatch = useDispatch();

  const [autheticationWasChecked, setAutheticationWasChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isUserInRedux = useSelector((state) =>
    userSelector.getIsUserInRedux(state)
  );

  const [getUserFromToken, { data, error }] = useLazyQuery(
    GET_USER_FROM_QUERY,
    {
      variables: { token },
    }
  );

  useEffect(() => {
    const needUserRestore = !isUserInRedux && !!token;
    if (needUserRestore) {
      getUserFromToken();
    }
  }, [token, isUserInRedux, getUserFromToken]);

  useEffect(() => {
    if (data) {
      dispatch(UserActions.userLoged({ user: data.user }));
    }
  }, [data, dispatch]);

  useEffect(() => {
    const errorAction = async () => {
      if (error) {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setAutheticationWasChecked(true);
        await router.push('/login');
      }
    };
    errorAction();
  }, [error, router]);

  useEffect(() => {
    const checkRedirect = async () => {
      setIsAuthenticated(!!token);
      setAutheticationWasChecked(true);
      if (!token) {
        await router.push('/login');
      }
    };
    checkRedirect();
  }, [token, router]);

  return {
    autheticationWasChecked,
    isAuthenticated,
    error,
  };
};

export default useSecureAuthentication;
