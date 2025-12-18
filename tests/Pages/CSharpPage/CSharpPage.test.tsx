import CSharpPage from "../../../src/Pages/CSharpPage/CSharpPage";
import { render, screen  } from "@testing-library/react";
import "@testing-library/jest-dom"
import { expect, test, vi } from "vitest";
import React from "react";
import { BrowserRouter } from "react-router";

test('tests that all csharp examples present', () => {

  const { container } = render(
<CSharpPage />
  );
});
