import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import getRecipientEmail from "../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";

function Chat({ id, users }) {
  const router = useRouter();
  const [user] = useAuthState(auth);
  // console.log(id, users);
  const recipientEmail = getRecipientEmail(users, user);
  // console.log(recipientEmail);
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );
  // console.log(getRecipientEmail(users, user));

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  const recipient = recipientSnapshot?.docs?.[0]?.data();

  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL}></UserAvatar>
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}
      {recipient ? <p>{recipient?.name}</p> : <p>{recipientEmail}</p>}
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
