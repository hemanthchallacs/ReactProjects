import RenderUserListItem from "./RenderUserListItem";

const RenderUserList = (props) => {
  return props.userList.map((user) => (
    <RenderUserListItem key={user.id} user={user} ></RenderUserListItem>
  ));
};

export default RenderUserList;
