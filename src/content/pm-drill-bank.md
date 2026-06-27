# 刷题大章：软件项目管理选择题与简答题

这一章专门解决“选择题很绕”的问题。每讲先用选择题练概念识别、情境判断和易混点；最后的简答题只围绕 Lecture 11 点名的考试重点。
This chapter is built for difficult multiple-choice questions. Each lecture section drills concept recognition, scenario judgment, and common traps; the short-answer section focuses only on the exam priorities highlighted in Lecture 11.

做题方法：先遮住答案自己选，再看解析。如果一道题看了解析还不稳，回对应 Lecture 详细章节补概念。
How to use: choose an answer before reading the solution. If the explanation still feels unclear, return to the corresponding lecture chapter.

| 部分 | 内容 | 数量 |
| --- | --- | --- |
| Lecture 1-11 | 每讲 12 道选择题 | 132 |
| Lecture 11 重点 | 简答题，按考试高频主题组织 | 20 |

## Lecture 1：项目与项目管理

### L1-MCQ1：Project 的定义

题目：下面哪一项最符合 ==Project / 项目== 的定义？
Question: Which option best describes a ==project==?

- A. 每天重复处理客户工单的持续运营工作 / repetitive daily ticket handling
- B. 临时性工作，用来创造独特产品、服务或结果 / a temporary effort creating a unique product, service, or result
- C. 没有开始和结束日期的部门职责 / an ongoing departmental responsibility
- D. 只要使用软件工具就一定是项目 / any work using software tools

答案：==B==。
Answer: ==B==.

解析：Project 的两个核心词是 ==temporary== 和 ==unique==。重复、持续、标准化工作更像 operations。
Explanation: The two keywords are ==temporary== and ==unique==. Repetitive, ongoing, standardised work is closer to operations.

### L1-MCQ2：Project vs Operation

题目：学校每天处理学生账号密码重置请求，这更像什么？
Question: A university handles student password reset requests every day. What is it closer to?

- A. Project，因为它使用 IT 系统 / project because it uses IT systems
- B. Operation，因为它重复、持续、标准化 / operation because it is repetitive, ongoing, and standardised
- C. Project，因为它有用户 / project because it has users
- D. Program，因为它一定包含多个项目 / program because it must contain several projects

答案：==B==。
Answer: ==B==.

解析：是否使用 IT 不是判断标准；是否临时、独特才是关键。
Explanation: Using IT is not the criterion; being temporary and unique is the key.

### L1-MCQ3：三重约束

题目：客户突然要求加入大量新功能，但 deadline 和 budget 不变。最直接被挤压的是哪组约束？
Question: A customer adds many new features while keeping the deadline and budget fixed. Which constraints are directly pressured?

- A. Scope, time, cost, quality
- B. Sponsor, charter, closing, lessons learned
- C. Procurement, contract, seller, invoice
- D. Encoding, decoding, feedback, noise

答案：==A==。
Answer: ==A==.

解析：范围增加会影响时间、成本和质量风险，这是项目约束题最常见陷阱。
Explanation: Increased scope affects time, cost, and quality risk, a classic constraint trade-off.

### L1-MCQ4：Project Management

题目：==Project Management== 最准确的含义是？
Question: What is the most accurate meaning of ==Project Management==?

- A. 只负责写代码 / only writing code
- B. 把知识、技能、工具和技术应用到项目活动，以满足项目要求 / applying knowledge, skills, tools, and techniques to meet project requirements
- C. 只负责财务审批 / only approving finance
- D. 只负责项目结束后的文档归档 / only archiving documents after closure

答案：==B==。
Answer: ==B==.

解析：PM 关注整合、计划、执行、监控和收尾，不等于单一技术工作。
Explanation: PM covers integration, planning, execution, monitoring, and closing, not one technical task only.

### L1-MCQ5：PLC vs SDLC

题目：下面哪一项正确区分 ==Project Life Cycle== 和 ==SDLC==？
Question: Which statement correctly distinguishes ==Project Life Cycle== and ==SDLC==?

- A. PLC 管项目从开始到结束；SDLC 管软件产品如何开发 / PLC manages the project from start to finish; SDLC describes how the software product is developed
- B. PLC 只适用于硬件，SDLC 只适用于合同 / PLC is only for hardware and SDLC only for contracts
- C. 二者完全一样 / they are exactly the same
- D. SDLC 一定不能包含在 PLC 中 / SDLC can never be part of PLC

答案：==A==。
Answer: ==A==.

解析：PLC 是项目管理视角；SDLC 是软件产品开发视角。
Explanation: PLC is a project-management view; SDLC is a software-product development view.

### L1-MCQ6：Process Groups

题目：五大过程组中，哪个不是线性最后一步，而是贯穿项目？
Question: Which process group is not just a final linear step but runs throughout the project?

- A. Initiating
- B. Planning
- C. Monitoring and Controlling
- D. Closing

答案：==C==。
Answer: ==C==.

解析：Monitoring and Controlling 持续比较实际与计划，并处理变更。
Explanation: Monitoring and Controlling continuously compares actuals with plans and manages changes.

### L1-MCQ7：Predictive vs Adaptive

题目：需求稳定、范围清楚、变更成本高的项目更适合哪种方法？
Question: A project has stable requirements, clear scope, and high change cost. Which approach fits better?

- A. Predictive / Waterfall
- B. Pure ad-hoc work
- C. No planning
- D. Random sprinting

答案：==A==。
Answer: ==A==.

解析：Predictive 适合前期可规划、需求较确定的项目。
Explanation: Predictive approaches fit projects that can be planned early with relatively stable requirements.

### L1-MCQ8：PM Skills

题目：成功项目经理最不应该只依赖哪一类能力？
Question: What should a successful project manager not rely on exclusively?

- A. Technical understanding
- B. Communication and leadership
- C. Business and project-management knowledge
- D. Only coding ability, ignoring people and coordination

答案：==D==。
Answer: ==D==.

解析：软件项目管理不是只会写代码；PM 必须协调目标、资源、风险和干系人。
Explanation: Software project management is not only coding; the PM coordinates objectives, resources, risks, and stakeholders.

### L1-MCQ9：Program vs Project

题目：多个相互关联的项目被统一协调，以获得单独管理无法获得的收益，这更像什么？
Question: Several related projects are coordinated together to gain benefits not available from managing them separately. What is this closer to?

- A. Operation
- B. Program
- C. Single activity
- D. Work package only

答案：==B==。
Answer: ==B==.

解析：==Program / 项目群== 强调相关项目的协调收益；单个 project 只是一项临时独特工作。
Explanation: A ==program== coordinates related projects for additional benefits; a single project is one temporary unique effort.

### L1-MCQ10：Portfolio

题目：组织把多个项目和项目群放在一起，主要为了战略优先级和资源分配，这属于什么？
Question: An organisation groups projects and programs mainly for strategic prioritisation and resource allocation. What is this?

- A. Portfolio
- B. Gantt Chart
- C. Quality Audit
- D. Daily Scrum

答案：==A==。
Answer: ==A==.

解析：==Portfolio / 项目组合== 不要求项目之间彼此相关，重点是战略选择和资源平衡。
Explanation: A ==portfolio== does not require all projects to be related; it focuses on strategic selection and resource balancing.

### L1-MCQ11：Project Sponsor

题目：项目中通常提供资金、授权和高层支持的人是谁？
Question: Who usually provides funding, authorisation, and senior support for a project?

- A. End user only
- B. Project Sponsor
- C. Vendor technician
- D. Random team member

答案：==B==。
Answer: ==B==.

解析：==Sponsor== 是项目启动和高层支持的关键角色，不等于每天执行任务的人。
Explanation: The ==sponsor== is key for initiation and senior support, not necessarily the person doing daily tasks.

### L1-MCQ12：Project Success

题目：以下哪种说法最接近现代项目成功判断？
Question: Which statement is closest to modern project success judgement?

- A. 只要按时就一定成功 / success only means being on time
- B. 只要预算没超就一定成功 / success only means being within budget
- C. 需要同时考虑范围、时间、成本、质量、客户满意和商业价值 / consider scope, time, cost, quality, customer satisfaction, and business value
- D. 只要团队很忙就成功 / success means the team is busy

答案：==C==。
Answer: ==C==.

解析：考试会用“按时但客户不用”“省钱但质量差”这种情境考你是否理解多维成功。
Explanation: Exams may describe “on time but unused” or “cheap but poor quality” to test multi-dimensional success.

## Lecture 2：整合管理、项目选择与启动

### L2-MCQ1：Business Case

题目：==Business Case== 主要回答什么问题？
Question: What question does a ==Business Case== mainly answer?

- A. 项目为什么值得做 / why the project is worth doing
- B. 每个测试用例如何执行 / how every test case is executed
- C. 每个员工的工资是多少 / each employee's salary
- D. 项目结束后如何删除所有文件 / how to delete all files after closure

答案：==A==。
Answer: ==A==.

解析：Business Case 用商业价值、战略匹配、成本收益等说明项目合理性。
Explanation: A Business Case justifies the project through business value, strategic fit, and cost-benefit logic.

### L2-MCQ2：NPV 判断

题目：若项目 NPV < 0，一般说明什么？
Question: If a project has NPV < 0, what does it generally mean?

- A. 项目一定增加财务价值 / it definitely adds financial value
- B. 项目折现后收益小于成本，财务上通常不接受 / discounted benefits are less than costs, so it is usually financially rejected
- C. 项目风险为零 / risk is zero
- D. 项目必须进入执行阶段 / the project must enter execution

答案：==B==。
Answer: ==B==.

解析：NPV 衡量折现收益减折现成本；小于 0 表示财务价值为负。
Explanation: NPV is discounted benefits minus discounted costs; below zero means negative financial value.

### L2-MCQ3：ROI

题目：本课项目选择题中，ROI 通常如何理解？
Question: In this course, how is ROI usually interpreted in project selection?

- A. ROI = NPV / total discounted costs
- B. ROI = AC / EV
- C. ROI = Slack / Duration
- D. ROI = n(n - 1) / 2

答案：==A==。
Answer: ==A==.

解析：B 是 EVM 相关比例的一部分；D 是沟通渠道数。
Explanation: B belongs to EVM-style ratios; D is the communication-channel formula.

### L2-MCQ4：Payback Period

题目：Payback Period 关注什么？
Question: What does Payback Period focus on?

- A. 多久收回初始投资 / how long it takes to recover the initial investment
- B. 项目一共多少个干系人 / total number of stakeholders
- C. 关键路径有几条 / number of critical paths
- D. 团队冲突属于哪个阶段 / conflict stage in team development

答案：==A==。
Answer: ==A==.

解析：Payback 不直接说明总收益最大，而是看回本速度。
Explanation: Payback does not directly mean maximum total benefit; it measures speed of cost recovery.

### L2-MCQ5：Weighted Scoring Model

题目：多个项目在战略、收益、风险、时间等方面都不同，最适合用什么工具辅助选择？
Question: Several projects differ in strategy, benefits, risk, and time. Which tool helps selection?

