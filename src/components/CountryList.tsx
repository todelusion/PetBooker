import useSearchBar from "../hooks/useComponent";
import { CountyList } from "../types/schema";
import type { SearchBarAction } from "./SearchBar";

interface ICountryListProps {
  countryList: CountyList;
  dispatchSearchBar: React.Dispatch<SearchBarAction>;
}

function CountryList({
  countryList,
  dispatchSearchBar,
}: ICountryListProps): JSX.Element {
  console.log(dispatchSearchBar);
  const { dispatch } = useSearchBar();
  const { countyItems } = countryList;
  return (
    <select
      size={5}
      onClick={(e) => {
        dispatch({
          type: "PICK_COUNTRY",
          payload: (e.target as HTMLSelectElement).value,
        });
        dispatchSearchBar({ type: "TOGGLE_LOCATION", payload: false });
      }}
      name="country"
      id="country_select"
      className="w-40 rounded-md border-2 border-black outline-none scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-xl"
    >
      {countyItems.countyItem.map((country) => (
        <option
          key={country.countyname}
          value={country.countyname}
          className="py-3.5 px-4 focus:bg-accent hover:bg-gray-300"
        >
          {country.countyname}
        </option>
      ))}
    </select>
  );
}

export default CountryList;
