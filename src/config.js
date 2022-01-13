const dev = {
  api: {
    URL: "",
  },
  CLIENT_ID: "",
  CLIENT_SECRET: "",
};

const stage = {
  api: {
    URL: "",
  },
  CLIENT_ID: "",
  CLIENT_SECRET: "",
};

const prod = {
  api: {
    URL: "",
  },
  CLIENT_ID: "",
  CLIENT_SECRET: "",
};

let config;
switch (process.env.REACT_APP_STAGE) {
  case "dev":
    config = dev;
    break;
  case "staging":
    config = stage;
    break;
  case "production":
    config = prod;
    break;
  default:
    config = dev;
    break;
}

export default config;
