import { render, screen, cleanup, userEvent } from "@testing-library/react";

// import MovieAppProvider from "../context/MovieContext";
import Home from "../pages/Home";

const setup = () => {
  const utils = render(
    // <MovieAppProvider>
    <Home />
    // </MovieAppProvider>
  );
  const input = utils.getByLabelText("search-input");
  return {
    input,
    ...utils
  };
};

test("renders the home component search input without error", () => {
  setup();
  expect(screen.getAllByRole("input")).toBeInTheDocument();
});

test("should render Home component", () => {
  const { input } = setup();
  userEvent.type(input, "harry potter");
  expect(input.value).toBe("harry potter");
});
