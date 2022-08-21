
# ICT Skills 2 Assignment

Name: [Sheila Kirwan]

## Overview.

[ A paragraph on your React app's concept followed by a bullet-point list of its feature set - only list new/modified features if you are expanding the Movies app. ]

e.g. 
+ Feature 1
+ Feature 2
+ Feature 3
+ etc
+ etc

## Setup requirements.

[ Briefly state (to a third party) the setup steps necessary to run your app/client locally, e.g. .env and any other config files.]

## App Design.

### Routing/Navigation.

[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.] 

e.g.
+ /login - route to login page
+ /reviews/form - route to form to add reviews
+ /reviews/:id - route to specific movie review
+ "/" - homepage which is essentially moviepage
+ /movies/:id - route to a specified movie based on id
+ /movies/upComing - route to an upcoming movie page that displays all upcoming movies
+ /movies/favourites - route to favourites page which displays all favourites
+ /movieVideo/:id - route to a specified movie video based on id
+ /fantasymovie/form - route to form to add your fantasy movie
+ /movies/mustwatch - route to Must watch page which displays all seleced must watch movies
+ /persons - route to person page which displays all actors
+ /persons/:id - route to a specified person/actor based on id
+ /credits/:id - route to a credit relating to a specific actor based on id
+ "/tv - route to tv show page which displays all tv show
+ /tvShows/:id - route to a specified tv show based on id
+ /tvreviews/:id - route to specific tv review



### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

All navigation arrows working thoughout.

>Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported. Movies can also be tagged as favourites and have release date and vote average detailed

![](src/screenshots/homepage.png)

>Shows detailed information on a specific movie as well as a list of similar movies. Hyperlink to homepage of movie on header. Each Similar movie item has a hyperlink to a video page to see a video of the similar movie. 

![](src/screenshots/moviedetailspage.png)

>when a user clicks on the reviews FAB, a materials  ui drawer is expanded describing, Author, except and full Review hyperlink

![](src/screenshots/moviereviewsdrawer.png)

>from the movie details page, the user can select to see a video of the similar movie selected.

![](src/screenshots/videopagesimilarmovie.png)


>Lists People from the discoverperson endpoint. attempted sort by name. person details such as id and popularity rating are displayed on the person cards as well as a hyperlink to "more info on this person"

![](src/screenshots/personpage.png)

>UI complete for sort by people but coding not complete

![](src/screenshots/sortbypeople.png)


>Shows detailed information on a specific person as well as a list of similar movies. Hyperlink to homepage of person on header. Has a FAB which leads to a drawer of credit information specific to that person

![](src/screenshots/persondetailspage.png)


>clicking on the credits FAB expands a drawer containing person info on title, Character and a hyperlink to see a a page dedicated to the details of that credit.

![](src/screenshots/creditsdrawer.png)

>clicking on the hyperlink on a particular credit displays a page dedicated to info and an image of that movie as well as the person who was in it.

![](src/screenshots/personcreditpage.png)


>Lists Tv Shows from the discovertv endpoint. Filtering on title and genre attributes is supported. Tv show cards display origin country and vote average

![](src/screenshots/tvpage.png)

![](src/screenshots/tvshowfilter.png)

>Shows detailed information on a specific tv show. The header includeds show name original language and a Hyperlink to homepage of show on header. Has a FAB which leads to a drawer of reviews specific to that tv show.

![](src/screenshots/tvshowdetails.png)

![](src/screenshots/tvshowreviewsdrawer.png)

![](src/screenshots/tvreviewpage.png)


>Shows the create Fantasy movie form page, this page allows the user to enter a fantasy movie name, Genre and overview of the story and submit it. A snackbar message is displayed. Validation is also included

![](src/screenshots/createfantasymoviepage.png)
![](src/screenshots/validation.png)
![](src/screenshots/snackbar.png)



>Upcoming movies in a protected page and hence a login is required. 

![](src/screenshots/login.png)


>User is now authenticated as you will see by the welcome message in the next screenshot of upcoming movies page

>The upcoming movies page shows a list of upcoming movies, It also has a hyperlink to more info on the movie and an Icon so that the upcoming movie can be tagged as a must watch. (This tagging is not working correctly). each movie shows release date and vote average. There is also filtering by genre and a search field by title.

![](src/screenshots/upcomingmovies.png)
![](src/screenshots/filterupcoming.png)


>Shows detailed information on a specific upcoming as well as a list of similar movies. Hyperlink to homepage of movie on header as well as title. Each Similar movie item has a hyperlink to a video page to see a video of the similar movie. (movie ui complete but not playing)

![](src/screenshots/upcomingmoviedetails.png)
![](src/screenshots/upcomingmoviereviewdrawer.png)
![](src/screenshots/upcomingmovie%20review%20page.png)
![](src/screenshots/upcomingmovievideopage.png)

>The Favourites page displays any movies which were tagged as favourites on the movies page. The movies card has two additional icons. One to remove movie from favourites and the other to write a review of the movie

![](src/screenshots/favouritespage.png)

![](src/screenshots/writereview.png)

>The Must Watch page should show any movies selected by clicking the add to playlist icon in the upcoming movies list however I tried to code it similarly to favourites page but couldnt get it working. This is the ui

![](src/screenshots/mustwatchpage.png)



### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

>I have completed 17 stories in total, 6 of these related to movie and the remainder to the tv and person pages. Below I'm showing the additional stories that I added.

![](src/screenshots/allstories.png)

>filterPersonsCard
![](src/screenshots/filterpersonscard.png)

>PersonsCard
![](src/screenshots/personcardstory.png)

>PersonHeader - error message due to issue
![](src/screenshots/personheaderissuestory.png)

>filterTvShowCard
![](src/screenshots/filtertvshowstory.png)

>TvCardstory - note that in my sampletvdata.js, the movie Marvels Daredevil had no associated jpg so I updated the sampletvdata.js with a jpeg from cobra Kai which worked fine.
![](src/screenshots/tvcardstory.png)


>MovieDetails - I updated this story because I updated the page with a similar movies table.
![](src/screenshots/moviedetailsstory.png)


>PersonDetails 
![](src/screenshots/persondetailsstory.png)



>TvDetails 
![](src/screenshots/tvdetailsstory.png)


>TvHeader
![](src/screenshots/tvheaderstory.png)


>AppHeader - didn't run successfully due to the following error
![](src/screenshots/appheadererror.png)


## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc

![][caching]

## Authentication (if relevant).

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.
+ /reviews/:id
+ /movies/favourites

## Server-side persistence (if relevant)

[ Specify the persistence 
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png