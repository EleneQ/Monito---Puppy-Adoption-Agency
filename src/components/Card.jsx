const Card = ({ children }) => {
  return (
    <div className="p-2 pb-4 md:pb-5 rounded-xl shadow-card-shadow text-black">
      {children}
    </div>
  );
};

export default Card;