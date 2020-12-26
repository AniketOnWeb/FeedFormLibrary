// import React, { useState, useEffect } from "react";
// import CustomPortal from "./CustomPortal";
// import "./style.css";
// import app from "firebase/app";
// import Firebase from "./firebase";

// const optionsList = [
//   {
//     name: "Feature",
//     type: "idea",
//     text: "Request feature",
//   },

//   {
//     name: "Issue",
//     type: "issue",
//     text: "Request an issue",
//   },
//   {
//     name: "Other",
//     type: "message",
//     text: "Other",
//   },
// ];

// const getStoriesAPI = async () => {
//   let unSelect = app
//     .firestore()
//     .collection("Projects")
//     .where("uid", "==", `6988`);

//   //this will get the tasks with this use Id  `
//   unSelect = unSelect.onSnapshot((snapshot) => {
//     const newTasks = snapshot.docs.map((task) => ({
//       id: task.id,
//       ...task.data(),
//     }));

//     console.log(newTasks);
//   });
// };

// const fn = (e, t, p) => {
//   e.feedform = e.feedform || [];
//   e.helppie = function () {
//     e.feedform.push(arguments);
//   };
//   const n = t.createElement("script"),
//     c = t.getElementsByTagName("script")[0];
//   n.type = "application/javascript";
//   n.src = `https://feedformui.netlify.app`;
//   // console.log(e,t,p)
//   n.async = !0;
//   c.parentNode.insertBefore(n, c);
// };

// const FeedForm = (props) => {
//   const [slide, setSlide] = useState(false);

//   const [password, setpassword] = useState("");
//   const [showPopup, setshowPopup] = useState(false);

//   const handleChangePassword = (e) => {
//     setpassword(e.target.value);
//   };

//   useEffect(() => {
//     fn(window, document, props);
//   }, []);

//   const addStory = (type) => {
//     Firebase.addFeedbacks(type, {
//       uid: props.feedformId,
//       text: "add a button please",
//     });
//   };

//   const handleclickPopup = () => {
//     if (document.getElementById("modal6")) {
//       document.getElementById("modal6").style.display = "block";
//     } else {
//       const n = document.createElement("div"),
//         c = document.getElementsByTagName("script")[0];
//       n.id = "modal6";
//       n.classList.add("popover");

//       c.parentNode.insertBefore(n, c);
//     }
//   };

//   useEffect(() => {}, []);

//   return (
//     <React.Fragment>
//       <button
//         onClick={() =>
//           Promise.resolve(setshowPopup(true))
//             .then(() => {
//               handleclickPopup();
//             })
//             .catch((err) => {
//               console.log(err);
//             })
//         }
//       >
//         click mess
//       </button>

//       {showPopup && (
//         <CustomPortal>
//           <div id="CustomPortal" className="backdrop"></div>
//           <div className="feedformContainer">
//             <div id="feedformSlideWrapper">
//               <div
//                 style={{
//                   width: "200%",
//                   transform: slide
//                     ? `translate(-${
//                         document
//                           .getElementById("feedformSlideWrapper")
//                           .getBoundingClientRect().width /
//                         (Number(
//                           getComputedStyle(document.body, "").fontSize.match(
//                             /(\d*(\.\d*)?)px/
//                           )[1]
//                         ) /
//                           7.5) /
//                         7.5
//                       }rem)`
//                     : "none",
//                   transition: "0.4s all ease-in-out",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "1fr 1fr",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                     }}
//                   >
//                     {optionsList.map((item, i) => (
//                       <div
//                         key={i}
//                         onClick={() => {
//                           addStory(item.name);
//                           setSlide(true);
//                         }}
//                         className="optionsList"
//                       >
//                         <div style={{ display: "flex", marginLeft: "1rem" }}>
//                           ss
//                         </div>
//                         <div
//                           style={{
//                             fontSize: "2.4rem",
//                             marginLeft: "2rem",
//                             color: "#999999",
//                           }}
//                         >
//                           {item.text}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <div>
//                     <input
//                       value={password}
//                       onChange={handleChangePassword}
//                       placeholder="password"
//                       className="feedformInput"
//                     />
//                     <button onClick={() => setSlide(false)}>click</button>
//                     <button onClick={() => addStory()}>click</button>
//                     <button onClick={() => getStoriesAPI()}>click</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </CustomPortal>
//       )}
//     </React.Fragment>
//   );
// };

// export default FeedForm;

import React, { useState, useEffect } from "react";
import CustomPortal from "./CustomPortal";
import "./style.css";
import app from "firebase/app";
import Firebase from "./firebase";
import CustomSvg from "./CustomSvg";

const optionsList = [
  {
    name: "Feature",
    type: "idea",
    text: "Request a feature",
    icon: "feature",
  },

  {
    name: "Issue",
    type: "issue",
    text: "Report an issue",
    icon: "alert",
  },
  {
    name: "Feedback",
    type: "feedback",
    text: "Feedback",
    icon: "other",
  },
];

const fn = (e, t, p) => {
  e.feedform = e.feedform || [];
  e.feedform = function () {
    e.feedform.push(arguments);
  };
  const n = t.createElement("script"),
    c = t.getElementsByTagName("body")[0].getElementsByTagName("script")[0];
  n.type = "application/javascript";
  n.src = `https://feedformui.netlify.app`;
  n.async = !0;
  c.parentNode.insertBefore(n, c);
};

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

