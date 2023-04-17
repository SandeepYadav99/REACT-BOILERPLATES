import { useAppSelector } from '../../hooks/hooks';

const Login = () => {
  const state = useAppSelector((state) => state.auth);
  return <>Login</>;
};

export default Login;
