import React from 'react';

type Props = { value: string };

export const Text = ({ value }: Props) => <p data-testid="text">{value}</p>;
