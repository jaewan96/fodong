import React, { useState, useEffect, useCallback, useRef } from "react";
import { userStore } from "../../store/userStore.js";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { OpenVidu } from "openvidu-browser";
import UserVideoComponent from "./UserVideoComponent";
import { useSocket } from "../../contexts/SocketContext.js";
import "./multi.css";
import { Grid, Button, Paper, Box } from "@mui/material";
import VideoSlider from "./VideoSlider.jsx";
import Story from "./Story.jsx";
import Script from "./Script.jsx";
import "./multi.css";
const APPLICATION_SERVER_URL = process.env.REACT_APP_API_URL;
// openVidu
const StoryRoom = ({
  isStart,
  mySessionId,
  profileId,
  toggleState,
  isMove,
  sendStartRequest,
}) => {
  // const [sessionId, setSessionId] = useState(sessionId);
  // console.log(mySessionId, profileId);
  const [playState, setPlayState] = useState(false);
  const [session, setSession] = useState(undefined);
  const [mainStreamManager, setMainStreamManager] = useState(undefined);
  const [publisher, setPublisher] = useState(undefined);
  const [subscribers, setSubscribers] = useState([]);
  const [currentVideoDevice, setCurrentVideoDevice] = useState(null);
  const [nickname, setNickName] = useState(null);
  const [page, setPage] = useState(null);

  // 고칠 부분!! => nickname 이거 mapping 시켜서 렌더링 되도록 바꾸기!!
  const [myUserName, setMyUserName] = useState(
    userStore((state) => state.nickaname)
  );

  const OV = useRef(new OpenVidu()); // useRef 개념..

  const handleMainVideoStream = useCallback(
    (stream) => {
      if (mainStreamManager !== stream) {
        setMainStreamManager(stream);
      }
    },
    [mainStreamManager]
  );

  // JOIN 세션
  // const joinSession = useCallback(
  //   (event) => {
  //     event.preventDefault();
  //     if (isMove){
  //       const mySession = OV.current.initSession();

  //       mySession.on("streamCreated", (event) => {
  //         const subscriber = mySession.subscribe(event.stream, undefined);
  //         setSubscribers((subscribers) => [...subscribers, subscriber]);
  //       });

  //       mySession.on("streamDestroyed", (event) => {
  //         deleteSubscriber(event.stream.streamManager);
  //       });

  //       mySession.on("exception", (exception) => {
  //         console.warn(exception);
  //       });

  //       setSession(mySession);
  //       setPlayState((prev) => true);
  //       toggleState((state) => true);
  //     }
  //   },
  //   [playState, isMove]
  // );
  const joinSession = useEffect(() => {
    if (isMove && isStart) {
      const mySession = OV.current.initSession();

      mySession.on("streamCreated", (event) => {
        const subscriber = mySession.subscribe(event.stream, undefined);
        setSubscribers((subscribers) => [...subscribers, subscriber]);
      });

      mySession.on("streamDestroyed", (event) => {
        deleteSubscriber(event.stream.streamManager);
      });

      mySession.on("exception", (exception) => {
        console.warn(exception);
      });

      setSession(mySession);
      setPlayState((prev) => true);
      // toggleState((state) => true);
    }
  }, [isMove, isStart]);

  useEffect(() => {
    setPlayState(isStart);
  }, []);

  useEffect(() => {
    if (session) {
      // setMyUserName(userStore((state)=>state.nickname))
      // Get a token from the OpenVidu deployment
      getToken().then(async (token) => {
        // console.log(myUserName);
        try {
          await session.connect(token, { clientData: myUserName });

          let publisher = await OV.current.initPublisherAsync(undefined, {
            audioSource: undefined,
            videoSource: undefined,
            publishAudio: true,
            publishVideo: true,
            resolution: "640x480",
            frameRate: 30,
            insertMode: "APPEND",
            mirror: false,
          });

          session.publish(publisher);

          const devices = await OV.current.getDevices();
          const videoDevices = devices.filter(
            (device) => device.kind === "videoinput"
          );
          const currentVideoDeviceId = publisher.stream
            .getMediaStream()
            .getVideoTracks()[0]
            .getSettings().deviceId;
          const currentVideoDevice = videoDevices.find(
            (device) => device.deviceId === currentVideoDeviceId
          );

          // setMainStreamManager(publisher);
          setPublisher(publisher);
          setCurrentVideoDevice(currentVideoDevice);
        } catch (error) {
          console.log(
            "There was an error connecting to the session:",
            error.code,
            error.message
          );
        }
      });
      setPage(1);
    }
  }, [session]);

  // useEffect(() => {
  //   setNickName(myUserName);
  //   console.log(myUserName)
  // }, [myUserName]);

  const leaveSession = useCallback(() => {
    // Leave the session
    if (session) {
      session.disconnect();
    }

    // Reset all states and OpenVidu object
    OV.current = new OpenVidu();
    setSession(undefined);
    setSubscribers([]);
    setMainStreamManager(undefined);
    setPublisher(undefined);

    toggleState((state) => false);
  }, [session]);

  const switchCamera = useCallback(async () => {
    try {
      const devices = await OV.current.getDevices();
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );

      if (videoDevices && videoDevices.length > 1) {
        const newVideoDevice = videoDevices.filter(
          (device) => device.deviceId !== currentVideoDevice.deviceId
        );

        if (newVideoDevice.length > 0) {
          const newPublisher = OV.current.initPublisher(undefined, {
            videoSource: newVideoDevice[0].deviceId,
            publishAudio: true,
            publishVideo: true,
            mirror: true,
          });

          if (session) {
            await session.unpublish(mainStreamManager);
            await session.publish(newPublisher);
            setCurrentVideoDevice(newVideoDevice[0]);
            setMainStreamManager(newPublisher);
            setPublisher(newPublisher);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [currentVideoDevice, session, mainStreamManager]);

  const deleteSubscriber = useCallback((streamManager) => {
    setSubscribers((prevSubscribers) => {
      const index = prevSubscribers.indexOf(streamManager);
      if (index > -1) {
        const newSubscribers = [...prevSubscribers];
        newSubscribers.splice(index, 1);
        return newSubscribers;
      } else {
        return prevSubscribers;
      }
    });
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      leaveSession();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [leaveSession]);

  const handleSendStartRequest = (event) => {
    event.preventDefault();
    sendStartRequest();
  };

  /**
   * --------------------------------------------
   * GETTING A TOKEN FROM YOUR APPLICATION SERVER
   * --------------------------------------------
   * The methods below request the creation of a Session and a Token to
   * your application server. This keeps your OpenVidu deployment secure.
   *
   * In this sample code, there is no user control at all. Anybody could
   * access your application server endpoints! In a real production
   * environment, your application server must identify the user to allow
   * access to the endpoints.
   *
   * Visit https://docs.openvidu.io/en/stable/application-server to learn
   * more about the integration of OpenVidu in your application server.
   */

  const getToken = useCallback(async () => {
    const sessionId = await createSession(mySessionId);
    console.log("Session ID:", sessionId);
    const token = await createToken(sessionId);
    console.log("Token:", token);
    return token;
  }, [mySessionId]);

  const createSession = async (sessionId) => {
    const response = await axios.post(
      APPLICATION_SERVER_URL + "/sessions",
      { customSessionId: sessionId },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("세션 : ", response.data);
    return response.data; // The sessionId
  };

  const createToken = async (sessionId) => {
    const response = await axios.post(
      APPLICATION_SERVER_URL + "/sessions/" + sessionId + "/connections",
      {},
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data; // The token
  };

  /* 여기서 부터 socket 이용한 상태 공유 코드 */
  // const { stompClient } = useSocket();
  // const sendStartRequest = (event) => {
  //   event.preventDefault();
  //   const readyRequestPayload = {
  //     roomSession: {
  //       sessionId: mySessionId,
  //     },
  //     isStart: true,
  //   };
  //   stompClient.send(
  //     "/toServer/readyGame",
  //     {},
  //     JSON.stringify(readyRequestPayload)
  //   );
  //   // 여기서 딱히 set함수들 해줄 필요 없을 듯??
  //   console.log(readyRequestPayload);
  // };

  return (
    <div>
      {!playState ? (
        <div id="join" className="storyRoomWrapper">
          <div id="join-dialog" className="storyRoomDialog">
            <h1>동화 만들기~</h1>

            {/* <form className="form-group" onSubmit={joinSession}> */}
            {/* <form className="form-group" onSubmit={sendStartRequest}> */}
            <form
              className="form-group storyRoomForm"
              onSubmit={handleSendStartRequest}
            >
              <p className="text-center">
                <input
                  className="btn btn-lg btn-success"
                  name="commit"
                  type="submit"
                  value="시작하기"
                />
              </p>
            </form>
          </div>
        </div>
      ) : null}
      {playState ? (
        <Box id="session" className="storyRoomSession">
          <Box
            id="session-header"
            sx={{ mb: 2 }}
            className="storyRoomSessionHeader"
          >
            {/* <h1 id="session-title">{mySessionId}</h1> */}
            <Button variant="contained" color="error" onClick={leaveSession}>
              Leave session
            </Button>
            {/* <Button variant="contained" color="primary" onClick={switchCamera}>
              Switch Camera
            </Button> */}
          </Box>
          {/* <Grid container spacing={2}> */}
          {/* {mainStreamManager && (
              <Grid item xs={12} sm={6}>
                <h1>메인</h1>
                <UserVideoComponent streamManager={mainStreamManager} />
              </Grid>
            )} */}
          {/* <Grid item xs={12} sm={6}> */}
          {/* 
          <Routes>
            <Route path="/:page" element={<Story page={page} />} />
          </Routes> */}
          {page}
          <Story page={page} changePage={setPage} />
          <Script page={page} changePage={setPage} />

          <Grid container xs={12} sm={6} spacing={2}>
            <VideoSlider>
              {publisher && (
                <Box item>
                  <UserVideoComponent streamManager={publisher} />
                </Box>
              )}
              {subscribers.map((sub, i) => (
                // <Grid
                //   key={sub.id}
                //   item
                //   onClick={() => handleMainVideoStream(sub)}
                // >
                //   <Paper elevation={3}>
                <Box key={sub.id} className="storyRoomSubscriberBox">
                  <UserVideoComponent
                    streamManager={sub}
                    className="storyRoomUserVideo"
                  />
                </Box>
                // <span>{sub.id}</span>
                //   </Paper>
                // </Grid>
              ))}
            </VideoSlider>
          </Grid>
          {/* </Grid> */}
          {/* </Grid> */}
        </Box>
      ) : null}
    </div>
  );
};

export default StoryRoom;

// {playState ? (
//   <div id="session">
//     <div id="session-header">
//       <h1 id="session-title">{mySessionId}</h1>
//       <input
//         className="btn btn-large btn-danger"
//         type="button"
//         id="buttonLeaveSession"
//         onClick={leaveSession}
//         value="Leave session"
//       />
//       <input
//         className="btn btn-large btn-success"
//         type="button"
//         id="buttonSwitchCamera"
//         onClick={switchCamera}
//         value="Switch Camera"
//       />
//     </div>

//     {mainStreamManager !== undefined ? (
//       <div id="main-video" className="col-md-6">
//         <h1>메인</h1>
//         <UserVideoComponent streamManager={mainStreamManager} />
//       </div>
//     ) : null}
//     <div id="video-container" className="col-md-6">
//       {publisher !== undefined ? (
//         <div
//           className="stream-container col-md-6 col-xs-6"
//           onClick={() => handleMainVideoStream(publisher)}
//         >
//           {/* <h1> 1번 </h1> */}
//           <UserVideoComponent streamManager={publisher} />
//         </div>
//       ) : null}
//       {subscribers.map((sub, i) => (
//         <div
//           key={sub.id}
//           className="stream-container col-md-6 col-xs-6"
//           onClick={() => handleMainVideoStream(sub)}
//         >
//           <span>{sub.id}</span>
//           <UserVideoComponent streamManager={sub} />
//         </div>
//       ))}
//     </div>
//   </div>
// ) : null}
