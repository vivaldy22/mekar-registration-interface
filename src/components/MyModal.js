import React from "react";
import {Form, Modal, Label, Dropdown, Input} from "semantic-ui-react";

const MyModal = ({
  button,
  userName,
}) => {
  return (
    <Modal openOnTriggerClick trigger={button} closeIcon>
      <Modal.Header>{userName}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Label>Nama</Label>
              <Input placeholder='Nama' />
            </Form.Field>
            <Form.Field>
              <Label>Tanggal Lahir</Label>
              <Input placeholder='Tanggal Lahir' />
            </Form.Field>
            <Form.Field>
              <Label>No KTP</Label>
              <Input placeholder='No KTP' />
            </Form.Field>
            <Form.Field>
              <Label>Pekerjaan</Label>
              <Dropdown
                fluid
                selection
                search
                options={optionsJobs}
                placeholder={"--Pilih Pekerjaan-"}
                // onChange={handleTypeChange}
              />
            </Form.Field>
            <Form.Field>
              <Label>Pendidikan</Label>
              <Dropdown
                fluid
                selection
                search
                options={optionsEdu}
                placeholder={"--Pilih Pendidikan--"}
                // onChange={handleTypeChange}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default MyModal;
