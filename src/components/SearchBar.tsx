import React, { useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

import {
  searchPath,
  mapPinPath,
  calendarPath,
  creditCardPath,
} from "../img/icons/icons";
import Button from "./Button";
import DatePicker from "./DatePicker";
import CountryList from "./CountryList";
import PetCard from "./PetCard";

type SearchBarAction =
  | {
      type: "TOGGLE_LOCATION";
      payload: boolean;
    }
  | {
      type: "TOGGLE_CALENDAR";
      payload: boolean;
    }
  | {
      type: "TOGGLE_PETCARD";
      payload: boolean;
    }
  | {
      type: "TOGGLE_ALL";
    };

const initSearchBarState = {
  showLocation: false,
  showCalendar: false,
  showPetCard: false,
};

const searchBarReducer = (
  state: typeof initSearchBarState,
  action: SearchBarAction
): typeof initSearchBarState => {
  switch (action.type) {
    case "TOGGLE_LOCATION":
      return {
        showLocation: action.payload,
        showCalendar: false,
        showPetCard: false,
      };
    case "TOGGLE_CALENDAR":
      return {
        showCalendar: action.payload,
        showLocation: false,
        showPetCard: false,
      };
    case "TOGGLE_PETCARD":
      return {
        showPetCard: action.payload,
        showCalendar: false,
        showLocation: false,
      };
    case "TOGGLE_ALL":
      return {
        showCalendar: false,
        showLocation: false,
        showPetCard: false,
      };
    default:
      return state;
  }
};

function SearchBar(): JSX.Element {
  const [{ showLocation, showCalendar, showPetCard }, dispatch] = useReducer(
    searchBarReducer,
    initSearchBarState
  );

  useEffect(() => {
    const handleClose = (): void => {
      document.addEventListener("click", () => {
        dispatch({ type: "TOGGLE_ALL" });
      });
    };

    return handleClose;
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyUp={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      className="relative cursor-default"
    >
      <div className="flex-center mb-2 rounded-full border-4 border-primary px-4">
        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_LOCATION", payload: !showLocation })
          }
          type="button"
          className="flex-center"
        >
          <img src={mapPinPath} alt="map" />
          <span className="px-3">選擇地點</span>
          <FontAwesomeIcon icon={showLocation ? faChevronUp : faChevronDown} />
        </button>
        <hr
          style={{ borderStyle: "solid" }}
          className="my-3 mx-4 block h-10 border-r-2"
        />
        <button
          type="button"
          className="flex-center outline-none"
          onClick={() =>
            dispatch({ type: "TOGGLE_CALENDAR", payload: !showCalendar })
          }
        >
          <img src={calendarPath} alt="calendar" />
          <span className="px-3">選擇入住－退房日期</span>
          <FontAwesomeIcon icon={showCalendar ? faChevronUp : faChevronDown} />
        </button>
        <hr
          style={{ borderStyle: "solid" }}
          className="my-3 mx-4 block h-10 border-r-2"
        />
        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_PETCARD", payload: !showPetCard })
          }
          type="button"
          className="flex-center"
        >
          <img src={creditCardPath} alt="creditCard" />
          <span className="px-3">選擇寵物名片</span>
          <FontAwesomeIcon icon={showPetCard ? faChevronUp : faChevronDown} />
        </button>
        <Button
          text="搜尋"
          type="Secondary"
          icon={searchPath}
          className="ml-4 px-2 py-2"
        />
      </div>
      <div className="absolute left-1/2 z-10 -translate-x-1/2">
        <AnimatePresence>
          {showCalendar && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              key="DatePicker"
              transition={{ duration: 0.3, ease: [0.65, 0.05, 0.36, 1] }}
              className="origin-top"
            >
              <DatePicker />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute left-2 z-10">
        <AnimatePresence>
          {showLocation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              key="DatePicker"
              transition={{ duration: 0.3, ease: [0.65, 0.05, 0.36, 1] }}
              className="origin-top"
            >
              <CountryList key="CountryList" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute right-2 z-10">
        <AnimatePresence>
          {showPetCard && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              key="DatePicker"
              transition={{ duration: 0.3, ease: [0.65, 0.05, 0.36, 1] }}
              className="origin-top"
            >
              <PetCard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SearchBar;