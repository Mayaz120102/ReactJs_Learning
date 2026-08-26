import  { useEffect, useState } from "react";

const UserPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setIsLoading(false);
      });
  }, []);

  console.log(photos);
  return (
    <div>
      <h1>User Photos</h1>
     { isLoading ? <h1>Loading....</h1> :<div>
        {photos.map((photo) => {
          return (
            <div>
              <h1>{photo.id}</h1>
              <img src={photo.download_url} alt="" width="500" />
            </div>
          );
        })}
      </div>}
    </div>
  );
};

export default UserPhotos;