- A. Weighted Scoring Model
- B. RACI only
- C. Fishbone Diagram only
- D. Resource Histogram only

答案：==A==。
Answer: ==A==.

解析：Weighted Scoring Model 用标准和权重把多因素决策结构化。
Explanation: Weighted Scoring Model structures multi-criteria decisions using criteria and weights.

### L2-MCQ6：Project Charter

题目：Project Charter 的核心作用是？
Question: What is the core function of the Project Charter?

- A. 正式承认项目并授权项目经理 / formally recognise the project and authorise the project manager
- B. 记录所有源代码 bug / record all source-code bugs
- C. 替代所有合同 / replace all contracts
- D. 证明项目没有风险 / prove the project has no risk

答案：==A==。
Answer: ==A==.

解析：Charter 是 Initiating 的关键输出，不是详细 WBS 或测试报告。
Explanation: The Charter is a key Initiating output, not a detailed WBS or test report.

### L2-MCQ7：Change Request

题目：项目执行中客户要求新增功能，正确做法是？
Question: During execution, the customer requests a new feature. What should be done?

- A. 直接加入，不记录影响 / add it directly without recording impact
- B. 走 Change Request，评估范围、时间、成本、质量、风险影响 / use a Change Request and assess scope, time, cost, quality, and risk impact
- C. 永远拒绝所有变更 / always reject all changes
- D. 等项目结束再偷偷加 / secretly add it after closure

答案：==B==。
Answer: ==B==.

解析：变更不一定坏，但必须受控。
Explanation: Change is not always bad, but it must be controlled.

### L2-MCQ8：CCB

题目：==Change Control Board / CCB== 主要负责什么？
Question: What does the ==Change Control Board / CCB== mainly do?

- A. 审查、批准或拒绝重要变更 / review, approve, or reject important changes
- B. 只画甘特图 / only draw Gantt charts
- C. 只负责写 Sprint backlog / only write the Sprint backlog
- D. 只负责供应商开票 / only handle supplier invoices

答案：==A==。
Answer: ==A==.

解析：CCB 是整合变更控制中的审批机制。
Explanation: The CCB is an approval mechanism in integrated change control.

### L2-MCQ9：Project Management Plan

题目：==Project Management Plan== 和 Project Charter 的区别是什么？
Question: What is the difference between the ==Project Management Plan== and the Project Charter?

- A. Charter 是详细执行计划，PMP 只是项目名字 / Charter is the detailed execution plan, PMP is only a name
- B. Charter 正式授权项目；PMP 整合范围、进度、成本等子计划来指导执行和控制 / Charter authorises the project; PMP integrates subsidiary plans for execution and control
- C. 两者完全一样 / they are identical
- D. PMP 只在项目取消后才写 / PMP is written only after cancellation

答案：==B==。
Answer: ==B==.

解析：Charter 偏 ==Initiating==；PMP 偏 ==Planning==，是后续执行与监控的依据。
Explanation: The Charter belongs mainly to ==Initiating==; the PMP belongs mainly to ==Planning== and guides execution/control.

### L2-MCQ10：Opportunity Cost

题目：选择项目 A 后不能选择项目 B，因此失去 B 的潜在收益，这叫？
Question: After choosing project A, the organisation cannot choose project B and loses B's potential benefit. What is this called?

- A. Sunk Cost
- B. Opportunity Cost
- C. Earned Value
- D. Residual Risk

答案：==B==。
Answer: ==B==.

解析：==Opportunity Cost / 机会成本== 是被放弃的最佳替代方案价值。
Explanation: ==Opportunity cost== is the value of the best alternative given up.

### L2-MCQ11：Sunk Cost

题目：一个项目已经花掉 50 万，但未来价值很低。理性决策时，已花掉的钱应如何看待？
Question: A project has already spent 500,000, but future value is low. In rational decision-making, how should the money already spent be treated?

- A. 作为 Sunk Cost，不应单独迫使项目继续 / as sunk cost, it should not by itself force continuation
- B. 因为花过钱，所以必须继续 / because money was spent, the project must continue
- C. 自动变成 EV / it automatically becomes EV
- D. 自动提高 NPV / it automatically increases NPV

答案：==A==。
Answer: ==A==.

解析：==Sunk Cost / 沉没成本== 已经发生，继续还是停止要看未来收益、成本和风险。
Explanation: ==Sunk cost== has already occurred; continue/stop decisions should depend on future benefits, costs, and risks.

### L2-MCQ12：Integrated Change Control

题目：为什么变更请求不能只由开发者私下决定？
Question: Why should a change request not be decided privately by a developer only?

- A. 因为变更可能影响 scope、schedule、cost、quality、risk 和 stakeholders / because it may affect scope, schedule, cost, quality, risk, and stakeholders
- B. 因为所有变更都必须自动拒绝 / because all changes must be rejected automatically
- C. 因为开发者不能理解任何需求 / because developers cannot understand requirements
- D. 因为 CCB 只负责画图 / because the CCB only draws diagrams

答案：==A==。
Answer: ==A==.

解析：==Integrated Change Control== 的核心是看整体影响，而不是只看局部代码量。
Explanation: ==Integrated Change Control== looks at total project impact, not only local coding effort.

## Lecture 3：范围管理

### L3-MCQ1：Scope Statement

题目：Scope Statement 最应该说明什么？
Question: What should the Scope Statement mainly clarify?

- A. In scope, out of scope, deliverables, constraints, acceptance criteria
- B. CPI and SPI only
- C. CPU usage and memory only
- D. Supplier invoice numbers only

答案：==A==。
Answer: ==A==.

解析：范围说明书的重点是边界、交付物和验收标准。
Explanation: The focus is boundaries, deliverables, and acceptance criteria.

### L3-MCQ2：WBS

题目：WBS 是什么类型的分解？
Question: What kind of decomposition is WBS?

- A. Deliverable-oriented hierarchical decomposition
- B. Random list of employee names
- C. A financial cash-flow table
- D. A conflict-resolution meeting agenda

答案：==A==。
Answer: ==A==.

解析：WBS 回答“要交付什么工作成果”，不是活动排期表。
Explanation: WBS answers what deliverables/work must be produced, not the activity schedule.

### L3-MCQ3：Work Package

题目：WBS 最底层、可以估算、排期、分配和控制的单元通常叫？
Question: What is the lowest WBS level that can be estimated, scheduled, assigned, and controlled?

- A. Work Package
- B. Risk Trigger
- C. Communication Channel
- D. Cost Variance

答案：==A==。
Answer: ==A==.

解析：Work Package 是 WBS 管理控制的关键单位。
Explanation: Work Package is the key unit for WBS management and control.

### L3-MCQ4：100% Rule

题目：WBS 的 100% Rule 表示什么？
Question: What does the WBS 100% Rule mean?

- A. 子项总和必须覆盖父项全部工作，不多不少 / child elements must cover 100% of the parent work, no more and no less
- B. 每个任务必须 100 天完成 / every task must take 100 days
- C. 每个风险概率必须 100% / every risk probability must be 100%
- D. 每个人必须 100% 满意 / everyone must be 100% satisfied

答案：==A==。
Answer: ==A==.

解析：100% Rule 防止漏掉范围，也防止加入父项之外的工作。
Explanation: The 100% Rule prevents missing scope and prevents adding work outside the parent.

### L3-MCQ5：Scope Baseline

题目：Scope Baseline 通常由什么组成？
Question: What usually makes up the Scope Baseline?

- A. Scope Statement + WBS + WBS Dictionary
- B. PV + EV + AC
- C. Product Backlog + Sprint Review only
- D. Risk Owner + Trigger only

答案：==A==。
Answer: ==A==.

解析：Scope Baseline 是后续范围验证和控制的比较基准。
Explanation: Scope Baseline is the comparison basis for scope validation and control.

### L3-MCQ6：Validate Scope vs Control Quality

题目：Validate Scope 和 Control Quality 的区别是？
Question: What is the difference between Validate Scope and Control Quality?

- A. Validate Scope 是客户正式接受交付物；Control Quality 是检查交付物是否符合质量标准 / Validate Scope is formal acceptance; Control Quality checks conformance to quality standards
- B. 二者完全相同 / they are identical
- C. Validate Scope 只算 CPI / Validate Scope only calculates CPI
- D. Control Quality 只签合同 / Control Quality only signs contracts

答案：==A==。
Answer: ==A==.

解析：一个偏验收，一个偏检查质量。
Explanation: One focuses on acceptance, the other on quality inspection.

### L3-MCQ7：Scope Creep

题目：未经正式变更控制，功能一点点增加导致项目落后，这叫？
Question: Features gradually increase without formal change control and the project falls behind. What is this?

- A. Scope Creep
- B. Fast Tracking
- C. Procurement Closure
- D. Quality Audit

答案：==A==。
Answer: ==A==.

解析：Scope Creep 是考试高频情境题。
Explanation: Scope Creep is a high-frequency scenario topic.

### L3-MCQ8：RTM

题目：Requirement Traceability Matrix 的作用是？
Question: What is the purpose of the Requirement Traceability Matrix?

- A. 把需求与来源、设计、测试、验收联系起来 / link requirements to sources, design, tests, and acceptance
- B. 只计算沟通渠道数 / only calculate communication channels
- C. 只画风险矩阵 / only draw risk matrix
- D. 只比较供应商报价 / only compare supplier quotes

答案：==A==。
Answer: ==A==.

解析：RTM 让需求可追踪，减少遗漏和误解。
Explanation: RTM makes requirements traceable and reduces omissions and misunderstandings.

### L3-MCQ9：Collect Requirements

题目：要收集用户对新系统的需求，以下哪组方法最合理？
Question: Which set of methods is most reasonable for collecting user requirements for a new system?

- A. Interviews, workshops, questionnaires, observation
- B. EAC, CPI, SPI, VAC
- C. Crashing, fast tracking, lead, lag
- D. Control limits, Pareto bars, fishbone bones only

答案：==A==。
Answer: ==A==.

解析：需求收集关注与干系人互动和信息获取；B 是成本/EVM，C 是进度压缩，D 是质量工具。
Explanation: Requirements collection focuses on stakeholder interaction and information gathering; B is EVM, C is schedule compression, D is quality tools.

### L3-MCQ10：WBS Dictionary

题目：WBS Dictionary 通常补充说明什么？
Question: What does a WBS Dictionary usually provide?

- A. 每个 work package 的详细说明、责任、验收标准等 / details, responsibility, and acceptance criteria for each work package
- B. 项目所有成员的生日 / birthdays of all team members
- C. 供应商广告语 / supplier slogans
- D. 随机颜色规范 / random colour rules

答案：==A==。
Answer: ==A==.

解析：WBS 图只显示层级；==WBS Dictionary== 解释每个工作包到底包含什么。
Explanation: The WBS diagram shows hierarchy; the ==WBS Dictionary== explains what each work package contains.

