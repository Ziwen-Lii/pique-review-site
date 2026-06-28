# 三套模拟试卷：软件项目管理

本章按考试结构出 3 套完整模拟卷。每套都是 ==100 分==：
Each mock paper follows the exam structure. Each paper is ==100 marks==:

| 部分 | 数量 | 分值 |
| --- | --- | --- |
| 选择题 / Multiple Choice | 20 题 | 40 分 |
| 简答题 / Short Answer | 3 题 | 12 分 |
| 分析/计算题 / Analytical & Calculation | 2 题 | 48 分 |

使用方法：先完整做题，不要点答案。每题下方的答案默认隐藏，点击“翻开答案”后再对照解析。
How to use: attempt the question first. The answer under each question is hidden by default; flip it only after you commit to your answer.

---

## Mock Paper 1：基础框架 + 进度/EVM

### P1-MCQ1（2分）：Project Definition

题目：下面哪一项最符合 ==project== 的定义？
Question: Which option best matches the definition of a ==project==?

- A. 每天重复处理固定工单 / handling routine tickets every day
- B. 临时性工作，用来创造独特产品、服务或结果 / a temporary effort to create a unique product, service, or result
- C. 没有明确结束日期的部门职责 / an ongoing departmental responsibility without an end date
- D. 只要使用软件工具就是项目 / any work using software tools

:::answer
答案 / Answer: ==B==

解析 / Explanation: Project 的关键词是 ==temporary== 和 ==unique==。A、C 更像 operation；D 把工具和项目性质混淆。
The keywords are ==temporary== and ==unique==. A and C are closer to operations; D confuses tools with project nature.
:::

### P1-MCQ2（2分）：Project vs Operation

题目：学校每天重置学生密码，更接近哪一类工作？
Question: A university resets student passwords every day. What type of work is it closer to?

- A. Portfolio
- B. Program
- C. Operation
- D. Critical path activity

:::answer
答案 / Answer: ==C==

解析 / Explanation: 该工作重复、持续、标准化，所以是 ==operation==。项目应当有临时性和独特结果。
It is repetitive, ongoing, and standardised, so it is an ==operation==. A project should be temporary with a unique result.
:::

### P1-MCQ3（2分）：Triple Constraint

题目：客户要求增加功能，但 deadline 和 budget 不变，最直接受到压力的是？
Question: The customer adds features while deadline and budget stay fixed. What is directly pressured?

- A. Scope, time, cost, quality
- B. Charter, sponsor, closing, archive
- C. RFI, RFQ, RFP, seller
- D. Encoding, decoding, channel, noise

:::answer
答案 / Answer: ==A==

解析 / Explanation: 范围增加会挤压时间、成本和质量，这是项目约束题的基本逻辑。
Increasing scope pressures time, cost, and quality. This is the core project-constraint logic.
:::

### P1-MCQ4（2分）：Project Charter

题目：Project Charter 的核心作用是？
Question: What is the core role of the Project Charter?

- A. 计算 CPI / calculate CPI
- B. 记录所有缺陷 / record all defects
- C. 取代合同 / replace contracts
- D. 正式授权项目和项目经理 / formally authorise the project and project manager

:::answer
答案 / Answer: ==D==

解析 / Explanation: Charter 是 ==Initiating== 的关键输出，关键词是 formal recognition 和 authorisation。
The Charter is a key ==Initiating== output. The keywords are formal recognition and authorisation.
:::

### P1-MCQ5（2分）：Business Case

题目：Business Case 主要回答什么问题？
Question: What question does a Business Case mainly answer?

- A. 每个缺陷的根因是什么 / each defect's root cause
- B. 每个活动的 LS 是多少 / each activity's LS
- C. 项目为什么值得做 / why the project is worth doing
- D. 哪个团队成员负责请假 / who handles leave requests

:::answer
答案 / Answer: ==C==

解析 / Explanation: Business Case 用商业价值、战略匹配、成本收益等说明项目合理性。
A Business Case justifies the project through business value, strategic fit, and cost-benefit reasoning.
:::

### P1-MCQ6（2分）：NPV

题目：若 NPV < 0，通常表示什么？
Question: If NPV < 0, what does it usually mean?

- A. 项目风险为零 / the project has zero risk
- B. 项目财务上通常不可接受 / the project is usually financially unacceptable
- C. 项目一定进度领先 / the project is definitely ahead of schedule
- D. 项目必须采购外包 / the project must be outsourced

:::answer
答案 / Answer: ==B==

解析 / Explanation: ==NPV== 是折现收益减折现成本；负数说明按折现后价值看，成本大于收益。
==NPV== is discounted benefits minus discounted costs; negative means costs exceed benefits in present value.
:::

### P1-MCQ7（2分）：Scope Baseline

题目：Scope Baseline 通常由什么组成？
Question: What usually makes up the Scope Baseline?

- A. Scope Statement + WBS + WBS Dictionary
- B. PV + EV + AC
- C. Product Backlog + Sprint Review
- D. Probability + Impact + Trigger

:::answer
答案 / Answer: ==A==

解析 / Explanation: Scope Baseline 是范围控制的批准基准；B 是 EVM，C 是敏捷，D 是风险。
Scope Baseline is the approved basis for scope control; B is EVM, C is Agile, and D is risk management.
:::

### P1-MCQ8（2分）：WBS

题目：WBS 的 100% Rule 表示什么？
Question: What does the WBS 100% Rule mean?

- A. 子项总和必须覆盖父项全部范围，不多不少 / child elements must cover all parent scope, no more and no less
- B. 每个任务都必须 100 天 / every task must take 100 days
- C. 每个风险概率都是 100% / every risk has 100% probability
- D. 每个成员都必须 100% 利用 / every member must be 100% utilised

:::answer
答案 / Answer: ==A==

解析 / Explanation: ==100% Rule== 防止漏掉范围，也防止加入未经批准的额外范围。
The ==100% Rule== prevents missing scope and adding unapproved extra scope.
:::

### P1-MCQ9（2分）：Validate Scope

题目：Validate Scope 的重点是？
Question: What is the focus of Validate Scope?

- A. 计算沟通渠道 / calculating communication channels
- B. 检查代码覆盖率 / checking code coverage
- C. 获得已完成交付物的正式接受 / obtaining formal acceptance of completed deliverables
- D. 选择合同类型 / choosing contract type

:::answer
答案 / Answer: ==C==

解析 / Explanation: Validate Scope 面向客户/干系人的正式验收；Control Quality 面向质量标准检查。
Validate Scope focuses on formal acceptance by customer/stakeholders; Control Quality checks quality conformance.
:::

