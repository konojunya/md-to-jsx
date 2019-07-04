import * as React from "react";
import styled from "styled-components";
import { History } from "history";

interface Props {
  text: string;
  history: History;
}

const Wrapper = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 50%;
`;

export const Preview: React.FC<Props> = props => {
  React.useEffect(() => {
    document.addEventListener("click", e => {
      const target = e.target as any;
      if (target.className === "anchor") {
        e.preventDefault();
        const href = target.getAttribute("href");
        props.history.push(href);
      }
    });
  }, []);

  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: props.text }} />
    </Wrapper>
  );
};
