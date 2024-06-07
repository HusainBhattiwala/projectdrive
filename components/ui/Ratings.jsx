function Ratings({ length }) {
  return (
    <div className="rating rating-sm">
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          type="radio"
          name="rating-2"
          className="mr-1 bg-orange-700 mask mask-star"
          readOnly
          defaultChecked={i === length - 1}
        />
      ))}
    </div>
  );
}

export default Ratings;
