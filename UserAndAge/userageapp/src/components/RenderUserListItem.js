// Render each User Details in RenderUserList
import '../index.css'
const RenderUserListItem = (props) => {
 
    return (
        <div className="box" >{props.user.username} {props.user.age}</div>
    );
}

export default RenderUserListItem;