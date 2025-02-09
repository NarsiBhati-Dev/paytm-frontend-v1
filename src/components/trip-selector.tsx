import RadioButton from "./radio-button";

const TripSelector = () => {
  return (
    <div className="flex justify-between bg-[#e8f8fd] p-0.5 rounded w-full ">
      <RadioButton title={"One Way"} />
      <RadioButton title={"Round Trip"} />
    </div>
  );
};

export default TripSelector;
