import * as React from "react";
import styled from "styled-components";

interface Props {
  onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

const TextArea = styled.textarea`
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  width: 50%;
  height: 50vh;
`;

export const Editor = ({ onChange }: Props) => {
  return <TextArea onChange={onChange} />;
};
