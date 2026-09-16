const previewSlugs = new Set(["zhan-chenyi", "yu-zhi", "yin-zhaoye"]);

export function hasStatusPreview(slug) {
  return previewSlugs.has(slug);
}

function ZhanPreview() {
  return (
    <div className="status-preview__shell status-preview__shell--zhan">
      <header className="status-preview__header">
        <div>
          <span>Guard Status</span>
          <strong>詹辰一</strong>
        </div>
        <span className="status-preview__badge">Regex Render</span>
      </header>
      <div className="status-preview__base">
        <span>2026.5.12</span>
        <span>午后</span>
        <span>主宅东厅</span>
      </div>
      <div className="status-preview__grid status-preview__grid--three">
        <div>
          <span>Guard</span>
          <strong>贴身近卫 · 初次报到</strong>
        </div>
        <div>
          <span>Mood</span>
          <strong>专注 · 轻微期待</strong>
        </div>
        <div>
          <span>Mind</span>
          <strong>先确认环境，再把注意力放回你身上。</strong>
        </div>
      </div>
    </div>
  );
}

function YuPreview() {
  return (
    <div className="status-preview__shell status-preview__shell--yu">
      <header className="status-preview__header">
        <div>
          <span>Structured Status</span>
          <strong>虞执</strong>
        </div>
        <span className="status-preview__badge">Regex / Parser</span>
      </header>
      <div className="status-preview__base">
        <span>08月16日</span>
        <span>雨夜</span>
        <span>老城区</span>
      </div>
      <div className="status-preview__rows">
        <div><span>Coin</span><strong>正面</strong><p>公开必要事实，不额外制造误导。</p></div>
        <div><span>Scene</span><strong>袖口微湿</strong><p>收伞后主动让开门口位置。</p></div>
        <div><span>Mind</span><strong>保持信息差</strong><p>不提前泄露尚未解锁的过去。</p></div>
        <div><span>Bond</span><strong>重新熟悉</strong><p>下一步意图：送你回家。</p></div>
      </div>
    </div>
  );
}

function YinPreview() {
  return (
    <div className="status-preview__shell status-preview__shell--yin">
      <header className="status-preview__header">
        <div>
          <span>幽契状态</span>
          <strong>殷照夜</strong>
        </div>
        <span className="status-preview__badge">Collapsed UI</span>
      </header>
      <div className="status-preview__metrics">
        <div><span>魂识</span><strong>72</strong><small>尚能自持</small></div>
        <div><span>鬼域</span><strong>影随</strong><small>影子仍在身后</small></div>
        <div><span>婚契</span><strong>48</strong><small>隐隐相牵</small></div>
        <div><span>咒缚</span><strong>36</strong><small>仍在蔓延</small></div>
      </div>
      <div className="status-preview__yin-note">
        <span>当前异状</span>
        <strong>无</strong>
        <p>固定视觉层承载氛围，动态状态只保留必要信息。</p>
      </div>
    </div>
  );
}

export default function StatusPreview({ project }) {
  if (!previewSlugs.has(project.slug)) {
    return null;
  }

  return (
    <figure className="status-preview">
      {project.slug === "zhan-chenyi" ? <ZhanPreview /> : null}
      {project.slug === "yu-zhi" ? <YuPreview /> : null}
      {project.slug === "yin-zhaoye" ? <YinPreview /> : null}
      <figcaption>
        结构预览基于角色卡实际状态字段整理，仅展示适合求职作品集的公开信息；不是对话模拟，也不等同于最终酒馆主题的完整视觉。
      </figcaption>
    </figure>
  );
}
