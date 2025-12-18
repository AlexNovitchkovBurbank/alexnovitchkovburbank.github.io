import FormatCard from "../../src/Components/FormatCard/FormatCard";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import React from "react";

test("renders that FormatCard has a title, url and a why statement", () => {
  const title = "title";
  const url = "url";
  const whyThisWay = "whyThisWay";

  const { container } = render(
    <FormatCard title={title} url={url} whyThisWay={whyThisWay} />
  );

  const outer = container.firstChild as HTMLElement;

  expect(container.children.length).toBe(1);
  expect(outer.className).toBe("container");

  expect(outer.children.length).toBe(3);

  expect(outer.children[0].textContent).toBe(title);
  expect(outer.children[1].className).toBe("img");
  expect(outer.children[2].textContent).toBe(whyThisWay);
});
