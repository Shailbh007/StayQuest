import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  
  
  const [dates, setDates] = useState();
  const [openDate, setOpenDate] = useState(false);
  const { data, loading, error, reFetch } = useFetch(
    "/house"
  );


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">   
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
    </div>
  );
};

export default List;