import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// Genreal Meethods
import AppLoader from './app/components/loaders/AppLoader';
import ErrorSucessModal from './app/components/modals/ErrorSucessModal';
import Login from './app/containers/auth/Login';
import SignUp from './app/containers/auth/SignUp';
import Home from './app/containers/public/Home';
import PageNotFound from './app/containers/public/PageNotFound';
import { hideModal } from './app/redux/actions/ErrorAction';
import { getLoggedInUser } from './app/redux/actions/UserActions';
const ClientLayoutAsync = lazy(() => import('./app/containers/layout/ClinetLayout'));

// Authenticate Route
export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('tokenName') ? (
          <Component {...props} />
        ) : (
          <Route path={`**`} component={<PageNotFound />} /> // <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const App = (props) => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loading);
  const modal = useSelector((state) => state.modal);

  useEffect(() => {
    if (localStorage.getItem('tokenName')) {
      dispatch(getLoggedInUser());
    }
  }, []);

  const handleToggle = () => {
    dispatch(hideModal());
  };
  return (
    <>
      {modal.isshow && <ErrorSucessModal onToggle={handleToggle} {...modal} />}
      {loader.isLoading && <AppLoader title={loader.title} />}
      <div className="layout">
        <div className="overlay"></div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path={`/sign-up`} element={<SignUp />} />
          {/* Private Routes */}

          <Route
            path="/client/*"
            element={
              <Suspense fallback={<AppLoader />}>
                <ClientLayoutAsync />
              </Suspense>
            }
          />

          {/* <Redirect from={match.url} to={`/`} /> */}
          <Route path={`**`} element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
