import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const ErrorSucessModal = ({ message, isshow, onToggle, success }) => (
  <>
    {' '}
    {!success ? (
      <Snackbar open={isshow} autoHideDuration={4000} onClose={onToggle}>
        <Alert onClose={onToggle} severity="error">
          <span style={{ fontSize: '1.500rem' }}>
            <strong>Oops! </strong>
            {message || 'Something Went Wrong!'}
          </span>
        </Alert>
      </Snackbar>
    ) : (
      <Snackbar open={isshow} autoHideDuration={4000} onClose={onToggle}>
        <Alert onClose={onToggle} severity="success">
          <span style={{ fontSize: '1.500rem' }}>{message}</span>
        </Alert>
      </Snackbar>
    )}
  </>
);

export default ErrorSucessModal;
