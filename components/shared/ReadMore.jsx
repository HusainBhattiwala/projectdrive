/* eslint-disable react/button-has-type */
/* eslint-disable no-use-before-define */

'use client';

import { useEffect, useState } from 'react';
import P from '../typography/P';

const ELLIPSES = '…';

function ReadMore({ text, numberOfLines = 1, readMoreCharacterLimit = 150 }) {
  const [showingAll, setShowingAll] = useState(false);
  let teaserText;
  let remainingText;

  // eslint-disable-next-line no-shadow
  function getText(_showingAll, text, readMoreCharacterLimit, numberOfLines) {
    // eslint-disable-next-line no-shadow, no-unused-vars
    const { teaserText, remainingText } = _getReadMoreParts(
      text,
      numberOfLines,
      readMoreCharacterLimit,
    );
  }

  // eslint-disable-next-line no-shadow
  function _getReadMoreParts(text, _numberOfLines, readMoreCharacterLimit) {
    const remainingWordsArray = [];

    if (text) {
      const teaserWordsArray = text.split(' ');

      while (teaserWordsArray.join(' ').length > readMoreCharacterLimit) {
        remainingWordsArray.unshift(teaserWordsArray.pop());
      }

      teaserText = teaserWordsArray.join(' ');

      if (remainingWordsArray.length > 0) {
        remainingText = remainingWordsArray.join(' ');
      }
    }

    return {
      teaserText,
      remainingText,
    };
  }

  getText(showingAll, text, readMoreCharacterLimit, numberOfLines);
  // eslint-disable-next-line no-unused-vars
  const [isTextReady, setIsTextReady] = useState(false);

  useEffect(() => {
    setIsTextReady(true);
    _getReadMoreParts(text, numberOfLines, readMoreCharacterLimit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleReadMore() {
    setShowingAll(!showingAll);
  }

  return (
    <>
      {!showingAll && (
        <P>
          {teaserText.replace(/\s*$/, '')}
          <span className="select-text read-more__text--hide">
            {remainingText}
          </span>
          {ELLIPSES}
          <span
            onClick={toggleReadMore}
            className="pl-1 cursor-pointer text-primary"
          >
            Read more
          </span>
        </P>
      )}

      {showingAll && (
        <P className="select-text">
          {text}
          {ELLIPSES}
          <button
            onClick={toggleReadMore}
            className="pl-1 cursor-pointer text-primary"
          >
            Read less
          </button>
        </P>
      )}
    </>
  );
}

export default ReadMore;
