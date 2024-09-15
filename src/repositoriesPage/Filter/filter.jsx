import { Container, Selector, Cleaner } from './styles';
import propTypes from 'prop-types';

const Filter = ({ languages, currentLanguage, onClick }) => {

  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>
        Limpar
      </Cleaner>
    </Container>
  )
}

/* Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
} */

Filter.propTypes = {
  languages: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      count: propTypes.number.isRequired,
      color: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  currentLanguage: propTypes.string,
  onClick: propTypes.func,
}

export default Filter;
