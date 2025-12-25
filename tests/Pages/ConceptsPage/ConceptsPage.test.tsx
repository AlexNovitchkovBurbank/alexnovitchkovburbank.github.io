import ConceptsPage from "../../../src/Pages/ConceptsPage/ConceptsPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test, vi } from "vitest";
import React from "react";

test("tests that all concept text are present", () => {
  vi.mock("../../../src/Components/Navbar/Navbar.tsx", () => {
    return { default: () => <div className="navbar"></div> };
  });

  vi.mock("../../../src/Components/ConceptCard/ConceptCard.tsx", () => {
    return { default: () => <div className="concept"></div> };
  });

  const { container } = render(<ConceptsPage />);

  const navbar = container.children.item(0) as HTMLElement;
  const title = container.children.item(1) as HTMLElement;
  const bodyContainer = container.children.item(2) as HTMLElement;

  expect(navbar.className).toBe("navbar");
  
  expect(title.className).toBe("title");
  expect(title?.textContent).toBe("Concepts");

  expect(container.children.length).toBe(3);

  expect(bodyContainer.className).toBe("body");
  expect(bodyContainer?.children.length).toBe(4);

  const cloudConceptsSection = bodyContainer?.children.item(0) as HTMLElement;
  const testConceptsSection = bodyContainer?.children.item(1) as HTMLElement;
  const CI_CDSection = bodyContainer?.children.item(2) as HTMLElement;
  const github_branchesSection = bodyContainer?.children.item(3) as HTMLElement;

  expect(cloudConceptsSection?.className).toBe("section");
  expect(testConceptsSection?.className).toBe("section");
  expect(CI_CDSection?.className).toBe("section");
  expect(github_branchesSection?.className).toBe("section");

  expect(cloudConceptsSection?.children.length).toBe(2);
  expect(cloudConceptsSection?.children.item(0)?.className).toBe("title");
  expect(cloudConceptsSection?.children.item(1)?.className).toBe("conceptsText");
  const cloudConceptsText = cloudConceptsSection?.children.item(1) as HTMLElement;
  expect(cloudConceptsText?.children.item(0)?.className).toBe("concept");
  expect(cloudConceptsText?.children.item(1)?.className).toBe("concept");
  expect(cloudConceptsText.children.length).toBe(2);

  expect(testConceptsSection?.children.length).toBe(2);
  expect(testConceptsSection?.children.item(0)?.className).toBe("title");
  expect(testConceptsSection?.children.item(1)?.className).toBe("conceptsText");
  const testConceptsText = testConceptsSection?.children.item(1) as HTMLElement;
  expect(testConceptsText?.children.item(0)?.className).toBe("concept");
  expect(testConceptsText?.children.item(1)?.className).toBe("concept");
  expect(testConceptsText?.children.item(2)?.className).toBe("concept");
  expect(testConceptsText.children.length).toBe(3);

  expect(CI_CDSection?.children.length).toBe(2);
  expect(CI_CDSection?.children.item(0)?.className).toBe("title");
  expect(CI_CDSection?.children.item(1)?.className).toBe("conceptsText");
  const CI_CDConceptsText = CI_CDSection?.children.item(1) as HTMLElement;
  expect(CI_CDConceptsText?.children.item(0)?.className).toBe("concept");
  expect(CI_CDConceptsText?.children.item(1)?.className).toBe("concept");
  expect(CI_CDConceptsText.children.length).toBe(2);

  expect(github_branchesSection?.children.length).toBe(2);
  expect(github_branchesSection?.children.item(0)?.className).toBe("title");
  expect(github_branchesSection?.children.item(1)?.className).toBe("conceptsText");
  const githubBranchesConceptsText = github_branchesSection?.children.item(1) as HTMLElement;
  expect(githubBranchesConceptsText?.children.item(0)?.className).toBe("concept");
  expect(githubBranchesConceptsText?.children.item(1)?.className).toBe("concept");
  expect(githubBranchesConceptsText?.children.item(2)?.className).toBe("concept");
  expect(githubBranchesConceptsText?.children.item(3)?.className).toBe("concept");
  expect(githubBranchesConceptsText?.children.item(4)?.className).toBe("concept");
  expect(githubBranchesConceptsText.children.length).toBe(5);
});
