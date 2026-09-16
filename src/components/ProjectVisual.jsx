const ASSET_VERSION = "20260916-hq1";

const publicAsset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}?v=${ASSET_VERSION}`;

const versionAsset = (src) => {
  if (!src || src.includes(`v=${ASSET_VERSION}`)) {
    return src;
  }

  return `${src}${src.includes("?") ? "&" : "?"}v=${ASSET_VERSION}`;
};

const fallbackHeroes = {
  "yu-zhi": publicAsset("images/yu-zhi/hero.webp"),
  "huo-bingchu": publicAsset("images/huo-bingchu/hero.webp"),
  "yin-zhaoye": publicAsset("images/yin-zhaoye/hero.webp"),
};

const fallbackHeroPositions = {
  "yu-zhi": "center 31%",
  "huo-bingchu": "center 27%",
  "yin-zhaoye": "center 34%",
};

export default function ProjectVisual({ project, className = "", eager = false }) {
  const heroImage = project.heroImage
    ? versionAsset(project.heroImage)
    : fallbackHeroes[project.slug];
  const heroPosition =
    project.heroPosition || fallbackHeroPositions[project.slug];

  if (heroImage) {
    return (
      <figure className={`media-frame project-visual ${className}`.trim()}>
        <img
          src={heroImage}
          alt={`${project.name}角色主视觉`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          style={heroPosition ? { objectPosition: heroPosition } : undefined}
        />
      </figure>
    );
  }

  return (
    <figure
      className={`media-frame project-visual project-visual--type ${className}`.trim()}
      aria-label={`${project.name}项目视觉封面`}
    >
      <div className="project-visual__mark">{project.name.slice(0, 1)}</div>
      <figcaption>
        <span className="project-visual__name">{project.name}</span>
        <span className="project-visual__subtitle">{project.subtitle}</span>
        <span className="project-visual__note">Character Study · Kanau Lab</span>
      </figcaption>
    </figure>
  );
}
