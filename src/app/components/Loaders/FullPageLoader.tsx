const FulPageLoader = () => {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          zIndex: '9999',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflowY: 'hidden',
          top: 0,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="64px" height="64px" viewBox="0 0 128 128">
          <rect x="0" y="0" width="100%" height="100%" fill="none" />
          <g>
            <linearGradient id="linear-gradient">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#ea0c1c" />
            </linearGradient>
            <path d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z" fill="url(#linear-gradient)" fillRule="evenodd" />
            <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1080ms" repeatCount="indefinite"></animateTransform>
          </g>
        </svg>
      </div>
    </>
  );
};

export default FulPageLoader;
