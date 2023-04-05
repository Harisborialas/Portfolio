import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    var btn = document.getElementById("btn");
  }, []);
  function leftClick() {
    btn.style.left = "0";
    btn.style.background = "#ffffff";
    btn.style.color = "black";

    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }

  function rightClick() {
    btn.style.left = "236px";
    btn.style.background = "black";
    btn.style.color = "white";

    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div class="button-box">
            <div id="btn"></div>
            <div>
              <button
                type="button"
                class="toggle-btn"
                id="btnaistartup"
                onClick={leftClick}>
                AI startup/developer
              </button>
              <button
                type="button"
                class="toggle-btn"
                id="btnsmartenduser"
                onClick={rightClick}>
                A very smart end user
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
