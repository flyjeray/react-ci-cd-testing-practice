import { useState } from "react";

export default function CheckboxWithLabel({ labelOn, labelOff }) {
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
