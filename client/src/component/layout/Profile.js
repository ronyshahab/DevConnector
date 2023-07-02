import React from "react";
import Navbar from "./Navbar";

const Profile = () => {
  const linkName =["Developer", "Login" , "Register"]
  const linkPath =["/profiles", "/login", "/register"]
  return (
    <>
       <Navbar name={linkName} link={linkPath} />
    <div className="container">
      <div className="profileContainer">
        <div className="profileBanger">
          <div className="profileImgContainer">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="round-img"
              alt=""
            />
          </div>
          <div className="profileInfoContainer">
            <p className="profileName">
              {" "}
              <h2> John doe </h2>
            </p>

            <p className="profileWork">Developer at Microsoft</p>

            <p className="profileWorkLocation">At,surat</p>
            <ul>
              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="profileDetail">
          <div className="profileBio">
            <p className="text-primary">
              <h2>John Bios</h2>
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            corrupti, fugiat distinctio magni expedita iusto mollitia architecto
            qui, impedit ex maxime. Aperiam reprehenderit numquam iusto
            accusamus laboriosam optio quos alias.
          </div>
          <div className="skillSets ">
            <p className="text-primary">
              <h2>Skills</h2>
            </p>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
        <div className="eduExpContainer">
          <div className="expsContainer">
            <div className="expContainer">
              <p className="text-primary">
                <h2>Experience</h2>
              </p>
              <p className="company">Microsoft</p>
              <p className="time">Oct,2013-current</p>
              <p className="position">Senior Developer</p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                quidem illo quibusdam ipsum!
              </p>
            </div>
          </div>
          <div className="eduContainer">
            <p className="text-primary">
              <h2>Education</h2>
            </p>
            <p className="college">Bhagwan Mahavir Polytechnic</p>
            <p className="time">2020-2023</p>
            <p className="degree">Diploma</p>
            <p className="field">Computer Science</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque consequuntur, nostrum fugiat cupiditate voluptas
              facilis.
            </p>
          </div>
        </div>
        <div className="githubContainer">
          <p className="text-primary">
            <h2>
              <i class="fa-brands fa-github"></i> Github Repos
            </h2>
          </p>
          <div className="repo1 repo">
            <div className="repoInfoContainer">
              <p className="text-primary">Repo one</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nostrum, optio!
              </p>
            </div>
            <div className="repoBadgeContainer">
              <div className="repoStar">Star:4.4</div>
              <div className="repoWatcher">Watchers:40</div>
              <div className="repoForks">Forks:25</div>
            </div>
          </div>
          <div className="repo1 repo">
            <div className="repoInfoContainer">
              <p className="text-primary">Repo one</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nostrum, optio!
              </p>
            </div>
            <div className="repoBadgeContainer">
              <div className="repoStar">Star:4.4</div>
              <div className="repoWatcher">Watchers:40</div>
              <div className="repoForks">Forks:25</div>
            </div>
          </div>
          <div className="repo1 repo">
            <div className="repoInfoContainer">
              <p className="text-primary">Repo one</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nostrum, optio!
              </p>
            </div>
            <div className="repoBadgeContainer">
              <div className="repoStar">Star:4.4</div>
              <div className="repoWatcher">Watchers:40</div>
              <div className="repoForks">Forks:25</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
