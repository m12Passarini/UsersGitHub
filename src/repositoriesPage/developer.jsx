import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Profile from './Profile/profile';
import Filter from './Filter/filter';
import Repositories from './repositories/repositories';

import { Loading, Container, SideBar, Main} from './styles';
import { getUser, getRepos, getLangsFrom } from './langsFilter';

const Developer = () => {
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [repositories, setRepositories] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const { login } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login)
      ]);

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data)
      setLanguages(getLangsFrom(repositoriesResponse.data))

      setLoading(false);
    }

    loadData();
  }, [login])

  if (loading) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <Container>
      <SideBar>
        <Profile user={user}/>
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={(lang) => setCurrentLanguage(lang)}
        />
      </SideBar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage}/>
      </Main>
    </Container>
  )
}



export default Developer;

