import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import ProjectCard from "../components/ProjectCard";
import { ArrowRightIcon } from "../components/Icons";
import { projects } from "../data/projects";

export default function PortfolioHome() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero container">
          <div className="home-hero__main">
            <h1>AI Character &amp;<br />Conversation Design</h1>
            <p>
              面向 AI 角色内容策划、AI 陪伴产品与 Conversation Design
              岗位的专业作品集。重点呈现我如何设计角色行为、组织 Prompt
              与交互系统，并通过测试和迭代改善体验。
            </p>
            <a className="button button--primary" href="#case-studies">
              查看项目
              <ArrowRightIcon />
            </a>
          </div>
          <div className="home-hero__capabilities" aria-label="Core capabilities">
            <span>Character Design</span>
            <span>Conversation Design</span>
            <span>Prompt Iteration</span>
            <span>Relationship Design</span>
            <span>Model Testing</span>
          </div>
        </section>

        <section className="projects container" id="case-studies">
          <header className="projects__header">
            <h2>Selected Case Studies</h2>
            <p>
              每个项目聚焦一个不同的设计问题，并使用统一结构呈现背景、难点、系统设计、测试和迭代过程。
            </p>
          </header>
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.slug} />
          ))}
        </section>
      </main>
      <footer className="site-footer container">
        <span>AI Character &amp; Conversation Design</span>
        <Link to="/">Back to top</Link>
      </footer>
    </>
  );
}
