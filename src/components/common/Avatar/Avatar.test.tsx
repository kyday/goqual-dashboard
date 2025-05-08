import { Avatar } from "@/components/common/Avatar/Avatar";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Avatar", () => {
  test("Avatar 렌더링 및 Props 확인", () => {
    render(<Avatar name="Test" color="secondary" size="md" />);

    const avatar = screen.getByText("Test");
    expect(avatar).toBeInTheDocument();

    expect(avatar).toHaveClass("bg-secondary");
    expect(avatar).toHaveClass("avatar-md");
  });
});
