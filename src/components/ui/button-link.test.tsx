import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ButtonLink } from "./button-link";

describe("ButtonLink", () => {
  it("opens external booking links safely", () => {
    render(<ButtonLink href="https://www.isportsystem.cz" external>Rezervovat lekci</ButtonLink>);
    const link = screen.getByRole("link", { name: "Rezervovat lekci" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
