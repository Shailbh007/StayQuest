import "./propertyList.css";
import useFetch from "../../hooks/useFetch";
const PropertyList = () => {
  const { data, loading, error } = useFetch("/house/countByType");
  const images=[
    "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/359790225.jpg?k=cf25556607fea8fe2b3d59844863b7b1676920fe639b92bfcdd30698e42a3ec8&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2013/06/thumb_720_450_dreamstime_xxl_20152679-Custom.jpg",
    "https://content.jdmagicbox.com/comp/delhi/d5/011pxx11.xx11.130524235936.b9d5/catalogue/mumma-s-pg-lajpat-nagar-2-delhi-paying-guest-accommodations-for-girl-student-vlunlvql0z.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtenr3hHuNkD4-N5VbBCxthUu2zAHci9E3PQ&usqp=CAU"
  ]
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
