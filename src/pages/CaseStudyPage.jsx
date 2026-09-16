import { Link, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import ProjectVisual from "../components/ProjectVisual";
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

function FailureModeMatrix({ items }) {
  return (
    <div className="failure-matrix" role="list">
      {items.map((item) => (
        <article className="failure-matrix__item" key={item.failure} role="listitem">
          <div>
            <span className="failure-matrix__label">Failure Mode</span>
            <h3>{item.failure}</h3>
          </div>
          <div>
            <span className="failure-matrix__label">Constraint</span>
            <p>{item.constraint}</p>
          </div>
          <div>
            <span className="failure-matrix__label">Expected Behavior</span>
            <p>{item.expected}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function EvidenceImage({ evidence }) {
  return (
    <figure className="case-evidence">
      <img
        src={evidence.src}
        alt={evidence.alt}
        loading="lazy"
        decoding="async"
      />
      <figcaption>{evidence.caption}</figcaption>
    </figure>
  );
}

function DemoEvidence({ demo }) {
  return (
    <figure className="case-demo">
      <div className="case-demo__media">
        <img src={demo.poster} alt={`${demo.title}静帧`} loading="lazy" decoding="async" />
      </div>
      <figcaption>
        <span className="case-demo__eyebrow">Runtime Evidence</span>
        <strong>{demo.title}</strong>
        <span className="case-demo__meta">{demo.meta}</span>
        <p>{demo.caption}</p>
      </figcaption>
    </figure>
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
          <ProjectVisual project={project} className="case-hero__media" eager />
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
              description="聚焦真正影响角色行为、状态或交互体验的问题。"
            />
            <ChallengeCards challenges={project.challenges} />
          </section>

          {project.failureModes?.length ? (
            <section className="case-section case-section--failure">
              <SectionHeading
                title="失败模式与行为约束"
                english="Failure Mode → Constraint → Expected Behavior"
                description="把容易出现的失控方向写成可复测的行为约束，而不是用模糊的“更自然 / 更克制”描述结果。"
              />
              <FailureModeMatrix items={project.failureModes} />
            </section>
          ) : null}

          <section className="case-section">
            <SectionHeading
              title="设计方案"
              english="Design Approach"
              description="用一次具体迭代说明问题如何被拆解、调整并重新验证。"
            />
            <IterationFlow steps={project.approach} />
          </section>

          <section className="case-section case-section--band">
            <SectionHeading title="交互 / Prompt 结构" english="System Design" />
            <SystemDiagram
              nodes={project.systemDesign.nodes}
              description={project.systemDesign.description}
            />
          </section>

          <section className="case-section">
            <SectionHeading
              title="测试方法"
              english="Testing"
              description="记录观察维度、测试重点与判断依据；不为了填版面强行添加截图。"
            />
            <TestingMatrix items={project.testing} />
          </section>

          <section className="case-section">
            <SectionHeading
              title="Bad Case 与迭代"
              english="Iteration"
              description="保留问题、分析、修改和结果，重点展示判断过程而非包装成果。"
            />
            <div className="iteration-stack">
              {project.iterations.map((item) => (
                <BeforeAfter item={item} key={item.title} />
              ))}
            </div>
            {project.conversation.length ? (
              <ConversationExample messages={project.conversation} />
            ) : null}
          </section>

          <section className="case-section">
            <SectionHeading title="最终 / 当前效果" english="Result" />
            <TextList items={project.result} />
            {project.demoEvidence ? <DemoEvidence demo={project.demoEvidence} /> : null}
            {project.evidenceImage ? <EvidenceImage evidence={project.evidenceImage} /> : null}
            <ResultGallery gallery={project.gallery} projectName={project.name} />
          </section>

          {project.relationshipStages.length ? (
            <section className="case-section">
              <SectionHeading title="关系阶段" english="Relationship Stage" />
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
          返回 Kanau Lab
        </Link>
      </footer>
    </>
  );
}
