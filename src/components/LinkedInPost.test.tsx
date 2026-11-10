import { render, screen } from "@testing-library/react";
import LinkedInPost from "./LinkedInPost";

test("embeds the LinkedIn post with a fallback link", () => {
  render(<LinkedInPost />);

  const frame = screen.getByTitle(/Embedded LinkedIn post/i);
  expect(frame).toHaveAttribute(
    "src",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7525908730186579968"
  );
  expect(frame).toHaveAttribute("loading", "lazy");

  const link = screen.getByRole("link", { name: /Open the post on LinkedIn/i });
  expect(link).toHaveAttribute("href", "https://www.linkedin.com/feed/update/urn:li:ugcPost:7525908730186579968/");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");

  const article = screen.getByRole("link", { name: /Read the article on Medium/i });
  expect(article).toHaveAttribute(
    "href",
    "https://medium.com/@hamjeth-misree/your-seed-is-fixed-your-ml-result-still-changed-914954549740"
  );
  expect(article).toHaveAttribute("target", "_blank");
  expect(article).toHaveAttribute("rel", "noopener noreferrer");
});
