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
import PersonPage from "./pages/personPage";
import PersonDetailsPage from "./pages/personDetailsPage";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import AuthProvider from "./contexts/authContext";
import LoginPage from "./pages/loginPage";
import PersonCreditPage from "./pages/personCreditPage";
import TvReviewPage from "./pages/tvReviewPage";


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
      <AuthProvider>
        <SiteHeader /> {/* New Header  */}
        <MoviesContextProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/tvreviews/:id" element={<TvReviewPage/>} />
            <Route path="/movieVideo/:id" element={<MovieVideoPage />} />
            <Route path="/credits/:id" element={<PersonCreditPage/>} />
            <Route path="/movies/favourites" element={
              <ProtectedRoute>
                <FavouriteMoviesPage />
              </ProtectedRoute>
            } 
            />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/persons/:id" element={<PersonDetailsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/persons" element={<PersonPage />} />
            <Route path="/tvShows/:id" element={<TvPage />} />
            <Route path="/tv" element={<TvShowPage />} />
            <Route path="/movies/upComing" element={
              <ProtectedRoute>
                <UpComing />
              </ProtectedRoute>
            } 
            />
            <Route path="/movies/mustwatch" element={<MustWatchPage />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
