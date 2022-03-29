const UserInfo = (props) => {
  return (
    <div className="user-info">
      <img className="user-image" src={props.userImage} alt={props.userName} />
      <h3>{props.userName}</h3>
    </div>
  )
}
