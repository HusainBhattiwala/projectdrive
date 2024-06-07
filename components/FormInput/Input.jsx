import P from '../typography/P';

function Input({
  name,
  register,
  errors,
  type,
  validationSchema,
  value,
  className,
  placeholder,
  readonly = false,
  onChange = () => {},
}) {
  return (
    <>
      <input
        name={name}
        type={type}
        defaultValue={value}
        className={className}
        autoComplete="new-password"
        readOnly={readonly}
        {...register(name, validationSchema)}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className="basis-[100%]">
        {errors && errors[name]?.type === 'required' && (
        <P className=" text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors[name]?.message}
        </P>
        )}
        {errors && errors[name]?.type === 'minLength' && (
        <P className="  text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors[name]?.message}
        </P>
        )}
        {errors && errors[name]?.type === 'pattern' && (
        <P className="  text-red-500 px-1 py-1 !text-xs font-bold z-10">
          {errors[name]?.message}
        </P>
        )}
      </div>
    </>
  );
}
export default Input;
