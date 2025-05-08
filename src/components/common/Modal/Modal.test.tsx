import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect, vi } from "vitest";
import { Modal } from "@/components/common/Modal/Modal";

describe("Modal", () => {
  const mockSetIsOpen = vi.fn();
  const defaultProps = {
    isOpen: true,
    setIsOpen: mockSetIsOpen,
    title: "Test Modal",
    children: <div>Modal Content</div>,
  };

  test("모달이 열려있을 때 제목과 내용이 표시된다", () => {
    render(<Modal {...defaultProps} />);

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  test("모달이 닫혀있을 때 내용이 표시되지 않는다", () => {
    render(<Modal {...defaultProps} isOpen={false} />);

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  test("모달 닫기 버튼을 클릭하면 setIsOpen이 호출된다", () => {
    render(<Modal {...defaultProps} />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });

  test("className prop이 전달되면 모달에 적용된다", () => {
    const customClass = "custom-modal";
    render(<Modal {...defaultProps} className={customClass} />);

    const modal = screen.getByRole("dialog");
    expect(modal).toHaveClass(customClass);
  });
});
