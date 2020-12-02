import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingPage from "../../components/LoadingPage";
import TableUsers from "./TableUsers";
import "./user.css";
import { Input } from "semantic-ui-react";
import { fetchUsers } from "../../redux/actions";

const UserPage = () => {
  const token = sessionStorage.getItem("token");

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers(token));
    setIsLoaded(true);
  }, [dispatch]);

  
  if (!isLoaded) {
    return <LoadingPage />;
  }
  return (
    <div className="background-table-container">
      <TableUsers isLoaded={isLoaded} />
      {/*<Pagination />*/}
    </div>
  );
};

export default UserPage;
