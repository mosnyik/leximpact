import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";

function Hello() {
  return <h1>Welcome to Lex Impact</h1>;
}

describe("Hello Component", () => {
  it("renders Welcome to Lex Impact", () => {
    render(<Hello />);
    expect(screen.getByText("Welcome to Lex Impact")).toBeInTheDocument();
  });
});
