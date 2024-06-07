import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import P from '../typography/P';

function Alert({ errorLabel, showError, setError }) {
  const [show, setShow] = useState(showError);
  if (!show) return null;
  setTimeout(() => {
    setShow(false);
    setError(false);
  }, 4000);
  return (
    <div className="absolute right-3 top-2 z-10">
      <div className="alert alert-error shadow-lg rounded-sm float-left px-2 sm:px-4 text-white font-semibold !text-xs">
        <div className=" flex">

          <FaTimes onClick={() => { setShow(false); setError(false); }} />
          <P className="!text-xs">
            {' '}
            {errorLabel}
          </P>
        </div>
      </div>
    </div>
  );
}

export default Alert;