### L3-MCQ11：Validate Scope

题目：Validate Scope 的重点是什么？
Question: What is the focus of Validate Scope?

- A. 获得客户/干系人对已完成交付物的正式接受 / obtaining formal acceptance of completed deliverables
- B. 随机增加新需求 / randomly adding new requirements
- C. 估算活动三点工期 / estimating three-point activity duration
- D. 选择合同类型 / choosing contract type

答案：==A==。
Answer: ==A==.

解析：==Validate Scope== 看交付物是否被正式接受；==Control Scope== 看范围变更是否受控。
Explanation: ==Validate Scope== focuses on formal acceptance; ==Control Scope== focuses on controlling scope changes.

### L3-MCQ12：Gold Plating

题目：团队没有经过客户批准，主动加入“看起来很酷”的额外功能，这最接近什么？
Question: The team adds extra “cool” features without customer approval. What is this closest to?

- A. Gold Plating
- B. Forward Pass
- C. Cost Baseline
- D. Residual Risk

答案：==A==。
Answer: ==A==.

解析：==Gold Plating== 是主动多做未批准范围；它可能导致 scope creep 和质量/进度风险。
Explanation: ==Gold plating== means adding unapproved extra scope; it can cause scope creep and quality/schedule risk.

## Lecture 4：进度管理 Part 1

### L4-MCQ1：Activity List vs WBS

题目：WBS 和 Activity List 的区别最准确的是？
Question: What is the most accurate distinction between WBS and Activity List?

- A. WBS 偏交付物，Activity List 偏可排期的动作 / WBS is deliverable-oriented; Activity List is schedulable actions
- B. 二者完全相同 / they are identical
- C. WBS 只用于采购，Activity List 只用于风险 / WBS is only procurement; Activity List only risk
- D. WBS 只看 CPI / WBS only looks at CPI

答案：==A==。
Answer: ==A==.

解析：从 WBS 到活动清单，是从“做什么成果”到“执行什么动作”。
Explanation: Moving from WBS to activity list means moving from deliverables to actions.

### L4-MCQ2：Milestone

题目：Milestone 的典型特点是？
Question: What is a typical feature of a milestone?

- A. 重要节点，通常 duration = 0 / important event, usually zero duration
- B. 必须持续 30 天 / must last 30 days
- C. 一定是成本基准 / must be cost baseline
- D. 一定是风险责任人 / must be risk owner

答案：==A==。
Answer: ==A==.

解析：Milestone 是进度上的关键事件，不是普通长任务。
Explanation: A milestone is a key schedule event, not a normal long activity.

### L4-MCQ3：Dependency

题目：活动 B 必须等活动 A 完成后才能开始，是什么关系？
Question: Activity B cannot start until Activity A finishes. What relationship is this?

- A. Finish-to-Start
- B. Start-to-Finish
- C. Finish-to-Finish
- D. No dependency

答案：==A==。
Answer: ==A==.

解析：FS 是最常见依赖：前置完成，后续开始。
Explanation: FS is the most common dependency: predecessor finishes, successor starts.

### L4-MCQ4：Lead

题目：后续活动可以在前置活动完成前 2 天开始，这是？
Question: A successor may start 2 days before the predecessor finishes. What is this?

- A. Lead
- B. Lag
- C. BAC
- D. VAC

答案：==A==。
Answer: ==A==.

解析：Lead 让后续活动提前开始；Lag 是必须等待。
Explanation: Lead allows the successor to start earlier; Lag requires waiting.

### L4-MCQ5：Lag

题目：后续活动必须在前置活动完成 3 天后才开始，这是？
Question: A successor must start 3 days after the predecessor finishes. What is this?

- A. 3-day lag
- B. 3-day lead
- C. Scope baseline
- D. Stakeholder register

答案：==A==。
Answer: ==A==.

解析：完成后还要等，是 lag。
Explanation: Waiting after finish is lag.

### L4-MCQ6：PDM

题目：PDM / Precedence Diagramming Method 的特点是？
Question: What is a feature of PDM?

- A. 节点表示活动，箭头表示依赖 / nodes represent activities and arrows represent dependencies
- B. 只能表示 Finish-to-Start / it can only represent Finish-to-Start
- C. 必须使用 dummy activities / it must use dummy activities
- D. 只用于质量控制 / only for quality control

答案：==A==。
Answer: ==A==.

解析：PDM 比 AOA 更常用，可以表达多种依赖。
Explanation: PDM is more commonly used than AOA and supports multiple dependency types.

### L4-MCQ7：Gantt Chart

题目：向团队展示任务在日历时间轴上的进度，最直观的工具是？
Question: Which tool most clearly shows tasks on a calendar timeline?

- A. Gantt Chart
- B. Fishbone Diagram
- C. Risk Register
- D. RTM

答案：==A==。
Answer: ==A==.

解析：Gantt Chart 适合展示时间轴、持续时间、里程碑和进度。
Explanation: Gantt Chart shows timeline, duration, milestones, and progress.

### L4-MCQ8：Network Diagram

题目：如果题目重点问“谁依赖谁、关键路径怎么形成”，更应看什么？
Question: If the question focuses on dependencies and critical path formation, what should you use?

- A. Network Diagram
- B. Stakeholder Register
- C. Payback Period
- D. Quality Audit

答案：==A==。
Answer: ==A==.

解析：Network Diagram 更技术化，适合分析依赖和关键路径。
Explanation: Network Diagram is more technical and suited to dependency and critical-path analysis.

### L4-MCQ9：Four Logical Relationships

题目：PDM 中最常见的四种逻辑关系是哪一组？
Question: Which set lists the four common PDM logical relationships?

- A. FS, SS, FF, SF
- B. PV, EV, AC, BAC
- C. R, A, C, I
- D. Avoid, Transfer, Mitigate, Accept

答案：==A==。
Answer: ==A==.

解析：==Finish-to-Start== 最常见，但 PDM 还可以表达 SS、FF、SF。
Explanation: ==Finish-to-Start== is most common, but PDM can also show SS, FF, and SF.

### L4-MCQ10：Mandatory Dependency

题目：代码必须先编译成功，才能进行部署，这类依赖最接近？
Question: Code must compile successfully before deployment can happen. What dependency is this closest to?

- A. Mandatory dependency
- B. Discretionary dependency
- C. Opportunity cost
- D. Quality metric

答案：==A==。
Answer: ==A==.

解析：==Mandatory dependency== 通常来自工作本身的硬逻辑或技术限制。
Explanation: A ==mandatory dependency== usually comes from hard logic or technical constraints of the work.

### L4-MCQ11：Discretionary Dependency

题目：团队“习惯上”先做 UI 草图再做接口设计，但并非技术上必须，这更像？
Question: A team usually sketches UI before API design, but it is not technically required. What is this closer to?

- A. Mandatory dependency
- B. Discretionary dependency
- C. External dependency
- D. Residual risk

答案：==B==。
Answer: ==B==.

解析：==Discretionary dependency== 来自偏好、经验或最佳实践，考试也会叫 preferred/preferential logic。
Explanation: A ==discretionary dependency== comes from preference, experience, or best practice, also called preferred/preferential logic.

### L4-MCQ12：External Dependency

题目：项目必须等政府审批通过后才能上线，这属于什么依赖？
Question: A project must wait for government approval before launch. What dependency is this?

- A. Internal dependency
- B. External dependency
- C. Cost variance
- D. Product backlog

答案：==B==。
Answer: ==B==.

解析：==External dependency== 来自项目团队控制范围外的组织或事件。
Explanation: An ==external dependency== comes from an organisation or event outside the project team's control.

## Lecture 5：进度管理 Part 2

### L5-MCQ1：Critical Path

题目：Critical Path 是什么？
Question: What is the Critical Path?

- A. 决定项目最早完成时间的最长路径 / the longest path determining the earliest project completion time
- B. 成本最低的路径 / the cheapest path
- C. 风险最少的路径 / the least risky path
- D. 资源最多的路径 / the path with the most resources

答案：==A==。
Answer: ==A==.

解析：关键路径上的活动 slack 通常为 0。
Explanation: Activities on the critical path usually have zero slack.

### L5-MCQ2：Forward Pass

题目：Forward Pass 主要计算什么？
Question: What does the Forward Pass mainly calculate?

- A. ES and EF
- B. LS and LF
- C. CPI and SPI
- D. NPV and ROI

答案：==A==。
Answer: ==A==.

解析：正推从项目开始往后算最早开始和最早完成。
Explanation: Forward pass calculates earliest start and earliest finish from the beginning forward.

### L5-MCQ3：Backward Pass

题目：Backward Pass 主要计算什么？
Question: What does the Backward Pass mainly calculate?

- A. LS and LF
- B. PV and EV
- C. ROI and Payback
- D. Probability and Impact

答案：==A==。
Answer: ==A==.

解析：逆推从项目结束往前算最晚完成和最晚开始。
Explanation: Backward pass calculates latest finish and latest start from the end backward.

### L5-MCQ4：Slack

题目：Slack / Float 的公式是？
Question: What is the formula for Slack / Float?

- A. LS - ES = LF - EF
- B. EV - AC
- C. EV / PV
- D. n(n - 1) / 2

答案：==A==。
Answer: ==A==.

解析：Slack 表示活动可以延误多久而不影响项目完成。
Explanation: Slack is how long an activity can be delayed without delaying the project.

### L5-MCQ5：Multiple predecessors

题目：某活动有两个前置活动，EF 分别为 8 和 12。该活动 ES 应取多少？
Question: An activity has two predecessors with EF = 8 and EF = 12. What is its ES?

- A. 12
- B. 8
- C. 20
- D. 4

答案：==A==。
Answer: ==A==.

解析：Forward pass 中有多个前置时，ES 取最大 EF，因为要等所有前置完成。
Explanation: With multiple predecessors, ES takes the maximum EF because all predecessors must finish.

### L5-MCQ6：Multiple successors

题目：某活动有两个后续活动，LS 分别为 10 和 14。Backward pass 中该活动 LF 应取多少？
Question: An activity has two successors with LS = 10 and LS = 14. In backward pass, what is its LF?

- A. 10
- B. 14
- C. 24
- D. 4

答案：==A==。
Answer: ==A==.

解析：有多个后续时，LF 取最小 LS，因为最早开始的后续最卡时间。
Explanation: With multiple successors, LF takes the minimum LS because the earliest successor constrains it.

### L5-MCQ7：PERT

题目：PERT 期望工期公式是？
Question: What is the PERT expected duration formula?

- A. (O + 4M + P) / 6
- B. (O + M + P) / 3
- C. EV - AC
- D. BAC / CPI

答案：==A==。
Answer: ==A==.

解析：PERT 给 most likely 估计 4 倍权重。
Explanation: PERT gives the most-likely estimate four times the weight.

### L5-MCQ8：Schedule Baseline

题目：批准后的项目进度计划通常成为？
Question: Once approved, the project schedule usually becomes what?

