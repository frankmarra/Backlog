const UserInfo = (props) => {
  return (
    <div className="user-info-wrapper">
      <div className="user-image-wrapper">
        <img
          className="user-image"
          src={props.userImage}
          alt={props.userName}
        />
      </div>
      <div className="user-info">
        <h3>{props.userInfo.userName}</h3>
        <h4>You have {props.userGames.length} games in your Backlog</h4>
      </div>
    </div>
  )
}

export default UserInfo
