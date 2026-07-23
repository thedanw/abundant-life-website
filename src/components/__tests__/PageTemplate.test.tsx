/// <reference types="@testing-library/jest-dom" />
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import PageTemplate from "@/components/PageTemplate";

describe("PageTemplate", () => {
  it("renders children content", () => {
    render(
      <PageTemplate>
        <div data-testid="test-child">Hello World</div>
      </PageTemplate>
    );
    expect(screen.getByTestId("test-child")).toBeInTheDocument();
  });

  it("renders with proper SEO heading", () => {
    render(
      <PageTemplate heading="Test Page Heading">
        <p>Content</p>
      </PageTemplate>
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Test Page Heading"
    );
  });

  it("applies proper ARIA landmark role", () => {
    render(
      <PageTemplate>
        <p>Content</p>
      </PageTemplate>
    );
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders optional subtitle", () => {
    render(
      <PageTemplate heading="Title" subtitle="This is a subtitle">
        <p>Content</p>
      </PageTemplate>
    );
    expect(screen.getByText("This is a subtitle")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <PageTemplate className="custom-class">
        <p>Content</p>
      </PageTemplate>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders with proper max-width container", () => {
    const { container } = render(
      <PageTemplate>
        <p>Content</p>
      </PageTemplate>
    );
    const main = container.querySelector("main");
    expect(main).toHaveClass("mx-auto");
  });
});
