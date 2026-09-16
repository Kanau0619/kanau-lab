const commonRole =
  "需求定义、角色设计、Prompt 设计、Interaction Testing 与最终效果验证；代码实现由 Codex 协助完成。";

export const projects = [
  {
    slug: "zhan-chenyi",
    name: "詹辰一",
    subtitle: "Multi-timeline Character Consistency",
    status: "",
    summary:
      "多时间线与不同关系阶段下的 Persona 一致性、关系推进节奏与模型行为控制。",
    heroImage: null,
    heroPlaceholder: "[待补充：詹辰一角色主视觉]",
    tags: [
      "Character Design",
      "Conversation Design",
      "Multi-scenario Design",
      "Relationship Pacing",
      "Prompt Design",
      "LLM Testing",
    ],
    projectInfo: {
      projectType: "AI Character / Conversation Design",
      platform: "[待补充：实际运行平台]",
      role: commonRole,
      tools: "[待补充：实际使用工具]",
    },
    background: ["[待补充：项目起因、使用场景与目标受众]"],
    goals: [
      "[待补充：多 Scenario / Conversation Entry 的设计目标]",
      "[待补充：不同时间线下的 Persona 一致性目标]",
      "[待补充：关系推进节奏与行为边界目标]",
    ],
    challenges: [
      {
        title: "Persona 一致性",
        text: "[待补充：同一角色在不同时间线与场景下容易出现的偏差]",
      },
      {
        title: "关系推进节奏",
        text: "[待补充：模型过早亲密或强制进入恋爱关系的问题]",
      },
      {
        title: "时间线隔离",
        text: "[待补充：不同 Scenario 之间信息串联的问题]",
      },
      {
        title: "表达去模板化",
        text: "[待补充：重复句式或模板化表达的具体表现]",
      },
    ],
    approach: [
      {
        label: "Problem",
        text: "[待补充：选择一个具体行为问题]",
      },
      {
        label: "Analysis",
        text: "[待补充：Prompt、上下文或关系阶段层面的原因]",
      },
      {
        label: "Solution",
        text: "[待补充：实际采用的结构或规则调整]",
      },
      {
        label: "Result",
        text: "[待补充：调整后的可观察变化]",
      },
    ],
    systemDesign: {
      description:
        "[待补充：Persona、Scenario、关系阶段与回复约束如何共同控制角色行为]",
      nodes: [
        "Persona",
        "Scenario",
        "Timeline Context",
        "Relationship Stage",
        "Model Output",
      ],
    },
    testing: [
      {
        dimension: "Persona Consistency",
        focus: "不同时间线下的核心性格、表达方式与行为边界",
        evidence: "[待补充：测试方法或判断标准]",
      },
      {
        dimension: "Relationship Pacing",
        focus: "初识、熟悉与关系深化阶段的推进速度",
        evidence: "[待补充：测试方法或判断标准]",
      },
      {
        dimension: "Timeline Isolation",
        focus: "不同 Scenario 是否出现记忆或设定串联",
        evidence: "[待补充：测试方法或判断标准]",
      },
      {
        dimension: "Expression Quality",
        focus: "重复句式、模板化表达与不自然亲密措辞",
        evidence: "[待补充：测试方法或判断标准]",
      },
    ],
    iterations: [
      {
        title: "[待补充：一次代表性的 Prompt 迭代]",
        before: "[待补充：修改前的模型输出文本]",
        issue: "[待补充：这段输出暴露的问题与原因分析]",
        revision: "[待补充：具体修改了哪些 Prompt 或上下文结构]",
        after: "[待补充：修改后的模型输出文本]",
        result: "[待补充：调整后的效果与仍需观察的问题]",
      },
    ],
    conversation: [
      { speaker: "user", text: "[待补充：用户输入示例]" },
      { speaker: "character", text: "[待补充：角色回复示例]" },
      { speaker: "user", text: "[待补充：继续对话示例]" },
      { speaker: "character", text: "[待补充：角色行为差异示例]" },
    ],
    relationshipStages: [
      { name: "[待补充：阶段一]", description: "[待补充：行为边界]" },
      { name: "[待补充：阶段二]", description: "[待补充：关系变化]" },
      { name: "[待补充：阶段三]", description: "[待补充：表达变化]" },
      { name: "[待补充：阶段四]", description: "[待补充：稳定状态]" },
    ],
    result: ["[待补充：最终效果、当前状态与仍需继续验证的部分]"],
    gallery: [],
  },
  {
    slug: "yu-zhi",
    name: "虞执",
    subtitle: "Variable-driven Interaction",
    status: "",
    summary:
      "以变量状态、结构化输出与 Interactive Status UI 构成可控的 AI 角色交互体验。",
    heroImage: null,
    heroPlaceholder: "[待补充：虞执角色主视觉]",
    tags: [
      "Conversation Design",
      "State Design",
      "Structured Prompt",
      "JSON",
      "Regex",
      "AI-assisted Front-end",
      "QA",
    ],
    projectInfo: {
      projectType: "Variable-driven AI Character Interaction",
      platform: "[待补充：实际运行平台]",
      role: commonRole,
      tools: "[待补充：实际使用工具]",
    },
    background: [
      "[待补充：为什么需要用变量而不是只依赖自然语言 Prompt]",
      "[待补充：目标交互体验与使用场景]",
    ],
    goals: [
      "[待补充：Persona 与变量状态的协作目标]",
      "[待补充：结构化模型输出的稳定性目标]",
      "[待补充：PC / 移动端 Interactive Status UI 的信息目标]",
    ],
    challenges: [
      {
        title: "状态可控性",
        text: "[待补充：变量更新、继承或异常跳变的问题]",
      },
      {
        title: "结构化输出稳定性",
        text: "[待补充：JSON 或固定格式输出可能出现的错误]",
      },
      {
        title: "解析与展示",
        text: "[待补充：Regex / Parser 与 UI State 之间的衔接问题]",
      },
      {
        title: "跨端信息密度",
        text: "[待补充：PC 与移动端状态信息的展示差异]",
      },
    ],
    approach: [
      { label: "Problem", text: "[待补充：一次变量或输出结构问题]" },
      { label: "Analysis", text: "[待补充：状态、Prompt 或解析层原因]" },
      { label: "Solution", text: "[待补充：规则、Schema 或 UI 调整]" },
      { label: "Result", text: "[待补充：调整后的可观察变化]" },
    ],
    systemDesign: {
      description:
        "Persona、World Info / Knowledge Context 与变量状态共同影响模型输出，再经 Regex / Parser 转换为 Interactive Status UI。",
      nodes: [
        "Persona",
        "World Info",
        "Variables",
        "Model Output",
        "Regex / Parser",
        "UI State",
      ],
    },
    testing: [
      {
        dimension: "State Transition",
        focus: "变量更新条件、边界值与异常跳变",
        evidence: "[待补充：测试项目或判断标准]",
      },
      {
        dimension: "Structured Output",
        focus: "JSON / 固定格式是否完整、可解析且字段稳定",
        evidence: "[待补充：测试项目或判断标准]",
      },
      {
        dimension: "Parser & UI",
        focus: "Regex / Parser 失败时的信息降级与界面表现",
        evidence: "[待补充：测试项目或判断标准]",
      },
      {
        dimension: "Responsive Experience",
        focus: "PC 与移动端的信息层级、换行与交互可读性",
        evidence: "[待补充：测试项目或判断标准]",
      },
    ],
    iterations: [
      {
        title: "[待补充：一次代表性的变量或结构化输出迭代]",
        before: "[待补充：修改前的模型输出文本]",
        issue: "[待补充：输出、变量或 UI 映射中的问题分析]",
        revision: "[待补充：Prompt、Schema、Regex 或界面结构修改]",
        after: "[待补充：修改后的模型输出文本]",
        result: "[待补充：调整后的效果与遗留问题]",
      },
    ],
    conversation: [
      { speaker: "user", text: "[待补充：触发变量变化的用户输入]" },
      { speaker: "character", text: "[待补充：角色回复]" },
      { speaker: "system", text: "[待补充：对应的变量 / UI State 变化]" },
    ],
    relationshipStages: [],
    result: ["[待补充：当前可运行效果、稳定性与跨端表现]"],
    gallery: [],
  },
  {
    slug: "huo-bingchu",
    name: "霍秉初",
    subtitle: "Long-term Character Consistency",
    status: "",
    summary:
      "面向长期上下文的 Persona、关系阶段、信息边界与 Prompt 迭代设计。",
    heroImage: null,
    heroPlaceholder: "[待补充：霍秉初角色主视觉]",
    tags: [
      "Character Persona",
      "Relationship Design",
      "Long-context Consistency",
      "Prompt Iteration",
      "Multi-model Testing",
    ],
    projectInfo: {
      projectType: "Long-term AI Character Interaction",
      platform: "[待补充：实际运行平台]",
      role: commonRole,
      tools: "[待补充：实际使用工具与测试模型]",
    },
    background: ["[待补充：长期交互场景、角色目标与项目范围]"],
    goals: [
      "[待补充：长期人物塑造与行为边界目标]",
      "[待补充：关系阶段与情感推进目标]",
      "[待补充：秘密信息与设定披露控制目标]",
    ],
    challenges: [
      {
        title: "Long-context Consistency",
        text: "[待补充：长上下文中容易出现的 Persona 漂移]",
      },
      {
        title: "Relationship Progression",
        text: "[待补充：情感推进过快或阶段边界失效的问题]",
      },
      {
        title: "Information Boundary",
        text: "[待补充：秘密信息或背景设定过早泄露的问题]",
      },
      {
        title: "Cross-model Behavior",
        text: "[待补充：不同模型对同一 Prompt 的行为差异]",
      },
    ],
    approach: [
      { label: "Problem", text: "[待补充：一次长期交互中的 OOC 问题]" },
      { label: "Analysis", text: "[待补充：上下文、阶段或规则层原因]" },
      { label: "Solution", text: "[待补充：Persona / Prompt 迭代方式]" },
      { label: "Result", text: "[待补充：调整后的长期表现]" },
    ],
    systemDesign: {
      description:
        "[待补充：Persona、秘密信息、关系阶段与长期上下文的组织方式]",
      nodes: [
        "Core Persona",
        "Information Boundary",
        "Relationship Stage",
        "Long Context",
        "Model Output",
      ],
    },
    testing: [
      {
        dimension: "Long-context Consistency",
        focus: "核心 Persona、语言风格与行为边界是否随上下文漂移",
        evidence: "[待补充：测试方法或判断标准]",
      },
      {
        dimension: "Relationship Stage",
        focus: "不同关系阶段的亲密度、主动性与信息披露",
        evidence: "[待补充：测试方法或判断标准]",
      },
      {
        dimension: "Information Control",
        focus: "秘密信息是否在合理条件下才被披露",
        evidence: "[待补充：测试方法或判断标准]",
      },
      {
        dimension: "Multi-model Behavior",
        focus: "不同模型中的 OOC、节奏与设定遵循差异",
        evidence: "[待补充：测试方法或判断标准]",
      },
    ],
    iterations: [
      {
        title: "[待补充：一次长期一致性 Prompt 迭代]",
        before: "[待补充：修改前的模型输出文本]",
        issue: "[待补充：OOC、关系推进或信息泄露问题分析]",
        revision: "[待补充：具体的 Prompt 结构调整]",
        after: "[待补充：修改后的模型输出文本]",
        result: "[待补充：调整后的效果与仍需验证的部分]",
      },
    ],
    conversation: [
      { speaker: "user", text: "[待补充：长期关系阶段中的用户输入]" },
      { speaker: "character", text: "[待补充：修改前或修改后的角色回复]" },
    ],
    relationshipStages: [
      { name: "[待补充：阶段一]", description: "[待补充：关系边界]" },
      { name: "[待补充：阶段二]", description: "[待补充：允许的变化]" },
      { name: "[待补充：阶段三]", description: "[待补充：信息披露]" },
      { name: "[待补充：阶段四]", description: "[待补充：稳定状态]" },
    ],
    result: ["[待补充：当前长期一致性表现与已知限制]"],
    gallery: [],
  },
  {
    slug: "yin-zhaoye",
    name: "殷照夜",
    subtitle: "Immersive Character Experience",
    status: "WIP / 持续迭代中",
    summary:
      "围绕 Persona、幽冥题材叙事、动态信息与音频辅助层构建沉浸式交互体验。",
    heroImage: null,
    heroPlaceholder: "[待补充：殷照夜角色主视觉]",
    tags: [
      "AI Character Design",
      "Immersive Narrative",
      "UI Information Design",
      "Responsive Testing",
      "Iterative Design",
    ],
    projectInfo: {
      projectType: "Immersive AI Character Experience",
      platform: "[待补充：实际运行平台]",
      role: commonRole,
      tools: "[待补充：实际使用工具]",
    },
    background: [
      "[待补充：幽冥题材叙事与多模态体验的项目背景]",
      "当前状态：WIP / 持续迭代中。页面重点记录设计、发现问题、分析原因、重拆结构与再次迭代的过程。",
    ],
    goals: [
      "[待补充：Persona 与沉浸式叙事目标]",
      "[待补充：固定视觉层、动态信息层与音频辅助层的职责]",
      "[待补充：PC / 手机端体验目标]",
    ],
    challenges: [
      {
        title: "Narrative & Persona",
        text: "[待补充：题材氛围与角色行为一致性之间的问题]",
      },
      {
        title: "Information Architecture",
        text: "[待补充：固定视觉与动态状态信息互相干扰的问题]",
      },
      {
        title: "Multimodal Balance",
        text: "[待补充：音乐、视觉与对话之间的注意力分配问题]",
      },
      {
        title: "Responsive Experience",
        text: "[待补充：PC / 手机端信息密度与布局问题]",
      },
    ],
    approach: [
      { label: "Problem", text: "[待补充：当前版本发现的具体问题]" },
      { label: "Analysis", text: "[待补充：问题来源与结构分析]" },
      { label: "Solution", text: "[待补充：重新拆分界面或信息层]" },
      { label: "Result", text: "[待补充：再次迭代后的当前效果]" },
    ],
    systemDesign: {
      description:
        "界面按职责拆分为固定视觉层、动态信息层与音频辅助层，避免所有元素同时争夺注意力。",
      nodes: [
        "Persona & Narrative",
        "Fixed Visual Layer",
        "Dynamic Info Layer",
        "Audio Support Layer",
        "Responsive Experience",
      ],
    },
    testing: [
      {
        dimension: "Narrative Coherence",
        focus: "Persona、题材叙事与界面反馈是否互相支持",
        evidence: "[待补充：测试项目或判断标准]",
      },
      {
        dimension: "Information Priority",
        focus: "固定视觉层与动态信息层的阅读顺序",
        evidence: "[待补充：测试项目或判断标准]",
      },
      {
        dimension: "Audio Support",
        focus: "音乐是否辅助氛围而不干扰阅读和交互",
        evidence: "[待补充：测试项目或判断标准]",
      },
      {
        dimension: "Responsive Experience",
        focus: "PC / 手机端的布局、信息密度与操作可达性",
        evidence: "[待补充：测试项目或判断标准]",
      },
    ],
    iterations: [
      {
        title: "[待补充：一次界面结构重拆迭代]",
        before: "[待补充：修改前的体验或模型输出描述]",
        issue: "[待补充：发现的问题与原因分析]",
        revision: "[待补充：界面层、Prompt 或交互结构修改]",
        after: "[待补充：修改后的体验或模型输出描述]",
        result: "[待补充：当前效果与下一步迭代方向]",
      },
    ],
    conversation: [
      { speaker: "user", text: "[待补充：用户输入示例]" },
      { speaker: "character", text: "[待补充：角色回复示例]" },
      { speaker: "system", text: "[待补充：动态状态或音频反馈]" },
    ],
    relationshipStages: [],
    result: [
      "WIP / 持续迭代中",
      "[待补充：当前已完成效果、已知问题与下一步计划]",
    ],
    gallery: [],
  },
];

export const projectsBySlug = new Map(
  projects.map((project) => [project.slug, project]),
);
