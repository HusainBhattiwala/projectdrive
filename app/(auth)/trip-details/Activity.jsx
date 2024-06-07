import { useContext } from 'react';
import H1 from 'components/typography/H1';
import P from 'components/typography/P';
import { UtilityContext } from 'context/UtilityContext';

export default function Activity({ activity }) {
  const { getDate, getTime } = useContext(UtilityContext);
  return (
    <div className="rounded-xl">
      <div className="mx-auto bg-white rounded-lg">
        <div className="flex items-center justify-between gap-4 p-4">
          <P className="!text-xl font-bold">Activity</P>
        </div>
        <div className="px-4 divide-y">
          {
            activity.length === 0 && (
              <H1 className="text-center font-semibold py-28">No activity to show</H1>
            )
          }
          {activity.length > 0 && activity.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="py-6" key={index}>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 font-medium text-white rounded-full bg-primary uppercase">
                  {item.user_fname[0]}
                  {item.user_lname[0]}
                </div>
                <P className="text-gray-700 !text-base">
                  {item?.user_fname}
                  {' '}
                  {item?.user_lname}
                  {', '}
                  {getDate(item.updatedate)}
                  ,
                  {' '}
                  {getTime(item.updatedate)}
                </P>
              </div>
              <P className="max-w-xs ml-12 text-gray-700">
                {item.remarks}
              </P>

              {/* {item.details.map((detailItem) => (
                <P className="max-w-xs mx-auto mt-2 text-gray-700">
                  {detailItem}
                </P>
              ))} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
