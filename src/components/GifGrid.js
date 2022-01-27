import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
// import { getGif } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{category}</h3>
      <div className="card-grid">
        {loading && <p className="animate__animated animate__flash">Loading</p>}
        {/* <ol>
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>  */}
        <ol>
          {images.map((image) => (
            <GifGridItem key={image.id} {...image} />
          ))}
        </ol>
      </div>
    </>
  );
};
