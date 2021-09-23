import { useContext} from "react";
import { appContext } from "./AppContext";

export default function Search() {
  
  const { searchQueryFunc } = useContext(appContext);

  return (
    <div>
      <input
        type="search"
        name="searchBar"
        placeholder="Search"
        onChange={(val) => {
          searchQueryFunc(val.target.value);
        }}
      />
    </div>
  );
}