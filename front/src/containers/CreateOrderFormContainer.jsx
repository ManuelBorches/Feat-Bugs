import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CreateOrderForm from "../components/CreateOrderForm";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../redux/action-creators/ordersAction";

const CreateOrderFormContainer = ({ toolId }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.users.user.id);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
    type: "",
    toolId,
    userId,
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleOrderType = (type) => {
    setInputs({ ...inputs, type });
  };

  const handleSubmit = (event, userId) => {
    event.preventDefault();
    setInputs({ ...inputs, userId });
    dispatch(addOrder(inputs));
    history.goBack();
  };

  return (
    <CreateOrderForm
      inputs={inputs}
      userId={userId}
      handleChange={handleChange}
      handleOrderType={handleOrderType}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateOrderFormContainer;
