import React, { useRef } from 'react';
import Image from 'next/image';
import P from 'components/typography/P';
import Input from 'components/ui/Input';

function DriverNote({
  setDriverNote, driverNote, nameBoard, setNameBoard,
}) {
  const textareaRef = useRef(null);
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleChange = (event) => {
    setDriverNote(event.target.value);
    adjustTextareaHeight();
  };
  return (
    <div className="bg-white rounded-md !text-gray-700">
      <div className="grid sm:grid-cols-7 grid-cols-1 gap-y-3 items-start py-3 sm:px-6 px-2">
        <div className="col-span-2 flex gap-x-1">
          <div className="!w-3 relative">
            <Image src="/images/icons/note_primary.svg" alt="note_primary" fill />
          </div>
          <P className="text-[#797979] !text-normal !text-sm">
            Driver Notes :
          </P>
        </div>
        <div className="col-span-5">
          <textarea
            rows={5}
            onChange={handleChange}
            defaultValue={driverNote}
            ref={textareaRef}
            placeholder="Add driver note (if any)"
            className="w-full !text-gray-700 input input-bordered focus:border-primary focus:outline-none overflow-y-hidden min-h-[6rem] py-1"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-7 grid-cols-1 gap-y-3 items-center py-3 sm:px-6 px-2">
        <div className="col-span-2 flex gap-x-1">
          <div className="!w-3 relative">
            <Image src="/images/icons/name_board_primary.svg" alt="note_primary" fill />
          </div>
          <P className="text-[#797979] !text-normal !text-sm">
            Name Board :
          </P>
        </div>
        <div className="col-span-5">
          <Input onChange={(e) => { setNameBoard(e?.target?.value); }} value={nameBoard} placeholder="Name board" />
        </div>
      </div>
    </div>
  );
}

export default DriverNote;
