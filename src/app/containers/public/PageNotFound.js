import React from "react";
import PublicFooter from "../../components/public/PublicFooter";
import PublicHeader from "../../components/public/PublicHeader";

const PageNotFound = (props) => {
  return (
    <div className="">
      <PublicHeader />
      <h1>404: Page Not Found</h1>
      <PublicFooter />
    </div>
  );
};

export default PageNotFound;
