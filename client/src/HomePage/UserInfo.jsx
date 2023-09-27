import avatar from '../images/avatar.jpg'

function UserInfo() {
  return (
    <div className="flex items-center">
      <div className="text-xl pr-3"><h1>ssk_milutin</h1></div>
      <div className="avatar">
        <div className="w-20 rounded-full">
          <img src={avatar} />
        </div>
      </div>
    </div>
  )
}

export default UserInfo;
