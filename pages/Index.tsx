import * as React from "react";
import { Link } from "react-router-dom";

export const Index: React.FC = () => (
  <>
    <h1>index</h1>
    <Link to="markdown">go markdown page</Link>
  </>
);