- A. Schedule Baseline
- B. Risk Trigger
- C. Quality Metric only
- D. Contract Type

答案：==A==。
Answer: ==A==.

解析：后续控制进度时用 baseline 比较实际表现。
Explanation: Schedule control compares actual performance against the baseline.

### L5-MCQ9：Crashing

题目：通过增加资源来缩短关键路径活动工期，通常叫？
Question: Shortening critical-path activity duration by adding resources is usually called what?

- A. Crashing
- B. Fast Tracking
- C. Scope Validation
- D. Risk Acceptance

答案：==A==。
Answer: ==A==.

解析：==Crashing== 常增加成本；只有压缩关键路径才可能缩短总工期。
Explanation: ==Crashing== often increases cost; only compressing the critical path can shorten total duration.

### L5-MCQ10：Fast Tracking

题目：把原本顺序执行的活动改成并行或部分重叠，通常叫？
Question: Running activities in parallel or partially overlapping when they were originally sequential is called what?

- A. Resource smoothing
- B. Fast Tracking
- C. Cost aggregation
- D. Contract closure

答案：==B==。
Answer: ==B==.

解析：==Fast Tracking== 常增加返工和风险，不一定增加直接成本。
Explanation: ==Fast tracking== often increases rework and risk, but not necessarily direct cost.

### L5-MCQ11：Resource Leveling

题目：为了避免资源过载而调整活动开始时间，可能导致项目结束日期推迟，这更像？
Question: Adjusting activity start dates to avoid resource overload, possibly delaying the finish date, is closer to what?

- A. Resource Leveling
- B. Resource Histogram
- C. Gold Plating
- D. Payback Period

答案：==A==。
Answer: ==A==.

解析：==Resource Leveling== 优先解决资源限制，可能改变关键路径和总工期。
Explanation: ==Resource leveling== prioritises resource constraints and may change the critical path and total duration.

### L5-MCQ12：Resource Smoothing

题目：在不改变关键路径和项目完成日期的前提下平滑资源使用，这叫？
Question: Smoothing resource usage without changing the critical path or project completion date is called what?

- A. Resource Smoothing
- B. Scope Creep
- C. Mandatory Dependency
- D. Quality Assurance

答案：==A==。
Answer: ==A==.

解析：==Smoothing== 受 float 限制；==leveling== 可能推迟完工日期。
Explanation: ==Smoothing== is limited by float; ==leveling== may delay the finish date.

## Lecture 6：成本管理与 EVM

### L6-MCQ1：Cost Baseline

题目：Cost Baseline 是什么？
Question: What is the Cost Baseline?

- A. 已批准、按时间分布的预算，用于比较实际成本绩效 / approved time-phased budget for comparing cost performance
- B. 项目章程第一句话 / first sentence of the charter
- C. 风险概率矩阵 / probability-impact matrix
- D. 团队冲突记录 / conflict log

答案：==A==。
Answer: ==A==.

解析：Cost Baseline 不通常包含 Management Reserve。
Explanation: Cost Baseline usually excludes Management Reserve.

### L6-MCQ2：Contingency vs Management Reserve

题目：Contingency Reserve 和 Management Reserve 的区别是？
Question: What is the difference between Contingency Reserve and Management Reserve?

- A. Contingency 用于 known unknowns；Management 用于 unknown unknowns / contingency is for known unknowns; management is for unknown unknowns
- B. 二者完全一样 / they are identical
- C. Contingency 只用于沟通 / contingency is only for communication
- D. Management Reserve 一定在 cost baseline 内 / management reserve is always inside cost baseline

答案：==A==。
Answer: ==A==.

解析：应急储备用于已识别风险；管理储备用于未知未知。
Explanation: Contingency is for identified risks; management reserve is for unknown unknowns.

### L6-MCQ3：PV

题目：PV / Planned Value 表示什么？
Question: What does PV / Planned Value mean?

- A. 按计划到某时点应完成工作的预算价值 / budgeted value of work scheduled by a point in time
- B. 实际花费 / actual spending
- C. 实际完成工作的预算价值 / budgeted value of work performed
- D. 完工估算 / estimate at completion

答案：==A==。
Answer: ==A==.

解析：PV 看计划，不看实际完成。
Explanation: PV looks at planned work, not actual completion.

### L6-MCQ4：EV

题目：EV / Earned Value 表示什么？
Question: What does EV / Earned Value mean?

- A. 实际已完成工作的预算价值 / budgeted value of completed work
- B. 实际支出 / actual cost
- C. 总预算 / total budget
- D. 供应商报价 / supplier quote

答案：==A==。
Answer: ==A==.

解析：EV 是“完成了多少预算价值”，不是花了多少钱。
Explanation: EV is budgeted value earned by completed work, not money spent.

### L6-MCQ5：AC

题目：AC / Actual Cost 表示什么？
Question: What does AC / Actual Cost mean?

- A. 实际发生的成本 / actual cost incurred
- B. 计划价值 / planned value
- C. 风险影响值 / risk impact
- D. 完工预算 / budget at completion

答案：==A==。
Answer: ==A==.

解析：AC 是真实花费。
Explanation: AC is actual spending.

### L6-MCQ6：CV and SV

题目：CV 和 SV 的公式正确的是？
Question: Which formulas for CV and SV are correct?

- A. CV = EV - AC; SV = EV - PV
- B. CV = AC - EV; SV = PV - EV
- C. CV = EV / AC; SV = EV / PV
- D. CV = BAC / CPI; SV = BAC - EAC

答案：==A==。
Answer: ==A==.

解析：CV 看成本偏差，SV 看进度偏差。
Explanation: CV measures cost variance; SV measures schedule variance.

### L6-MCQ7：CPI and SPI

题目：CPI = 0.8，SPI = 1.1 表示什么？
Question: CPI = 0.8 and SPI = 1.1. What does this mean?

- A. 成本效率差，但进度效率好 / poor cost efficiency but good schedule efficiency
- B. 成本效率好，但进度效率差 / good cost efficiency but poor schedule efficiency
- C. 成本和进度都完美 / both perfect
- D. 无法解释 / impossible to interpret

答案：==A==。
Answer: ==A==.

解析：CPI < 1 超支；SPI > 1 进度领先。
Explanation: CPI < 1 means over budget; SPI > 1 means ahead of schedule.

### L6-MCQ8：EAC

题目：若假设未来成本效率和过去相同，常用 EAC 公式是？
Question: If future cost efficiency is assumed to follow past performance, what EAC formula is commonly used?

- A. EAC = BAC / CPI
- B. EAC = EV - AC
- C. EAC = n(n - 1) / 2
- D. EAC = (O + 4M + P) / 6

答案：==A==。
Answer: ==A==.

解析：这是 EVM 中最常见的 EAC 公式之一。
Explanation: This is one of the most common EAC formulas in EVM.

### L6-MCQ9：BAC

题目：==BAC / Budget at Completion== 表示什么？
Question: What does ==BAC / Budget at Completion== mean?

- A. 项目批准的完工总预算 / the approved total budget at completion
- B. 实际已经花掉的钱 / actual money spent so far
- C. 某活动的最早开始时间 / an activity's earliest start time
- D. 风险发生概率 / risk probability

答案：==A==。
Answer: ==A==.

解析：BAC 是总预算；AC 是实际成本；EAC 是预测最终成本。
Explanation: BAC is total budget; AC is actual cost; EAC is forecast final cost.

### L6-MCQ10：VAC

题目：若 BAC = 100,000，EAC = 120,000，则 VAC 是多少，含义是什么？
Question: If BAC = 100,000 and EAC = 120,000, what is VAC and what does it mean?

- A. VAC = 20,000，预计节省 / expected saving
- B. VAC = -20,000，预计超支 / expected overrun
- C. VAC = 1.2，进度领先 / ahead of schedule
- D. VAC = 0.83，成本效率好 / good cost efficiency

答案：==B==。
Answer: ==B==.

解析：==VAC = BAC - EAC = -20,000==，负数表示完工时预计超支。
Explanation: ==VAC = BAC - EAC = -20,000==; negative means expected overrun at completion.

### L6-MCQ11：Cost Estimate Types

题目：利用历史类似项目快速估算成本，通常叫？
Question: Estimating cost quickly using similar historical projects is usually called what?

- A. Analogous Estimating
- B. Bottom-up Estimating
- C. Control Chart
- D. Fast Tracking

答案：==A==。
Answer: ==A==.

解析：==Analogous estimating== 快但精度较低；==bottom-up== 更细、更耗时。
Explanation: ==Analogous estimating== is quick but less accurate; ==bottom-up== is more detailed and time-consuming.

### L6-MCQ12：Reserve Difference

题目：已识别风险的应急预算通常属于哪种 reserve？
Question: Budget for identified risks usually belongs to which reserve?

- A. Contingency Reserve
- B. Management Reserve
- C. Earned Value
- D. Communication Channel

答案：==A==。
Answer: ==A==.

解析：==Contingency Reserve== 应对 known unknowns；==Management Reserve== 应对 unknown unknowns，通常不在 cost baseline 内。
Explanation: ==Contingency reserve== handles known unknowns; ==management reserve== handles unknown unknowns and is usually outside the cost baseline.

## Lecture 7：风险管理

### L7-MCQ1：Risk

题目：Risk 最准确的定义是？
Question: What is the most accurate definition of risk?

- A. 会影响目标的不确定事件或条件 / an uncertain event or condition that affects objectives
- B. 已经发生的问题 / an issue that has already happened
- C. 一定是坏事 / always a bad thing
- D. 一定概率为 100% / always 100% likely

答案：==A==。
Answer: ==A==.

解析：Risk 可以是 threat，也可以是 opportunity。
Explanation: Risk can be a threat or an opportunity.

### L7-MCQ2：Risk Register

题目：Risk Register 通常记录什么？
Question: What does a Risk Register usually record?

- A. Risk, owner, trigger, probability, impact, response
- B. Only source code
- C. Only CPI and SPI
- D. Only seller invoices

答案：==A==。
Answer: ==A==.

解析：Risk Register 是风险管理的核心表。
Explanation: The Risk Register is a core risk-management document.

### L7-MCQ3：Trigger

题目：Trigger 在风险管理中表示什么？
Question: What does a trigger mean in risk management?

- A. 风险即将发生或已经发生的信号 / a sign that a risk is about to occur or has occurred
- B. 项目章程批准人 / charter approver
- C. 成本基准 / cost baseline
- D. Scrum 角色 / Scrum role

答案：==A==。
Answer: ==A==.

解析：Trigger 是风险监控的重要线索。
Explanation: A trigger is an important clue for risk monitoring.

### L7-MCQ4：Qualitative Risk Analysis

题目：Probability-Impact Matrix 主要属于什么？
Question: Probability-Impact Matrix mainly belongs to what?

- A. Qualitative Risk Analysis
- B. Earned Value Management
- C. Scope Validation
- D. Procurement Closure

答案：==A==。
Answer: ==A==.

