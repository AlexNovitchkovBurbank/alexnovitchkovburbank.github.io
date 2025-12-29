import MainPageLinks from "../../src/Components/MainPageLinks/MainPageLinks";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import React from "react";
import { MemoryRouter } from "react-router";

test("Render main page links", () => {
  const { container } = render(
    <MemoryRouter>
      <MainPageLinks />
    </MemoryRouter>
  );

  expect(container.children.length).toBe(1);

  const mainPageLinksSection = container.children.item(0) as HTMLElement;
  expect(mainPageLinksSection.id).toBe("mainPageLinks");
  expect(mainPageLinksSection.children.length).toBe(9);

  const folderStructureText = mainPageLinksSection?.children.item(
    0
  ) as HTMLElement;
  const codeStructureText = mainPageLinksSection?.children.item(
    1
  ) as HTMLElement;
  const testStructureText = mainPageLinksSection?.children.item(
    2
  ) as HTMLElement;
  const tsjsFolderStructureLink = mainPageLinksSection.children.item(
    3
  ) as HTMLElement;
  const tsjsCodeStructureLink = mainPageLinksSection.children.item(
    4
  ) as HTMLElement;
  const tsjsTestsStructureLink = mainPageLinksSection.children.item(
    5
  ) as HTMLElement;
  const csharpFolderStructureLink = mainPageLinksSection.children.item(
    6
  ) as HTMLElement;
  const csharpCodeStructureLink = mainPageLinksSection.children.item(
    7
  ) as HTMLElement;
  const csharpTestsStructureLink = mainPageLinksSection.children.item(
    8
  ) as HTMLElement;

  expect(folderStructureText?.className).toBe("mainPageHeaderText");
  expect(folderStructureText.tagName).toBe("DIV");
  expect(codeStructureText?.className).toBe("mainPageHeaderText");
  expect(codeStructureText.tagName).toBe("DIV");
  expect(testStructureText?.className).toBe("mainPageHeaderText");
  expect(testStructureText.tagName).toBe("DIV");

  expect(tsjsFolderStructureLink?.className).toBe("mainPageLink");
  expect(tsjsFolderStructureLink?.tagName).toBe("A");

  expect(tsjsCodeStructureLink?.className).toBe("mainPageLink");
  expect(tsjsCodeStructureLink?.tagName).toBe("A");

  expect(tsjsTestsStructureLink?.className).toBe("mainPageLink");
  expect(tsjsTestsStructureLink?.tagName).toBe("A");

  expect(csharpFolderStructureLink?.className).toBe("mainPageLink");
  expect(csharpFolderStructureLink?.tagName).toBe("A");

  expect(csharpCodeStructureLink?.className).toBe("mainPageLink");
  expect(csharpCodeStructureLink?.tagName).toBe("A");

  expect(csharpTestsStructureLink?.className).toBe("mainPageLink");
  expect(csharpTestsStructureLink?.tagName).toBe("A");
});
