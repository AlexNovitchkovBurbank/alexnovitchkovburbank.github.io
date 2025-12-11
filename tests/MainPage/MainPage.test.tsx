import MainPage from "../../src/Pages/MainPage/MainPage";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";

test('renders that "Alexander Novitchkov-Burbank" is present', () => {

  const name = "Alexander Novitchkov-Burbank"

  render(<MainPage />)

  const nameElement = document.getElementById("name")

  expect(nameElement).toBeTruthy()
  expect(nameElement?.textContent).toBe(name)
});