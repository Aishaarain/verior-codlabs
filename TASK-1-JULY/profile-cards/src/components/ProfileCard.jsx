import { useState } from "react";

const ProfileCard = ({ name, role, quote, image, buttonText }) => {
    const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing((prev) => !prev);
  };
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-indigo-500 mb-2">{role}</p>
      <p className="text-gray-600 text-sm italic mb-4">"{quote}"</p>
 <button
        onClick={toggleFollow}
        className={`px-5 py-2 rounded-full transition-colors duration-300 ${
          isFollowing
            ? "bg-red-500 hover:bg-red-600"
            : "bg-purple-400 hover:bg-indigo-600"
        } text-white`}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default ProfileCard;
