import { RepositoryDTO } from "../../types/repositories";
import { Container, Texto } from "./styles";

interface CardProps {
  item: RepositoryDTO;
}

const Card = ({ item }: CardProps) => {
  const Private = () => {
    if (item.private === true) {
      return "Private";
    } else {
      return "Public";
    }
  };
  return (
    <Container>
      <Texto>{item.name}</Texto>
      <Texto>{Private()}</Texto>
      <Texto>{item.language}</Texto>
    </Container>
  );
};

export default Card;
