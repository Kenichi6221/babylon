import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import userSelector from 'redux/selectors';

const useSecureAuthentication = () => {
  const [autheticationWasChecked, setAutheticationWasChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();
  const authenticate = useSelector((state) =>
    userSelector.getIsAuthenticated(state)
  );

  useEffect(() => {
    const checkRedirect = async () => {
      setAutheticationWasChecked(true);
      setIsAuthenticated(authenticate);
      if (!authenticate) {
        await router.push('/login');
      }
    };
    checkRedirect();
  });

  return {
    autheticationWasChecked,
    isAuthenticated,
  };
};

export default useSecureAuthentication;
