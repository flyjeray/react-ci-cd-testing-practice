import React from "react";
import { useState } from "react";

type Props = {
  labelOn: string;
  labelOff: string;
};

export default function CheckboxWithLabel({ labelOn, labelOff }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        data-testid="checkbox"
      />
      <span data-testid="label">{isChecked ? labelOn : labelOff}</span>
    </label>
  );
}
