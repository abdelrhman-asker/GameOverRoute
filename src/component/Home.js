import React, { useState } from "react";
import HomeNav from "./NavFooter/HomeNav";
import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  const [user, setUser] = useState(null);
  document.title = window.location.hash.slice(2, window.location.hash.length);
  return (
    <div>
      <HomeNav />
      <div className="col-12 MainFirstHomeSecEver">
        <div className="MainFirstHomeSec col-12">
          {/* {user ? user.first_name === "Abdo" ? <h2 style={{color:"white"}}>hello Asker </h2> :  null :  null} */}

          <div>
            {/*        
             <a href="https://wa.me/+201280603895/?text=الو"> whatsapp </a> */}

            <h3>
              Find & track the best <span> free-to-play </span> games!
            </h3>
          </div>
          <div>
            <h4>
              Track what you've played and search for what to play next! Plus
              get free premium loot!
            </h4>
          </div>
          <div>
            <Link to="/All">Browse Games</Link>
          </div>
        </div>
      </div>
      <div className="MainHomesecSection">
        <div className="PersonlRecMainDiv  ">
          <h4 className="PersonlRecMainH  d-flex justify-content-start align-items-center gap-2">
            <span>
              <FaRobot size={42} />
            </span>
            Personalized Recommendations
          </h4>
        </div>

        <div className="MainDivINtoMap container-fluid  col-12 text-left mx-auto">
          {data.slice(0, 3).map((data, index, idt) => {
            return (
              <Link
                to={`/Details/${data.id}`}
                key={data.id}
                className="MainDivMapImgAndTitle col-xl-4 mx-auto col-12 "
                style={{ position: "relative" }}
              >
                <div className="ImgMainDivForZoom">
                  <img
                    className="col-xl-12  col-12"
                    src={data.thumbnail}
                    alt="thumbnail"
                  />
                </div>
                <div className="py-3 col-10 d-flex justify-content-center align-items-center">
                  <div className="col">{data.title}</div>
                  <div className="col">
                    <span>FREE</span>
                    {/* { console.log("my idt" ,idt)} */}
                  </div>
                </div>

                {/* {              localStorage.setItem('dataas', data.id)
} */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
