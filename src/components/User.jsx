import PropTypes from "prop-types";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { TbWorldWww } from "react-icons/tb";

import "./User.css";

const User = ({ user }) => {
  return (
    <div className="user-container">
      <div className="left-side">
        <div className="profile-photo">
          <FaCircleUser size={100} color="var(--950)" />
        </div>
      </div>
      <div className="right-side">
        <p className="user-name">{user.name}</p>
        <p className="phrase">{user.company.catchPhrase}</p>
        <div className="line"></div>

        <div className="user-info-email">
          <div>
            <MdOutlineMailOutline size={22} color="var(--400)" />
          </div>
          <p>{user.email}</p>
        </div>

        <div className="user-info-phone">
          <div>
            <LuPhone size={22} color="var(--400)" />
          </div>
          <p>{user.phone}</p>
        </div>
        <div className="user-info-website">
          <div>
            <TbWorldWww size={22} color="var(--400)" />
          </div>
          <p>{user.website}</p>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};
export default User;
