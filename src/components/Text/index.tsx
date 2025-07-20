import React from "react";

type Props = { _value: string };

export const Text = ({ value }: Props) => <p data-testid="text">{value}</p>;
