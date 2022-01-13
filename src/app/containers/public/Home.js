import React from 'react';
import PublicFooter from '../../components/public/PublicFooter';
import PublicHeader from '../../components/public/PublicHeader';

const Home = (props) => {
  return (
    <div className="">
      <PublicHeader />
      <h1>Home Page</h1>
      {/* INTL */}
      {/* <FormattedMessage id="hello" /> */}
      <PublicFooter />
    </div>
  );
};

export default Home;
