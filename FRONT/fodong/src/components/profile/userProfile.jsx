import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./createModal";
import EditModal from "./editModal";
import { Grid } from "@mui/material";
import Chick from "./img/chick.png";
import "./profileStyle.css";
import { Button } from "../../components/Common";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../store/userStore";
const API_URL = process.env.REACT_APP_API_URL;
const API_BASE_URL = `${API_URL}/profiles`;

function ProfileComponent() {
  const [profiles, setProfiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [editProfile, setEditProfile] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const navigate = useNavigate();

  //zustand
  const { profileId } = userStore((state) => ({
    profileId: state.profileId,
  }));
  console.log(profileId);

  useEffect(() => {
    fetchProfiles();
  }, []);
  const token = localStorage.getItem("Token");
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  // 프로필 조회
  const fetchProfiles = () => {
    const accountId = localStorage.getItem("accountId");

    if (!accountId) {
      console.log("No accountId available");
      return;
    }
    axios
      .get(`${API_BASE_URL}/ ${accountId}`, config)
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => {
        console.error("서버 요청 실패:", error);
      });
  };

  // 프로필 생성
  const handleCreateProfile = (newNickname) => {
    const accountId = localStorage.getItem("accountId");
    axios
      .post(
        `${API_BASE_URL}/${accountId}`,
        {
          nickname: newNickname,
        },
        config
      )
      .then((response) => {
        setProfiles([...profiles, response.data]);
        alert(response.data);
        setOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("프로필 생성 실패:", error);
      });
  };

  const handleEditProfile = (profileId, updateNickName) => {
    axios
      .patch(
        `${API_BASE_URL}/${profileId}`,
        { nickname: updateNickName },
        config
      )
      .then((response) => {
        setProfiles(
          profiles.map((p) =>
            p.profileId === profileId ? { ...p, nickname: updateNickName } : p
          )
        );
        setOpenEdit(false);
      })
      .catch((error) => {
        console.error("프로필 수정 실패:", error);
      });
  };

  const handleEditClick = (profile) => {
    setEditProfile(profile); // 편집할 프로필 설정
    setOpenEdit(true); // 편집 모달 열기
  };

  const goToMain = () => {
    navigate("/main");
  };

  return (
    <div className="TopTop">
      <div className="Top_box">
        <h1>프로필 페이지</h1>
        <Grid
          container
          spacing={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          {profiles.map((profile) => (
            <Grid item xs={12} sm={12} md={3} lg={3} key={profile.profileId}>
              <div className="card">
                <img
                  onClick={goToMain}
                  className="profileImage"
                  src={profile.imageUrl || Chick}
                  alt={profile.nickname}
                />
                <div className="profileText">{profile.nickname}</div>
                <button
                  className="editButton"
                  variant="contained"
                  onClick={() => handleEditClick(profile)}
                ></button>
              </div>
            </Grid>
          ))}

          {profiles.length < 4 && (
            <div
              style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
            >
              <Button
                color="pink"
                onClick={() => setOpen(true)}
                className="addButton"
              >
                +
              </Button>
            </div>
          )}
        </Grid>
        <Modal
          open={open}
          setOpen={setOpen}
          onCreateProfile={handleCreateProfile}
        />
        {editProfile && (
          <EditModal
            open={openEdit}
            setOpen={setOpenEdit}
            profile={editProfile}
            onEditProfile={handleEditProfile}
          />
        )}
      </div>
    </div>
  );
}

export default ProfileComponent;
