import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("@vercel/speed-insights/react");

test("renders hero content", () => {
  render(<App />);
  expect(screen.getByText(/Hamjeth Misree/i)).toBeInTheDocument();
  expect(screen.getByText(/Explore projects/i)).toBeInTheDocument();
});
