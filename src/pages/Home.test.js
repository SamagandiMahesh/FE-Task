import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

const server = setupServer(
  rest.get("/locations", (req, res, ctx) => {
    return res(ctx.json(['Spain', 'Madrid']));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays location filters", async () => {
  render(
    <MemoryRouter
      initialEntries={[{ pathname: "/", }]}
    >
      <Home />
    </MemoryRouter>
  );

  await screen.findByTestId("flight-search-form");
  expect(screen.getByRole("heading")).toHaveTextContent("Home Page");
  expect(screen.getByTestId("search-button")).toBeInTheDocument();
})

