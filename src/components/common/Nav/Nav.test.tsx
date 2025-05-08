import { Sidebar } from "@/components/common/Nav/Nav";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";

describe("Sidebar", () => {
  test("사이드바가 렌더링되고 네비게이션 항목이 존재하는지 확인", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    // 브랜드 텍스트 확인
    expect(screen.getByText("FE-GOQUAL-DASHBOARD")).toBeInTheDocument();

    // 네비게이션 항목 확인
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Control")).toBeInTheDocument();
  });

  test("Dashboard NavLink는 /dashboard로 연결되는지 확인", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const dashboardLink = screen.getByText("Dashboard").closest("a");
    expect(dashboardLink).toHaveAttribute("href", "/dashboard");
  });

  test("Control NavLink는 /control로 연결되는지 확인", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const controlLink = screen.getByText("Control").closest("a");
    expect(controlLink).toHaveAttribute("href", "/control");
  });
});
