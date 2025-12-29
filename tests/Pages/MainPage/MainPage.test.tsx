import MainPage from "../../../src/Pages/MainPage/MainPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test, vi } from "vitest";
import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router";

test('makes sure that the main page has a navbar and has "Alex Novitchkov-Burbank" and an image is present', () => {
  const name = "Alexander Novitchkov-Burbank";
  const selfImgUrl = "./images/self.jpg";

  vi.mock("../../../src/Components/Navbar/Navbar.tsx", () => {
    return { default: () => <div className="navbar"></div> };
  });

  vi.mock("../../../src/Components/MainPageLinks/MainPageLinks.tsx", () => {
    return { default: () => <div id="mainPageLinks"></div> };
  });

  const { container } = render(
    <MemoryRouter>
      <MainPage />
    </MemoryRouter>
  );

  const navbar = container.children.item(0) as HTMLElement;
  const bodyContainer = container.children.item(1) as HTMLElement;
  const mainPageLinks = container.children.item(2) as HTMLElement;

  expect(container.children.length).toBe(3);

  expect(navbar.className).toBe("navbar");
  expect(navbar?.children.length).toBe(0);

  expect(bodyContainer.className).toBe("body");
  expect(bodyContainer?.children.length).toBe(2);

  expect(mainPageLinks.id).toBe("mainPageLinks");
  expect(mainPageLinks?.children.length).toBe(0);

  const img = screen.getAllByRole("img");

  expect(bodyContainer.children[0].tagName).toBe("DIV");
  expect(bodyContainer.children[0].textContent).toBe(name);

  expect(bodyContainer.children[1].tagName).toBe("IMG");
  expect(img.length).toBe(1);
  expect(img[0]).toHaveAttribute("src", selfImgUrl);
});
