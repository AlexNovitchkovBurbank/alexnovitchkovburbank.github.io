import Navbar from "../../src/Components/Navbar/Navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import React from "react";
import { BrowserRouter } from "react-router";

test("renders that the navbar has the right link text and urls", () => {
  const linkToAttribute = "href";

  const homeLinkText = "Home";
  const homeUurl = "/";

  const tsJsPageLinkText = "TS/JS";
  const tsJsPageUrl = "/ts_js";

  const csharpPageLinkText = "C#";
  const csharpPageUrl = "/csharp";

  const conceptsPageLinkText = "Concepts";
  const conceptsPageUrl = "/concepts";

  const { container } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const component = container.firstChild as HTMLElement;
  expect(container.children.length).toBe(1);
  expect(component.id).toBe("navbar");
  expect(component.children.length).toBe(2);

  const links = screen.getAllByRole("link"); // for Link or a tags
  expect(links.length).toBe(4);

  expect(links[0].textContent).toBe(homeLinkText);
  expect(links[0]).toHaveAttribute(linkToAttribute, homeUurl);

  const pageNavigation = component.children[1] as HTMLElement;
  expect(pageNavigation.id).toBe("page-navigation");
  expect(pageNavigation.children.length).toBe(3);

  expect(links[1].textContent).toBe(tsJsPageLinkText);
  expect(links[1]).toHaveAttribute(linkToAttribute, tsJsPageUrl);

  expect(links[2].textContent).toBe(csharpPageLinkText);
  expect(links[2]).toHaveAttribute(linkToAttribute, csharpPageUrl);

  expect(links[3].textContent).toBe(conceptsPageLinkText);
  expect(links[3]).toHaveAttribute(linkToAttribute, conceptsPageUrl);
});
