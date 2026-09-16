import { ImageIcon } from "./Icons";

export default function MediaFrame({
  src,
  alt = "",
  placeholder,
  className = "",
  eager = false,
}) {
  if (src) {
    return (
      <figure className={`media-frame ${className}`.trim()}>
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </figure>
    );
  }

  if (!placeholder) {
    return null;
  }

  return (
    <figure
      className={`media-frame media-frame--placeholder ${className}`.trim()}
      aria-label={placeholder}
    >
      <ImageIcon />
      <figcaption>{placeholder}</figcaption>
    </figure>
  );
}
