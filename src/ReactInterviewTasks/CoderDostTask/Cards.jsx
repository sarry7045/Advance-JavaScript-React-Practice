import React from "react";

const Video = ({
  buttonText,
  discription,
  title,
  id,
  children,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="container p-5">
      <div class="row">
        <div class="col-md-12">
          <div className="card" style={{ width: "16rem" }}>
            <img
              // src="./Images/Codeing.jpg"
              src={`https://picsum.photos/id/${id}/160/90`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{discription}</p>
              <a
                href="https://surajyadav.vercel.app/"
                className="btn btn-primary"
                title="Suraj Portfolio"
                target="_blank"
                rel="noreferrer"
              >
                {buttonText}
              </a>
              <div className="my-2">{children}</div>
            </div>
            <button
              className="btn btn-success my-4"
              onClick={() => handleEdit(id)}
            >
              Edit Card
            </button>

            <button className="btn btn-danger" onClick={() => handleDelete(id)}>
              Delete Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
