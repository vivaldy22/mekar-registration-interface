import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import ShowDetail from "./ShowDetail";
import { fetchDistricts } from "../../redux/actions";
import LoadingPage from "../../components/LoadingPage";

const TableUsers = ({ isLoaded, search }) => {
  const token = sessionStorage.getItem("token");
  
  const users = useSelector((state) => state.userReducer.users)
  const dispatch = useDispatch();

  const showTableContent = users.map((user, i) => {
    return (
      <Table.Row key={user.id}>
        <Table.Cell className="center">{i + 1}</Table.Cell>
        <Table.Cell selectable>
          <ShowDetail
            selName={user.user_name}
            button={
              <a
                onClick={() => {
                  alert(user.user_name)
                }}
              >
                {user.user_name}
              </a>
            }
          />
        </Table.Cell>
        <Table.Cell className="center">
          <ShowDetail
            selName={user.user_name}
            button={
              <Button
                color="orange"
                circular
                icon="magnify"
                onClick={() => {
                  alert(user.user_name);
                }}
              />
            }
          />
        </Table.Cell>
      </Table.Row>
    );
  });

  if (!isLoaded) {
    return <LoadingPage />;
  }
  return (
    <div className="table-container">
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3" textAlign={"center"}>
              Data User
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell className="table-no">No.</Table.HeaderCell>
            <Table.HeaderCell>Nama</Table.HeaderCell>
            <Table.HeaderCell>Tanggal Lahir</Table.HeaderCell>
            <Table.HeaderCell>KTP</Table.HeaderCell>
            <Table.HeaderCell>Pekerjaan</Table.HeaderCell>
            <Table.HeaderCell>Pendidikan</Table.HeaderCell>
            <Table.HeaderCell className="table-actions">
              Actions
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{showTableContent}</Table.Body>
      </Table>
    </div>
  );
};

export default TableUsers;
