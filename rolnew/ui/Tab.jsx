import { motion } from 'framer-motion';

export default function Tab({ chosenTab, setChosenTab, labels }) {
  return (
    <div className="flex space-x-1 bg-[#243545] ring-1 ring-white/30 rounded-full overflow-hidden">
      {labels.map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => setChosenTab(item.id)}
          className={`${
            chosenTab === item.id ? 'text-white bg-[#EC5C29]' : 'opacity-55'
          } rounded-full relative h-12 w-full font-medium transition text-white`}
        >
          {chosenTab === item.id && (
            <motion.span
              layoutId="bubble"
              className="absolute z-10 inset-0 text-white bg-[#EC5C29] rounded-full overflow-hidden"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="absolute whitespace-nowrap text-inherit z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
