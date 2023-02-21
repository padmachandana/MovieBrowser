import Hero from "./Hero";

const HomeView = () => {
  const back =
    "https://img.freepik.com/free-photo/movie-background-collage_23-2149876030.jpg";
  return (
    <>
      <Hero text="Welcome. Millions of Movies. Explore Now" backdrop={back} />

      <div className="container ">
        <div className="row">
          <div className="col-lg8 offset-lg-1 my-5 p-5">
            <h1>Eat.</h1>
            <h1>Sleep.</h1>
            <h1>Binge.</h1>
            <h1>Reapeat.</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeView;
