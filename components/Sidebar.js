import { Avatar, Button, IconButton } from "@material-ui/core";
import { ChatRounded, MoreVert, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import * as EmailValidator from "email-validator";
import { auth, db } from "../firebase";

const createChat = () => {
  const input = prompt(
    "Please enter an email address of the user you want to chat with"
  );

  if (!input) return null;

  if (EmailValidator.validate(input)) {
    // we need to add the chat into DB 'chats' collections
    // if email is valid we need to push it to the database
  }
};

function Sidebar() {
  return (
    <Container>
      <Header>
        <UseAvatar onClick={() => auth.signOut()} />

        <IconsContainer>
          <IconButton>
            <ChatRounded />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </IconsContainer>
      </Header>
      <SearchDiv>
        <Search />
        <SearchInput placeholder="Search in chats" />
      </SearchDiv>
      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  border: none;
  outline-width: 0;
  flex: 1;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-bottom: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
  }
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UseAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