解析：它用概率和影响对风险优先级排序。
Explanation: It prioritises risks using probability and impact.

### L7-MCQ5：EMV

题目：EMV 的基本公式是？
Question: What is the basic formula for EMV?

- A. Probability × Monetary Outcome
- B. EV - AC
- C. EV / PV
- D. LS - ES

答案：==A==。
Answer: ==A==.

解析：EMV 用于不确定结果下的期望货币价值。
Explanation: EMV calculates expected monetary value under uncertainty.

### L7-MCQ6：Risk Transfer

题目：买保险应对潜在损失属于什么风险应对？
Question: Buying insurance for potential loss is what type of risk response?

- A. Transfer
- B. Avoid
- C. Exploit
- D. Enhance

答案：==A==。
Answer: ==A==.

解析：保险把财务后果转移给第三方。
Explanation: Insurance transfers financial consequences to a third party.

### L7-MCQ7：Secondary Risk

题目：采取风险应对措施后产生的新风险叫？
Question: What is a new risk created by a risk response?

- A. Secondary Risk
- B. Residual Risk
- C. Scope Baseline
- D. Sprint Goal

答案：==A==。
Answer: ==A==.

解析：Residual Risk 是应对后仍残留的风险；Secondary Risk 是应对措施带来的新风险。
Explanation: Residual risk remains after response; secondary risk is newly created by the response.

### L7-MCQ8：Monte Carlo

题目：Monte Carlo Simulation 的核心是？
Question: What is the core idea of Monte Carlo Simulation?

- A. 多次随机模拟，得到结果分布 / repeated random simulation to obtain an outcome distribution
- B. 只画 WBS / only draw WBS
- C. 只计算沟通渠道 / only calculate communication channels
- D. 只做供应商评分 / only score sellers

答案：==A==。
Answer: ==A==.

解析：Monte Carlo 常用于估计工期或成本的不确定分布。
Explanation: Monte Carlo estimates uncertain distributions such as duration or cost.

### L7-MCQ9：Risk vs Issue

题目：服务器已经宕机并影响上线，这更准确地说是什么？
Question: The server has already gone down and affects launch. What is it more accurately?

- A. Issue
- B. Risk
- C. Opportunity
- D. Float

答案：==A==。
Answer: ==A==.

解析：==Risk== 是不确定事件；已经发生并需要处理的是 ==Issue==。
Explanation: A ==risk== is uncertain; something that has already happened and needs action is an ==issue==.

### L7-MCQ10：Risk Owner

题目：Risk Owner 的职责最准确的是？
Question: What is the most accurate responsibility of a Risk Owner?

- A. 负责监控特定风险并推动应对措施 / monitor a specific risk and drive response actions
- B. 承担项目全部预算 / own the whole project budget
- C. 自动关闭项目 / automatically close the project
- D. 只负责 UI 颜色 / only own UI colours

答案：==A==。
Answer: ==A==.

解析：风险责任人不是“背锅人”，而是确保某个风险有人跟踪和响应。
Explanation: A risk owner is not simply someone to blame; they ensure a risk is tracked and responded to.

### L7-MCQ11：Positive Risk Response

题目：团队发现一个新技术机会，若主动确保机会一定发生，属于哪种机会应对？
Question: The team finds a technology opportunity and actively ensures it happens. Which opportunity response is this?

- A. Avoid
- B. Exploit
- C. Transfer
- D. Mitigate

答案：==B==。
Answer: ==B==.

解析：对正面风险/机会，==Exploit== 是确保机会发生；Enhance 是提高概率或影响。
Explanation: For positive risk/opportunity, ==exploit== ensures it happens; enhance increases probability or impact.

### L7-MCQ12：Risk Appetite

题目：组织愿意承受多大风险，通常称为？
Question: The amount of risk an organisation is willing to accept is usually called what?

- A. Risk Appetite
- B. Scope Baseline
- C. Earned Value
- D. Free Float

答案：==A==。
Answer: ==A==.

解析：==Risk Appetite== 会影响项目选择、合同策略和风险应对强度。
Explanation: ==Risk appetite== affects project selection, contract strategy, and response intensity.

## Lecture 8：HR、干系人与沟通

### L8-MCQ1：RACI

题目：RACI 中 A 表示什么？
Question: What does A mean in RACI?

- A. Accountable
- B. Active
- C. Agile
- D. Approved Cost

答案：==A==。
Answer: ==A==.

解析：A 是最终负责和批准者，通常一个。
Explanation: A is ultimately accountable and usually one person.

### L8-MCQ2：R vs A

题目：R 和 A 的区别是？
Question: What is the difference between R and A?

- A. R 执行工作，A 最终负责 / R performs the work, A is ultimately accountable
- B. R 是风险，A 是敏捷 / R means risk, A means agile
- C. R 只看预算，A 只看合同 / R only budget, A only contract
- D. 没有区别 / no difference

答案：==A==。
Answer: ==A==.

解析：一个做，一个负责结果。
Explanation: One does the work; one owns the result.

### L8-MCQ3：Communication Channels

题目：8 个人团队的沟通渠道数是多少？
Question: How many communication channels are there in an 8-person team?

- A. 28
- B. 16
- C. 8
- D. 56

答案：==A==。
Answer: ==A==.

解析：公式 n(n - 1) / 2 = 8×7/2 = 28。
Explanation: n(n - 1) / 2 = 8×7/2 = 28.

### L8-MCQ4：Tuckman

题目：团队出现冲突、权力争夺和规则争论，更接近 Tuckman 哪一阶段？
Question: A team has conflicts, power struggles, and arguments over rules. Which Tuckman stage is this?

- A. Storming
- B. Performing
- C. Closing
- D. Procurement

答案：==A==。
Answer: ==A==.

解析：Storming 是冲突和磨合阶段。
Explanation: Storming is the conflict and adjustment stage.

### L8-MCQ5：Conflict Management

题目：面对重要冲突，最有利于长期解决问题的方法通常是？
Question: For an important conflict, which approach usually best solves the problem long term?

- A. Confrontation / Problem-solving or Collaboration
- B. Avoid forever
- C. Force without discussion
- D. Pretend the problem does not exist

答案：==A==。
Answer: ==A==.

解析：问题解决/合作直接处理根因，适合重要冲突。
Explanation: Problem-solving/collaboration addresses root causes and fits important conflicts.

### L8-MCQ6：Power-Interest Grid

题目：高权力、高兴趣的干系人应如何管理？
Question: How should a high-power, high-interest stakeholder be managed?

- A. Manage Closely
- B. Monitor only
- C. Ignore
- D. Keep uninformed

答案：==A==。
Answer: ==A==.

解析：高权力高兴趣是最需要密切管理的象限。
Explanation: High power and high interest require close management.

### L8-MCQ7：Status vs Progress vs Forecast

题目：Forecast Report 主要回答什么？
Question: What does a Forecast Report mainly answer?

- A. 未来可能怎样 / what may happen in the future
- B. 当前状态是什么 / current status
- C. 过去一段时间完成了什么 / what was completed recently
- D. 哪个合同类型最好 / best contract type

答案：==A==。
Answer: ==A==.

解析：Status 看现在，Progress 看过去，Forecast 看未来。
Explanation: Status looks at now, Progress looks at the past period, Forecast looks ahead.

### L8-MCQ8：Noise

题目：沟通模型中的 Noise 是什么？
Question: What is Noise in the communication model?

- A. 干扰信息理解的因素 / anything that interferes with understanding
- B. 项目预算 / project budget
- C. 项目章程 / project charter
- D. 风险应对策略 / risk response strategy

答案：==A==。
Answer: ==A==.

解析：语言、技术故障、情绪、文化差异都可能是 noise。
Explanation: Language, technical failures, emotions, and cultural differences can all be noise.

### L8-MCQ9：Interactive Communication

题目：复杂问题需要多方实时讨论并确认理解，最适合哪种沟通方式？
Question: A complex issue needs real-time discussion among several people to confirm shared understanding. Which communication method fits best?

- A. Interactive Communication
- B. Pull Communication
- C. One-way archive only
- D. Cost baseline update

答案：==A==。
Answer: ==A==.

解析：会议、电话、视频讨论都属于 ==Interactive Communication==，适合复杂和双向反馈场景。
Explanation: Meetings, calls, and video discussions are ==interactive communication== and fit complex two-way feedback.

### L8-MCQ10：Pull Communication

题目：把大量项目文档放在知识库/网站中，让干系人需要时自行查看，属于？
Question: Placing large project documents in a knowledge base/site so stakeholders can access them when needed is what?

- A. Pull Communication
- B. Interactive Communication
- C. Crashing
- D. Risk Transfer

答案：==A==。
Answer: ==A==.

解析：==Pull== 适合大量信息；==Push== 是主动发送邮件/报告给接收者。
Explanation: ==Pull== fits large information repositories; ==push== sends emails/reports directly to recipients.

### L8-MCQ11：Stakeholder Low Power High Interest

题目：低权力但高兴趣的干系人应采取什么策略？
Question: What strategy fits stakeholders with low power but high interest?

- A. Keep Informed
- B. Keep Satisfied
- C. Manage Closely
- D. Ignore Completely

答案：==A==。
Answer: ==A==.

解析：低权力高兴趣通常需要保持信息透明，避免被忽视后产生误解或阻力。
Explanation: Low power high interest stakeholders usually need information transparency to avoid misunderstanding or resistance.

### L8-MCQ12：Communication Channels Formula

题目：团队从 5 人增加到 6 人，沟通渠道增加多少条？
Question: A team grows from 5 to 6 people. How many communication channels are added?

- A. 5
- B. 6
- C. 10
- D. 15

答案：==A==。
Answer: ==A==.

解析：5 人渠道 = 5×4/2 = 10；6 人渠道 = 6×5/2 = 15；增加 5。
Explanation: 5 people: 5×4/2 = 10; 6 people: 6×5/2 = 15; increase = 5.

## Lecture 9：采购与质量管理

### L9-MCQ1：Make-or-Buy

题目：决定内部做还是外部采购，属于什么分析？
Question: Deciding whether to build internally or procure externally is what analysis?

- A. Make-or-Buy Analysis
- B. Forward Pass
- C. Mutation Test
- D. Sprint Retrospective

答案：==A==。
Answer: ==A==.

解析：Make-or-Buy 比较自制和外购的成本、能力、风险和战略因素。
Explanation: Make-or-Buy compares internal and external options by cost, capability, risk, and strategy.

### L9-MCQ2：RFP vs RFQ

题目：需求复杂，需要供应商提交方案和方法，通常发什么？
Question: If requirements are complex and suppliers need to propose solutions and approaches, what is usually issued?

- A. RFP
- B. RFQ
- C. CPI
- D. Slack

答案：==A==。
Answer: ==A==.

解析：RFP 要 proposal；RFQ 更偏规格明确时要报价。
Explanation: RFP asks for proposals; RFQ asks mainly for quotes when specifications are clear.

### L9-MCQ3：Fixed Price

