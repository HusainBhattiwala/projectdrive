import { FaTimes } from 'react-icons/fa';
import Button from './ui/Button';

const filterList = [
  {
    text: 'Price - Low to high',
    label: 'lowtohigh',
  },
  {
    text: 'Price - High to Low',
    label: 'hightolow',
  },
  // {
  //   text: 'Add LUGGAGE',
  //   label: 'luggage',
  // },
  // {
  //   text: 'ADD NEW PASSENGER',
  //   label: 'passengers',
  // },
];

function FleetFilter({ filterFleet, isActive, removeFilter }) {
  return (
    <div className="flex items-center pb-5 justify-center sm:pb-0">
      {filterList
        && filterList.map((filter) => (
          <Button
            key={filter.label}
            className={`${
              isActive === filter.label
                ? 'btn-primary !rounded-full font-normal md:pl-4 md:pr-4 md:mr-3 mr-1'
                : 'bg-[#223544] btn-outline !rounded-full font-semibold !text-black md:px-8 border-gray-300 border-1 mr-1 md:mr-5 hover:!text-white hover:!bg-[#223544] scale-95 hover:scale-100'
            }`}
          >
            <span
              onClick={() => filterFleet(filter.label)}
              className="flex items-center h-full"
            >
              {filter.text}
            </span>
            {isActive === filter.label && (
              <span
                className="px-1 py-1 ml-2 bg-white rounded-full bg-opacity-60"
                onClick={removeFilter}
              >
                <FaTimes className="font-normal text-gray-500" />
              </span>
            )}
          </Button>
        ))}
    </div>
  );
}

export default FleetFilter;
