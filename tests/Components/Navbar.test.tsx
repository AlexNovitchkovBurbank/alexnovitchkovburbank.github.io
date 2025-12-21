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

  const { container } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const outer = container.firstChild as HTMLElement;
  const pageNavigation = outer.children[1] as HTMLElement;

  const links = screen.getAllByRole("link"); // for Link or a tags

  expect(container.children.length).toBe(1);

  expect(outer.id).toBe("navbar");

  expect(links.length).toBe(3);

  expect(outer.children.length).toBe(2);

  expect(links[0].textContent).toBe(homeLinkText);
  expect(links[0]).toHaveAttribute(linkToAttribute, homeUurl);

  expect(pageNavigation.id).toBe("page-navigation");
  expect(pageNavigation.children.length).toBe(2);

  expect(links[1].textContent).toBe(tsJsPageLinkText);
  expect(links[1]).toHaveAttribute(linkToAttribute, tsJsPageUrl);

  expect(links[2].textContent).toBe(csharpPageLinkText);
  expect(links[2]).toHaveAttribute(linkToAttribute, csharpPageUrl);
});
