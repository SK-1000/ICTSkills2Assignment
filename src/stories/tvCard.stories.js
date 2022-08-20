// import React from "react";
// import TvCard from "../components/tvCard";
// import SampleTv from "./sampleTvData";

// export default {
//   title: "TV Show Page/TvCard",
//   component: TvCard,
// };

// export const Basic = () => {
//   return (
//     <TvCard
//       tv={SampleTv}
//     />
//   );
// };
// Basic.storyName = "Default";

// export const Exceptional = () => {
//   const sampleNoPoster = { ...SampleTv, poster_path: undefined };
//   return (
//     <TvCard
//       tv={sampleNoPoster}
//     />
//   );
// };
// Exceptional.storyName = "exception";

import React from "react";
import TvCard from "../components/tvCard";
import SampleTv from "./sampleTvData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Tv Show Page/TvCard",
  component: TvCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <TvCard
      tv={SampleTv}
      action={(tv) => <AddToFavoritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTv, poster_path: undefined };
  return (
    <TvCard
      tv={sampleNoPoster}
      action={(tv) => <AddToFavoritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Exceptional.storyName = "exception";