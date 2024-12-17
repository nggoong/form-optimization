'use client'
import React from 'react';
import fieldNames from "@/constants/fieldNames";
import FastInput from "./fastInput";
import { useState } from "react";
import { inputFormDataType } from "@/app/util/typings/inputFormType";
import UserInputContextComponent from "@/app/context/wrapperComponent/userInputContextComponent";
import FastValidInput from './fastValidInput';

const Fastform = () => {
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const formAction = (value: FormData) => {
    console.log(value);
  };
  //TODO: 필드 네임의 isvalid값이 true면 valid를 사전에 진행해야하기 때문에 context api 접근 필요
  //TODO: 이렇게 하는 이유: context를 구독하는 모든 하위 컴포넌트들이 렌더링 되기 때문에 분리하여 구독하도록 함.

  return (
    <>
      <form action={formAction}>
        {fieldNames.map((fieldName: inputFormDataType) => {
          if (fieldName.isValid) {
            return (
              <React.Fragment key={fieldName.name}>
                <UserInputContextComponent>
                  <FastValidInput
                    name={fieldName.name}
                    
                    wasSubmitted={wasSubmitted}
                    key={fieldName.name}
                  />
                </UserInputContextComponent>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={fieldName.name}>
                <FastInput
                  name={fieldName.name}
                  wasSubmitted={wasSubmitted}
                  key={fieldName.name}
                />
              </React.Fragment>
            );
          }
        })}
        <button type="submit">fastform Submit</button>
      </form>
    </>
  );
};

export default Fastform;
