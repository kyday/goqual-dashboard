import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

import { CHeader } from "@coreui/react";

describe("CHeader Component", () => {
  const renderHeader = () => {
    return render(
      <MemoryRouter>
        <CHeader>
          <div>Test Header Content</div>
        </CHeader>
      </MemoryRouter>
    );
  };

  test("CHeader가 렌더링되고 내용이 표시된다", () => {
    renderHeader();
    expect(screen.getByText("Test Header Content")).toBeInTheDocument();
  });
});
