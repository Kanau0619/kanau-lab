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
            <p className="home-hero__eyebrow">Kanau Lab · Selected Works</p>
            <h1>
              AI Character &amp;
              <br />
              Conversation Design
            </h1>
            <p>
              从 Persona、关系节奏和信息边界，到变量状态、Prompt 结构与多模型测试。
              这里记录我如何把一个角色想法拆成可运行、可测试、可以继续迭代的 AI 交互体验。
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
            <span>State &amp; Relationship Design</span>
            <span>Model Testing</span>
          </div>
        </section>

        <section className="projects container" id="case-studies">
          <header className="projects__header">
            <h2>Selected Case Studies</h2>
            <p>
              四个项目分别聚焦多时间线一致性、变量驱动交互、长期信息边界与沉浸式界面迭代。每个案例都保留真实的设计取舍、测试方法和已知限制。
            </p>
          </header>
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.slug} />
          ))}
        </section>
      </main>
      <footer className="site-footer container">
        <span>Kanau Lab · AI Character &amp; Conversation Design</span>
        <Link to="/">Back to top</Link>
      </footer>
    </>
  );
}