题目：范围清楚时，哪种合同通常让买方风险较低？
Question: When scope is clear, which contract usually gives the buyer lower risk?

- A. Fixed Price Contract
- B. Cost Plus Percentage of Costs
- C. No contract
- D. Open-ended verbal agreement

答案：==A==。
Answer: ==A==.

解析：固定总价把成本超支风险更多放在卖方。
Explanation: Fixed price shifts more cost-overrun risk to the seller.

### L9-MCQ4：Supplier Least Risk

题目：哪种合同对供应商风险最低？
Question: Which contract has the least risk for the supplier?

- A. Cost plus percentage of costs
- B. Firm fixed price
- C. Fixed price incentive fee
- D. Lump sum with no adjustment

答案：==A==。
Answer: ==A==.

解析：成本补偿且按成本百分比收费，对供应商最宽松。
Explanation: Cost reimbursement plus a percentage fee is most favourable to the supplier.

### L9-MCQ5：QA vs QC

题目：QA 和 QC 的区别是？
Question: What is the difference between QA and QC?

- A. QA 关注过程预防和改进；QC 关注结果检查和缺陷发现 / QA focuses on process prevention and improvement; QC checks results and defects
- B. 二者完全相同 / identical
- C. QA 只签合同，QC 只算 NPV / QA signs contracts, QC calculates NPV
- D. QA 是风险，QC 是沟通 / QA is risk, QC is communication

答案：==A==。
Answer: ==A==.

解析：QA 偏过程，QC 偏交付物/结果。
Explanation: QA is process-oriented; QC is deliverable/result-oriented.

### L9-MCQ6：Pareto

题目：想找出造成大多数缺陷的少数类别，先用什么工具？
Question: Which tool identifies the few categories causing most defects?

- A. Pareto Chart
- B. Network Diagram
- C. RACI
- D. Project Charter

答案：==A==。
Answer: ==A==.

解析：Pareto 体现 vital few，按频次/影响排序。
Explanation: Pareto shows the vital few by ranking frequency or impact.

### L9-MCQ7：Fishbone

题目：要系统分析问题根本原因，适合使用什么？
Question: Which tool is suitable for systematically analysing root causes?

- A. Fishbone Diagram / Cause-and-Effect Diagram
- B. Payback Period
- C. Sponsor Register
- D. Burndown Chart

答案：==A==。
Answer: ==A==.

解析：Fishbone 从人、流程、技术、环境等方向展开原因。
Explanation: Fishbone expands causes across categories such as people, process, technology, and environment.

### L9-MCQ8：Control Chart

题目：要判断过程是否稳定、是否超出控制界限，用什么图？
Question: Which chart checks whether a process is stable and within control limits?

- A. Control Chart
- B. WBS
- C. Stakeholder Register
- D. Decision Tree

答案：==A==。
Answer: ==A==.

解析：Control Chart 用上/下控制限观察过程波动。
Explanation: Control Chart uses upper/lower control limits to observe process variation.

### L9-MCQ9：RFI

题目：买方还不清楚市场上有哪些方案，想先收集供应商能力和产品信息，通常发什么？
Question: The buyer is not sure what solutions exist and wants supplier capability/product information first. What is usually issued?

- A. RFI
- B. RFQ
- C. CPI
- D. PERT

答案：==A==。
Answer: ==A==.

解析：==RFI== 问信息；==RFP== 要方案；==RFQ== 要报价。
Explanation: ==RFI== asks for information; ==RFP== asks for proposals; ==RFQ== asks for quotations.

### L9-MCQ10：Time and Material

题目：工作范围不完全明确，但需要按工时和材料付费，常见合同类型是？
Question: Scope is not fully clear, and payment is based on labour hours and materials. Which contract type is common?

- A. Firm Fixed Price
- B. Time and Material
- C. Risk Register
- D. WBS Dictionary

答案：==B==。
Answer: ==B==.

解析：==Time and Material / T&M== 兼有成本补偿和固定单价特征，买方要控制工时上限。
Explanation: ==Time and Material / T&M== mixes cost-reimbursable and fixed-unit-rate features; the buyer should control hours/caps.

### L9-MCQ11：Cost of Quality

题目：培训、过程改进、代码规范检查这类投入主要属于哪类质量成本？
Question: Training, process improvement, and coding-standard checks mainly belong to which cost of quality category?

- A. Prevention/Appraisal costs
- B. External failure only
- C. Sunk cost only
- D. Procurement fee only

答案：==A==。
Answer: ==A==.

解析：预防和评估成本花在前面，目的是减少内部/外部失败成本。
Explanation: Prevention and appraisal costs are spent earlier to reduce internal/external failure costs.

### L9-MCQ12：External Failure Cost

题目：软件发布后客户发现严重缺陷，产生赔偿和声誉损失，这属于？
Question: After release, customers find severe defects causing compensation and reputation loss. What is this?

- A. External Failure Cost
- B. Prevention Cost
- C. Scope Baseline
- D. Free Float

答案：==A==。
Answer: ==A==.

解析：==External Failure Cost== 发生在产品交付给客户之后，通常最昂贵。
Explanation: ==External failure cost== occurs after delivery to the customer and is often the most expensive.

## Lecture 10：Agile 与博弈视角

### L10-MCQ1：Waterfall

题目：Waterfall 的典型特征是？
Question: What is a typical feature of Waterfall?

- A. 线性、前期规划重、阶段顺序明显 / linear, heavy upfront planning, clear phase sequence
- B. 没有任何文档 / no documentation at all
- C. 每天随机改目标 / randomly changing goals daily
- D. 不需要需求 / no requirements needed

答案：==A==。
Answer: ==A==.

解析：Waterfall 适合需求清晰、变更少的情境。
Explanation: Waterfall fits clearer requirements and fewer changes.

### L10-MCQ2：Agile

题目：Agile 最强调什么？
Question: What does Agile emphasize most?

- A. 迭代、增量、频繁反馈和适应变化 / iteration, increment, frequent feedback, and responding to change
- B. 完全没有计划 / no planning at all
- C. 完全没有文档 / no documentation at all
- D. 永远不能估算 / estimation is forbidden

答案：==A==。
Answer: ==A==.

解析：Agile 不是无计划，而是更适应变化。
Explanation: Agile is not no planning; it adapts to change.

### L10-MCQ3：Agile Manifesto

题目：Agile Manifesto 中 “working software over comprehensive documentation” 的正确理解是？
Question: What is the correct meaning of “working software over comprehensive documentation”?

- A. 更重视可工作的软件，但文档仍有价值 / value working software more, while documentation still has value
- B. 文档完全没用 / documentation has no value
- C. 只写文档不交付 / only write documents, no delivery
- D. 不需要质量 / no quality needed

答案：==A==。
Answer: ==A==.

解析：Manifesto 是“over”，不是“instead of”。
Explanation: The Manifesto says “over,” not “instead of.”

### L10-MCQ4：Scrum Roles

题目：谁主要管理 Product Backlog 的价值和优先级？
Question: Who mainly manages Product Backlog value and priority?

- A. Product Owner
- B. Scrum Master
- C. Supplier
- D. CCB only

答案：==A==。
Answer: ==A==.

解析：Product Owner 对产品价值和 Backlog 排序负责。
Explanation: Product Owner owns product value and backlog ordering.

### L10-MCQ5：Scrum Master

题目：Scrum Master 的核心职责是？
Question: What is the core responsibility of the Scrum Master?

- A. 移除障碍、促进 Scrum 流程 / remove impediments and facilitate Scrum
- B. 单独决定所有需求价值 / decide all requirement value alone
- C. 替代客户签合同 / replace the customer in contracts
- D. 只计算 EAC / only calculate EAC

答案：==A==。
Answer: ==A==.

解析：Scrum Master 是流程促进者，不是传统命令型老板。
Explanation: Scrum Master facilitates the process, not a command-and-control boss.

### L10-MCQ6：Burndown Chart

题目：Burndown Chart 显示什么？
Question: What does a Burndown Chart show?

- A. 剩余工作随时间变化 / remaining work over time
- B. 风险概率和影响 / risk probability and impact
- C. 合同价格调整 / contract price adjustment
- D. 沟通渠道数 / communication channel count

答案：==A==。
Answer: ==A==.

解析：它帮助团队看 Sprint/项目剩余工作趋势。
Explanation: It helps the team see remaining work trend in a sprint or project.

### L10-MCQ7：Game-Theoretic Mindset

题目：博弈视角和普通优化视角的关键区别是？
Question: What is the key difference between game-theoretic and ordinary optimisation thinking?

- A. 你的最佳选择取决于其他参与者的策略 / your best choice depends on other actors' strategies
- B. 永远只有一个决策者 / there is always only one decision maker
- C. 不考虑 incentives / incentives are ignored
- D. 不适用于项目管理 / it cannot apply to project management

答案：==A==。
Answer: ==A==.

解析：项目里干系人、供应商、团队都有自己的 payoff。
Explanation: Stakeholders, suppliers, and teams each have their own payoffs.

### L10-MCQ8：Technical Debt

题目：团队为了短期速度选择脆弱方案，长期维护成本上升，这更像什么？
Question: A team chooses a fragile solution for short-term speed, increasing long-term maintenance cost. What is this?

- A. Technical Debt
- B. Scope Baseline
- C. Quality Audit
- D. Risk Trigger only

答案：==A==。
Answer: ==A==.

解析：Technical Debt 是短期收益与长期成本之间的典型权衡。
Explanation: Technical Debt is a classic trade-off between short-term payoff and long-term cost.

### L10-MCQ9：Sprint Planning

题目：Sprint Planning 的主要产出通常是什么？
Question: What is the main output of Sprint Planning?

- A. Sprint Goal 和 Sprint Backlog / Sprint Goal and Sprint Backlog
- B. Project Charter only
- C. Contract Closure Report only
- D. Final Lessons Learned only

答案：==A==。
Answer: ==A==.

解析：Sprint Planning 决定本 Sprint 做什么、为什么做，以及如何开始完成。
Explanation: Sprint Planning decides what to do in the sprint, why, and how to start delivering it.

### L10-MCQ10：Sprint Review

题目：Sprint Review 的重点是什么？
Question: What is the focus of Sprint Review?

- A. 展示 increment，收集反馈，调整 Product Backlog / inspect the increment, collect feedback, and adapt the Product Backlog
- B. 团队内部只讨论流程改进 / only discuss internal process improvement
- C. 只计算 CPI / only calculate CPI
- D. 只签采购合同 / only sign procurement contracts

答案：==A==。
Answer: ==A==.

解析：==Review== 看产品增量和反馈；==Retrospective== 看团队过程改进。
Explanation: ==Review== inspects the product increment and feedback; ==Retrospective== improves team process.

### L10-MCQ11：Sprint Retrospective

题目：团队在 Sprint 结束后讨论“下次协作方式怎么改进”，这是什么事件？
Question: At the end of a sprint, the team discusses how to improve collaboration next time. What event is this?

