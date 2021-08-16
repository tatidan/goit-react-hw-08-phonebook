import React from "react";
import { connect } from "react-redux";
import { getUserName, logoutOperation } from "../../redux/auth";
import defaultAvatar from "../../images/default-avatar.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    borderRadius: "50%",
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <button type="button" onClick={onLogout} className="deleteBtn">
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logoutOperation,
};

// const mapDispatchToProps = (dispatch) => ({
//   onLogout: () => dispatch(logoutOperation()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
