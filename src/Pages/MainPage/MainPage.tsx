import Navbar from "../../Components/Navbar/Navbar";
import self from "../../assets/images/self.jpg";
import "../MainPage/MainPage.css";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div id="body">
        <div id="name">Alexander Novitchkov-Burbank</div>
        <img className="selfImg" src={self}></img>
      </div>
    </>
  );
};

export default MainPage;