### P1-MCQ10（2分）：Dependency

题目：活动 B 必须等活动 A 完成后才能开始，这是哪种依赖？
Question: Activity B can start only after Activity A finishes. Which dependency is this?

- A. Start-to-Start
- B. Finish-to-Start
- C. Finish-to-Finish
- D. Start-to-Finish

:::answer
答案 / Answer: ==B==

解析 / Explanation: ==FS / Finish-to-Start== 是最常见依赖：前置完成，后续开始。
==FS / Finish-to-Start== is the most common dependency: predecessor finishes, successor starts.
:::

### P1-MCQ11（2分）：Lead and Lag

题目：后续活动可以在前置活动完成前 2 天开始，这是？
Question: A successor can start 2 days before the predecessor finishes. What is this?

- A. Lead
- B. Lag
- C. Slack
- D. BAC

:::answer
答案 / Answer: ==A==

解析 / Explanation: ==Lead== 让后续活动提前；==Lag== 是等待时间。
==Lead== allows the successor to start earlier; ==Lag== is waiting time.
:::

### P1-MCQ12（2分）：Forward Pass

题目：Forward Pass 主要计算什么？
Question: What does Forward Pass mainly calculate?

- A. NPV and ROI
- B. LS and LF
- C. CPI and SPI
- D. ES and EF

:::answer
答案 / Answer: ==D==

解析 / Explanation: 正推从项目开始向后算 ==Earliest Start== 和 ==Earliest Finish==。
Forward pass calculates ==Earliest Start== and ==Earliest Finish== from the project start.
:::

### P1-MCQ13（2分）：Backward Pass

题目：Backward Pass 主要计算什么？
Question: What does Backward Pass mainly calculate?

- A. ES and EF
- B. LS and LF
- C. PV and EV
- D. Probability and Impact

:::answer
答案 / Answer: ==B==

解析 / Explanation: 逆推从项目结束往前算 ==Latest Finish== 和 ==Latest Start==。
Backward pass calculates ==Latest Finish== and ==Latest Start== backward from project completion.
:::

### P1-MCQ14（2分）：Slack

题目：Slack / Float 的公式正确的是？
Question: Which formula for Slack / Float is correct?

- A. LS - ES = LF - EF
- B. EV - AC
- C. EV / PV
- D. BAC - EAC

:::answer
答案 / Answer: ==A==

解析 / Explanation: Slack 表示活动可延误但不影响项目完工的时间。B 是 CV，C 是 SPI，D 是 VAC。
Slack is how long an activity can be delayed without delaying project completion. B is CV, C is SPI, D is VAC.
:::

### P1-MCQ15（2分）：Critical Path

题目：Critical Path 的最准确定义是？
Question: What is the most accurate definition of Critical Path?

- A. 资源最多的路径 / the path with the most resources
- B. 成本最低的路径 / the cheapest path
- C. 风险最少的路径 / the least risky path
- D. 决定项目最早完成时间的最长路径 / the longest path determining the earliest project completion time

:::answer
答案 / Answer: ==D==

解析 / Explanation: 关键路径活动通常 slack = 0；延误关键路径会直接延误项目。
Critical-path activities usually have zero slack; delaying them delays the project directly.
:::

### P1-MCQ16（2分）：PERT

题目：PERT 期望工期公式是？
Question: What is the PERT expected duration formula?

- A. (O + 4M + P) / 6
- B. (O + M + P) / 3
- C. EV - AC
- D. BAC / CPI

:::answer
答案 / Answer: ==A==

解析 / Explanation: PERT 给 most likely estimate 四倍权重。
PERT gives the most likely estimate four times the weight.
:::

### P1-MCQ17（2分）：EVM Core

题目：EV 表示什么？
Question: What does EV mean?

- A. 实际花费 / actual cost incurred
- B. 实际已完成工作的预算价值 / budgeted value of completed work
- C. 计划到某时点应完成工作的预算价值 / budgeted value of scheduled work
- D. 完工总预算 / total budget at completion

:::answer
答案 / Answer: ==B==

解析 / Explanation: EV 看“完成了多少预算价值”；AC 才是真实花费，PV 是计划价值。
EV looks at budgeted value earned by completed work; AC is actual spending, PV is planned value.
:::

### P1-MCQ18（2分）：CPI and SPI

题目：CPI = 0.8，SPI = 1.1 表示什么？
Question: CPI = 0.8 and SPI = 1.1. What does it mean?

- A. 成本和进度都刚好 / both cost and schedule are exactly on plan
- B. 成本效率好，但进度落后 / good cost efficiency but behind schedule
- C. 成本效率差，但进度领先 / poor cost efficiency but ahead of schedule
- D. 无法解释 / impossible to interpret

:::answer
答案 / Answer: ==C==

解析 / Explanation: CPI < 1 表示超支/成本效率差；SPI > 1 表示进度效率好。
CPI < 1 means over budget/poor cost efficiency; SPI > 1 means good schedule efficiency.
:::

### P1-MCQ19（2分）：Risk Response

题目：购买保险应对潜在损失属于哪种风险应对？
Question: Buying insurance for potential loss is which risk response?

- A. Transfer
- B. Avoid
- C. Exploit
- D. Enhance

:::answer
答案 / Answer: ==A==

解析 / Explanation: 保险把财务后果转给第三方，是 ==Transfer==。
Insurance shifts financial consequences to a third party, so it is ==Transfer==.
:::

### P1-MCQ20（2分）：Power-Interest Grid

题目：高权力、高兴趣的干系人应如何管理？
Question: How should a high-power, high-interest stakeholder be managed?

- A. Monitor
- B. Keep Satisfied
- C. Keep Informed
- D. Manage Closely

:::answer
答案 / Answer: ==D==

解析 / Explanation: 高权力高兴趣是最需要密切管理的象限。
High power and high interest require close management.
:::

### P1-SA1（4分）：Process Groups

题目：列出五大 Project Management Process Groups，并说明 Monitoring and Controlling 的特殊性。
Question: List the five Project Management Process Groups and explain why Monitoring and Controlling is special.

:::answer
参考答案 / Model Answer:

五大过程组是 ==Initiating==、==Planning==、==Executing==、==Monitoring and Controlling==、==Closing==。Monitoring and Controlling 不是普通线性最后阶段，而是贯穿项目，用来比较实际与计划、控制偏差、处理变更。

The five process groups are ==Initiating==, ==Planning==, ==Executing==, ==Monitoring and Controlling==, and ==Closing==. Monitoring and Controlling is not a normal final linear phase; it runs throughout the project to compare actuals with plans, control variances, and handle changes.

