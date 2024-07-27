

function Card(promp) {
  return (
    <>
      <div className="w-72 h-52 rounded-lg border border-blue-500 p-5">
        <div className="flex space-x-4 text-xl justify-center">
          <img className="w-5 h-5" src={promp.icon} alt="icon" />
          <p>{promp.title}</p>
        </div>
        <div className="text-sm mt-4">
          {promp.children}
        </div>
      </div>
    </>
  );
}

export default Card;
