import CSharpPage from "../../../src/Pages/CSharpPage/CSharpPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test, vi } from "vitest";
import React from "react";
import { BrowserRouter } from "react-router";

test("Render C# page", () => {
  vi.mock("../../../src/Components/Navbar/Navbar.tsx", () => {
    return { default: () => <div className="navbar"></div> };
  });

  const { container } = render(<CSharpPage />);

  expect(container.children.length).toBe(3);

  const navbar = container.children.item(0) as HTMLElement;
  expect(navbar.className).toBe("navbar");

  const title = container.children.item(1) as HTMLElement;
  expect(title.className).toBe("title");
  expect(title?.children.length).toBe(0);

  const bodyContainer = container.children.item(2) as HTMLElement;
  expect(bodyContainer.className).toBe("exampleSection");
  expect(bodyContainer?.children.length).toBe(3);

  const folderStructure = bodyContainer?.children.item(0) as HTMLElement;
  const codeStructure = bodyContainer?.children.item(1) as HTMLElement;
  const testStructure = bodyContainer?.children.item(2) as HTMLElement;

  expect(folderStructure?.className).toBe(
    "folderStructure formatCardContainer"
  );
  expect(codeStructure?.className).toBe("codeStructure formatCardContainer");
  expect(testStructure?.className).toBe("testStructure formatCardContainer");

  expect(folderStructure?.children.length).toBe(2);
  expect(codeStructure?.children.length).toBe(4);
  expect(testStructure?.children.length).toBe(3);
});
