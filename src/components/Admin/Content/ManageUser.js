import ModalCreateUser from "./ModalCreateUser";


const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div>
        <ModalCreateUser></ModalCreateUser>
        </div>
        <div>
          table user
        </div>
      </div>
    </div>
  );
};
export default ManageUser;
