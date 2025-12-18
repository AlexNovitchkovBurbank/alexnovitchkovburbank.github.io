import TsJsPage from "../../../src/Pages/TsJsPage/TsJsPage";
import { render, screen  } from "@testing-library/react";
import "@testing-library/jest-dom"
import { expect, test, vi } from "vitest";
import React from "react";
import { BrowserRouter } from "react-router";

test('tests that all TS/JS examples present', () => {
  const name = "Alexander Novitchkov-Burbank"
  const selfImgUrl = "./images/self.jpg"


  const { container } = render(
      <TsJsPage />
  );

  const navbar = container.children.item(0) as HTMLElement
  const bodyContainer = container.children.item(1) as HTMLElement

  expect(navbar.className).toBe("navbar")

  const img = screen.getAllByRole("img")

  expect(container.children.length).toBe(2)

  expect(bodyContainer.className).toBe("body")
  expect(bodyContainer?.children.length).toBe(2)

  expect(bodyContainer.children[0].textContent).toBe(name)

  expect(bodyContainer.children[1].tagName).toBe("IMG")
  expect(img.length).toBe(1)
  expect(img[0]).toHaveAttribute("src", selfImgUrl)
  
});