评分点 / Marking points: 五个名称 2 分；说明贯穿项目 1 分；说明比较实际与计划/控制变更 1 分。
:::

### P1-SA2（4分）：WBS

题目：解释 WBS 和 100% Rule。
Question: Explain WBS and the 100% Rule.

:::answer
参考答案 / Model Answer:

==WBS / Work Breakdown Structure== 是面向交付物的层级分解，把项目范围拆成可管理的 work packages。==100% Rule== 表示子项总和必须覆盖父项全部工作，不能遗漏，也不能超出父项范围。

==WBS / Work Breakdown Structure== is a deliverable-oriented hierarchical decomposition that breaks project scope into manageable work packages. The ==100% Rule== means child elements must cover all parent work, with nothing missing and nothing extra.

解析 / Explanation: 不要把 WBS 写成按人名排列的任务清单；它首先是范围分解。
Do not describe WBS as a random task list by person; it is scope decomposition first.
:::

### P1-SA3（4分）：QA vs QC

题目：区分 Quality Assurance 和 Quality Control。
Question: Distinguish Quality Assurance and Quality Control.

:::answer
参考答案 / Model Answer:

==Quality Assurance / QA== 关注过程，目标是预防缺陷和持续改进；==Quality Control / QC== 关注具体交付物或结果，目标是发现缺陷并确认是否符合质量标准。

==Quality Assurance / QA== focuses on processes to prevent defects and improve continuously; ==Quality Control / QC== focuses on deliverables/results to find defects and confirm conformance.

解析 / Explanation: Quality Audit 更偏 QA；inspection、control chart、defect checking 更偏 QC。
Quality Audit is closer to QA; inspection, control chart, and defect checking are closer to QC.
:::

### P1-AN1（24分）：NPV 项目选择

题目：公司只能选择 Project A 或 Project B。折现率为 10%，折现系数如下。计算两个项目 NPV，并说明应选择哪个项目。
Question: The company can choose only Project A or Project B. The discount rate is 10%, and discount factors are given. Calculate NPV for both projects and recommend one.

| 项目 / Project | 初始成本 Year 0 | Year 1 Benefit | Year 2 Benefit | Year 3 Benefit |
| --- | ---: | ---: | ---: | ---: |
| A | 100,000 | 40,000 | 50,000 | 60,000 |
| B | 120,000 | 50,000 | 50,000 | 70,000 |

| 年份 / Year | Discount Factor |
| --- | ---: |
| 1 | 0.909 |
| 2 | 0.826 |
| 3 | 0.751 |

要求 / Requirements:

1. 计算 Project A 的折现收益和 NPV。
2. 计算 Project B 的折现收益和 NPV。
3. 根据 NPV 做选择，并解释原因。

:::answer
过程 / Process:

Project A:

| Year | Benefit | DF | Present Value |
| --- | ---: | ---: | ---: |
| 1 | 40,000 | 0.909 | 36,360 |
| 2 | 50,000 | 0.826 | 41,300 |
| 3 | 60,000 | 0.751 | 45,060 |

Project A 折现收益 = 36,360 + 41,300 + 45,060 = ==122,720==。
Project A NPV = 122,720 - 100,000 = ==22,720==。

Project B:

| Year | Benefit | DF | Present Value |
| --- | ---: | ---: | ---: |
| 1 | 50,000 | 0.909 | 45,450 |
| 2 | 50,000 | 0.826 | 41,300 |
| 3 | 70,000 | 0.751 | 52,570 |

Project B 折现收益 = 45,450 + 41,300 + 52,570 = ==139,320==。
Project B NPV = 139,320 - 120,000 = ==19,320==。

答案 / Answer:

两个项目 NPV 都大于 0，财务上都可接受；如果只能选一个且只按 NPV 判断，应选择 ==Project A==，因为 A 的 NPV = 22,720，高于 B 的 19,320。

Both projects have positive NPV and are financially acceptable. If only one can be selected and the decision is based on NPV, choose ==Project A== because A's NPV = 22,720, higher than B's 19,320.

评分点 / Marking points: A 计算 7 分；B 计算 7 分；选择和解释 6 分；格式和公式清楚 4 分。
:::

### P1-AN2（24分）：CPM + EVM 综合题

题目：项目活动如下。先画出逻辑关系并计算关键路径，再根据 EVM 数据判断项目状态。
Question: Project activities are given below. Analyse the network and critical path, then judge project status using EVM data.

| Activity | Duration | Predecessor |
| --- | ---: | --- |
| A | 3 | - |
| B | 4 | A |
| C | 2 | A |
| D | 5 | B, C |
| E | 3 | C |
| F | 4 | D, E |

EVM data: PV = 80, EV = 70, AC = 90.

要求 / Requirements:

1. 计算 ES、EF、LS、LF、Slack。
2. 找出 critical path 和项目总工期。
3. 计算 CV、SV、CPI、SPI，并判断项目状态。

:::answer
进度计算 / Schedule calculation:

| Activity | Dur | ES | EF | LS | LF | Slack |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| A | 3 | 0 | 3 | 0 | 3 | 0 |
| B | 4 | 3 | 7 | 3 | 7 | 0 |
| C | 2 | 3 | 5 | 5 | 7 | 2 |
| D | 5 | 7 | 12 | 7 | 12 | 0 |
| E | 3 | 5 | 8 | 9 | 12 | 4 |
| F | 4 | 12 | 16 | 12 | 16 | 0 |

Critical Path = ==A → B → D → F==。
Project Duration = ==16==。

EVM calculation:

- CV = EV - AC = 70 - 90 = ==-20==，表示超支 / over budget。
- SV = EV - PV = 70 - 80 = ==-10==，表示落后 / behind schedule。
- CPI = EV / AC = 70 / 90 = ==0.78==，成本效率差 / poor cost efficiency。
- SPI = EV / PV = 70 / 80 = ==0.88==，进度效率差 / poor schedule efficiency。

结论 / Conclusion:

项目处于 ==超支且落后== 状态。需要检查关键路径活动 B、D、F 的实际进展，并分析成本超支原因。
The project is ==over budget and behind schedule==. The manager should review actual progress on critical-path activities B, D, and F, and investigate cost overruns.
:::

---

## Mock Paper 2：执行/收尾 + PERT/EVM

### P2-MCQ1（2分）：Process Group

题目：Direct and Manage Project Work 属于哪个过程组？
Question: Direct and Manage Project Work belongs to which process group?

- A. Initiating
- B. Executing
- C. Closing
- D. Procurement

