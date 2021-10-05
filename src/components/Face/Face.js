import styled from 'styled-components'
import photo from '../../assets/profile.jpg'
const StyledFace = styled.div`
/* padding: 0 1rem; */
/* border: 2px solid white; */
  img {
    border-radius: 99999px;
    max-width: 60px;

  }
`
const Face = () => {
return (
<StyledFace>
  <img src={photo} alt="" />
</StyledFace>
)
}
export default Face