import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "@/components/common/Card/Card";

describe("Card", () => {
  test("Card 컴포넌트 렌더링 및 Props 확인", () => {
    render(
      <Card header="Test Header" title="Test Title">
        <div>Test Content</div>
      </Card>
    );

    // header 확인
    const header = screen.getByText("Test Header");
    expect(header).toBeInTheDocument();

    // title 확인
    const title = screen.getByText("Test Title");
    expect(title).toBeInTheDocument();

    // children 확인
    const children = screen.getByText("Test Content");
    expect(children).toBeInTheDocument();
  });
});
