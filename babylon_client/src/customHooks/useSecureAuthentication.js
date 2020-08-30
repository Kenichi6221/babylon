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
    typeof window !== 'undefined' ? localStorage.getItem('token') : '';

  const router = useRouter();
  const dispatch = useDispatch();

  const [autheticationWasChecked, setAutheticationWasChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(null);

  const isUserInRedux = useSelector((state) =>
    userSelector.getIsUserInRedux(state)
  );
  const [getUserFromToken, { data }] = useLazyQuery(GET_USER_FROM_QUERY, {
    variables: { token },
  });

  useEffect(() => {
    console.log('from secure authentication user in redux', isUserInRedux);
    const checkRedirect = async () => {
      try {
        const needUserRestore = !isUserInRedux && !!token;
        setIsAuthenticated(!!token);
        setAutheticationWasChecked(true);
        if (!token) {
          router.push('/login');
        }
        if (needUserRestore) {
          getUserFromToken();
          if (data) {
            dispatch(UserActions.userLoged({ token, user: data.user }));
          }
        }
      } catch (exception) {
        setErrors(exception);
      }
    };
    checkRedirect();
  }, [isUserInRedux, token, router, data, dispatch, getUserFromToken]);

  return {
    autheticationWasChecked,
    isAuthenticated,
    errors,
  };
};

export default useSecureAuthentication;
