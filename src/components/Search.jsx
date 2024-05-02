import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { IoCameraSharp } from "react-icons/io5";
import "../components/Search.jsx";

const Search = () => {
  return (
    <form className="form">
      <div>
      <div className="left-icon">
        <IoIosSearch />
      </div>
      <input type="text" className="input" />
      <div className="right-icon">
          <MdKeyboardVoice />
          <IoCameraSharp /> 
      </div>
    </div>
    </form>
  )
}

export default Search;
