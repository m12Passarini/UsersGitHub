import propTypes from 'prop-types';

import Repository from './repository/repository'
import { Container } from './styles'

const Repositories = ({ repositories, currentLanguage }) => {

  const Repo = repositories.filter((repository) =>
    currentLanguage === undefined || repository.language === currentLanguage
  ).map((repository) => (
    <Repository key={repositories.id} repository={repository}/>
  ))

  return (
    <Container>
      {Repo}
    </Container>
  )
}

Repositories.propTypes = {
  repositories: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      description: propTypes.string,
      html_url: propTypes.string.isRequired,
      language: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentLanguage: propTypes.string,
}


export default Repositories
