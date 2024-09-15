import propTypes from 'prop-types';
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

import { MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md';

const Profile = ({ user }) => {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url}/>
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>

      <Inner>
        <Data><MdGroup size={20} />{user.followers} seguidores | {user.following} seguindo</Data>
        {user.location && (<Data><MdLocationCity size={20} />{user.location}</Data>)}
        {user.company && (<Data><MdWork size={20} />{user.company}</Data>)}
        {user.blog && (<Data><MdLink size={20} /><a href="">{user.blog}</a></Data>)}
      </Inner>
    </Container>
  )
}

Profile.propTypes = {
  user: propTypes.shape({
    login:	propTypes.string.isRequired,
    avatar_url:	propTypes.string.isRequired,
    followers: propTypes.number.isRequired,
    following: propTypes.number.isRequired,
    name: propTypes.string,
    company:	propTypes.string,
    blog:	propTypes.string,
    location:	propTypes.string,
  })
}

export default Profile;
