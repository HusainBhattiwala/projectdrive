import Dropdown from 'components/shared/Dropdown';
import countries from './countries';

export default function CountryCodeSelect({
  selectedCountry,
  onChange,
  disabled,
}) {
  const optionRenderer = (item) => (
    <>
      <img className="w-5 h-5 rounded-lg" src={item.flag} alt={item.label} />
      <span className="font-medium">{item.dialCode}</span>
    </>
  );

  return (
    <div className="relative">
      <Dropdown
        disabled={disabled}
        optionRenderer={optionRenderer}
        options={countries}
        onChange={(item) => onChange(item)}
      >
        <img
          className="flex-none w-5 h-5 rounded-lg"
          src={selectedCountry.flag}
          alt={selectedCountry.label}
        />
        <span className="font-medium">{selectedCountry.dialCode}</span>
      </Dropdown>
    </div>
  );
}
