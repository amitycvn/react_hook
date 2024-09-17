import videoHomepage from "../../assets/video_introduct_2.mp4";
import videoHomepage2 from "../../assets/video_introduct.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      {/* <video autoPlay muted loop>
        <source src={videoHomepage2} type="video/mp4"></source>
      </video> */}
      <video autoPlay muted loop>
        <source src={videoHomepage} type="video/mp4"></source>
      </video>
    </div>
  );
};
export default HomePage;
