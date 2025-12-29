import TsJsPage from "../../../src/Pages/TsJsPage/TsJsPage";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test, vi } from "vitest";
import React from "react";
import { MemoryRouter } from "react-router";

test("tests that all TS/JS examples present", () => {
  vi.mock("../../../src/Components/Navbar/Navbar.tsx", () => {
    return { default: () => <div className="navbar"></div> };
  });

  vi.mock("../../../src/Components/FormatCard/FormatCard.tsx", () => {
    return { default: () => <div className="formatCard"></div> };
  });

  const { container } = render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: "/ts_js",
          search: "?id=ts_jsFolderStructure",
          state: { fromDashboard: true },
        },
      ]}
    >
      <TsJsPage />
    </MemoryRouter>
  );

  const navbar = container.children.item(0) as HTMLElement;
  const title = container.children.item(1) as HTMLElement;
  const bodyContainer = container.children.item(2) as HTMLElement;

  expect(navbar.className).toBe("navbar");

  expect(title.className).toBe("title");
  expect(title?.textContent).toBe("TS/JS");

  expect(container.children.length).toBe(3);

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
  expect(folderStructure?.id).toBe("ts_jsFolderStructure");
  expect(codeStructure?.id).toBe("ts_jsCodeStructure");
  expect(testStructure?.id).toBe("ts_jsTestsStructure");

  expect(folderStructure?.children.length).toBe(2);
  expect(codeStructure?.children.length).toBe(1);
  expect(testStructure?.children.length).toBe(1);
});
