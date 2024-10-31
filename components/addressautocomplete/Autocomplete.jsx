'use client';

import {
  memo, useEffect, useRef, useState,
} from 'react';
import { CgClose } from 'react-icons/cg';
import {
  FaCameraRetro,
  FaHospitalAlt,
  FaHotel,
  FaPlane,
  FaUniversity,
} from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import useOnClickOutside from 'hooks/useOnClickOutside';
import P from '../typography/P';
import useAutosizeTextArea from './useAutosizeTextArea';

function Autocomplete(props) {
  const {
    autoCompleteComponent,
    // autoCompleteComponentClassName,
    items,
    onChange,
    placeholder,
    setUserPlace,
    setFocus,
    readOnly,
    isFullScreen = false,
    setIsFullScreen = () => {},
    name,
    errors,
    checkCoverage,
    clear,
    setClear,
    removeError,
    defaultValue,
    isViaLocation,
    clearSearchOnlyFromParent,
  } = props;

  const SelectedComponent = autoCompleteComponent || 'textarea';

  const ref = useRef();
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const [textvalue, setTextvalue] = useState('');

  useEffect(() => {
    setTextvalue(defaultValue || '');
  }, [defaultValue]);

  useEffect(() => {
    if (clearSearchOnlyFromParent) setTextvalue('');
  }, [clearSearchOnlyFromParent]);

  useEffect(() => {
    setShowError(errors);
    if (clear) {
      setTextvalue('');
      setUserPlace(null);
      items.length = 0;
      setClear(false);
    }
  }, [errors, clear, setUserPlace, items, setClear]);

  useAutosizeTextArea(inputRef.current, textvalue);

  function toggleOpen(value) {
    if (value.length > 0) {
      setOpen(true);
      onChange(value);
    } else {
      setOpen(false);
      setUserPlace(null);
    }
  }

  function setLocation(item) {
    const userAddress = {
      address: item.name,
      latLng: item.latLng,
      isAirport: !!item.types?.includes('airport'),
      locationid: item.locationid,
      postal_code: item.postal_code,
      regionid: item.regionid,
      locationtype: item.locationtype,
      placeid: item?.placeid,
      zoneId: item?.zoneId,
    };
    if (isViaLocation) {
      setUserPlace(userAddress);
    } else {
      setUserPlace((prev) => ({ ...prev, ...userAddress }));
    }
    setIsFullScreen(false);
  }

  function setError(value) {
    return value.length === 0 ? setShowError(true) : setShowError(false);
  }

  useOnClickOutside(ref, () => setOpen(false));

  function renderIcon(flagItems) {
    const { types } = flagItems;
    if (types) {
      if (types.includes('airport')) {
        return <FaPlane />;
      }
      if (types.includes('hotel') || types.includes('lodging')) {
        return <FaHotel />;
      }
      if (types.includes('hospital')) {
        return <FaHospitalAlt />;
      }
      if (types.includes('tourist_attraction')) {
        return <FaCameraRetro />;
      }
      if (types.includes('university')) {
        return <FaUniversity />;
      }
        <MdLocationPin />;
    } else {
      if (flagItems[0].types === 'airport') {
        return <FaPlane />;
      }
      if (flagItems[0].types === 'hotel' || flagItems[0].types === 'lodging') {
        return <FaHotel />;
      }
      if (flagItems[0].types === 'hospital') {
        return <FaHospitalAlt />;
      }
      if (flagItems[0].types === 'tourist_attraction') {
        return <FaCameraRetro />;
      }
      if (flagItems[0].types === 'university') {
        return <FaUniversity />;
      }
        <MdLocationPin />;
    }
    return <MdLocationPin />;
  }

  function removeValue() {
    if (!defaultValue) {
      setTextvalue('');
    }
  }

  return (
    <div className="relative w-full !text-gray-700" ref={ref}>
      {textvalue && (
        <div
          className="absolute cursor-pointer !text-[14px] !text-gray-700 right-6 top-8 z-[10]"
          onClick={() => {
            setTextvalue('');
            setOpen(false);
            setUserPlace(null);
            items.length = 0;
          }}
        >
          {defaultValue && items.length === 0 && (
            <P className="!text-gray-700 mt-[0px] mr-2">
              <CgClose />
            </P>
          )}
          {textvalue && items.length > 0 && (
            <P className="!text-gray-700 mt-[7px] z-10">
              <CgClose size={18} color="white" />
            </P>
          )}
          {items.length === 0 && open && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-5 h-5 mr-2 text-gray-200 animate-spin fill-primary"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      )}

      {showError && (
        <P className="animate-bounce absolute right-0 bg-red-500 text-white px-1 py-1 !text-xs font-bold z-10">
          Required
        </P>
      )}

      <SelectedComponent
        autoComplete="off"
        id={`text${name}`}
        value={textvalue}
        className={`${
          SelectedComponent !== 'string'
          || 'w-full pt-1 pl-1 overflow-hidden !text-[14px] text-black rounded-none resize-none min-h-12 h-fit input focus:border-primary focus:outline-none focus:ring-transparent active:ring-transparent disabled:bg-white disabled:border-none disabled:opacity-100 -top-6 address-text'
        }`}
        onChange={(e) => {
          toggleOpen(e.target.value);
          setTextvalue(e.target.value);
          setError(e.target.value);
          removeError(false);
        }}
        onFocus={() => {
          // eslint-disable-next-line no-unused-expressions
          setFocus;
        }}
        onBlur={() => {
          removeValue();
        }}
        placeholder={placeholder}
        readOnly={readOnly}
        name={name}
      />

      <div
        className={` ${
          isFullScreen
            ? 'fixed z-[9999999999] top-20 left-0 right-0 max-h-[100vh]'
            : 'absolute z-40 max-h-72 bottom-auto'
        } w-full overflow-x-hidden overflow-y-auto rounded-xl`}
      >
        {open && items.length > 0 && (
          <ul
            className={`pt-1 ${
              items.length > 0 ? 'border border-t-0 border-[#E1E1E140]' : ''
            } ${isFullScreen ? 'border-0 border-t' : ''}`}
            style={{ width: isFullScreen ? '100%' : ref.current?.clientWidth }}
          >
            {items.map((item, index) => (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                key={item.name}
                tabIndex={index + 1}
                onClick={() => {
                  setOpen(false);
                  setLocation(item);
                  checkCoverage(item);
                  setTextvalue(item.name);
                }}
                className="flex items-center w-full px-2 py-3 border-b cursor-pointer border-b-base-content/10 bg-[#223544] hover:bg-[#0e1c27] hover:bg-opacity-100"
              >
                <span className="text-[#B2B2B2] font-medium !text-lg">
                  {items.length > 0 && renderIcon(items[index])}
                </span>

                <P className="pl-2 !text-sm text-[#B2B2B2] font-medium">
                  {item.name}
                </P>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default memo(Autocomplete);
