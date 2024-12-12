'use client'
import { useState } from "react";
import SlowInput from "./slowInput";
const fieldNames = ['name', "job", "age", "gender", "location", "school", 'car', 'cigar'];

const Slowform = () => {
  const [fieldValues, setFieldValues] = useState({

  });
  const [touchedFields, setTouchedFields] = useState({

  });
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setWasSubmitted(true);
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget as HTMLInputElement;
    setFieldValues({
      ...fieldValues,
      [currentTarget.name]: currentTarget.value
    })
  }

  const handleBlur = (event:React.FocusEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget as HTMLInputElement;
    setTouchedFields({
      ...touchedFields,
      [currentTarget.name]: true
    })
  }
  return (
    <form noValidate onSubmit={handleSubmit}>
      {fieldNames.map((name) => (
        <SlowInput
        key={name}
        name={name}
        fieldValues={fieldValues}
        touchedFields={touchedFields}
        wasSubmitted={wasSubmitted}
        handleChange={handleChange}
        handleBlur={handleBlur}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  )
};

export default Slowform;
