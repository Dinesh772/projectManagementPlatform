import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import stores from "../../stores";

import Counter from "./index";

describe("Counter test", () => {
  it("should test if Counter is rendered or not", () => {
    const counter = render(
      <Router>
        <Counter counterStore={stores.counterStore} />
      </Router>
    );
    expect(counter).toBeDefined();
  });
});