:::answer
答案 / Answer: ==B==

解析 / Explanation: Executing 的核心是按计划协调工作并产出 deliverables。
Executing coordinates work according to the plan and produces deliverables.
:::

### P2-MCQ2（2分）：Monitoring and Controlling

题目：Monitoring and Controlling 的核心动作是？
Question: What is the core action of Monitoring and Controlling?

- A. 只在项目最后一天发生 / happen only on the last day
- B. 完全不看 baseline / ignore baselines
- C. 比较实际与计划，处理偏差和变更 / compare actuals with plans and handle variances and changes
- D. 只负责庆祝 / only celebrate

:::answer
答案 / Answer: ==C==

解析 / Explanation: 监控与控制贯穿项目，用 baseline 判断偏差并管理变更。
Monitoring and Controlling runs throughout the project, using baselines to judge variances and manage changes.
:::

### P2-MCQ3（2分）：Closing

题目：下列哪项不是项目收尾活动？
Question: Which is not a project closing activity?

- A. 随意增加未经批准范围 / randomly adding unapproved scope
- B. 记录 lessons learned / documenting lessons learned
- C. 合同关闭 / contract closure
- D. 正式验收 / formal acceptance

:::answer
答案 / Answer: ==A==

解析 / Explanation: Closing 是正式结束、移交、总结，不是继续扩大范围。
Closing formalises ending, transition, and learning; it does not expand scope.
:::

### P2-MCQ4（2分）：Cancelled Project

题目：项目提前取消，还需要 lessons learned 吗？
Question: If a project is cancelled early, are lessons learned still needed?

- A. Only if there is no sponsor
- B. No
- C. Only if CPI > 1
- D. Yes

:::answer
答案 / Answer: ==D==

解析 / Explanation: 即使项目取消，也应正式收尾并更新 organisational process assets。
Even if the project is cancelled, it should be formally closed and organisational process assets should be updated.
:::

### P2-MCQ5（2分）：Work Performance Data

题目：实际成本、缺陷数量、完成百分比这类原始测量值叫？
Question: Raw measurements such as actual cost, defect count, and percent complete are called what?

- A. Project Charter
- B. Work Performance Reports
- C. Work Performance Data
- D. Source Selection Criteria

:::answer
答案 / Answer: ==C==

解析 / Explanation: Data 是原始数据；Information 是分析后信息；Reports 是整理后报告。
Data is raw; Information is analysed; Reports are organised communication outputs.
:::

### P2-MCQ6（2分）：Status Report

题目：Status Report 主要回答什么？
Question: What does a Status Report mainly answer?

- A. 未来一定会发生什么 / what will definitely happen in the future
- B. 现在项目状态如何 / what the current project condition is
- C. 谁负责签合同 / who signs the contract
- D. WBS 有几层 / how many WBS levels there are

:::answer
答案 / Answer: ==B==

解析 / Explanation: Status 看当前；Progress 看过去一段时间；Forecast 看未来趋势。
Status looks at now; Progress looks at the recent past; Forecast looks ahead.
:::

### P2-MCQ7（2分）：RACI

题目：RACI 中 A 表示？
Question: What does A mean in RACI?

- A. Actual Cost
- B. Active
- C. Agile
- D. Accountable

:::answer
答案 / Answer: ==D==

解析 / Explanation: Accountable 是最终负责和批准者，通常一个。
Accountable is ultimately responsible and usually one person.
:::

### P2-MCQ8（2分）：Communication Channels

题目：6 人团队有多少沟通渠道？
Question: How many communication channels are there in a 6-person team?

- A. 15
- B. 12
- C. 30
- D. 6

:::answer
答案 / Answer: ==A==

解析 / Explanation: n(n - 1) / 2 = 6 × 5 / 2 = ==15==。
n(n - 1) / 2 = 6 × 5 / 2 = ==15==.
:::

### P2-MCQ9（2分）：Interactive Communication

题目：复杂问题需要多方实时讨论，最适合？
Question: A complex issue needs real-time discussion among several people. Which method fits best?

- A. Cost Baseline
- B. Pull Communication
- C. Interactive Communication
- D. Risk Transfer

:::answer
答案 / Answer: ==C==

解析 / Explanation: 会议、电话、视频讨论适合复杂双向沟通。
Meetings, calls, and video discussions fit complex two-way communication.
:::

### P2-MCQ10（2分）：Pull Communication

题目：把大型项目文档放到知识库，让干系人需要时查看，属于？
Question: Large documents are placed in a knowledge base for stakeholders to access when needed. What is this?

- A. Fast Tracking
- B. Pull Communication
- C. Scope Validation
- D. Crashing

:::answer
答案 / Answer: ==B==

解析 / Explanation: Pull 适合大量信息；Push 是主动发送。
Pull communication fits large information repositories; Push sends information directly.
:::

### P2-MCQ11（2分）：RFP

题目：需求复杂，需要供应商提交方案，通常发？
Question: Requirements are complex and suppliers need to propose solutions. What is usually issued?

- A. RFP
- B. RFQ
- C. CPI
- D. Slack

:::answer
答案 / Answer: ==A==

解析 / Explanation: RFP 要 proposal；RFQ 更偏规格明确时要报价；RFI 问信息。
RFP asks for proposals; RFQ asks for quotes when specifications are clear; RFI asks for information.
:::

### P2-MCQ12（2分）：Fixed Price

题目：范围清楚时，哪种合同通常让买方成本风险较低？
Question: When scope is clear, which contract usually gives the buyer lower cost risk?

- A. Open verbal agreement
- B. Cost plus percentage of costs
- C. No contract
- D. Fixed Price

:::answer
答案 / Answer: ==D==

解析 / Explanation: Fixed Price 把成本超支风险更多转给 seller。
Fixed Price shifts more cost-overrun risk to the seller.
:::

### P2-MCQ13（2分）：Make-or-Buy

题目：决定内部开发还是外部采购，属于？
Question: Deciding whether to build internally or procure externally is what?

- A. Forward Pass
- B. Make-or-Buy Analysis
- C. Sprint Retrospective
- D. Fishbone Diagram

:::answer
答案 / Answer: ==B==

解析 / Explanation: Make-or-Buy 比较成本、能力、风险、战略因素。
Make-or-Buy compares cost, capability, risk, and strategic factors.
:::

### P2-MCQ14（2分）：Pareto Chart

题目：想找造成大多数缺陷的少数类别，最适合？
Question: Which tool identifies the few categories causing most defects?

- A. Project Charter
- B. Network Diagram
- C. Pareto Chart
- D. RACI

:::answer
答案 / Answer: ==C==

