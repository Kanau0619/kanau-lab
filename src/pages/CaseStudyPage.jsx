import { Link, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import MediaFrame from "../components/MediaFrame";
import TagList from "../components/TagList";
import SectionHeading from "../components/SectionHeading";
import ProjectInfoCard from "../components/ProjectInfoCard";
import ChallengeCards from "../components/ChallengeCards";
import IterationFlow from "../components/IterationFlow";
import SystemDiagram from "../components/SystemDiagram";
import TestingMatrix from "../components/TestingMatrix";
import BeforeAfter from "../components/BeforeAfter";
import ConversationExample from "../components/ConversationExample";
import RelationshipTimeline from "../components/RelationshipTimeline";
import ResultGallery from "../components/ResultGallery";
import { ArrowLeftIcon } from "../components/Icons";
import { projectsBySlug } from "../data/projects";
import NotFoundPage from "./NotFoundPage";

function TextList({ items }) {
  return (
    <div className="prose">
      {items.map((item, index) => (
        <p key={`${item}-${index}`}>{item}</p>
      ))}
    </div>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = projectsBySlug.get(slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SiteHeader />
      <main className="case-study">
        <section className="case-hero container">
          <div className="case-hero__content">
            <Link className="back-link" to="/">
              <ArrowLeftIcon />
              返回作品集
            </Link>
            <div className="case-hero__title-row">
              <h1>{project.name}</h1>
              {project.status ? (
                <span className="status-label">{project.status}</span>
              ) : null}
            </div>
            <p className="case-hero__subtitle">{project.subtitle}</p>
            <p className="case-hero__summary">{project.summary}</p>
            <TagList tags={project.tags} />
          </div>
          <MediaFrame
            src={project.heroImage}
            alt={`${project.name}角色主视觉`}
            placeholder={project.heroPlaceholder}
            className="case-hero__media"
            eager
          />
        </section>

        <div className="case-content container">
          <section className="case-section">
            <SectionHeading title="项目背景" english="Project Background" />
            <div className="background-layout">
              <TextList items={project.background} />
              <ProjectInfoCard info={project.projectInfo} />
            </div>
          </section>

          <section className="case-section">
            <SectionHeading title="设计目标" english="Design Goals" />
            <ol className="goal-list">
              {project.goals.map((goal, index) => (
                <li key={goal}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{goal}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="case-section">
            <SectionHeading
              title="核心难点"
              english="Challenges"
              description="这里呈现需要解决的行为、状态或体验问题，而不是角色背景故事。"
            />
            <ChallengeCards challenges={project.challenges} />
          </section>

          <section className="case-section">
            <SectionHeading
              title="设计方案"
              english="Design Approach"
              description="使用一条具体迭代链路说明如何从问题走到可验证结果。"
            />
            <IterationFlow steps={project.approach} />
          </section>

          <section className="case-section case-section--band">
            <SectionHeading
              title="交互 / Prompt 结构"
              english="System Design"
            />
            <SystemDiagram
              nodes={project.systemDesign.nodes}
              description={project.systemDesign.description}
            />
          </section>

          <section className="case-section">
            <SectionHeading
              title="测试方法"
              english="Testing"
              description="默认使用测试矩阵记录观察维度、测试重点与判断依据；只有存在真实证据时才添加截图。"
            />
            <TestingMatrix items={project.testing} />
          </section>

          <section className="case-section">
            <SectionHeading
              title="Bad Case 与迭代"
              english="Iteration"
              description="直接展示模型输出文本、问题分析、修改内容与调整后的结果。"
            />
            <div className="iteration-stack">
              {project.iterations.map((item) => (
                <BeforeAfter item={item} key={item.title} />
              ))}
            </div>
            <ConversationExample messages={project.conversation} />
          </section>

          <section className="case-section">
            <SectionHeading title="最终 / 当前效果" english="Result" />
            <TextList items={project.result} />
            <ResultGallery
              gallery={project.gallery}
              projectName={project.name}
            />
          </section>

          {project.relationshipStages.length ? (
            <section className="case-section">
              <SectionHeading
                title="关系阶段"
                english="Relationship Stage"
              />
              <RelationshipTimeline stages={project.relationshipStages} />
            </section>
          ) : null}

          <section className="case-section case-section--skills">
            <SectionHeading title="能力标签" english="Skills" />
            <TagList tags={project.tags} />
          </section>
        </div>
      </main>
      <footer className="site-footer container">
        <Link className="back-link" to="/">
          <ArrowLeftIcon />
          返回 AI Character &amp; Conversation Design
        </Link>
      </footer>
    </>
  );
}
