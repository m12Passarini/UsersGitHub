import propTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link } from './styles'
import { langColors } from '../../langsFilter'

const Repository = ({ repository }) => {

  const color = langColors[repository.language && repository.language.toLowerCase()]

  return (
    <Container color={color}>
        <Name>{repository.name}</Name>
        <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target='blank'>Link</Link>
      </Footer>
    </Container>
  )
}

Repository.propTypes = {
  repository: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string,
    html_url: propTypes.string.isRequired,
    language: propTypes.string.isRequired,
  }).isRequired,
}

export default Repository
