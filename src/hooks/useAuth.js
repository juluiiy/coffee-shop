import useLocalStorage from './useLocalStorage';

const useAuth = () => {
  const { value: user, setLocalStorage } = useLocalStorage('user');

  const signIn = (email, password) => {
    if (email === user.email && password === user.password) {
      return true;
    }

    return false;
  };

  const signUp = (email, password) => {
    setLocalStorage({ email, password });
    return true;
  };

  const signOut = () => {
    setLocalStorage(null);
  };

  return { user, signIn, signOut, signUp };
};

export default useAuth;