解析 / Explanation: Pareto 强调 ==vital few==，按频次或影响排序。
Pareto highlights the ==vital few== by ranking frequency or impact.
:::

### P2-MCQ15（2分）：Fishbone

题目：系统分析问题根本原因，适合用？
Question: Which tool is suitable for systematically analysing root causes?

- A. Source Selection
- B. Payback Period
- C. Burndown Chart
- D. Fishbone Diagram

:::answer
答案 / Answer: ==D==

解析 / Explanation: Fishbone / Cause-and-Effect Diagram 用类别展开原因。
Fishbone / Cause-and-Effect Diagram expands causes by categories.
:::

### P2-MCQ16（2分）：Control Chart

题目：判断过程是否稳定、是否超出控制界限，用？
Question: Which chart checks whether a process is stable and within control limits?

- A. Control Chart
- B. WBS
- C. Stakeholder Register
- D. Decision Tree

:::answer
答案 / Answer: ==A==

解析 / Explanation: Control Chart 使用上/下控制限观察过程波动。
Control Chart uses upper/lower control limits to observe process variation.
:::

### P2-MCQ17（2分）：Waterfall

题目：Waterfall 的典型特征是？
Question: What is a typical feature of Waterfall?

- A. 完全没有计划 / no planning at all
- B. 线性、前期规划重、阶段顺序明显 / linear, heavy upfront planning, clear phase sequence
- C. 完全没有文档 / no documentation at all
- D. 每天随机改目标 / randomly changing goals daily

:::answer
答案 / Answer: ==B==

解析 / Explanation: Waterfall 适合需求较清晰、变更较少的项目。
Waterfall fits projects with clearer requirements and fewer changes.
:::

### P2-MCQ18（2分）：Agile

题目：Agile 最强调？
Question: What does Agile emphasise most?

- A. 没有任何文档 / no documentation at all
- B. 没有任何管理 / no management at all
- C. 迭代、增量、频繁反馈、适应变化 / iteration, increments, frequent feedback, responding to change
- D. 永远不能估算 / estimation is forbidden

:::answer
答案 / Answer: ==C==

解析 / Explanation: Agile 不是无计划，而是更适应变化和反馈。
Agile is not no planning; it adapts to change and feedback.
:::

### P2-MCQ19（2分）：Product Owner

题目：谁主要负责 Product Backlog 的价值和优先级？
Question: Who mainly manages Product Backlog value and priority?

- A. Product Owner
- B. Scrum Master
- C. Seller
- D. CCB only

:::answer
答案 / Answer: ==A==

解析 / Explanation: Product Owner 对产品价值和 Backlog ordering 负责。
Product Owner owns product value and backlog ordering.
:::

### P2-MCQ20（2分）：Definition of Done

题目：Definition of Done 的作用是？
Question: What is the role of Definition of Done?

- A. 取消测试 / cancel testing
- B. 替代所有需求 / replace all requirements
- C. 只表示预算 / only represent budget
- D. 明确工作达到完成状态的共同质量标准 / define the shared quality standard for work to be considered done

:::answer
答案 / Answer: ==D==

解析 / Explanation: DoD 防止“我以为完成了”和“质量上还没完成”的误差。
DoD prevents mismatch between “I think it is done” and actual quality readiness.
:::

### P2-SA1（4分）：Closing

题目：项目收尾要做什么？项目取消是否还需要收尾？
Question: What happens during project closing? Is closing still needed if the project is cancelled?

:::answer
参考答案 / Model Answer:

收尾包括确认交付物验收、移交产品/服务、关闭合同、整理项目文件、记录 lessons learned、更新 organisational process assets。项目提前取消也需要正式收尾，因为组织仍需保留经验教训和状态记录。

Closing includes confirming acceptance, transitioning the product/service, closing contracts, organising files, documenting lessons learned, and updating organisational process assets. Early cancellation still needs formal closure because the organisation needs lessons learned and status records.
:::

### P2-SA2（4分）：Agile Misunderstanding

题目：Agile 是否等于没有计划、没有文档、没有项目管理？
Question: Does Agile mean no planning, no documentation, and no project management?

:::answer
参考答案 / Model Answer:

不是。Agile 更重视 working software、customer collaboration 和 responding to change，但仍需要 backlog、planning、review、retrospective、质量控制、必要文档和项目管理。

No. Agile values working software, customer collaboration, and responding to change more, but it still needs backlog, planning, review, retrospective, quality control, necessary documentation, and project management.

解析 / Explanation: Agile Manifesto 的关键词是 ==over==，不是 instead of。
The keyword in the Agile Manifesto is ==over==, not instead of.
:::

### P2-SA3（4分）：Work Performance Flow

题目：区分 Work Performance Data、Information 和 Reports。
Question: Distinguish Work Performance Data, Information, and Reports.

:::answer
参考答案 / Model Answer:

Work Performance Data 是执行中收集的原始测量值；Work Performance Information 是把数据与计划/基准比较后得到的分析信息；Work Performance Reports 是把信息整理成给干系人沟通的报告，例如 status report、progress report、forecast report。

Work Performance Data is raw measurement collected during execution; Work Performance Information is analysed by comparing data with plans/baselines; Work Performance Reports organise information into stakeholder communication such as status, progress, and forecast reports.

速记 / Memory: Data → Information → Reports。
:::

### P2-AN1（24分）：PERT + Critical Path

题目：项目活动的三点估算如下。使用 PERT 计算每个活动期望工期，并找出关键路径。
Question: Three-point estimates are given below. Use PERT to calculate expected duration for each activity and identify the critical path.

| Activity | O | M | P | Predecessor |
| --- | ---: | ---: | ---: | --- |
| A | 2 | 3 | 4 | - |
| B | 3 | 4 | 8 | A |
| C | 1 | 2 | 3 | A |
| D | 4 | 5 | 6 | B, C |
| E | 2 | 3 | 4 | C |
| F | 1 | 2 | 3 | D, E |

要求 / Requirements:

1. 用 TE = (O + 4M + P) / 6 计算期望工期。
2. 找出所有主要路径和总工期。
3. 写出 critical path。

:::answer
PERT 期望工期 / Expected durations:

| Activity | Formula | TE |
| --- | --- | ---: |
| A | (2 + 4×3 + 4) / 6 | 3 |
| B | (3 + 4×4 + 8) / 6 | 4.5 |
| C | (1 + 4×2 + 3) / 6 | 2 |
| D | (4 + 4×5 + 6) / 6 | 5 |
| E | (2 + 4×3 + 4) / 6 | 3 |
| F | (1 + 4×2 + 3) / 6 | 2 |

