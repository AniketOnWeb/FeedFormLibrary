import React, { useState, useEffect } from "react";
import CustomPortal from "./CustomPortal";
import "./style.css";

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

// const useStyles = makeStyles((theme) => ({
//   dialogPaper: {
//     width: "46rem",
//     height: "46rem",
//     backgroundColor: "#121212",
//     borderRadius: "1.5rem",
//     overflow: "hidden",
//     // transition: "all .2s ease-in-out",
//   },
//   wrapper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   options: {
//     width: "calc(100% - 3.5rem)",
//     height: "8rem",
//     backgroundColor: "#393e46",
//     borderRadius: ".7ren",
//     cursor: "pointer",
//     transition: "all .2s ease-in-out",
//     display: "flex",
//     alignItems: "center",

//     "& active": {
//       transform: "scale(.96)",
//       boxShadow: "inset 0 0 2rem .4rem #d65a311a",
//     },
//   },
//   slideLeft: {
//     transition: "0.4s all ease-in-out",
//   },
//   normalState: {
//     transition: "0.2s all ease-in-out",
//   },
// }));

// const useInputFieldClasses = makeStyles((theme) => ({
//   root: {
//     height: "7rem",
//     width: "100%",
//     minHeight: "inherit",
//     transition:
//       "background-color 80ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 80ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
//     borderRadius: "1.2rem",
//     "& label": {
//       transform: "none",
//     },
//     position: "relative",
//     backgroundColor: "rgb(255 255 255 / 23%)",
//     alignItems: "center",
//     display: "flex",
//   },

//   input: {
//     fontSize: "2.5rem !important",
//     lineHeight: "3rem",
//     fontWeight: "400 !important",
//     letterSpacing: "0.03rem",
//     color: "#eaeaea",
//     padding: "0 2rem",

//     "&::placeholder": {
//       color: "#9c9c9c",
//       fontSize: "2.5rem !important",
//       lineHeight: "3rem",
//       fontWeight: "400 !important",
//       opacity: ".4 !important",
//       letterSpacing: "0.03rem",
//     },

//     "&::-webkit-input-placeholder": {
//       color: "#9c9c9c",
//       fontSize: "2.5rem !important",
//       lineHeight: "3rem",
//       fontWeight: "400 !important",
//       opacity: ".4 !important",
//       letterSpacing: "0.03rem",
//     },
//   },
// }));

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
