import Hero from "./Hero";
const AboutView = () => {
  const back =
    "https://img.freepik.com/free-photo/movie-background-collage_23-2149876030.jpg";
  return (
    <>
      <Hero text="About us" backdrop={back} />
      <div className="container">
        <div className="row">
          <div className="col-lg8  my-5">
            <p>
              Web page where users can search for movies and learn more about
              them is a great way to provide an engaging and informative
              experience for movie fans. Here are some elements that could be
              included in the page's description:{" "}
            </p>
            <div className="offset-lg-1">
              <p>
                1. Search bar: The main feature of the page is a search bar
                where users can enter the name of a movie and find information
                about it. The search bar should be prominently displayed at the
                top of the page, making it easy for users to find and use.{" "}
              </p>
              <p>
                {" "}
                2. Movie results: Once the user has entered their search term,
                the page should display a list of movies that match the search
                criteria. The list could include movie titles, release years,
                ratings, and other relevant information.{" "}
              </p>
              <p>
                3. Movie details: When a user clicks on a movie from the search
                results, the page should display more detailed information about
                the movie. This could include a plot summary, cast and crew
                information, trailers, reviews, and other details that help
                users understand what the movie is about and whether they might
                be interested in watching it.{" "}
              </p>
              <p>
                4. Responsive design: To ensure that the page is accessible to
                all users, it should be designed to work well on a variety of
                devices and screen sizes. This can be achieved through
                responsive design techniques, such as using flexible layouts,
                media queries, and other design strategies that adapt to the
                user's device.
              </p>
            </div>
            <p>
              {" "}
              Overall, a web page that allows users to search for and learn
              about movies can be a valuable resource for movie fans, helping
              them discover new films and learn more about their favorite
              movies. By including search functionality, detailed movie
              information, user interaction features, and responsive design, the
              page can provide a rich and engaging experience that keeps users
              coming back for more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutView;
