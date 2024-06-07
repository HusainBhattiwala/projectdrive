function Radio({
  name, id, changeRideStatus, isChecked, label, className,
}) {
  return (
    <div className="form-control">
      <label className="cursor-pointer label" htmlFor={id}>
        <input
          type="radio"
          name={name}
          className="radio radio-primary !border-white"
          onChange={() => changeRideStatus(id)}
          checked={isChecked}
          id={id}
        />
        <span className={`label-text ${isChecked ? ' text-white' : 'text-white'}  pl-3 ${className}`}>{label}</span>
      </label>
    </div>
  );
}

export default Radio;