- A. Sprint Retrospective
- B. Sprint Review
- C. Daily Scrum
- D. Procurement Audit

答案：==A==。
Answer: ==A==.

解析：Retrospective 面向过程和团队改进，不是给客户验收产品演示。
Explanation: Retrospective focuses on process/team improvement, not customer-facing product inspection.

### L10-MCQ12：Definition of Done

题目：Definition of Done 的作用是什么？
Question: What is the role of the Definition of Done?

- A. 明确工作达到可交付质量标准的共同标准 / define the shared quality standard for work to be considered done
- B. 随机决定谁请客 / randomly decide who pays for dinner
- C. 取代所有需求 / replace all requirements
- D. 只表示项目预算 / only represent project budget

答案：==A==。
Answer: ==A==.

解析：==Definition of Done== 防止“我以为完成了”和“实际还没达到质量标准”的误差。
Explanation: The ==Definition of Done== prevents mismatch between “I think it is done” and actual quality readiness.

## Lecture 11：执行、收尾与全课程复习

### L11-MCQ1：Direct and Manage Work

题目：Executing 中 Direct and Manage Project Work 的重点是？
Question: What is the focus of Direct and Manage Project Work during Executing?

- A. 按计划产出 deliverables 并协调项目工作 / produce deliverables and coordinate work according to the plan
- B. 只计算 NPV / only calculate NPV
- C. 只关闭合同 / only close contracts
- D. 只画鱼骨图 / only draw fishbone diagrams

答案：==A==。
Answer: ==A==.

解析：执行过程组的核心是把计划变成交付物。
Explanation: Executing turns plans into deliverables.

### L11-MCQ2：Status Report

题目：Status Report 主要看什么？
Question: What does a Status Report mainly focus on?

- A. 当前项目状态 / current project condition
- B. 未来预测 / future forecast
- C. 已取消项目的合同条款 / contract terms of a cancelled project
- D. WBS 100% Rule only

答案：==A==。
Answer: ==A==.

解析：Status 看现在；Progress 看过去；Forecast 看未来。
Explanation: Status looks at now; Progress looks at the past; Forecast looks ahead.

### L11-MCQ3：Quality Assurance

题目：QA 在执行阶段通常关注什么？
Question: What does QA usually focus on during execution?

- A. 过程是否能满足质量要求，是否可改进 / whether processes can satisfy quality requirements and be improved
- B. 只检查某个产品缺陷 / only inspect one product defect
- C. 只计算 Payback / only calculate Payback
- D. 只排 Sprint backlog / only order Sprint backlog

答案：==A==。
Answer: ==A==.

解析：QA 是过程导向；QC 是结果/交付物导向。
Explanation: QA is process-oriented; QC is product/result-oriented.

### L11-MCQ4：Closing

题目：项目收尾的核心不是？
Question: Which is not a core project closing activity?

- A. 正式验收 / formal acceptance
- B. Lessons learned
- C. Contract closure when applicable
- D. 随意增加未批准范围 / randomly adding unapproved scope

答案：==D==。
Answer: ==D==.

解析：收尾是正式结束、移交、总结，不是继续扩大范围。
Explanation: Closing formalises ending, handover, and learning, not expanding scope.

### L11-MCQ5：Cancelled Project

题目：项目提前取消，还需要记录 Lessons Learned 吗？
Question: If a project is cancelled early, are Lessons Learned still needed?

- A. Yes
- B. No
- C. Only if CPI > 1
- D. Only if there is no sponsor

答案：==A==。
Answer: ==A==.

解析：提前停止也要更新组织过程资产。
Explanation: Even early termination should update organisational process assets.

### L11-MCQ6：Exam Calculation Priorities

题目：Lecture 11 明确点名的三类计算/分析重点是？
Question: What three calculation/analysis priorities are highlighted by Lecture 11?

- A. NPV, CPM/PERT, EVM
- B. CSS, HTML, Git
- C. Scrum roles, icon design, typography
- D. Only communication channels

答案：==A==。
Answer: ==A==.

解析：Lecture 11 明确把项目选择、进度网络/关键路径、挣值管理作为重点。
Explanation: Lecture 11 highlights project selection, schedule network/critical path, and earned value management.

### L11-MCQ7：Knowledge Areas

题目：十大知识领域中，Procurement Management 主要管什么？
Question: In the ten knowledge areas, what does Procurement Management mainly manage?

- A. 从组织外部获取产品或服务 / obtaining products or services from outside the organisation
- B. 只管理团队冲突 / only team conflict
- C. 只管理代码格式 / only code style
- D. 只管理 UI 颜色 / only UI colours

答案：==A==。
Answer: ==A==.

解析：采购管理包括 make-or-buy、合同、供应商选择和合同控制。
Explanation: Procurement includes make-or-buy, contracts, seller selection, and contract control.

### L11-MCQ8：Monitoring and Controlling

题目：Monitoring and Controlling 的核心动作是？
Question: What is the core action of Monitoring and Controlling?

- A. 比较实际与计划，处理偏差和变更 / compare actuals with plans and handle variances and changes
- B. 完全不看 baseline / ignore baselines
- C. 只在项目最后一天发生 / happen only on the last day
- D. 只负责庆祝 / only celebrate

答案：==A==。
Answer: ==A==.

解析：监控与控制贯穿项目，不是最后才做。
Explanation: Monitoring and Controlling runs throughout the project, not only at the end.

### L11-MCQ9：Work Performance Data

题目：团队从执行中收集到的原始测量值，例如实际成本、完成百分比、缺陷数量，通常叫？
Question: Raw measurements collected during execution, such as actual cost, percent complete, and defect count, are usually called what?

- A. Work Performance Data
- B. Work Performance Reports
- C. Project Charter
- D. Procurement Statement

答案：==A==。
Answer: ==A==.

解析：==Data== 是原始数据；==Information== 是分析后的信息；==Reports== 是整理后给干系人沟通的报告。
Explanation: ==Data== is raw; ==Information== is analysed; ==Reports== are organised for stakeholder communication.

### L11-MCQ10：Work Performance Reports

题目：把进度、成本、风险等绩效信息整理成可沟通文件发给干系人，通常叫？
Question: Organising schedule, cost, risk, and other performance information into communicable documents for stakeholders is usually what?

- A. Work Performance Reports
- B. Activity Duration Estimate
- C. WBS Dictionary
- D. Source Selection Criteria

答案：==A==。
Answer: ==A==.

解析：==Reports== 是沟通输出，常用于状态报告、进展报告、预测报告。
Explanation: ==Reports== are communication outputs, including status, progress, and forecast reports.

### L11-MCQ11：Phase Closure

题目：一个大型项目每个阶段结束时进行验收和经验教训总结，这说明什么？
Question: A large project performs acceptance and lessons learned at the end of each phase. What does this show?

- A. Closing can happen at phase end as well as project end
- B. Closing only happens if the project fails
- C. Closing means adding new scope
- D. Closing replaces planning

答案：==A==。
Answer: ==A==.

解析：收尾不只发生在整个项目最后，也可以发生在阶段结束。
Explanation: Closing can occur not only at final project end but also at phase end.

### L11-MCQ12：Exam Short Answer Strategy

题目：Lecture 11 复习导向下，简答题最稳的答法通常是？
Question: Under Lecture 11 review priorities, what is usually the safest short-answer strategy?

- A. 只写一个中文词 / write only one Chinese word
- B. 写关键词 + 公式/步骤 + 一句解释 + 必要时举例 / write keywords + formula/steps + one explanation + example if needed
- C. 完全不写英文术语 / avoid all English terms
- D. 只画装饰图 / draw decoration only

答案：==B==。
Answer: ==B==.

解析：这门课大量概念是英文术语，简答题要用关键词证明你知道框架和应用。
Explanation: Many concepts in this course are English terms, so short answers should show keywords, structure, and application.

## Lecture 11 重点简答题

这些简答题按 Lecture 11 的考试重点组织：五大过程组、十大知识领域、NPV、CPM/PERT、EVM、执行与收尾。
These short-answer questions follow Lecture 11 priorities: process groups, knowledge areas, NPV, CPM/PERT, EVM, execution, and closing.

### SA1：这门课到底学什么？

题目：用一句话说明 Software Project Management 学什么。
Question: Explain in one sentence what Software Project Management studies.

答案：软件项目管理研究如何把软件/IT 项目从商业想法管理到正式交付，并在过程中控制范围、进度、成本、质量、风险、采购、沟通、团队和干系人。
Answer: It studies how to manage a software/IT project from business idea to formal delivery while controlling scope, schedule, cost, quality, risk, procurement, communication, team, and stakeholders.

解析：不要答成“写代码的方法”；重点是管理项目目标和约束。
Explanation: Do not answer “how to code”; the focus is managing objectives and constraints.

### SA2：五大过程组

题目：列出五大 Project Management Process Groups，并说明 Monitoring and Controlling 的特殊性。
Question: List the five Project Management Process Groups and explain why Monitoring and Controlling is special.

答案：Initiating、Planning、Executing、Monitoring and Controlling、Closing。Monitoring and Controlling 不是普通线性最后阶段，而是贯穿项目，用来比较实际与计划、控制范围/进度/成本/风险并处理变更。
Answer: Initiating, Planning, Executing, Monitoring and Controlling, and Closing. Monitoring and Controlling is not a normal linear final phase; it runs throughout the project to compare actuals with plans, control scope/schedule/cost/risk, and manage changes.

解析：这题常考“贯穿项目”。
Explanation: The usual trap is that Monitoring and Controlling runs throughout.

### SA3：十大知识领域

题目：任选五个知识领域，写出每个领域的关键词。
Question: Choose five knowledge areas and give keywords for each.

答案：Integration: Charter, PMP, Change Control；Scope: Requirements, WBS, Scope Baseline；Schedule: Activity List, PDM, CPM, PERT, Gantt；Cost: Budget, Cost Baseline, EVM；Risk: Risk Register, Probability-Impact Matrix, EMV, Responses。
Answer: Integration: Charter, PMP, Change Control; Scope: Requirements, WBS, Scope Baseline; Schedule: Activity List, PDM, CPM, PERT, Gantt; Cost: Budget, Cost Baseline, EVM; Risk: Risk Register, Probability-Impact Matrix, EMV, Responses.

解析：简答题不用写论文，要用关键词证明你知道每个领域管什么。
Explanation: Short answers need strong keywords, not long essays.

### SA4：Project Charter

题目：Project Charter 的作用是什么？
Question: What is the role of the Project Charter?

答案：Project Charter 正式承认项目存在，说明高层目标、主要干系人、约束和初步方向，并授权项目经理使用组织资源。
Answer: The Project Charter formally recognises the project, states high-level objectives, key stakeholders, constraints, and initial direction, and authorises the project manager to use organisational resources.

解析：关键词是 formal recognition 和 authorisation。
Explanation: The key words are formal recognition and authorisation.

### SA5：Scope Baseline

题目：Scope Baseline 由什么组成？为什么重要？
Question: What makes up the Scope Baseline and why is it important?

