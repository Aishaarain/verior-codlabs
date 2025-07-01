import ProfileCard from "./ProfileCard";

const users = [
  {
    name: "Aisha Arain",
    role: "Web Developer",
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    image: "./public/assets/pic1.jpg",
    buttonText: "Follow",
  },
  {
    name: "Ali Khan",
    role: "UI/UX Designer",
    quote: "Design is intelligence made visible.",
    image: "./public/assets/pic2.jpg",
    buttonText: "Message",
  },
  {
    name: "Sara Malik",
    role: "Frontend Engineer",
    quote: "Keep it simple. Keep it scalable.",
    image: "./public/assets/pic3.jpg",
    buttonText: "Follow",
  },
];

const ProfileGrid = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {users.map((user, index) => (
          <ProfileCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;
