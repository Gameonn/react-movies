import fetchMock, { enableFetchMocks } from "jest-fetch-mock";
import { render, screen } from "@testing-library/react";
import { showMovieDetail } from "../api";
import {
  fakeSelectedMovie,
  fakeMovieDetail,
  invalidMovieId,
} from "../fixtures";
import Detail from "../pages/Detail";

describe("showDetail()", () => {
  enableFetchMocks();

  //Prepare the response we want to get from axios
  const mockedResponse = {
    data: fakeMovieDetail,
  };

  test("should return detail of the movie", async () => {
    // Make the mock return the custom axios response
    fetchMock.mockResponseOnce(mockedResponse);
    render(<Detail />);
    const data = await showMovieDetail(fakeSelectedMovie);
    expect(data).toEqual(fakeMovieDetail);
  });

  test("should not match with invalid movie", async () => {
    // Make the mock return the custom axios response
    fetchMock.mockResponseOnce(mockedResponse);
    render(<Detail />);
    const data = await showMovieDetail(invalidMovieId);

    expect(data).not.toEqual(fakeMovieDetail);
  });
});
