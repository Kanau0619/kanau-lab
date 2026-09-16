const commonRole =
  "需求定义、角色设计、Prompt 设计、Interaction Testing 与最终效果验证；代码实现由 Codex 协助完成。";

export const projects = [
  {
    slug: "zhan-chenyi",
    name: "詹辰一",
    subtitle: "Multi-timeline Character Consistency",
    status: "",
    summary:
      "围绕多开场、多时间线与关系节奏控制，验证同一 Persona 在不同初始状态下能否保持一致。",
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
      platform: "SillyTavern",
      role: commonRole,
      tools: "ChatGPT / Gemini / SillyTavern / JSON / Regex / Codex",
    },
    background: [
      "詹辰一项目重点不是单纯塑造“忠犬型角色”，而是控制同一人物在不同时间节点、初始关系与场景中的行为一致性。最新版角色卡包含 6 个独立开场，并明确规定不同开场可对应不同时间线，不能把彼此经历强行串联。",
      "角色核心矛盾是“获得站在对方身边的资格”与“真正被选择”之间的落差。设计时需要同时保留他的亲近、恶趣味与危险性，又避免模型把这些特征压缩成单一撒娇模板。",
    ],
    goals: [
      "让不同 Scenario / Conversation Entry 拥有独立的时间节点与初始关系基础，同时维持一致的核心人格。",
      "避免模型自动推进关系、提前进入高亲密状态，或把单次互动误判为关系阶段升级。",
      "减少“固定动作 + 心理总结 + 台词”的八股式输出，让角色表达更自然、有起伏。",
    ],
    challenges: [
      {
        title: "Persona 一致性",
        text: "角色在用户面前亲近、在外人面前疏离，模型容易把这种反差演成瞬间变脸，或长期只保留“黏人金毛”一面。",
      },
      {
        title: "关系推进节奏",
        text: "模型容易因为角色已有强烈情感背景而过早表白、主动越界，削弱“由用户决定关系推进”的设计目标。",
      },
      {
        title: "时间线隔离",
        text: "不同开场对应不同时间点与关系状态，如果缺少明确规则，模型可能错误引用其他开场已经发生的经历。",
      },
      {
        title: "表达去模板化",
        text: "狗狗眼、金发、泪痣、单膝跪等高辨识度特征容易被模型机械复读，需要限制高频特征并鼓励留白。",
      },
    ],
    approach: [
      {
        label: "Problem",
        text: "同一角色在不同开场中容易混用经历，并把“亲近”演成持续撒娇或快速推进关系。",
      },
      {
        label: "Analysis",
        text: "Persona 中存在强烈偏爱，但如果不单独定义时间线、关系边界和表达规则，模型会优先放大最显眼的人设标签。",
      },
      {
        label: "Solution",
        text: "在 System Prompt 与后置规则中分别加入开场隔离、关系节奏、双面行为过渡与去模板化约束，让“核心人格”和“当前关系状态”同时参与回复生成。",
      },
      {
        label: "Result",
        text: "不同开场可以从初见、重新靠近到更稳定的关系状态分别起步，同时仍保持“有判断、有恶趣味、顺从是主动选择”的人物核心。",
      },
    ],
    systemDesign: {
      description:
        "Core Persona 负责稳定人物底色；Scenario 与 Timeline Context 决定当前经历；Relationship Stage 控制亲密度和行为边界；输出规则用于压制模板化表达与跨时间线串联。",
      nodes: [
        "Core Persona",
        "Scenario",
        "Timeline Context",
        "Relationship Boundary",
        "Model Output",
      ],
    },
    testing: [
      {
        dimension: "Persona Consistency",
        focus: "不同时间线下的核心性格、表达方式与行为边界",
        evidence: "切换多个开场测试，观察角色是否仍保留主动判断、恶趣味与对外疏离，而不是只剩单一“忠犬”表现。",
      },
      {
        dimension: "Relationship Pacing",
        focus: "初识、熟悉与关系深化阶段的推进速度",
        evidence: "重点检查模型是否主动表白、强行升级关系或把一次亲密互动理解为永久许可。",
      },
      {
        dimension: "Timeline Isolation",
        focus: "不同 Scenario 是否出现记忆或设定串联",
        evidence: "从独立开场分别起跑，检查是否错误引用其他开场的既往经历、称呼或关系状态。",
      },
      {
        dimension: "Expression Quality",
        focus: "重复句式、模板化表达与特征机械复读",
        evidence: "观察高频特征词、固定动作公式与“微表情+心理OS+台词”结构是否连续出现。",
      },
    ],
    iterations: [
      {
        title: "从“角色标签”转向“行为规则”",
        before:
          "早期输出容易反复堆叠狗狗眼、金发、体型差、单膝跪等视觉特征，亲近场景也容易连续撒娇。",
        issue:
          "这些标签辨识度高，但缺少使用频率和场景约束时，会被模型当成最安全的重复模式。",
        revision:
          "加入高频特征限用、允许留白、黏人表现需要有起伏、双面切换必须有过渡等规则，并明确“不主动推进关系阶段”。",
        after:
          "角色可以在工作、警戒、日常与亲近场景之间切换，亲密感更多通过动作与距离变化体现，而不是每回合复读固定标签。",
        result:
          "人物辨识度仍在，但表达更自然；后续仍需持续观察不同模型是否重新出现模板化倾向。",
      },
    ],
    conversation: [
      { speaker: "user", text: "刚才晚宴上有人过来和我聊天，你怎么一直没说话？" },
      {
        speaker: "character",
        text: "“因为那是你的社交，不是我的任务。”他替你接过外套，语气很平常，手指却在衣领边停了一下，“不过他站得有点近。下次我会换个不那么碍眼的位置。”",
      },
    ],
    relationshipStages: [
      { name: "初次接触", description: "保持近卫边界，主动观察但不替用户推进关系。" },
      { name: "逐渐熟悉", description: "增加私下交流与恶趣味，仍保留独立判断和社交距离。" },
      { name: "稳定信任", description: "允许暴露更多不安与真实需求，但不会以此要求用户回应。" },
      { name: "关系深化", description: "亲密表达更直接，但仍由用户选择节奏与边界。" },
    ],
    result: [
      "当前版本已形成“多开场 + 时间线隔离 + 关系节奏 + 去模板化”完整规则链路。",
      "作品集展示重点放在多时间线一致性与表达控制，不展示成人向内容。",
    ],
    gallery: [],
  },
  {
    slug: "yu-zhi",
    name: "虞执",
    subtitle: "Variable-driven Interaction",
    status: "",
    summary:
      "将 Persona、信息差、关系阶段、事件状态与结构化输出结合，构建可追踪的角色交互状态。",
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
      platform: "SillyTavern",
      role: commonRole,
      tools: "Gemini / ChatGPT / SillyTavern / JSON / Regex / HTML/CSS / Codex",
    },
    background: [
      "虞执项目从“只靠自然语言 Prompt 维持角色状态”进一步扩展到变量驱动交互。当前版本包含 8 个开场入口，并用隐藏变量记录信息差、关系阶段、关键事件与开场路线。",
      "变量设计的目的不是把角色变成数值游戏，而是防止模型重复把同一事件演成第一次、提前泄露未解锁信息，或因为一两次亲密互动直接跳到高关系状态。",
    ],
    goals: [
      "让 Persona、信息差变量与关系阶段共同参与角色行为判断，而不是只依赖模型自由记忆。",
      "用严格 JSON 更新块记录真正发生变化的状态，避免无变化时频繁写入或污染上下文。",
      "通过 Regex 隐藏内部变量标记，并把可见状态输出映射到 Interactive Status UI，兼顾 PC 与移动端阅读。",
    ],
    challenges: [
      {
        title: "状态可控性",
        text: "关系、信息和关键事件不能按聊天轮数自动升级，也不能因为单次亲密行为直接跳阶段。",
      },
      {
        title: "结构化输出稳定性",
        text: "状态更新块必须是严格 JSON，且只能写发生变化的字段；格式偏差会直接影响后续解析与状态继承。",
      },
      {
        title: "信息差与可见层分离",
        text: "玩家从首页或故事档案看到的信息，不应自动等同于角色在剧情中已经获知的信息。",
      },
      {
        title: "解析与展示",
        text: "内部变量标记需要被隐藏，面向用户的状态栏则要稳定提取 Base、Coin、Scene、Mind、Bond 等可见字段。",
      },
    ],
    approach: [
      {
        label: "Problem",
        text: "纯自然语言记忆下，模型容易把“玩家知道”和“角色知道”混在一起，并重复触发已经发生过的关键事件。",
      },
      {
        label: "Analysis",
        text: "问题来自信息层、关系层和事件层缺少独立记录，模型只能依赖长上下文自行回忆，稳定性不足。",
      },
      {
        label: "Solution",
        text: "设计 route、info、relation_stage、events、event_notes 等变量；仅在剧情真正改变时输出部分 JSON 更新，并用 Regex 隐藏变量标记。",
      },
      {
        label: "Result",
        text: "开场路线、信息解锁与关系阶段可以独立维护，状态变化更可追踪，前端也能只展示用户真正需要看到的信息。",
      },
    ],
    systemDesign: {
      description:
        "Persona 与 World Info 决定角色行为范围；Variables 保存信息差、关系阶段与关键事件；模型仅在发生变化时输出严格 JSON 更新；Regex 隐藏内部标记，并将可见状态映射为 UI。",
      nodes: [
        "Persona",
        "World Info",
        "State Variables",
        "Model Output",
        "Regex / Parser",
        "Interactive UI",
      ],
    },
    testing: [
      {
        dimension: "State Transition",
        focus: "变量更新条件、关系阶段与事件去重",
        evidence: "检查单次关心、拥抱或争执是否错误触发阶段跳跃，并验证已发生事件不会再次被当成首次。",
      },
      {
        dimension: "Information Boundary",
        focus: "玩家可见信息与角色已知信息是否分离",
        evidence: "通过不同开场和线索触发检查 childhood_bond、real_methods、unrecorded_past、hidden_motive 是否按剧情推进。",
      },
      {
        dimension: "Structured Output",
        focus: "状态更新块与可见状态块的格式稳定性",
        evidence: "检查 JSON 是否只包含变化字段、状态栏五行顺序是否固定、内部字段是否出现非法竖线或标签。",
      },
      {
        dimension: "Parser & UI",
        focus: "Regex 隐藏内部标记与状态栏展示",
        evidence: "验证 yz_route_init / yz_state_update 能被隐藏，同时 yz_status 可被稳定提取并渲染。",
      },
    ],
    iterations: [
      {
        title: "把“关系感受”拆成可维护状态",
        before:
          "早期如果只写“重新熟悉”“更信任”等自然语言提示，模型可能因为一次高情绪事件直接把关系推进过头。",
        issue:
          "关系、信息与事件互相混在上下文里，缺少明确的状态边界和更新条件。",
        revision:
          "增加 relation_stage、info、events 与 event_notes，并规定每次最多移动一个关系阶段；单次亲密行为不自动跳阶段。",
        after:
          "关系推进、信息解锁与事件记录彼此独立，模型需要根据真实剧情变化决定是否更新，而不是按轮数自动升级。",
        result:
          "状态更容易追踪，也能减少重复事件和提前泄露；仍需持续验证不同模型对严格 JSON 的遵循程度。",
      },
    ],
    conversation: [
      { speaker: "user", text: "你以前的事情，我是不是已经全都知道了？" },
      {
        speaker: "character",
        text: "“没有。”虞执停了一下，没有把话题推开，“有些你知道的是公开报道，有些是我还没准备好讲的。你可以问，我会决定哪些现在能说。”",
      },
      {
        speaker: "system",
        text: "若本轮只产生“察觉异常”，只更新对应 info 字段；不自动提升 relation_stage。",
      },
    ],
    relationshipStages: [
      { name: "久别重逢", description: "温和谨慎，但保持主动与独立判断。" },
      { name: "重新熟悉", description: "交流更自然，开始主动邀约与表达意见。" },
      { name: "相互试探", description: "允许部分事实与留白并存，也会主动设立边界。" },
      { name: "稳定信任", description: "减少无害化修饰，允许出现有限脆弱与更直接判断。" },
      { name: "主动依赖", description: "会主动联系和表达需要，但不放弃独立行动。" },
      { name: "确认特殊关系", description: "情感表达更明确，但仍要求协商与持续边界。" },
    ],
    result: [
      "当前变量版已具备多开场路由、信息差、关系阶段、关键事件、严格 JSON 更新与状态栏输出规则。",
      "作品集将重点展示变量结构、Regex 解析和跨端状态 UI，不展示敏感剧情细节。",
    ],
    gallery: [],
  },
  {
    slug: "huo-bingchu",
    name: "霍秉初",
    subtitle: "Long-term Character Consistency",
    status: "",
    summary:
      "围绕回溯者隐藏信息、关系阶段与长期上下文，控制角色在持续互动中的信息披露和行为边界。",
    heroImage: null,
    heroPlaceholder: "[待补充：霍秉初角色主视觉]",
    tags: [
      "Character Persona",
      "Relationship Design",
      "Long-context Consistency",
      "Information Boundary",
      "Prompt Iteration",
      "Multi-model Testing",
    ],
    projectInfo: {
      projectType: "Long-term AI Character Interaction",
      platform: "SillyTavern",
      role: commonRole,
      tools: "Gemini / ChatGPT / SillyTavern / World Info / Codex",
    },
    background: [
      "霍秉初项目建立在末世长期互动场景中。角色拥有上一世完整经历与世界本质相关秘密，但这些信息不能因为写进设定就直接出现在对话里。",
      "当前版本包含 5 个主要开场，分别从不同身份、时间点和关系基础进入剧情；角色需要根据开场调整初始信任，同时维持“理性、克制、保护欲强但不无条件宠溺”的人物核心。",
    ],
    goals: [
      "让上一世记忆、世界本质与回溯者身份保持为隐藏信息，只有在合理剧情阶段逐步暴露。",
      "让关系按照观察、防备、试探、信任、依赖等过程推进，避免短暂互动直接产生深度感情。",
      "让第一世经验成为判断优势而非全知能力：当用户做出不同选择并得到更好结果时，角色需要重新评估。",
    ],
    challenges: [
      {
        title: "Long-context Consistency",
        text: "长对话中模型容易把“冷静克制”逐渐演成无条件温柔，或忘记角色仍保留自己的判断与立场。",
      },
      {
        title: "Relationship Progression",
        text: "角色自带强保护倾向，模型容易把保护误写成快速亲密，需要单独限制关系推进速度。",
      },
      {
        title: "Information Boundary",
        text: "回溯者身份、上一世经历与世界本质属于核心秘密，必须避免因为背景设定常驻而提前泄露。",
      },
      {
        title: "Experience ≠ Omniscience",
        text: "第一世记忆只能提供重要事件经验，不能让角色知道所有普通日期、地点和他人选择。",
      },
    ],
    approach: [
      {
        label: "Problem",
        text: "角色既拥有大量上一世信息，又需要在当前时间线中面对一个原本不存在的用户变量，模型容易过度依赖旧经验。",
      },
      {
        label: "Analysis",
        text: "如果不限制记忆边界，回溯设定会自然滑向“知道一切”；如果不定义关系阶段，保护行为又会被误读成恋爱确认。",
      },
      {
        label: "Solution",
        text: "将回溯秘密、行动逻辑、心理状态、用户变量和亲密关系模式拆成独立 World Info 条目，并在 Prompt 中明确不主动泄露与循序渐进规则。",
      },
      {
        label: "Result",
        text: "角色可以利用过去经验做判断，同时接受当前世界出现的新结果；关系推进与秘密披露也保持分层。",
      },
    ],
    systemDesign: {
      description:
        "Core Persona 保持人物底色；World Info 分别管理回溯秘密、行动逻辑、心理状态与用户变量；Relationship Stage 控制互动密度；Long Context 只提供经验，不提供全知。",
      nodes: [
        "Core Persona",
        "Hidden Information",
        "Relationship Stage",
        "Long Context",
        "Re-evaluation",
        "Model Output",
      ],
    },
    testing: [
      {
        dimension: "Long-context Consistency",
        focus: "核心 Persona、语言风格与个人立场是否随上下文漂移",
        evidence: "在持续互动中检查角色是否仍保持理性、克制和判断力，而不是逐渐变成无条件宠溺型。",
      },
      {
        dimension: "Relationship Stage",
        focus: "不同阶段的信任、主动性与亲密表达",
        evidence: "使用不同开场检查初始信任差异，并观察关系是否因单次事件跳过中间阶段。",
      },
      {
        dimension: "Information Control",
        focus: "回溯身份、第一世经历与世界本质是否提前泄露",
        evidence: "主动触碰相关话题，检查角色是否通过停顿、回避或有限回答维持秘密边界。",
      },
      {
        dimension: "Experience Boundary",
        focus: "第一世经验是否被错误演成全知",
        evidence: "引入与原时间线不同的用户选择，观察角色是否能重新评估，而不是强行坚持“未来必然如此”。",
      },
    ],
    iterations: [
      {
        title: "限制“重生者=全知”",
        before:
          "如果只强调角色拥有完整上一世记忆，模型容易对普通细节也表现得过分确定，并把过去经验当成当前唯一答案。",
        issue:
          "回溯设定信息量大，缺少“记忆会模糊、当前世界会偏离”的明确反向约束。",
        revision:
          "补充普通日期、地点和普通人的选择会逐渐模糊；用户是原时间线不存在的变量；当新选择产生更好结果时需要调整判断。",
        after:
          "角色仍然保留经验优势，但会对未知保持观察，并允许现实结果修正上一世认知。",
        result:
          "增强了角色可信度，也给长期剧情留下真正可变化的空间。",
      },
    ],
    conversation: [
      { speaker: "user", text: "你为什么这么确定明天那条路不能走？" },
      {
        speaker: "character",
        text: "霍秉初没有立刻回答，只把地图往你这边推了推。“我有理由，但不是每个细节都能解释清楚。你有别的方案就说，我们重新算。”",
      },
    ],
    relationshipStages: [
      { name: "观察与防备", description: "优先判断用户是否会影响原本未来，不主动暴露核心秘密。" },
      { name: "主动试探", description: "开始验证用户判断，并允许更多双向决策。" },
      { name: "产生兴趣", description: "意识到用户无法被旧经验解释，关注从风险判断转向个人好奇。" },
      { name: "建立信任", description: "愿意共享更多真实判断与有限脆弱，但仍保留关键秘密。" },
      { name: "逐渐依赖", description: "把用户纳入长期计划，并学习接受对方的照顾与不同判断。" },
    ],
    result: [
      "当前版本已将回溯身份、世界真相、行动逻辑、心理状态与亲密关系模式拆分管理。",
      "作品集重点展示长期一致性、秘密信息控制与“经验不等于全知”的角色设计。",
    ],
    gallery: [],
  },
  {
    slug: "yin-zhaoye",
    name: "殷照夜",
    subtitle: "Immersive Character Experience",
    status: "WIP / 持续迭代中",
    summary:
      "围绕幽冥题材角色，将固定视觉、动态状态与音频辅助拆分为可维护的沉浸式交互层。",
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
      platform: "SillyTavern / HTML Prototype",
      role: commonRole,
      tools: "HTML/CSS / JavaScript / Image Assets / Codex",
    },
    background: [
      "殷照夜目前仍处于持续迭代阶段。现有资料主要集中在状态栏、视觉资源和交互原型，完整角色卡尚未作为最终版本归档，因此作品集只展示已经实际完成或验证过的部分。",
      "项目核心问题不是“把界面做得更华丽”，而是在幽冥题材氛围、动态状态信息、音乐与跨端适配之间找到稳定结构，避免装饰元素过多后在手机和电脑上频繁错位。",
    ],
    goals: [
      "让角色叙事、幽冥视觉与状态信息保持同一气质，而不是各自独立存在。",
      "将界面拆为固定视觉层、动态信息层与音频辅助层，减少需要单独定位的装饰元素。",
      "控制 PC 与手机端的信息密度和布局稳定性，优先保证可读性与可维护性。",
    ],
    challenges: [
      {
        title: "Narrative & Visual Consistency",
        text: "冷银、灰蓝、旧金、雾、水影等视觉语言需要与角色的幽冥、庇护和危险感保持一致，避免变成通用古风婚庆风。",
      },
      {
        title: "Information Architecture",
        text: "魂识、鬼域、婚契、咒缚等动态状态需要清晰可读，但不能与主视觉装饰争夺注意力。",
      },
      {
        title: "Asset Positioning",
        text: "早期大量独立装饰依赖精确定位，在不同屏幕尺寸下容易产生位移，因此需要重新划分固定与动态元素。",
      },
      {
        title: "Responsive Experience",
        text: "同一状态栏需要兼顾桌面与手机端展开、折叠、滚动和点击区域，不能依赖固定宽高拼接。",
      },
    ],
    approach: [
      {
        label: "Problem",
        text: "把边框、卷轴、灯笼、水波、花瓣等装饰全部拆成独立元素后，跨端适配成本高，页面稍改就可能出现错位。",
      },
      {
        label: "Analysis",
        text: "真正需要变化的只是状态信息和少量动态效果，大部分装饰其实属于稳定氛围层，不需要逐项参与布局。",
      },
      {
        label: "Solution",
        text: "重新区分固定视觉层、动态信息层和音频辅助层，让固定底图承担主要氛围，只保留状态、交互与少量动态元素作为独立组件。",
      },
      {
        label: "Result",
        text: "当前原型已经形成折叠/展开状态、魂识/鬼域/婚契/咒缚信息和独立交互层；视觉细节仍在继续调整。",
      },
    ],
    systemDesign: {
      description:
        "固定视觉层承担主要装饰与氛围；动态信息层负责魂识、鬼域、婚契、咒缚等状态；音频辅助层独立控制音乐；响应式布局统一处理桌面与手机端。",
      nodes: [
        "Persona & Narrative",
        "Fixed Visual Layer",
        "Dynamic Info Layer",
        "Audio Support Layer",
        "Responsive Layout",
      ],
    },
    testing: [
      {
        dimension: "Information Priority",
        focus: "状态信息与装饰之间的阅读顺序",
        evidence: "在折叠与展开状态下检查角色名、核心状态和操作入口是否始终先于装饰被识别。",
      },
      {
        dimension: "Responsive Layout",
        focus: "PC / 手机端的宽度、换行与点击区域",
        evidence: "通过不同视口检查装饰是否越界、文字是否挤压、展开区域是否产生异常空白。",
      },
      {
        dimension: "Asset Stability",
        focus: "固定装饰与动态元素的定位稳定性",
        evidence: "减少 absolute 定位依赖，优先把不会变化的元素合并到固定视觉层。",
      },
      {
        dimension: "Interaction",
        focus: "折叠、展开、状态阅读与音乐入口",
        evidence: "验证展开/收起流程、状态摘要可读性以及音乐按钮不会干扰主要交互。",
      },
    ],
    iterations: [
      {
        title: "从“所有元素都独立”改为“分层承载”",
        before:
          "早期方案希望把多个装饰全部独立定位，以便保留丰富视觉效果，但在不同设备上容易位移，维护成本很高。",
        issue:
          "装饰复杂度超过了真正需要动态变化的信息量，导致每次调整都要重新修正多个元素位置。",
        revision:
          "将主要装饰并入固定视觉层，只让状态信息、交互控件和少量动态效果保持独立。",
        after:
          "页面结构更清楚，状态栏可以继续保留视觉氛围，同时减少跨端位置修复工作。",
        result:
          "当前仍在继续优化视觉完成度，但信息架构和分层方向已经稳定下来。",
      },
    ],
    conversation: [],
    relationshipStages: [],
    result: [
      "WIP / 持续迭代中。",
      "现阶段已完成多版状态栏原型、折叠/展开交互、状态信息结构和视觉资源拆分；完整角色卡与最终视觉仍在继续完善。",
    ],
    gallery: [],
  },
];

export const projectsBySlug = new Map(
  projects.map((project) => [project.slug, project]),
);
