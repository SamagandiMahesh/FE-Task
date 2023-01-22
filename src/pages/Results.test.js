import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Results from "./Results";
import { MemoryRouter } from "react-router-dom";

const server = setupServer(
  rest.get("/itineraries", (req, res, ctx) => {
    return res(ctx.json([{arrivalDate:{year:2023,month:0,dayOfMonth:10,hourOfDay:17,minute:21,second:40},departureDate:{year:2023,month:0,dayOfMonth:9,hourOfDay:17,minute:21,second:40},arrivalLocation:"Roma",departureLocation:"Toronto",carrier:"Spanair",price:17.49},
    {arrivalDate:{year:2023,month:0,dayOfMonth:10,hourOfDay:17,minute:21,second:40},departureDate:{year:2023,month:0,dayOfMonth:9,hourOfDay:17,minute:21,second:40},arrivalLocation:"Spain",departureLocation:"London",carrier:"Ryanair",price:17.49}]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays results when no filter is selected", async () => {
  render(
    <MemoryRouter
      initialEntries={[{ pathname: "/results", state: { toLoc: 'London' } }]}
    >
      <Results />
    </MemoryRouter>
  );

  await screen.findByTestId("flight-detail-list");
  expect(screen.getByRole("heading")).toHaveTextContent("Results");
  expect(screen.getByText("Toronto")).toBeInTheDocument();
})



test("loads and displays results when  filter is selected", async () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: "/results", state: { toLoc: 'Spain', fromLoc: 'London' } }]}
      >
        <Results />
      </MemoryRouter>
    );
  
    await screen.findByTestId("flight-detail-list");
    expect(screen.getByRole("heading")).toHaveTextContent("Results");
    expect(screen.getByText("Spain")).toBeInTheDocument();
  })
  