import { type JSX } from "react";

import { useFetchApi } from "../hooks/useFetchApi";
import { GridItem } from "./GridItem";

interface GifGridProps {
  title: string;
}

export const GifGrid = ({ title }: GifGridProps): JSX.Element => {
  const { isLoading, gifs } = useFetchApi(title);

  return (
    <>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <div className="card-grid">
          {gifs.map((data, i) => {
            console.log(`THIS IS THE DATA: ${data.url}`);
            return <GridItem key={data.id} {...data} />;
          })}
        </div>
      )}
    </>
  );
};

// -------------> V1

// import React, { type FC, type ReactElement, type Fragment } from "react";

// // Define types for our GIF data
// interface GifData {
//   title: string;
//   description: string;
//   url: string;
// }

// // Generic type for the component props
// interface GifGridProps<T extends GifData> {
//   items: T[];
//   renderItem?: (item: T) => ReactElement;
// }

// // Type for the GifGrid component return structure
// type GifGridComponent = ReactElement<{}, typeof Fragment>;

// // Pure functional component with generics
// export const GifGrid = <T extends GifData>({
//   items,
//   renderItem,
// }: GifGridProps<T>): GifGridComponent => {
//   // Default render function that ensures we always return the required elements
//   const defaultRenderItem = (item: T): ReactElement => (
//     <Fragment key={item.url}>
//       <h3>{item.title}</h3>
//       <p>{item.description}</p>
//       <img src={item.url} alt={item.title} />
//     </Fragment>
//   );

//   // Use provided renderItem or fall back to default
//   const renderer = renderItem || defaultRenderItem;

//   return <Fragment>{items.map((item) => renderer(item))}</Fragment>;
// };

// // Example usage component
// export const GifReader: FC<{ gifs: GifData[] }> = ({ gifs }) => {
//   return (
//     <Fragment>
//       <h2>Gif Collection</h2>
//       <GifGrid items={gifs} />
//     </Fragment>
//   );
// };

// ------------> V2

// import React, { type FC, type ReactElement, Fragment } from "react";
// import type { GifData } from "../interfaces";

// // Define types for our GIF data
// // interface GifData {
// //   title: string;
// //   description: string;
// //   url: string;
// // }

// // Generic type for the component props
// interface GifGridProps<T extends GifData> {
//   items: T[];
//   renderItem?: (item: T) => ReactElement;
// }

// // Pure functional component with generics
// export const GifGrid = <T extends GifData>({
//   items,
//   renderItem,
// }: GifGridProps<T>): ReactElement => {
//   // Default render function that returns a proper element structure
//   const defaultRenderItem = (item: T): ReactElement => (
//     <div>
//       <h3>{item.title}</h3>
//       <p>{item.title}</p>
//       <img src={item.url} alt={item.title} />
//     </div>
//   );

//   // Use provided renderItem or fall back to default
//   const renderer = renderItem || defaultRenderItem;

//   return (
//     <Fragment>
//       {items.map((item, index) => (
//         <div key={item.url || index}>{renderer(item)}</div>
//       ))}
//     </Fragment>
//   );
// };

// // Example usage component
// export const GifReader: FC<{ gifs: GifData[] }> = ({ gifs }) => {
//   return (
//     <Fragment>
//       <h2>Gif Collection</h2>
//       <GifGrid items={gifs} />
//     </Fragment>
//   );
// };
