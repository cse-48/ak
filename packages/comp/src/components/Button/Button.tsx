import React from "react";

export interface ButtonProps {
  buttenText: string;
}

const Button = (props: ButtonProps) => {
  return <button data-testing-id="cta">{props.buttenText}</button>;
};

export default Button;