路径 / Paths:

- A → B → D → F = 3 + 4.5 + 5 + 2 = ==14.5==
- A → C → D → F = 3 + 2 + 5 + 2 = ==12==
- A → C → E → F = 3 + 2 + 3 + 2 = ==10==

答案 / Answer:

Critical Path = ==A → B → D → F==。
Expected project duration = ==14.5 time units==。

解析 / Explanation: 关键路径是最长路径；不是活动数量最多或成本最高的路径。
The critical path is the longest path, not the path with the most activities or highest cost.
:::

### P2-AN2（24分）：EVM Forecast

题目：某项目 BAC = 200,000。目前 PV = 120,000，EV = 100,000，AC = 125,000。假设未来成本效率与当前相同，计算并解释 EVM 指标。
Question: A project has BAC = 200,000. Currently PV = 120,000, EV = 100,000, AC = 125,000. Assume future cost efficiency follows current performance. Calculate and interpret EVM metrics.

要求 / Requirements:

1. 计算 CV、SV、CPI、SPI。
2. 计算 EAC = BAC / CPI 和 VAC = BAC - EAC。
3. 判断项目状态并给出管理建议。

:::answer
计算 / Calculation:

- CV = EV - AC = 100,000 - 125,000 = ==-25,000==
- SV = EV - PV = 100,000 - 120,000 = ==-20,000==
- CPI = EV / AC = 100,000 / 125,000 = ==0.80==
- SPI = EV / PV = 100,000 / 120,000 = ==0.83==
- EAC = BAC / CPI = 200,000 / 0.80 = ==250,000==
- VAC = BAC - EAC = 200,000 - 250,000 = ==-50,000==

解释 / Interpretation:

CV < 0 表示项目超支；SV < 0 表示项目落后；CPI < 1 表示成本效率差；SPI < 1 表示进度效率差。若趋势不变，项目预计最终成本为 250,000，比预算超支 50,000。

CV < 0 means over budget; SV < 0 means behind schedule; CPI < 1 means poor cost efficiency; SPI < 1 means poor schedule efficiency. If the trend continues, final cost is forecast at 250,000, which is 50,000 over budget.

建议 / Recommendation:

优先检查高成本活动和关键路径活动，评估 scope、resource、quality rework 是否导致偏差，并向 sponsor 提交 forecast report。
Review high-cost activities and critical-path activities, check whether scope/resource/quality rework caused variance, and send a forecast report to the sponsor.
:::

---

## Mock Paper 3：风险/采购/敏捷 + EMV/干系人

### P3-MCQ1（2分）：Portfolio

题目：组织把多个项目和项目群放在一起，主要为了战略优先级和资源分配，这是？
Question: An organisation groups projects and programs for strategic prioritisation and resource allocation. What is this?

- A. Milestone
- B. Portfolio
- C. Control Chart
- D. Sprint Backlog

:::answer
答案 / Answer: ==B==

解析 / Explanation: Portfolio 不要求项目彼此相关，重点是战略选择和资源平衡。
A portfolio does not require all projects to be related; it focuses on strategic selection and resource balancing.
:::

### P3-MCQ2（2分）：Program

题目：多个相互关联项目被统一协调，以获得单独管理无法获得的收益，这是？
Question: Several related projects are coordinated to gain benefits not available from managing them separately. What is this?

- A. Work package
- B. Operation
- C. Program
- D. Quality metric

:::answer
答案 / Answer: ==C==

解析 / Explanation: Program 强调相关项目的协调收益。
Program emphasises coordinated benefits across related projects.
:::

### P3-MCQ3（2分）：Opportunity Cost

题目：选择项目 A 后不能选择项目 B，因此失去 B 的潜在收益，这叫？
Question: Choosing Project A means Project B cannot be selected, so B's potential benefit is lost. What is this?

- A. Opportunity Cost
- B. Sunk Cost
- C. Earned Value
- D. Residual Risk

:::answer
答案 / Answer: ==A==

解析 / Explanation: Opportunity Cost 是被放弃的最佳替代方案价值。
Opportunity Cost is the value of the best alternative given up.
:::

### P3-MCQ4（2分）：Sunk Cost

题目：项目已经花掉的钱，在是否继续项目的理性决策中应如何看待？
Question: How should money already spent be treated when rationally deciding whether to continue a project?

- A. 自动变成 EV / automatically becomes EV
- B. 必须继续，因为已经花钱 / must continue because money was spent
- C. 自动提高 NPV / automatically increases NPV
- D. Sunk Cost，不应单独迫使继续 / sunk cost, should not by itself force continuation

:::answer
答案 / Answer: ==D==

解析 / Explanation: 继续还是停止要看未来收益、成本、风险，而不是已无法收回的沉没成本。
Continue/stop decisions should depend on future benefits, costs, and risks, not unrecoverable sunk cost.
:::

### P3-MCQ5（2分）：Integrated Change Control

题目：变更请求为什么不能只由开发者私下决定？
Question: Why should a change request not be decided privately by a developer only?

- A. 变更只影响代码颜色 / changes only affect code colour
- B. 所有变更都必须拒绝 / all changes must be rejected
- C. 变更可能影响范围、时间、成本、质量、风险和干系人 / it may affect scope, time, cost, quality, risk, and stakeholders
- D. CCB 只负责画图 / CCB only draws diagrams

:::answer
答案 / Answer: ==C==

解析 / Explanation: Integrated Change Control 看整体影响，不只看局部实现工作量。
Integrated Change Control considers total project impact, not only local implementation effort.
:::

### P3-MCQ6（2分）：Gold Plating

题目：团队未经批准主动加入“酷炫功能”，这更接近？
Question: The team adds “cool features” without approval. What is this closer to?

- A. Forward Pass
- B. Gold Plating
- C. Cost Baseline
- D. Risk Trigger

:::answer
答案 / Answer: ==B==

解析 / Explanation: Gold Plating 是主动多做未批准范围，可能导致 scope creep。
Gold Plating is adding unapproved extra scope and may cause scope creep.
:::

### P3-MCQ7（2分）：Crashing

题目：通过增加资源缩短关键路径活动工期，通常叫？
Question: Shortening critical-path activities by adding resources is called what?

- A. Scope Validation
- B. Fast Tracking
- C. Resource Smoothing
- D. Crashing

:::answer
答案 / Answer: ==D==

解析 / Explanation: Crashing 常增加成本；只有压缩关键路径才可能缩短项目总工期。
Crashing often increases cost; only compressing the critical path can shorten total project duration.
:::

