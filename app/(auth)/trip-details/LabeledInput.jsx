import P from 'components/typography/P';
import Input from 'components/ui/Input';

export default function LabeledInput({
  label,
  className,
  value,
  onChange,
  noIcon,
  disabled,
  required,
  errorFn = () => {},
  errorMsg,
}) {
  return (
    <div className="relative">
      <div
        className={`flex flex-col gap-2 mo:mb-5 sm:my-3 sm:items-center sm:gap-5 sm:flex-row ${className}`}
      >
        <P className="flex-none sm:w-[8.5rem] font-bold text-gray-800">
          {label}
        </P>
        <Input
          inputIcon={!disabled && !noIcon && '/images/trip-details/edit.svg'}
          value={value}
          disabled={disabled}
          required={required}
          errorFn={errorFn}
          errorMsg={errorMsg}
          onChange={(event) => {
            onChange((event.target.value).replace(/^\s/, ''));
          }}
        />
      </div>
    </div>
  );
}
