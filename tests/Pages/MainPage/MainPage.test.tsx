import MainPage from "../../../src/Pages/MainPage/MainPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test, vi } from "vitest";
import React from "react";
import { BrowserRouter } from "react-router";

test('makes sure that the main page has a navbar and has "Alex Novitchkov-Burbank" and an image is present', () => {
  const name = "Alexander Novitchkov-Burbank";
  const selfImgUrl = "./images/self.jpg";

  vi.mock("../../../src/Components/Navbar/Navbar.tsx", () => {
    return { default: () => <div className="navbar"></div> };
  });

  const { container } = render(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );

  const navbar = container.children.item(0) as HTMLElement;
  const bodyContainer = container.children.item(1) as HTMLElement;

  expect(navbar.className).toBe("navbar");

  const img = screen.getAllByRole("img");

  expect(container.children.length).toBe(2);

  expect(bodyContainer.className).toBe("body");
  expect(bodyContainer?.children.length).toBe(2);

  expect(bodyContainer.children[0].textContent).toBe(name);

  expect(bodyContainer.children[1].tagName).toBe("IMG");
  expect(img.length).toBe(1);
  expect(img[0]).toHaveAttribute("src", selfImgUrl);
});