### P3-MCQ8（2分）：Fast Tracking

题目：把原本顺序执行的活动改成并行或重叠，通常叫？
Question: Running originally sequential activities in parallel or overlapping them is called what?

- A. Fast Tracking
- B. Crashing
- C. Reserve Analysis
- D. Procurement Closure

:::answer
答案 / Answer: ==A==

解析 / Explanation: Fast Tracking 常增加返工和风险。
Fast Tracking often increases rework and risk.
:::

### P3-MCQ9（2分）：Resource Leveling

题目：为解决资源过载调整活动时间，可能推迟完工日期，这是？
Question: Adjusting activity timing to solve resource overload, possibly delaying finish date, is what?

- A. Validate Scope
- B. Resource Smoothing
- C. Resource Leveling
- D. RFI

:::answer
答案 / Answer: ==C==

解析 / Explanation: Resource Leveling 可能改变关键路径和总工期。
Resource Leveling may change the critical path and total duration.
:::

### P3-MCQ10（2分）：Risk vs Issue

题目：服务器已经宕机并影响上线，这更准确地说是？
Question: The server has already gone down and affects launch. What is it more accurately?

- A. Risk
- B. Issue
- C. Opportunity
- D. Float

:::answer
答案 / Answer: ==B==

解析 / Explanation: Risk 是不确定事件；已经发生的是 issue。
Risk is uncertain; something that has already happened is an issue.
:::

### P3-MCQ11（2分）：Risk Trigger

题目：表明风险可能即将发生的预警信号叫？
Question: An early warning sign that a risk may occur is called what?

- A. Trigger
- B. BAC
- C. Sprint Goal
- D. WBS Dictionary

:::answer
答案 / Answer: ==A==

解析 / Explanation: Trigger 是风险监控的重要线索。
A trigger is an important clue for risk monitoring.
:::

### P3-MCQ12（2分）：Secondary Risk

题目：采取风险应对措施后产生的新风险叫？
Question: A new risk created by a risk response is called what?

- A. Product Increment
- B. Residual Risk
- C. Scope Baseline
- D. Secondary Risk

:::answer
答案 / Answer: ==D==

解析 / Explanation: Residual Risk 是应对后残留风险；Secondary Risk 是应对措施带来的新风险。
Residual Risk remains after response; Secondary Risk is newly created by the response.
:::

### P3-MCQ13（2分）：Positive Risk

题目：对机会风险，主动确保机会发生，属于哪种应对？
Question: For an opportunity, actively ensuring it happens is which response?

- A. Avoid
- B. Exploit
- C. Transfer
- D. Mitigate

:::answer
答案 / Answer: ==B==

解析 / Explanation: Exploit 用于确保机会发生；Enhance 是提高概率或影响。
Exploit ensures an opportunity occurs; Enhance increases probability or impact.
:::

### P3-MCQ14（2分）：Risk Appetite

题目：组织愿意承受多大风险，通常称为？
Question: The amount of risk an organisation is willing to accept is called what?

- A. Free Float
- B. Cost Baseline
- C. Risk Appetite
- D. Product Backlog

:::answer
答案 / Answer: ==C==

解析 / Explanation: Risk Appetite 会影响项目选择、合同策略和风险应对强度。
Risk Appetite affects project selection, contract strategy, and response intensity.
:::

### P3-MCQ15（2分）：Time and Material

题目：范围不完全明确，按工时和材料付费，常见合同类型是？
Question: Scope is not fully clear and payment is based on labour hours/materials. Which contract type is common?

- A. WBS Dictionary
- B. Firm Fixed Price only
- C. Risk Register
- D. Time and Material

:::answer
答案 / Answer: ==D==

解析 / Explanation: T&M 兼有成本补偿和固定单价特征，买方要控制工时上限。
T&M mixes cost-reimbursable and fixed-unit-rate features; buyers should control hours/caps.
:::

### P3-MCQ16（2分）：External Failure Cost

题目：发布后客户发现严重缺陷，产生赔偿和声誉损失，属于？
Question: Customers find severe defects after release, causing compensation and reputation loss. What is this?

- A. External Failure Cost
- B. Prevention Cost
- C. Scope Baseline
- D. Free Float

:::answer
答案 / Answer: ==A==

解析 / Explanation: External Failure Cost 发生在交付给客户之后，通常最昂贵。
External Failure Cost occurs after delivery to customers and is often the most expensive.
:::

### P3-MCQ17（2分）：Scrum Master

题目：Scrum Master 的核心职责是？
Question: What is the core responsibility of the Scrum Master?

- A. 单独决定所有产品价值 / decide all product value alone
- B. 移除障碍并促进 Scrum 流程 / remove impediments and facilitate Scrum
- C. 替代客户签合同 / replace the customer in contracts
- D. 只计算 EAC / only calculate EAC

:::answer
答案 / Answer: ==B==

解析 / Explanation: Scrum Master 是流程促进者，不是传统命令型老板。
Scrum Master facilitates the process, not a command-and-control boss.
:::

### P3-MCQ18（2分）：Sprint Review

题目：Sprint Review 的重点是？
Question: What is the focus of Sprint Review?

- A. 只计算 CPI / only calculate CPI
- B. 只做团队内部流程反思 / only internal process reflection
- C. 展示 increment、收集反馈、调整 Product Backlog / inspect increment, collect feedback, adapt Product Backlog
- D. 关闭采购合同 / close procurement contracts

:::answer
答案 / Answer: ==C==

解析 / Explanation: Review 看产品增量和反馈；Retrospective 看团队过程改进。
Review inspects the product increment and feedback; Retrospective improves team process.
:::

### P3-MCQ19（2分）：Technical Debt

题目：团队为了短期速度选择脆弱方案，长期维护成本上升，这是？
Question: The team chooses a fragile solution for short-term speed, increasing long-term maintenance cost. What is this?

- A. Technical Debt
- B. Scope Baseline
- C. Quality Audit
- D. Risk Trigger only

:::answer
答案 / Answer: ==A==

解析 / Explanation: Technical Debt 是短期收益和长期成本之间的权衡。
Technical Debt is a trade-off between short-term payoff and long-term cost.
:::

### P3-MCQ20（2分）：Game-Theoretic Mindset

题目：博弈视角和普通优化视角的关键区别是？
Question: What is the key difference between game-theoretic thinking and ordinary optimisation?

- A. 不适用于项目管理 / it cannot apply to project management
- B. 永远只有一个决策者 / there is always only one decision maker
- C. 不考虑 incentives / incentives are ignored
- D. 你的最佳选择取决于其他参与者策略 / your best choice depends on other actors' strategies

