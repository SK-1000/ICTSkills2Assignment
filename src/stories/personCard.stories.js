// import React from "react";
// import PersonCard from "../components/personCard";
// import SamplePerson from "./samplePersonData";

// export default {
//   title: "Person Page/PersonCard",
//   component: PersonCard,
// };

// export const Basic = () => {
//   return (
//     <PersonCard
//       person={SamplePerson}
//     />
//   );
// };
// Basic.storyName = "Default";

// export const Exceptional = () => {
//   const sampleNoPoster = { ...SamplePerson, profile_path: undefined };
//   return (
//     <PersonCard
//       person={sampleNoPoster}
//     />
//   );
// };
// Exceptional.storyName = "exception";


import React from "react";
import PersonCard from "../components/personCard";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Person Page/PersonCard",
  component: PersonCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <PersonCard
      person={SamplePerson}
      action={(person) => <AddToFavoritesIcon person={person} />}
      taging={(person) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SamplePerson, poster_path: undefined };
  return (
    <PersonCard
      person={sampleNoPoster}
      action={(person) => <AddToFavoritesIcon person={person} />}
      taging={(person) => null}
    />
  );
};
Exceptional.storyName = "exception";