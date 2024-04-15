import { render } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";
import { TEST_IDS } from "../../../constants/test-constants";

describe("LoadingSpinner", () => {
  it("renders without errors", () => {
    render(<LoadingSpinner />);
  });

  it("renders the loading spinner container", () => {
    const { getByLabelText } = render(<LoadingSpinner />);
    const loadingSpinnerContainer = getByLabelText("Loading spinner");
    expect(loadingSpinnerContainer).toBeInTheDocument();
  });

  it("renders the loading spinner", () => {
    const { getByTestId } = render(<LoadingSpinner />);
    const loadingSpinner = getByTestId(TEST_IDS.LoadingSpinner);
    expect(loadingSpinner).toBeInTheDocument();
  });
});