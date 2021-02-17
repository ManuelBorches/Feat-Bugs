import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Orders from "../components/Orders";
import {
  getOrders,
  deleteOrder,
  editOrderStatus,
  addOrderVote,
  quitOrderVote,
  getOrdersVotes,
} from "../redux/action-creators/ordersAction";
import style from "../assets/index.module.css";

const titles = {
  pending: "FEATURES & BUGS",
  priority: "PRIORITY",
  done: "DONE",
};

const OrdersContainer = ({ toolId }) => {
  const dispatch = useDispatch();
  const { orders, ordersVote } = useSelector((state) => state.orders);
  const user = useSelector((state) => state.users.user);

  const pendingOrders = orders.filter((el) => el.status === "pending");
  const priorityOrders = orders.filter((el) => el.status === "priority");
  const doneOrders = orders.filter((el) => el.status === "done");

  useEffect(() => {
    dispatch(getOrdersVotes(user.id));
    dispatch(getOrders(toolId));
  }, [user]);

  const addVote = (userId, id, qVotes) => {
    dispatch(addOrderVote({ userId, id, qVotes }));
  };

  const deleteVote = (userId, id, qVotes) => {
    dispatch(quitOrderVote({ userId, id, qVotes }));
  };

  const handleEditStatus = (id, status) => {
    dispatch(editOrderStatus({ id, status }));
  };

  const handleDelete = (index) => {
    dispatch(deleteOrder(index));
  };

  const isVoted = (orderId) => ordersVote.some((el) => el.id === orderId);

  return (
    <div className={style.orders_container}>
      <div className={style.column_container_1}>
        <Orders
          title={titles.pending}
          user={user}
          toolId={toolId}
          isVoted={isVoted}
          orders={pendingOrders}
          handleEditStatus={handleEditStatus}
          addVote={addVote}
          deleteVote={deleteVote}
          handleDelete={handleDelete}
        />
      </div>
      <div className={style.column_container_2}>
        <Orders
          title={titles.priority}
          user={user}
          orders={priorityOrders}
          isVoted={isVoted}
          handleEditStatus={handleEditStatus}
          addVote={addVote}
          deleteVote={deleteVote}
          handleDelete={handleDelete}
        />
      </div>
      <div className={style.column_container_3}>
        <Orders title={titles.done} user={user} orders={doneOrders} />
      </div>
    </div>
  );
};

export default OrdersContainer;
