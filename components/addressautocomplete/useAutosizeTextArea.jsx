import { useEffect } from 'react';

const useAutosizeTextArea = (
  textAreaRef,
  value,
) => {
  useEffect(() => {
    if (textAreaRef) {
      // eslint-disable-next-line no-param-reassign
      textAreaRef.style.height = '0px';
      const { scrollHeight } = textAreaRef;

      // eslint-disable-next-line no-param-reassign
      textAreaRef.style.height = `${scrollHeight}px`;
    }
  }, [textAreaRef, value]);
};

export default useAutosizeTextArea;
