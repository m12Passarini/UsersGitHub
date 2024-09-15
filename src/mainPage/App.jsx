import { useState } from 'react';

import { Title, Logo, Form, Input, Button, Container} from "./styles";
import './App.css';

import { FaGithub } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Logo>
        <FaGithub color='white' size={130}/>
      </Logo>
      <Title>User GitHub</Title>
      <Form>
        <Input placeholder='User' value={search} onChange={(user) => setSearch(user.target.value)}/>
        <Button to={`/${search}/repositories`}>
          <MdSearch color="white" size={42}/>
        </Button>
      </Form>
    </Container>
  )
}

export default App;
