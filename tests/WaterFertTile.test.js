import { render, screen } from "@testing-library/react";
import WaterFertTile from "../components/PlantDetails/WaterFertTile";

describe("WaterFertTile - water tile", () => {
  test("days until need but no log dates", () => {
    render(
      <WaterFertTile
        daysUntilNeed={2}
        waterOrFertilizeArray={[]}
        isWater
        setEdit
        water
        fertilize
      />
    );
    const headingElement = screen.getByText("Every 2 days");
    expect(headingElement).toBeInTheDocument();
    const subText = screen.getByText("Log watering");
    expect(subText).toBeInTheDocument();
  });

  test("1 day until need but no log dates", () => {
    render(
      <WaterFertTile
        daysUntilNeed={1}
        waterOrFertilizeArray={[]}
        isWater
        setEdit
        water
        fertilize
      />
    );
    const headingElement = screen.getByText("Every 1 day");
    expect(headingElement).toBeInTheDocument();
    const subText = screen.getByText("Log watering");
    expect(subText).toBeInTheDocument();
  });

  test("renders a heading with the correct text", () => {
    render(
      <WaterFertTile
        daysUntilNeed={null}
        waterOrFertilizeArray={[]}
        isWater
        setEdit
        water
        fertilize
      />
    );
    const headingElement = screen.getByText("Add water info");
    expect(headingElement).toBeInTheDocument();
  });

  test("renders a heading with the correct text", () => {
    render(
      <WaterFertTile
        daysUntilNeed={2}
        waterOrFertilizeArray={["2023-06-07T04:23:47.042Z"]}
        isWater
        setEdit
        water
        fertilize
      />
    );
    const headingElement = screen.getByText("Every 2 days");
    expect(headingElement).toBeInTheDocument();
    const subText = screen.getByText("Next water: Jun 8th");
    expect(subText).toBeInTheDocument();
  });
});