答案：Scope Baseline 通常由 Scope Statement、WBS 和 WBS Dictionary 组成。它重要是因为后续范围验证和范围控制都要用它判断工作是否在批准范围内。
Answer: Scope Baseline usually consists of the Scope Statement, WBS, and WBS Dictionary. It matters because scope validation and control use it to judge whether work is within the approved scope.

解析：这题可顺手提 Scope Creep。
Explanation: You can also mention Scope Creep.

### SA6：WBS

题目：WBS 是什么？100% Rule 是什么？
Question: What is WBS and what is the 100% Rule?

答案：WBS 是面向交付物的层级分解，把项目范围拆成可管理的 work packages。100% Rule 表示子项总和必须覆盖父项全部工作，不遗漏也不超出。
Answer: WBS is a deliverable-oriented hierarchical decomposition that breaks project scope into manageable work packages. The 100% Rule means child elements must cover all parent work, with nothing missing and nothing extra.

解析：WBS 不是按人名随便列任务。
Explanation: WBS is not a random task list by person.

### SA7：CPM 计算步骤

题目：简述 Critical Path Method 的计算步骤。
Question: Briefly describe the steps of Critical Path Method.

答案：先列活动和依赖，画网络图；再做 forward pass 算 ES/EF；然后做 backward pass 算 LS/LF；接着算 Slack = LS - ES = LF - EF；最后 Slack 为 0 的活动形成关键路径，最长路径决定项目最早完成时间。
Answer: List activities and dependencies and draw the network; perform forward pass for ES/EF; perform backward pass for LS/LF; calculate Slack = LS - ES = LF - EF; activities with zero slack form the critical path, and the longest path determines earliest project completion.

解析：考试大题一定要写步骤，不要只写最终答案。
Explanation: For calculation questions, show steps, not only final answers.

### SA8：PERT

题目：PERT 三点估算公式是什么？适合什么情况？
Question: What is the PERT three-point estimate formula and when is it useful?

答案：PERT 期望工期 TE = (O + 4M + P) / 6，其中 O 是乐观，M 是最可能，P 是悲观。它适合活动持续时间不确定，需要综合多种估计的情况。
Answer: PERT expected duration is TE = (O + 4M + P) / 6, where O is optimistic, M is most likely, and P is pessimistic. It is useful when activity duration is uncertain and multiple estimates should be combined.

解析：M 权重最大。
Explanation: M has the highest weight.

### SA9：EVM 三个核心数

题目：解释 PV、EV、AC。
Question: Explain PV, EV, and AC.

答案：PV 是按计划应完成工作的预算价值；EV 是实际已完成工作的预算价值；AC 是实际发生的成本。
Answer: PV is the budgeted value of planned work; EV is the budgeted value of completed work; AC is the actual cost incurred.

解析：PV 看计划，EV 看完成，AC 看花费。
Explanation: PV looks at plan, EV at completion, AC at spending.

### SA10：EVM 偏差和指数

题目：写出 CV、SV、CPI、SPI 公式，并说明如何解释。
Question: Give formulas for CV, SV, CPI, and SPI and explain interpretation.

答案：CV = EV - AC，负数表示超支；SV = EV - PV，负数表示落后；CPI = EV / AC，小于 1 表示成本效率差；SPI = EV / PV，小于 1 表示进度效率差。
Answer: CV = EV - AC, negative means over budget; SV = EV - PV, negative means behind schedule; CPI = EV / AC, below 1 means poor cost efficiency; SPI = EV / PV, below 1 means poor schedule efficiency.

解析：选择题常用 CPI = 0.89 问“每花 1 dollar 获得 89 cents 的价值”。
Explanation: MCQs often use CPI = 0.89 to mean getting 89 cents of value per dollar spent.

### SA11：EAC 和 VAC

题目：EAC 和 VAC 分别是什么？
Question: What are EAC and VAC?

答案：EAC 是 Estimate at Completion，预测项目最终总成本；VAC 是 Variance at Completion，公式 VAC = BAC - EAC，用来判断完工时预计节余或超支。
Answer: EAC is Estimate at Completion, the forecast final total cost. VAC is Variance at Completion, VAC = BAC - EAC, showing expected underrun or overrun at completion.

解析：Sponsor 问 forecast cost at completion，优先想到 EAC。
Explanation: If the sponsor asks for forecast cost at completion, think EAC first.

### SA12：Risk Responses

题目：列出四种负面风险应对，并各用一句话解释。
Question: List four negative risk responses and explain each briefly.

答案：Avoid 是消除威胁；Mitigate 是降低概率或影响；Transfer 是把责任或财务后果转给第三方；Accept 是接受风险并准备应急。
Answer: Avoid eliminates the threat; Mitigate reduces probability or impact; Transfer shifts responsibility or financial consequence to a third party; Accept acknowledges the risk and prepares contingency if needed.

解析：买保险是 Transfer。
Explanation: Buying insurance is Transfer.

### SA13：Stakeholder Power-Interest Grid

题目：Power-Interest Grid 四象限策略是什么？
Question: What are the four strategies in the Power-Interest Grid?

答案：High power high interest: Manage Closely；high power low interest: Keep Satisfied；low power high interest: Keep Informed；low power low interest: Monitor。
Answer: High power high interest: Manage Closely; high power low interest: Keep Satisfied; low power high interest: Keep Informed; low power low interest: Monitor.

解析：题目通常给角色，让你放象限并写管理策略。
Explanation: Questions usually give stakeholders and ask for quadrant and strategy.

### SA14：QA vs QC

题目：Quality Assurance 和 Quality Control 有什么区别？
Question: What is the difference between Quality Assurance and Quality Control?

答案：QA 关注过程，目标是预防缺陷和持续改进；QC 关注具体结果或交付物，目标是发现缺陷并确认符合质量标准。
Answer: QA focuses on processes to prevent defects and improve continuously; QC focuses on specific results or deliverables to find defects and confirm conformance to quality standards.

解析：Quality Audit 更偏 QA；Control Chart、检查具体结果更偏 QC。
Explanation: Quality Audit is closer to QA; Control Chart and checking specific results are closer to QC.

### SA15：Agile 误区

题目：Agile 是否等于没有计划、没有文档、没有项目管理？
Question: Does Agile mean no planning, no documentation, and no project management?

答案：不是。Agile 更重视 working software、customer collaboration 和 responding to change，但仍需要 backlog、planning、review、质量控制、必要文档和项目管理。
Answer: No. Agile values working software, customer collaboration, and responding to change more, but it still needs backlog, planning, review, quality control, necessary documentation, and project management.

解析：Manifesto 的关键词是 over，不是 instead of。
Explanation: The Manifesto says over, not instead of.

### SA16：Closing

题目：项目收尾要做什么？如果项目提前取消还要收尾吗？
Question: What happens during project closing? If a project is cancelled early, is closing still needed?

答案：收尾包括确认交付物验收、移交产品或服务、关闭合同、整理项目文件、记录 lessons learned 并更新 organisational process assets。即使项目提前取消，也仍然需要记录经验教训和正式结束。
Answer: Closing includes confirming acceptance, transitioning the product or service, closing contracts, organising project files, documenting lessons learned, and updating organisational process assets. Even if the project is cancelled early, lessons learned and formal closure are still needed.

解析：提前取消不是“什么都不用做”。
Explanation: Early cancellation does not mean doing nothing.

### SA17：Project Life Cycle vs Process Groups vs SDLC

题目：区分 Project Life Cycle、Project Management Process Groups 和 SDLC。
Question: Distinguish Project Life Cycle, Project Management Process Groups, and SDLC.

答案：Project Life Cycle 回答项目从开始到结束经过哪些阶段；Project Management Process Groups 回答项目经理做哪些管理工作，即 Initiating、Planning、Executing、Monitoring and Controlling、Closing；SDLC 回答软件产品如何开发，例如 Waterfall 或 Agile。
Answer: The Project Life Cycle describes the phases a project passes through from start to finish; Project Management Process Groups describe the management work, namely Initiating, Planning, Executing, Monitoring and Controlling, and Closing; SDLC describes how the software product is developed, such as Waterfall or Agile.

解析：这三个图很像，但视角不同：项目阶段、管理动作、软件开发方式。
Explanation: These three diagrams look similar but answer different questions: project phases, management actions, and software development approach.

### SA18：NPV 项目选择

题目：简述 NPV 的含义，并说明如何用它选择项目。
Question: Explain NPV and how to use it for project selection.

答案：NPV 是折现后收益减去折现后成本，用来衡量项目今天看是否创造财务价值。通常 NPV > 0 表示财务上可接受；多个互斥项目中，其他条件相近时优先选择 NPV 更高的项目。
Answer: NPV is discounted benefits minus discounted costs and measures whether the project creates financial value in today's money. Usually NPV > 0 is financially acceptable; among mutually exclusive projects, if other conditions are similar, choose the project with higher NPV.

解析：选择题会把 NPV 和 Payback、ROI 混在一起；NPV 最看重时间价值。
Explanation: MCQs often mix NPV with Payback and ROI; NPV emphasises time value of money.

### SA19：Work Performance Data / Information / Reports

题目：区分 Work Performance Data、Work Performance Information 和 Work Performance Reports。
Question: Distinguish Work Performance Data, Work Performance Information, and Work Performance Reports.

答案：Work Performance Data 是执行中收集的原始测量值；Work Performance Information 是把数据与计划/基准比较后得到的分析信息；Work Performance Reports 是把信息整理成给干系人沟通的正式报告，例如 status report、progress report 和 forecast report。
Answer: Work Performance Data is raw measurements collected during execution; Work Performance Information is analysed by comparing data with plans/baselines; Work Performance Reports organise that information into formal communication for stakeholders, such as status, progress, and forecast reports.

解析：记忆顺序：Data → Information → Reports，从原始到分析再到沟通。
Explanation: Remember the flow: Data → Information → Reports, from raw measurement to analysis to communication.

### SA20：分析/计算大题答题模板

题目：如果考试给一组活动、依赖、工期和成本数据，你应如何组织答案？
Question: If an exam gives activities, dependencies, durations, and cost data, how should you organise the answer?

答案：先列输入并画网络图；用 forward pass 算 ES/EF，用 backward pass 算 LS/LF，再算 Slack 和 critical path；如果给 O、M、P，用 PERT 先算期望工期；如果给 PV、EV、AC、BAC，则写出 EVM 公式并判断超支/落后；最后用一句业务解释说明项目状态和建议。
Answer: First list inputs and draw the network; use forward pass for ES/EF, backward pass for LS/LF, then calculate Slack and the critical path; if O, M, P are given, use PERT for expected duration first; if PV, EV, AC, BAC are given, write EVM formulas and judge overrun/behind status; finish with one business interpretation and recommendation.

解析：大题不要只给数字，必须让老师看到过程、公式和判断。
Explanation: For analytical questions, do not give only numbers; show process, formulas, and interpretation.
