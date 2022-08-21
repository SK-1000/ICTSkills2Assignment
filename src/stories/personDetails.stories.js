// import React from "react";
// import PersonDetails from "../components/personDetails";
// import SamplePerson from "./samplePersonData";

// export default {
//   title: "Person Details Page/PersonDetails",
//   component: PersonDetails,
// };

// export const Basic = () => <PersonDetails person={SamplePerson} />;



// Basic.storyName = "Default";


import React from "react";
import PersonDetails from "../components/personDetails";
import SamplePerson from "./samplePersonDetailsData";
import { MemoryRouter } from "react-router";
// import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Person Details Page/PersonDetails",
  component: PersonDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    // (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <PersonDetails person={SamplePerson} />;

Basic.storyName = "Default";
