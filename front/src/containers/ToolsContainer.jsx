import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tools from "../components/Tools";
import {
  getTools,
  addTool,
  deleteTool,
} from "../redux/action-creators/toolsAction";

const ToolsContainer = () => {
  const dispatch = useDispatch();
  const tools = useSelector((state) => state.tools.tools);
  const tool = useSelector((state) => state.tools.tool);
  const user = useSelector((state) => state.users.user);
  const [adding, setAdding] = useState(false);
  const [toolName, setToolName] = useState("");

  useEffect(() => {
    dispatch(getTools());
  }, [tool]);

  const enableEditing = () => {
    setAdding(true);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setToolName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTool(toolName));
    setAdding(false);
    setToolName("");
  };

  const handleDelete = (index) => {
    dispatch(deleteTool(index));
  };

  return (
    <Tools
      tools={tools}
      user={user}
      enableEditing={enableEditing}
      adding={adding}
      toolName={toolName}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
    />
  );
};

export default ToolsContainer;
