import { Avatar, Button, IconButton } from "@material-ui/core";
import { ChatRounded, MoreVert, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Sidebar() {
  return (
    <Container>
      <Header>
        <UseAvatar />

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
      <SidebarButton>Start a new chat</SidebarButton>
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
