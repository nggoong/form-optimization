'use client'
import { useState, useEffect } from "react";
import SlowInput from "./slowInput";
import fieldNames from "@/constants/fieldNames";


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

  useEffect(() => {
    console.log("fieldValues")
    console.log(fieldValues)
  }, [fieldValues])
  return (
    <form noValidate onSubmit={handleSubmit}>
      {fieldNames.map((fieldName) => (
        <SlowInput
        key={fieldName.name}
        name={fieldName.name}
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
