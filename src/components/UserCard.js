const UserCard = ({ user }) => (
    <div className="p-4 bg-white shadow-md rounded-lg border">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
    </div>
);

export default UserCard;