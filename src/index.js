import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import TvShowPage from "./pages/tvShowPage";
import UpComing from "./pages/upComing";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MustWatchPage from "./pages/mustWatchPage";
import MovieReviewPage from "./pages/movieReviewPage"; //NEW
import MovieVideoPage from "./pages/movieVideoPage"; //NEW
import SiteHeader from "./components/siteHeader"; //NEW
import MoviesContextProvider from "./contexts/moviesContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TvPage from './pages/tvDetailsPage' //added temp for tv details

// // added temp for tv images

// const images = [
//   "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
//   "/v1QQKq8M0fWxMgSdGOX1aCv8qMB.jpg",
//   "/2iGN0aKHJYD0xQydlfuCUAcgNbO.jpg",
//   "/rjBwhsOzHKUw2NIOrE7aMqjfe6s.jpg",
// ]

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader /> {/* New Header  */}
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movieVideo/:id" element={<MovieVideoPage />} />
            <Route
              path="/movies/favourites"
              element={<FavouriteMoviesPage />}
            />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/tvShows/:id" element={<TvPage />} />
            <Route path="/tv" element={<TvShowPage />} />
            <Route path="/movies/upComing" element={<UpComing />} />
            <Route
              path="/movies/mustwatch"
              element={<MustWatchPage />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
