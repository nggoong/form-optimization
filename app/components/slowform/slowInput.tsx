import PenaltyComp from "../penaltyComp/penaltyComp";
interface Props {
  name: string;
  fieldValues: Record<string, string>;
  touchedFields: Record<string, boolean>;
  wasSubmitted: boolean;
  handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event:React.FocusEvent<HTMLInputElement>) => void;
}

const SlowInput = ({
  name,
  fieldValues,
  touchedFields,
  wasSubmitted,
  handleBlur,
  handleChange
}: Props) => {
  const value = fieldValues[name];
  const touched = touchedFields[name];
  const errorMessage = "Error caused!!"
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;
  return (
    <div key={name}>
      <PenaltyComp />
      <label htmlFor={`${name}-input`}>{name}:</label><input
      id={`${name}-input`}
      name={name}
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      pattern="[a-z]{3,10}"
      required
      aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
      />
      {displayErrorMessage ? (
        <span role="alert" id={`${name}-error`} className="error-message">
          {errorMessage}
        </span>
      ) : null}
    </div>
  )
};

export default SlowInput;
