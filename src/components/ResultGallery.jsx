export default function ResultGallery({ gallery, projectName }) {
  if (!gallery?.length) {
    return null;
  }

  return (
    <div className="result-gallery">
      {gallery.map((image, index) => (
        <figure className="result-gallery__item" key={image.src}>
          <img
            src={image.src}
            alt={image.alt || `${projectName}项目效果 ${index + 1}`}
            loading="lazy"
            decoding="async"
          />
          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
