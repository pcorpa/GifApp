import type { Datum } from "../interfaces";

export const GridItem = ({ title, images }: Datum) => {
  return (
    <div className="card">
      <img src={images.downsized.url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
