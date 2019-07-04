import * as React from "react";
import marked from "marked";

import { Editor } from "../components/editor";
import { Preview } from "../components/preview";
import { Link } from "react-router-dom";

const renderer = new marked.Renderer();

renderer.link = (href, _title, text) => {
  if (href.match(/^http/)) {
    return `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
  }

  return `<a href="${href}" class="anchor">${text}</a>`;
};

renderer.table = (header, body) => {
  return `
  <div class="wt-table">
    <table>
    <thead>
      ${header}
    </thead>
    <tbody>
      ${body}
    </tbody>
    </table>
  </div>
  `;
};

export const Markdown = ({ history }) => {
  const [state, updateState] = React.useState("");
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      updateState(marked(e.target.value, { renderer }));
    },
    []
  );

  return (
    <>
      <div style={{ display: "flex" }}>
        <Editor onChange={onChange} />
        <Preview text={state} history={history} />
      </div>
      <Link to="/">to index</Link>
    </>
  );
};