:::answer
答案 / Answer: ==D==

解析 / Explanation: 项目中的客户、供应商、团队、管理层都有自己的 incentives 和 payoff。
Customers, suppliers, teams, and management all have their own incentives and payoffs.
:::

### P3-SA1（4分）：Project Life Cycle vs Process Groups vs SDLC

题目：区分 Project Life Cycle、Project Management Process Groups 和 SDLC。
Question: Distinguish Project Life Cycle, Project Management Process Groups, and SDLC.

:::answer
参考答案 / Model Answer:

Project Life Cycle 回答项目从开始到结束经过哪些阶段；Project Management Process Groups 回答项目经理做哪些管理工作，即 Initiating、Planning、Executing、Monitoring and Controlling、Closing；SDLC 回答软件产品如何开发，例如 Waterfall 或 Agile。

Project Life Cycle describes the phases a project passes through; Project Management Process Groups describe management work, namely Initiating, Planning, Executing, Monitoring and Controlling, and Closing; SDLC describes how the software product is developed, such as Waterfall or Agile.
:::

### P3-SA2（4分）：Risk Responses

题目：列出四种负面风险应对，并各用一句话解释。
Question: List four negative risk responses and explain each briefly.

:::answer
参考答案 / Model Answer:

==Avoid== 是消除威胁；==Mitigate== 是降低概率或影响；==Transfer== 是把责任或财务后果转给第三方；==Accept== 是接受风险并准备应急。

==Avoid== eliminates the threat; ==Mitigate== reduces probability or impact; ==Transfer== shifts responsibility or financial consequence to a third party; ==Accept== acknowledges the risk and prepares contingency if needed.

例子 / Example: 买保险通常是 Transfer。
Buying insurance is usually Transfer.
:::

### P3-SA3（4分）：Stakeholder Strategy

题目：写出 Power-Interest Grid 四象限管理策略。
Question: Give the four strategies in the Power-Interest Grid.

:::answer
参考答案 / Model Answer:

High power high interest: ==Manage Closely==；high power low interest: ==Keep Satisfied==；low power high interest: ==Keep Informed==；low power low interest: ==Monitor==。

High power high interest: ==Manage Closely==; high power low interest: ==Keep Satisfied==; low power high interest: ==Keep Informed==; low power low interest: ==Monitor==.
:::

### P3-AN1（24分）：EMV 决策题

题目：公司要选择 AI 客服项目实施方式。方案一为内部开发，方案二为外包。收益/损失已包含主要成本。计算 EMV 并给出建议。
Question: A company must choose an implementation approach for an AI customer-service project. Option 1 is in-house development; option 2 is outsourcing. Payoffs already include major costs. Calculate EMV and recommend an option.

| 方案 / Option | Outcome | Probability | Monetary Outcome |
| --- | --- | ---: | ---: |
| In-house | Success | 0.65 | 180,000 |
| In-house | Failure | 0.35 | -60,000 |
| Outsource | Success | 0.80 | 120,000 |
| Outsource | Failure | 0.20 | -30,000 |

要求 / Requirements:

1. 计算两个方案 EMV。
2. 按 EMV 选择方案。
3. 说明如果公司 risk appetite 很低，是否可能选择不同方案。

:::answer
计算 / Calculation:

In-house EMV = 0.65 × 180,000 + 0.35 × (-60,000) = 117,000 - 21,000 = ==96,000==。

Outsource EMV = 0.80 × 120,000 + 0.20 × (-30,000) = 96,000 - 6,000 = ==90,000==。

答案 / Answer:

按 EMV，选择 ==In-house==，因为 96,000 > 90,000。
By EMV, choose ==In-house== because 96,000 > 90,000.

风险解释 / Risk interpretation:

如果公司 risk appetite 很低，可能仍选择 Outsource，因为外包失败概率更低、失败损失更小，结果更稳定。考试中要说明“EMV 最大”不一定等于“所有组织都一定选择”，还要看风险承受能力、战略能力、供应商依赖等因素。

If the organisation has very low risk appetite, it may still choose Outsource because it has lower failure probability and smaller failure loss. In exams, explain that the highest EMV does not always mean every organisation must choose it; risk appetite, strategic capability, and vendor dependency also matter.
:::

### P3-AN2（24分）：风险排序 + 干系人策略

题目：某软件项目识别出以下风险和干系人。请计算风险分值、排序，并给出干系人管理策略。
Question: A software project identified the following risks and stakeholders. Calculate risk scores, rank them, and give stakeholder management strategies.

Risk score = Probability × Impact.

| Risk | Probability | Impact |
| --- | ---: | ---: |
| R1 Vendor delay | 0.40 | 80,000 |
| R2 Key developer leaves | 0.25 | 60,000 |
| R3 Regulation change | 0.10 | 150,000 |
| R4 Performance defect after release | 0.50 | 40,000 |

| Stakeholder | Power | Interest |
| --- | --- | --- |
| Sponsor | High | High |
| Regulator | High | Low |
| End users | Low | High |
| Distant department | Low | Low |

要求 / Requirements:

1. 计算并排序四个风险。
2. 每个风险给一个应对方向。
3. 给出四类干系人的 Power-Interest Grid 策略。

:::answer
风险计算 / Risk calculation:

| Risk | Calculation | Score | Priority | Response direction |
| --- | --- | ---: | --- | --- |
| R1 Vendor delay | 0.40 × 80,000 | ==32,000== | 1 | Mitigate/Transfer: add contract milestones, backup vendor, progress checks |
| R4 Performance defect | 0.50 × 40,000 | ==20,000== | 2 | Mitigate: performance testing, quality gate, monitoring |
| R2 Key developer leaves | 0.25 × 60,000 | ==15,000== | 3 tie | Mitigate: documentation, pair work, backup resource |
| R3 Regulation change | 0.10 × 150,000 | ==15,000== | 3 tie | Accept/Mitigate: monitor regulator, legal review, contingency |

干系人策略 / Stakeholder strategies:

| Stakeholder | Quadrant | Strategy |
| --- | --- | --- |
| Sponsor | High power, high interest | ==Manage Closely== |
| Regulator | High power, low interest | ==Keep Satisfied== |
| End users | Low power, high interest | ==Keep Informed== |
| Distant department | Low power, low interest | ==Monitor== |

解析 / Explanation:

风险排序不能只看 impact，也不能只看 probability，要看 P × I。干系人策略要根据 power 和 interest 同时判断。
Risk ranking should not look only at impact or only at probability; use P × I. Stakeholder strategy depends on both power and interest.
:::
