import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { gql, useLazyQuery } from '@apollo/client';
import { UserActions } from 'redux/actions';

const GET_USER_FROM_QUERY = gql`
  query getUserFromToken($token: String!) {
    user: getUserFromToken(token: $token) {
      id
      name
      email
      role
      website
      bio
    }
  }
`;

const defaultState = {
  loading: false,
  success: false,
  user: null,
  error: false,
};

const authValidationStates = {
  loading: { ...defaultState, loading: true },
  success: { ...defaultState, success: true },
  error: { ...defaultState, error: true },
};

const useSecureAuthentication = () => {
  let token =
    typeof window !== 'undefined' ? localStorage.getItem('token') || '' : '';

  const dispatch = useDispatch();
  const route = useRouter();
  const [authValidationState, setAuthValidationState] = useState(
    authValidationStates.loading
  );

  const [getUserFromToken, { data, error }] = useLazyQuery(
    GET_USER_FROM_QUERY,
    {
      variables: { token },
    }
  );

  useEffect(() => {
    if (!token) {
      setAuthValidationState({
        ...authValidationStates.error,
        constent: 'empty token',
      });
      return;
    }
    getUserFromToken();
  }, [getUserFromToken, token]);

  useEffect(() => {
    if (data) {
      dispatch(UserActions.userLoged({ user: data.user }));
      setAuthValidationState({
        ...authValidationStates.success,
        user: data.user,
      });
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (error) {
      localStorage.removeItem('token');
      setAuthValidationState({
        ...authValidationStates.error,
        constent: error,
      });
    }
  }, [error]);

  useEffect(() => {
    if (authValidationState.error) {
      route.push('/login');
    }
  }, [route, authValidationState.error]);

  return authValidationState;
};

export default useSecureAuthentication;
