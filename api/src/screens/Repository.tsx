import { useEffect, useState } from "react";
import { RepositoryDTO } from "../types/repositories";
import { axiosInstance } from "../utils/axios";
import { Container, Input } from "./styles";
import { FlatList } from "react-native";
import Card from "../components/card/Card";

const Repository = () => {
  const [repositoriesList, setRepositoriesList] = useState<RepositoryDTO[]>([]);

  const getData = async () => {
    try {
      const response = await axiosInstance.get<RepositoryDTO[]>("/repos");

      console.log(response.data);
      setRepositoriesList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Input />
      <FlatList
        data={repositoriesList}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

export default Repository;
