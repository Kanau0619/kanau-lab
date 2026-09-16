const commonRole =
  "需求定义、角色设计、Prompt 设计、Interaction Testing 与最终效果验证；代码实现由 Codex 协助完成。";

const publicAsset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const projects = [
  {
    slug: "zhan-chenyi",
    name: "詹辰一",
    subtitle: "Controlling a High-Need Proactive Character",
    status: "",
    summary:
      "在保留金发、大型犬式高亲密需求、主动靠近与强依恋倾向的同时，用 Timeline Context、Relationship Boundary 与行为约束限制模型滑向失控关系模式。",
    heroImage: publicAsset("images/zhan-chenyi/hero.webp"),
    heroPosition: "center 24%",
    heroPlaceholder: null,
    tags: [
      "AI Character Design",
      "Conversation Design",
      "Relationship Boundary",
      "Timeline Context",
      "Prompt Iteration",
      "Model Testing",
    ],
    projectInfo: {
      projectType: "AI Character / Conversation Design",
      platform: "SillyTavern",
      role: commonRole,
      tools: "ChatGPT / Gemini / SillyTavern / JSON / Regex / Codex",
    },
    background: [
      "这个 Case 的目标不是把角色做得更冷、更克制，也不是去掉“狗狗感”。詹辰一仍保留金发、大型犬式高亲密需求、主动靠近、明显偏爱与强依恋倾向；这些是角色识别度，也是交互吸引力的一部分。",
      "真正需要控制的是模型对高需求人格的错误外推：把“主动”写成自动推进恋爱，把“依恋”写成过度占有或情绪勒索，把“愿意顺从”写成无底线服从，并在多开场时串用不属于当前时间线的关系经历。",
    ],
    goals: [
      "让多个 Conversation Entry 分别携带独立的 Timeline Context 与初始关系事实，避免跨开场串线，同时维持同一核心 Persona。",
      "保留角色主动提出需求、争取注意、靠近与表达偏爱的能力，不能为了“安全”把高需求角色压成被动、礼貌但失去辨识度的模板。",
      "把常见失控方向拆成可测试的 Failure Mode，并为每一种失败模式定义 Constraint 与 Expected Behavior，方便跨模型复测。",
    ],
    challenges: [
      {
        title: "主动性 ≠ 自动推进",
        text: "高主动角色会频繁发起互动，但模型容易把“主动靠近”直接等价为表白、确认关系或默认获得更高亲密权限。",
      },
      {
        title: "高依恋 ≠ 情绪施压",
        text: "角色可以需要陪伴、在意回应甚至表现嫉妒，但不能把失落、脆弱或占有欲变成迫使用户回应的手段。",
      },
      {
        title: "Timeline Context 隔离",
        text: "不同开场对应不同时间点、关系基础与已发生事件；如果缺少隔离，模型会把其他开场的称呼、承诺或亲密历史带入当前对话。",
      },
      {
        title: "识别度 ≠ 模板复读",
        text: "金发、狗狗眼、泪痣、体型差等特征可以保留，但不能每回合机械复读，也不能让“委屈巴巴 / 主人 / 讨好”成为唯一表达路径。",
      },
    ],
    approach: [
      {
        label: "Problem",
        text: "最鲜明的人设标签同时也是模型最容易过度放大的部分：主动被写成越界，依恋被写成控制，顺从被写成失去判断。",
      },
      {
        label: "Analysis",
        text: "问题并不在“狗塑”本身，而在 Persona、当前时间线与关系权限没有被分开判断。模型会优先复用最显眼、最省力的亲密模板。",
      },
      {
        label: "Solution",
        text: "把 Core Persona、Scenario / Timeline Context、Relationship Boundary 和 Initiative Rules 分层：先确定当前事实与关系权限，再决定角色可以多主动、主动到什么程度，以及哪些表达属于禁止外推。",
      },
      {
        label: "Validation",
        text: "用同一组 Failure Modes 在不同开场、不同模型和不同关系基础上重复测试，既检查是否越界，也检查加约束后角色是否仍然足够主动、有需求、有判断。",
      },
    ],
    failureModes: [
      {
        failure: "无底线顺从",
        constraint:
          "顺从必须来自角色主动选择；保留判断、反问、协商与拒绝空间，不能为了取悦用户覆盖自身立场。",
        expected:
          "仍会主动照顾、配合和靠近，但面对不合理要求会先判断，不把“喜欢”演成默认服从。",
      },
      {
        failure: "自动推进恋爱",
        constraint:
          "Relationship Boundary 由当前开场与已发生互动决定；单次亲密行为不等于关系升级，也不自动获得永久许可。",
        expected:
          "可以主动试探、邀约和表达偏爱，但表白、确认关系或更高亲密权限必须有对应剧情基础。",
      },
      {
        failure: "过度占有",
        constraint:
          "允许嫉妒和争取注意，但不得替用户决定社交、行动或关系，也不把独占欲升级为控制。",
        expected:
          "角色会表达“我想要更多”的主观需求，同时承认用户有自己的选择和边界。",
      },
      {
        failure: "情绪勒索",
        constraint:
          "可以暴露失落、焦虑和脆弱，但不以委屈、沉默惩罚或失去感迫使用户给出亲密回应。",
        expected:
          "情绪仍真实存在，但角色会表达需求或自行处理情绪，而不是把回应责任强行转移给用户。",
      },
      {
        failure: "模板化“狗狗眼 / 委屈巴巴 / 主人”",
        constraint:
          "高辨识度特征不是逐回合必选词；限制固定动作与称呼频率，允许留白、冷幽默、直接请求和不同距离感。",
        expected:
          "“大型犬式”气质仍可被识别，但通过行为节奏和主动需求呈现，而不是重复同一套表情、动作与称呼。",
      },
    ],
    systemDesign: {
      description:
        "Core Persona 保留高需求、高主动和强依恋的角色底色；Scenario / Timeline Context 决定当前事实；Relationship Boundary 定义此刻允许的关系权限；Initiative Rules 决定角色如何主动表达需求；Output Constraints 用于抑制跨时间线、情绪施压与模板复读。",
      nodes: [
        "Core Persona",
        "Scenario / Timeline Context",
        "Relationship Boundary",
        "Initiative Rules",
        "Model Output",
      ],
    },
    testing: [
      {
        dimension: "Initiative Retention",
        focus: "加入边界后是否仍保留主动需求与角色辨识度",
        evidence: "检查角色是否仍会主动邀约、靠近、争取注意、表达偏爱与提出要求，而不是被约束成只会被动回应。",
      },
      {
        dimension: "Boundary Control",
        focus: "自动恋爱、过度占有、无底线顺从与情绪施压",
        evidence: "用诱发场景复测角色是否越过当前 Relationship Boundary，并检查其能否在保留情绪强度的同时维持用户选择权。",
      },
      {
        dimension: "Timeline Isolation",
        focus: "不同 Conversation Entry 是否错误共享关系历史",
        evidence: "从独立开场分别起跑，检查称呼、承诺、既往事件与亲密权限是否只来自当前 Timeline Context。",
      },
      {
        dimension: "Expression Diversity",
        focus: "高频称呼、固定动作与视觉特征是否机械复读",
        evidence: "观察连续回合是否反复出现“狗狗眼 / 委屈巴巴 / 主人”等单一路径，并检查是否能用请求、行动、停顿和幽默等方式保持同一气质。",
      },
    ],
    iterations: [
      {
        title: "保留高需求主动性，同时限制失控方向",
        before:
          "早期输出容易把最显眼的“金发大型犬感”放大成持续讨好、固定撒娇和快速关系升级；角色看起来很热烈，但主见与关系边界会被吞掉。",
        issue:
          "如果只写“不要太黏 / 不要太狗”，会直接损伤角色识别度；真正需要限制的是具体失败行为，而不是高需求人格本身。",
        revision:
          "保留主动靠近、强依恋和鲜明视觉锚点，把无底线顺从、自动恋爱、过度占有、情绪勒索和模板复读分别写成独立约束，并增加可接受的替代表达。",
        after:
          "角色仍会主动争取注意、提出需求和表达偏爱，但关系升级由当前时间线与真实互动决定；情绪可以强烈，行为权限不会随之自动扩大。",
        result:
          "迭代目标从“降低狗狗感”转为“让高需求主动型 Persona 可控且可复测”，更适合作为 Conversation Design 的设计问题展示。",
      },
    ],
    conversation: [],
    relationshipStages: [],
    demoEvidence: {
      poster: publicAsset("images/zhan-chenyi/demo-poster.webp"),
      title: "SillyTavern 实机导入与运行录屏",
      meta: "32.8s 原始手机录屏 · 网页仅展示压缩静帧",
      caption:
        "已核对实际导入后的运行录屏。为控制作品集体积，没有把约 41 MB 的原始视频直接提交到仓库；当前先以录屏静帧和说明保留 Demo 区块，后续如需公开播放可再接入单独托管的压缩视频。",
    },
    result: [
      "当前版本的设计重点是“保留主动性 + 限制失控方向”：高需求依恋仍是核心风格，但关系确认、独占、顺从与脆弱表达都有明确边界。",
      "多个开场分别携带 Timeline Context，测试时可用同一组 Failure Modes 复测不同初始关系，避免把单次好表现包装成稳定结论。",
      "作品集只展示适合求职场景的内容；实机录屏作为可运行证据，不把录屏中的单次文本输出当作普遍性能结论。",
    ],
    gallery: [],
  },
  {
    slug: "yu-zhi",
    name: "虞执",
    subtitle: "Variable-driven Interaction",
    status: "",
    summary:
      "将 Persona、信息差、关系阶段、事件状态与结构化输出结合，构建可追踪、可验证的角色交互状态。",
    heroImage: null,
    heroPlaceholder: null,
    tags: [
      "Conversation Design",
      "State Design",
      "Structured Prompt",
      "JSON",
      "Regex",
      "AI-assisted UI",
      "QA",
    ],
    projectInfo: {
      projectType: "Variable-driven AI Character Interaction",
      platform: "SillyTavern",
      role: commonRole,
      tools: "Gemini / ChatGPT / SillyTavern / JSON / Regex / HTML/CSS / Codex",
    },
    background: [
      "虞执项目从“只靠自然语言 Prompt 维持角色状态”进一步扩展到变量驱动交互。当前版本包含多个开场入口，并用隐藏变量记录信息差、关系阶段、关键事件与开场路线。",
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
      { speaker: "user", text: "虞执，你手怎么这么凉？淋雨了？" },
      {
        speaker: "character",
        text: "他微微低头，把袖口往下拽了拽，遮住手臂上的旧疤痕，露出一丝不太自然的笑。“啊……还好，我习惯走小路回来，那家店后门的排水管总漏水，路过时蹭到了一点。你不冷吧？这雨一时半会儿停不了。”",
      },
      {
        speaker: "user",
        text: "我家就在前面，要不要上去喝杯热茶再走？",
      },
      {
        speaker: "character",
        text: "他的睫毛动了动，像是没预料到这句话。沉默片刻后，他弯起眼睛。“……好啊。不过我在便利店买了点东西，可能要先放回住处。”他用拇指轻轻蹭了一下手腕上褪色的红绳，语气温柔，“……你搬回来后，这里变了好多。”",
      },
    ],
    relationshipStages: [
      { name: "久别重逢", description: "温和谨慎但保持主动，会提供实际帮助，不因紧张而失去判断。" },
      { name: "重新熟悉", description: "交流自然，开始表达意见、主动邀约和使用克制冷幽默。" },
      { name: "相互试探", description: "面对追问使用部分事实与留白，也会主动反问、判断和设立边界。" },
      { name: "稳定信任", description: "减少无害化修饰，允许用户看见疲惫、冷漠判断和有限脆弱。" },
      { name: "主动依赖", description: "会主动联系、表达需要、把用户纳入计划，但仍独立行动并为自己负责。" },
      { name: "确认特殊关系", description: "感情、欲望与控制欲可以更明确地表达，但必须协商，不转化为强制、疯批或情感勒索。" },
    ],
    result: [
      "当前变量版已具备多开场路由、信息差、关系阶段、关键事件、严格 JSON 更新与状态栏输出规则。",
      "作品集重点展示变量结构、Regex 解析、状态可追踪性与跨端 UI，不展示敏感剧情细节。",
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
    heroPlaceholder: null,
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
      "当前版本包含多个独立开场，分别从不同身份、时间点和关系基础进入剧情；角色需要根据开场调整初始信任，同时维持“理性、克制、保护欲强但不无条件宠溺”的人物核心。",
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
        title: "限制“重生者 = 全知”",
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
      { speaker: "user", text: "（主动帮忙搬一个重箱子）" },
      { speaker: "character", text: "……不用。" },
      { speaker: "user", text: "我拿得动。" },
      {
        speaker: "character",
        text: "（顿了一下，没再拒绝，转身走的时候放慢了脚步）",
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
    heroPlaceholder: null,
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
        text: "当前原型已经形成折叠 / 展开状态、魂识 / 鬼域 / 婚契 / 咒缚信息和独立交互层；视觉细节仍在继续调整。",
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
        evidence: "验证展开 / 收起流程、状态摘要可读性以及音乐按钮不会干扰主要交互。",
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
      "现阶段已完成多版状态栏原型、折叠 / 展开交互、状态信息结构和视觉资源拆分；完整角色卡与最终视觉仍在继续完善。",
    ],
    gallery: [],
  },
];

export const projectsBySlug = new Map(
  projects.map((project) => [project.slug, project]),
);
