import React, { useState, useEffect } from "react";
import CustomPortal from "./CustomPortal";
import "./style.css";
import app from "firebase/app";
import Firebase from "./firebase";

const optionsList = [
  {
    name: "Feature",
    type: "idea",
    text: "Request feature",
  },

  {
    name: "Issue",
    type: "issue",
    text: "Request an issue",
  },
  {
    name: "Other",
    type: "message",
    text: "Other",
  },
];

const getStoriesAPI = async () => {
  let unSelect = app
    .firestore()
    .collection("Projects")
    .where("uid", "==", `6988`);

  //this will get the tasks with this use Id  `
  unSelect = unSelect.onSnapshot((snapshot) => {
    const newTasks = snapshot.docs.map((task) => ({
      id: task.id,
      ...task.data(),
    }));

    console.log(newTasks);
  });
};

const fn = (e, t, p) => {
  e.feedform = e.feedform || [];
  e.helppie = function () {
    e.feedform.push(arguments);
  };
  const n = t.createElement("script"),
    c = t.getElementsByTagName("script")[0];
  n.type = "application/javascript";
  n.src = `https://feedformui.netlify.app`;
  // console.log(e,t,p)
  n.async = !0;
  c.parentNode.insertBefore(n, c);
};

const FeedForm = (props) => {
  const [slide, setSlide] = useState(false);

  const [password, setpassword] = useState("");
  const [showPopup, setshowPopup] = useState(false);

  const handleChangePassword = (e) => {
    setpassword(e.target.value);
  };

  useEffect(() => {
    fn(window, document, props);
  }, []);

  const addStory = (type) => {
    Firebase.addFeedbacks(type, {
      uid: props.feedformId,
      text: "add a button please",
    });
  };

  const handleclickPopup = () => {
    if (document.getElementById("modal6")) {
      document.getElementById("modal6").style.display = "block";
    } else {
      const n = document.createElement("div"),
        c = document.getElementsByTagName("script")[0];
      n.id = "modal6";
      n.classList.add("popover");

      c.parentNode.insertBefore(n, c);
    }
  };

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <button
        onClick={() =>
          Promise.resolve(setshowPopup(true))
            .then(() => {
              handleclickPopup();
            })
            .catch((err) => {
              console.log(err);
            })
        }
      >
        click mess
      </button>

      {showPopup && (
        <CustomPortal>
          <div id="CustomPortal" className="backdrop"></div>
          <div className="feedformContainer">
            <div id="BillingInfoWrapper">
              <div
                style={{
                  width: "200%",
                  transform: slide
                    ? `translate(-${
                        document
                          .getElementById("BillingInfoWrapper")
                          .getBoundingClientRect().width /
                        (Number(
                          getComputedStyle(document.body, "").fontSize.match(
                            /(\d*(\.\d*)?)px/
                          )[1]
                        ) /
                          7.5) /
                        7.5
                      }rem)`
                    : "none",
                  transition: "0.4s all ease-in-out",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {optionsList.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          addStory(item.name);
                          setSlide(true);
                        }}
                        className="optionsList"
                      >
                        <div style={{ display: "flex", marginLeft: "1rem" }}>
                          ss
                        </div>
                        <div
                          style={{
                            fontSize: "2.4rem",
                            marginLeft: "2rem",
                            color: "#999999",
                          }}
                        >
                          {item.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <input
                      value={password}
                      onChange={handleChangePassword}
                      placeholder="password"
                      className="feedformInput"
                    />
                    <button onClick={() => setSlide(false)}>click</button>
                    <button onClick={() => addStory()}>click</button>
                    <button onClick={() => getStoriesAPI()}>click</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CustomPortal>
      )}
    </React.Fragment>
  );
};

export default FeedForm;