const FeedForm = (props) => {
  const [slide, setSlide] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setselectedOption] = useState(null);
  const [showPopup, setshowPopup] = useState(false);

  const handleChangePassword = (e) => {
    setInputValue(e.target.value);
  };

  const handleClose = () => {
    let n = document.getElementById("modal6");
    n.remove();
    setshowPopup(false);
  };

  useEffect(() => {
    fn(window, document, props);
  }, []);

  const addStory = () => {
    if (props.projectId) {
      Firebase.addFeedbacks(selectedOption.type, {
        title: inputValue ? inputValue : "",
        date: new Date(),
        category: "Idea",
        status: "todo",
        Uid: props.projectId,
      });
    } else {
      alert("please enter projectId");
    }
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

  return (
    <React.Fragment>
      <div
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
        {props.children ? props.children : "Click"}
      </div>

      {showPopup && (
        <CustomPortal>
          <div id="CustomPortal" className="backdrop"></div>
          <div style={{ transform: "scale(.8)" }}>
            <div className="feedformContainer">
              <div id="feedformSlideWrapper" style={{ height: "100%" }}>
                <div
                  style={{
                    height: "100%",
                    width: "200%",
                    transform:
                      slide && document.getElementById("feedformSlideWrapper")
                        ? `translate(-${
                            document
                              .getElementById("feedformSlideWrapper")
                              .getBoundingClientRect().width /
                            (Number(
                              getComputedStyle(
                                document.body,
                                ""
                              ).fontSize.match(/(\d*(\.\d*)?)px/)[1]
                            ) /
                              9.4) /
                            8.6
                          }rem)`
                        : "none",
                    transition: "0.4s all ease-in-out",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          position: "relative",
                          width: "100%",
                          marginTop: "3rem",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "22px",
                            color: "#101010",
                            letterSpacing: "-.5px",
                            fontWeight: "700",
                            marginTop: "0",
                          }}
                        >
                          What's on your mind?
                        </p>

                        <div
                          onClick={() => handleClose()}
                          style={{
                            cursor: "pointer",
                            position: "absolute",
                            right: "24px",
                            marginTop: "-.4rem",
                          }}
                        >
                          <svg
                            class="x__closeBtn"
                            width="35px"
                            height="35px"
                            viewdiv="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: "scale(.85)" }}
                          >
                            <circle
                              cx="17.5"
                              cy="17.5"
                              r="17.5"
                              fill="#ECECEC"
                            ></circle>
                            <path
                              d="M11 23L23 11"
                              stroke="#262F56"
                              stroke-width="2.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M23 23L11 11"
                              stroke="#262F56"
                              stroke-width="2.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {optionsList.map((item, i) => (
                          <div
                            key={i}
                            className="optionsList"
                            onClick={() => {
                              setselectedOption(item);
                              setSlide(true);
                            }}
                            style={{ marginBottom: "1.5rem" }}
                          >
                            <div
                              style={{ display: "flex", marginLeft: "2rem" }}
                            >
                              <CustomSvg
                                type={item.icon}
                                width="22px"
                                height="22px"
                                fill="#101010"
                              />
                            </div>
                            <div
                              style={{
                                fontSize: "2.4rem",
                                marginLeft: "2rem",
                                color: "#101010",
                              }}
                            >
                              {item.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "calc(100% - 7rem)",
                        }}
                      >
                        <div
                          style={{ marginTop: "7px", cursor: "pointer" }}
                          onClick={() => setSlide(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            fill="rgb(157 157 157)"
                            viewdiv="0 0 15 13"
                          >
                            <path d="M1 5.5l-.747-.664a1 1 0 000 1.328L1 5.5zm11 1a1 1 0 100-2v2zM5.747 1.664A1 1 0 104.253.336l1.494 1.328zm-1.494 9a1 1 0 001.494-1.328l-1.494 1.328zM1 6.5h11v-2H1v2zm.747-.336l4-4.5L4.253.336l-4 4.5 1.494 1.328zm-1.494 0l4 4.5 1.494-1.328-4-4.5L.253 6.164z"></path>
                          </svg>
                        </div>
                        <p
                          style={{
                            fontSize: "3.5rem",
                            color: "#101010",
                            letterSpacing: "-0.1rem",
                            fontWeight: "700",
                          }}
                        >
                          {selectedOption ? selectedOption.text : ""}
                        </p>
                        <div
                          onClick={() => handleClose()}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            class="x__closeBtn"
                            width="35px"
                            height="35px"
                            viewdiv="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: "scale(.85)" }}
                          >
                            <circle
                              cx="17.5"
                              cy="17.5"
                              r="17.5"
                              fill="#ECECEC"
                            ></circle>
                            <path
                              d="M11 23L23 11"
                              stroke="#262F56"
                              stroke-width="2.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M23 23L11 11"
                              stroke="#262F56"
                              stroke-width="2.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <textarea
                        value={inputValue}
                        onChange={handleChangePassword}
                        placeholder={
                          selectedOption &&
                          selectedOption.text.toLowerCase() ===
                            "report an issue"
                            ? "I noticed that..."
                            : "I would love..."
                        }
                        className="feedformInput"
                      />
                      <button
                        style={{
                          marginTop: "2rem",
                          pointerEvents: inputValue ? "all" : "none",
                          backgroundColor: inputValue
                            ? "#005dff"
                            : "rgb(237, 242, 247)",
                          color: inputValue ? "white" : "rgb(160, 174, 192)",
                          fontWeight: inputValue ? "500" : "700",
                        }}
                        className="feedformButton"
                        onClick={() => {
                          Promise.resolve(addStory()).then(() => {
                            setInputValue("");
                          });
                        }}
                      >
                        Submit
                      </button>
                    </div>
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
