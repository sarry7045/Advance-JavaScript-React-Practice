import React from "react";
// import axios from "axios";
// import CardContext from "./CardContext";
// import useCustomHoopk from "./CustomHook";

const Video = ({
  buttonText,
  discription,
  title,
  id,
  children,
  // handleDelete,
  handleEdit,
  dispatch,
}) => {
  // const handleEdit = useContext(CardContext)
  // const handleEdit = useCustomHoopk()

  // const dispatch = useCustomHoopk()

  // const url = "https://my.api.mockaroo.com/users?key=ec7d2a00";

  // const [cardDetails,setCardDetails ] = useState([])

  // useEffect(() => {
  //   async function APIcalling() {
  //     const res = await axios.get(url);
  //     setCardDetails(res.data)
  //     dispatch({type:"LOAD", payload:res.data})
  //     console.log("Response", res);
  //     console.log("Response with Data", res.data);
  //   }
  //   APIcalling();
  // }, []);

  // console.log("cardDetails",cardDetails)

  return (
    <>
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

              <button
                className="btn btn-danger"
                onClick={() =>
                  // Because useReducer comes in picture
                  // handleDelete(id)

                  // useReducer Part
                  dispatch({ type: "DeleteCard", payload: id })
                }
              >
                Delete Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
