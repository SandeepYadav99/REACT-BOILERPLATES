import Header from './Header';
import Sidebar from './Sidebar';

type DashboardProps = {
  children: JSX.Element | any;
};

const DashboardLayoutComponent = ({ children }: DashboardProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default DashboardLayoutComponent;
