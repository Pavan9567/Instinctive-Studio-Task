const Card = ({ item }) => (
    <div className="p-4 bg-white shadow-md rounded-lg border">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-gray-600">{item.status}</p>
    </div>
);

export default Card;