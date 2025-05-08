import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import Content from "@/components/common/Content/Content";

vi.mock("@/Routes", async () => {
  const React = await import("react");

  const MockPage = React.lazy(() =>
    Promise.resolve({
      default: () => <div data-testid="mock-page">Mock Page Loaded</div>,
    })
  );

  return {
    default: [
      {
        name: "MockPage",
        path: "/mock",
        element: MockPage,
      },
    ],
  };
});

describe("<Content /> 컴포넌트와 Suspense 확인", () => {
  test("Suspense fallback 이후 라우트 컴포넌트가 렌더링되는지 확인", async () => {
    render(
      <MemoryRouter initialEntries={["/mock"]}>
        <Content />
      </MemoryRouter>
    );

    // fallback인 Spinner가 먼저 나오는지 확인
    expect(await screen.findByTestId("loading-spinner")).toBeInTheDocument();

    // 이후 MockPage가 나오는지 확인
    await waitFor(() => {
      expect(screen.getByTestId("mock-page")).toBeInTheDocument();
    });
  });
});
