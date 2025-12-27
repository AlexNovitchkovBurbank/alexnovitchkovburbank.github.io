import Navbar from "../../Components/Navbar/Navbar";
import "../MainPage/MainPage.css";

const MainPage = () => {
  const selfImgUrl = "./images/self.jpg";

  return (
    <>
      <Navbar />
      <div className="body">
        <div className="name">Alexander Novitchkov-Burbank</div>
        <img className="selfImg" src={selfImgUrl}></img>
      </div>
    </>
  );
};

export default MainPage;
