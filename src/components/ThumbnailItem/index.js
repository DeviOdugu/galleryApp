// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, thumbnailClicked} = props
  const {thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const onClickThumbnail = () => {
    thumbnailClicked(thumbnailDetails)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          height="30px"
          width="30px"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
