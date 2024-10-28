import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {data,loading,error,reFetch}=useFetch("/house/countByCity?cities=Ranchi,Dumka,Jamshedpur");
  console.log(data);
  const images=[
    "https://i.pinimg.com/736x/b0/a7/ef/b0a7efeb0f42c42d52725113711d0b41.jpg",
    "https://content.r9cdn.net/rimg/dimg/9d/2a/69b0587f-lm-50358-1607a083117.jpg?width=1366&height=768&xhint=2461&yhint=1924&crop=true",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6fF8LKFJl8Ws1-eo41m5NlTVsSAczNBpuw&s"

  ]
  return  (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src={images[0]}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ranchi</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src={images[2]}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Jamshedpur</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={images[1]}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Patna</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
