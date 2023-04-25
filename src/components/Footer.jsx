import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 20px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 70%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AC STORE</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro
          doloremque praesentium, aliquid iste debitis magni hic esse possimus
          illo numquam exercitationem modi quisquam sit itaque delectus ipsum
          odit officia.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram></Instagram>
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter></Twitter>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Address
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          Number
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          Email
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
