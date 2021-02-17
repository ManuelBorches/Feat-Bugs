import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import style from "../assets/index.module.css";

const Orders = ({
  title,
  user,
  toolId,
  isVoted,
  orders,
  handleEditStatus,
  addVote,
  deleteVote,
  handleDelete,
}) => {
  return (
    <>
      <h1>
        {title}
        {title === "FEATURES & BUGS" && user.id ? (
          <Link to={`/create/${toolId}`}>
            <AddCircleIcon fontSize="large" className={style.add_order_icon} />
          </Link>
        ) : null}
      </h1>
      {orders &&
        orders.map((el, index) => (
          <div key={index} className={style.order_item}>
            <div className={style.order_item_header}>
              <div className={style.title_type}>
                <h3>{el.title}</h3>
                <h5>{el.type}</h5>
              </div>

              <div className={style.votes}>{el.qVotes} VOTES</div>
            </div>
            <div className={style.image_description}>
              <div className={style.image}>
                <img src={el.image} />
              </div>
              <div>
                <p>{el.description}</p>
              </div>
            </div>
            {el.status !== "done" && user.id ? (
              <div className={style.interactions}>
                <div>
                  <IconButton
                    onClick={() =>
                      isVoted(el.id) ? null : addVote(user.id, el.id, el.qVotes)
                    }
                    style={{ color: isVoted(el.id) ? "blue" : "gray" }}
                  >
                    <ThumbUpAltIcon />
                  </IconButton>
                </div>

                <div>
                  {user.userType === "owner" && el.status === "pending" ? (
                    <IconButton
                      onClick={() => handleEditStatus(el.id, "priority")}
                    >
                      <AddIcon />
                    </IconButton>
                  ) : user.userType === "owner" && el.status === "priority" ? (
                    <IconButton>
                      <ClearIcon
                        onClick={() => handleEditStatus(el.id, "pending")}
                      />
                    </IconButton>
                  ) : null}
                  <IconButton onClick={() => handleEditStatus(el.id, "done")}>
                    <CheckIcon />
                  </IconButton>
                  {user.userType === "owner" ? (
                    <IconButton onClick={() => handleDelete(el.id)}>
                      <DeleteIcon />
                    </IconButton>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        ))}
    </>
  );
};

export default Orders;
