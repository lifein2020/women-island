import "./cardBlock.scss";

export default function CardBlock({
  customClass,
  title,
  description,
  link,
  imgSrc,
  alt,
  imageSize,
  buttonText,
}) {
  
  return (
    <div className="wrap">

      <div className={`card ${customClass}`}>
        <div className="container">
          <h3 className="container-title">{title}</h3>
          <div className="container-description">
            <p className="container-description-text">{description}</p>

            {link && (
              <a className="container-description-link" href={link.url} target="_blank" rel="noreferrer">
                <img className="container-description-image" src={link.icon} alt={link.alt} />
              </a>
            )}

          </div>
        </div>
        <img
          className={`container-image ${
            imageSize === "small" ? "container-image-small" : ""
          }`}
          src={imgSrc}
          alt={alt}
        />
      </div>

      {buttonText && <button className="button">{buttonText}</button>}

    </div>
  );

}