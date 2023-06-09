import React from "react";
import { faDroplet, faSeedling } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icons/Icon";
import { nextWaterOrFertiizeDate } from "../helpers";

import css from "./WaterFertTile.module.css";

interface IProp {
  daysUntilNeed?: number | undefined;
  waterOrFertilizeArray?: string[] | undefined;
  isWater?: boolean;
  setEdit: any;
  water: any;
  fertilize: any;
}
const WaterFertTile = ({
  daysUntilNeed,
  waterOrFertilizeArray,
  isWater = true,
  setEdit,
  water,
  fertilize,
}: IProp) => {
  let daysText = daysUntilNeed === 1 ? "day" : "days";
  return (
    <div className={css.tile}>
      <div className={css.header}>
        {isWater ? (
          <>
            <Icon iconName={faDroplet} size="1x" color="var(--teal)" /> Water
          </>
        ) : (
          <>
            <Icon iconName={faSeedling} size="1x" color="var(--rust)" />{" "}
            Fertilizer
          </>
        )}
      </div>
      {daysUntilNeed ? (
        <div className={css.bodyText}>
          <div>
            Every {daysUntilNeed} {daysText}
          </div>
          <div>
            {waterOrFertilizeArray &&
              waterOrFertilizeArray.length > 0 &&
              isWater && (
                <span>
                  Next water:{" "}
                  {nextWaterOrFertiizeDate({
                    daysUntilNeed,
                    waterOrFertilizeArray,
                  })}
                </span>
              )}
            {!waterOrFertilizeArray?.length ||
              (waterOrFertilizeArray.length === 0 && isWater && (
                <div className={css.link} onClick={() => water()}>
                  Log water
                </div>
              ))}

            {waterOrFertilizeArray &&
              waterOrFertilizeArray.length > 0 &&
              !isWater && (
                <span>
                  Next water:{" "}
                  {nextWaterOrFertiizeDate({
                    daysUntilNeed,
                    waterOrFertilizeArray,
                  })}
                </span>
              )}
            {!waterOrFertilizeArray?.length ||
              (waterOrFertilizeArray.length === 0 && !isWater && (
                <div className={css.link} onClick={() => fertilize()}>
                  Log fertilizer
                </div>
              ))}
          </div>{" "}
        </div>
      ) : (
        <div className={css.link} onClick={() => setEdit(true)}>
          {isWater ? "Add water info" : "Add fertilizer info"}
        </div>
      )}
    </div>
  );
};

export default WaterFertTile;
