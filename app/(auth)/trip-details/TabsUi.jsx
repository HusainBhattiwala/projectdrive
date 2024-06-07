export default function TabsUi({ activeTab, onChange }) {
  return (
    <div className="tabs flex-nowrap">
      <div
        className={`tab leading-5 rounded-t-lg font-bold w-1/2 ${
          activeTab === 0
            ? 'tab-active !text-primary border-b-2 !border-primary'
            : 'text-[#797979] hover:text-gray-600 border-b-2 !border-[#BFBFBF]'
        } !h-12`}
        onClick={() => onChange(0)}
      >
        Booking Details
      </div>
      <div
        className={`tab leading-5 rounded-t-lg font-bold w-1/2 rounded-bl-none ${
          activeTab === 1
            ? 'tab-active !text-primary border-b-2 !border-primary'
            : 'text-[#797979] hover:text-gray-600 border-b-2 !border-[#BFBFBF]'
        } !h-12`}
        onClick={() => onChange(1)}
      >
        Booking Activities
      </div>
    </div>
  );
}
