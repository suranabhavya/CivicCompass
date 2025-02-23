// components/Card.js
export default function CardBusiness({ title, description }) {
    return (
      <div className="bg-white w-99 h-[23rem] rounded-lg shadow-md">
        <div className="flex p-2 gap-1">
          <div>
            <span className="bg-blue-500 inline-block w-3 h-3 rounded-full"></span>
          </div>
          <div>
            <span className="bg-purple-500 inline-block w-3 h-3 rounded-full"></span>
          </div>
          <div>
            <span className="bg-pink-500 inline-block w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div className="card__content p-2 ">
          {/* Add your card content here */}
          <h2 className="title font-bold items-center">{title}</h2>
          <br></br>
          <p className="description text-black">{description}</p>
        </div>
      </div>
    );
  }
  