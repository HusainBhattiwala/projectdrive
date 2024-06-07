import P from 'components/typography/P';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';

export default function Stepper({
  label,
  count,
  onChange,
  className,
  min = 0,
  disabled = false,
  isRequired = false,
}) {
  function increment(value) {
    const val = value ? value + 1 : min + 1;
    return val;
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <P className="flex-none w-[2.5rem] text-gray-800 whitespace-pre">
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </P>
      <div className="flex items-center relative">
        <Button
          className="!text-xl btn-primary w-8 h-8 !rounded-xs"
          onClick={() => onChange((prev) => (prev > min ? prev - 1 : min))}
          disabled={disabled}
        >
          -
        </Button>
        <div className="w-11">
          <Input
            step={1}
            value={count}
            onChange={(event) => onChange(() => (Number(event.target.value) > min
              ? Number(event.target.value)
              : min))}
            type="number"
            className="text-center !h-7 !rounded-none"
            min={min}
          />
        </div>
        <Button
          className="!text-xl btn-primary w-8 h-8"
          onClick={() => onChange((prev) => increment(prev))}
          disabled={disabled}
        >
          +
        </Button>
      </div>
    </div>
  );
}
