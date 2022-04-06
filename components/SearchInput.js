import { Search } from "@material-ui/icons";
import SearchRounded from "@material-ui/icons/SearchRounded";

const SearchInput = ({ ...rest }) => {
  return (
    <div>
      <SearchRounded color="inherit" />
      <input {...rest} />
    </div>
  );
};

export default SearchInput;
