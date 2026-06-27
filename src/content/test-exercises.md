# 软件测试总题库：选择题与答案

这一章补齐 ==软件测试== 每一章的选择题入口。第 4 章已经有超大专项题库，所以这里给第 4 章放高频压缩版，并链接到 [第4章专项题库](chapter:test-exercises-ch04)。
This chapter adds a multiple-choice question bank for every chapter of ==Software Testing==. Chapter 4 already has a large dedicated bank, so this chapter gives a high-frequency compact version and links to [Chapter 4 Special Question Bank](chapter:test-exercises-ch04).

使用方法：先做题，再看答案解析；做错的题跳回对应章节复习。
How to use it: answer first, then check the explanation; for wrong answers, jump back to the corresponding chapter.

| 章节 | 对应复习章节 | 本章题量 |
| --- | --- | --- |
| 第1章 | [引论](chapter:test-l01) | 6 道选择题 |
| 第2章 | [软件测试基本概念](chapter:test-l02) | 6 道选择题 |
| 第3章 | [软件测试流程和规范](chapter:test-l03) | 6 道选择题 |
| 第4章 | [软件测试方法](chapter:test-l04) + [专项题库](chapter:test-exercises-ch04) | 6 道选择题 |
| 第5章 | [单元测试与集成测试](chapter:test-l05) | 6 道选择题 |
| 第6章 | [系统测试](chapter:test-l06) | 6 道选择题 |
| 第7章 | [专项测试](chapter:test-l07) | 6 道选择题 |

## 第1章：引论

### 选择题 1-1

问题：为什么说测试不能证明软件没有缺陷？
Question: Why can testing not prove that software has no defects?

选项：

- A. 因为测试人员通常不懂代码
- B. 因为输入域和执行路径通常无法穷尽，测试只能抽样
- C. 因为自动化测试永远不可靠
- D. 因为只有用户才能发现缺陷

答案：==B==。
Answer: ==B==.

解析：测试用例是有限样本；通过测试只能提高信心，不能排除未测路径中的缺陷。
Explanation: Test cases are finite samples; passing them increases confidence but cannot exclude defects in untested paths.

### 选择题 1-2

问题：==软件测试 Testing== 和 ==调试 Debugging== 的核心区别是什么？
Question: What is the core difference between ==testing== and ==debugging==?

选项：

- A. 测试定位根因，调试设计用例
- B. 测试发现失败和评估质量，调试定位根因并修复
- C. 测试只由用户完成，调试只由测试人员完成
- D. 测试只能手工完成，调试只能自动完成

答案：==B==。
Answer: ==B==.

解析：测试问“有没有问题”；调试问“为什么错、怎么修”。
Explanation: Testing asks whether there is a problem; debugging asks why it happens and how to fix it.

### 选择题 1-3

问题：下面哪一项最能说明“软件测试不等于程序测试”？
Question: Which option best explains that software testing is not only program testing?

选项：

- A. 软件测试只测试最终可执行文件
- B. 需求、设计、代码、配置、文档等软件工件都可以测试
- C. 软件测试只能通过运行程序完成
- D. 程序测试比软件测试范围更大

答案：==B==。
Answer: ==B==.

解析：需求评审、设计评审、代码评审和静态分析都属于广义软件测试活动。
Explanation: Requirements reviews, design reviews, code reviews, and static analysis are all software-testing activities in a broad sense.

### 选择题 1-4

问题：==QA / Quality Assurance== 与 Testing 的区别更准确的是？
Question: What is the most accurate distinction between ==QA== and testing?

选项：

- A. QA 偏过程和预防，Testing 偏产品验证和发现缺陷
- B. QA 只写代码，Testing 只写文档
- C. QA 只在上线后发生，Testing 只在需求阶段发生
- D. QA 和 Testing 完全相同

答案：==A==。
Answer: ==A==.

解析：QA 通过流程、标准、审计预防缺陷；Testing 通过评审或执行测试发现缺陷、评估质量。
Explanation: QA prevents defects through process, standards, and audits; testing reveals defects and evaluates product quality.

### 选择题 1-5

问题：W 模型相比 V 模型更强调什么？
Question: Compared with the V-model, what does the W-model emphasize more?

选项：

- A. 测试只在编码完成后开始
- B. 测试和开发同步进行，需求、设计、代码都要尽早测试
- C. 系统测试可以替代单元测试
- D. 测试越晚越能降低成本

答案：==B==。
Answer: ==B==.

解析：W 模型体现测试左移，强调测试活动贯穿生命周期。
Explanation: The W-model reflects shift-left testing and emphasizes testing throughout the life cycle.

### 选择题 1-6

问题：==TDD / Test-Driven Development== 的基本顺序是？
Question: What is the basic order of ==TDD==?

选项：

- A. 写大量代码 -> 手工测试 -> 删除测试
- B. 先写测试 -> 运行失败 -> 写最少代码通过测试 -> 重构
- C. 先上线 -> 收集用户反馈 -> 再写测试
- D. 只写测试计划，不写测试代码

答案：==B==。
Answer: ==B==.

解析：TDD 的核心是用失败测试驱动实现，再用重构保持设计质量。
Explanation: TDD uses failing tests to drive implementation, then refactors to keep design quality.

## 第2章：软件测试基本概念

### 选择题 2-1

问题：内部质量、外部质量、使用质量的区别中，哪一项正确？
Question: Which statement about internal, external, and quality-in-use is correct?

选项：

- A. 内部质量主要由真实用户在使用过程中感知
- B. 外部质量通常通过系统对外行为体现
- C. 使用质量只看源代码复杂度
- D. 三者没有区别

答案：==B==。
Answer: ==B==.

解析：外部质量包括正确性、可靠性、易用性、性能等对外可观察特征。
Explanation: External quality includes observable behavior such as correctness, reliability, usability, and performance.

### 选择题 2-2

问题：下面哪一项属于 ISO 25010 产品质量特性？
Question: Which one is an ISO 25010 product quality characteristic?

选项：

- A. Functional suitability
- B. Sprint planning
- C. Product backlog
- D. Earned value

答案：==A==。
Answer: ==A==.

解析：ISO 25010 包括功能适应性、性能效率、兼容性、易用性、可靠性、安全性、可维护性、可移植性。
Explanation: ISO 25010 includes functional suitability, performance efficiency, compatibility, usability, reliability, security, maintainability, and portability.

### 选择题 2-3

问题：==Test Oracle / 测试预言== 的作用是什么？
Question: What is the role of a ==test oracle==?

选项：

- A. 自动生成所有可能测试用例
- B. 判断实际输出是否正确的依据
- C. 只负责统计测试人员工时
- D. 替代需求规格说明书

答案：==B==。
Answer: ==B==.

解析：Oracle 可以来自需求、设计、模型、启发式规则或一致性判断。
Explanation: An oracle may come from requirements, design, models, heuristics, or consistency checks.

### 选择题 2-4

问题：Verification 和 Validation 的对应关系正确的是？
Question: Which pairing of verification and validation is correct?

选项：

- A. Verification: Are we building the product right? Validation: Are we building the right product?
- B. Verification: Are users satisfied? Validation: Is the code formatted?
- C. Verification: 上线后监控；Validation: 代码编译
- D. Verification 和 Validation 没有区别

答案：==A==。
Answer: ==A==.

解析：Verification 关注符合规格；Validation 关注满足真实用户需求。
Explanation: Verification focuses on conformance to specifications; validation focuses on real user needs.

### 选择题 2-5

问题：静态测试和动态测试的区别正确的是？
Question: Which statement about static and dynamic testing is correct?

选项：

- A. 静态测试必须执行程序
- B. 动态测试不需要任何输入数据
- C. 静态测试不执行程序，动态测试执行程序
- D. 二者都只能用于系统测试阶段

答案：==C==。
Answer: ==C==.

解析：评审、走查、静态分析属于静态测试；运行程序观察输出属于动态测试。
Explanation: Reviews, walkthroughs, and static analysis are static; executing the program and observing results is dynamic.

### 选择题 2-6

问题：单元测试、集成测试、系统测试、验收测试的顺序通常是？
Question: What is the usual order of unit, integration, system, and acceptance testing?

选项：

- A. 验收 -> 系统 -> 集成 -> 单元
- B. 单元 -> 集成 -> 系统 -> 验收
- C. 系统 -> 单元 -> 验收 -> 集成
- D. 集成 -> 验收 -> 单元 -> 系统

答案：==B==。
Answer: ==B==.

解析：测试层次通常从最小模块逐步走向完整系统和用户验收。
Explanation: Test levels usually move from small units to integrated components, complete system, and user acceptance.

## 第3章：软件测试流程和规范

### 选择题 3-1

问题：==Shift-left testing / 测试左移== 的典型活动是？
Question: Which is a typical ==shift-left testing== activity?

选项：

- A. 需求评审、设计评审、静态分析
- B. 只在生产环境中观察用户点击
- C. 上线后 A/B 测试
- D. 发布后才开始写测试计划

答案：==A==。
Answer: ==A==.

解析：测试左移是把测试活动提前到需求、设计、编码早期。
Explanation: Shift-left moves testing activities earlier to requirements, design, and early coding.

### 选择题 3-2

问题：==Shift-right testing / 测试右移== 的典型活动是？
Question: Which is a typical ==shift-right testing== activity?

选项：

- A. 需求规格说明书评审
- B. 代码静态扫描
- C. 线上监控、灰度发布、用户反馈分析
- D. 编码前写单元测试

答案：==C==。
Answer: ==C==.

解析：测试右移把测试延伸到上线后和真实运行环境。
Explanation: Shift-right extends testing after release and into production-like or production environments.

### 选择题 3-3

问题：TMap 的主要特点是？
Question: What is the main characteristic of TMap?

选项：

- A. 结构化、风险驱动的测试管理方法
- B. 只用于白盒覆盖率计算
- C. 只用于性能压测工具脚本
- D. 不需要计划和控制

答案：==A==。
Answer: ==A==.

解析：TMap 是 Test Management Approach，强调策略、计划、控制和风险优先级。
Explanation: TMap is a test management approach emphasizing strategy, planning, control, and risk priority.

### 选择题 3-4

问题：TMap 生命周期中，哪一阶段主要产生测试用例、测试脚本和测试数据？
Question: In TMap, which phase mainly produces test cases, scripts, and test data?

选项：

- A. Planning and Control
- B. Preparation
- C. Specification
- D. Completion

答案：==C==。
Answer: ==C==.

解析：Specification / 说明阶段规划测试用例、脚本和前置条件。
Explanation: The specification phase designs test cases, scripts, and preconditions.

### 选择题 3-5

问题：SBTM 中的 session 更接近下面哪一项？
Question: In SBTM, what is a session closest to?

选项：

- A. 一段不受打扰的探索式测试时间盒
- B. 一个数据库事务
- C. 一个用户登录会话
- D. 一个自动化构建流水线

答案：==A==。
Answer: ==A==.

解析：Session-Based Test Management 用 session 管理探索式测试，配合 mission 和 charter。
Explanation: SBTM manages exploratory testing with time-boxed sessions, missions, and charters.

### 选择题 3-6

问题：TPI 更主要回答什么问题？
Question: What does TPI mainly answer?

选项：

- A. 具体测试脚本如何编码
- B. 测试过程是否成熟、如何改进
- C. HTTP GET 和 POST 的差别
- D. 哪个用户界面更好看

答案：==B==。
Answer: ==B==.

解析：TPI 是测试过程改进模型，用关键域、级别、检查点和成熟度矩阵评估改进空间。
Explanation: TPI improves test processes through key areas, levels, checkpoints, and maturity matrices.

## 第4章：软件测试方法

完整大题和更多选择题见 [第4章专项题库：软件测试方法](chapter:test-exercises-ch04)。
For full big questions and more multiple-choice practice, see [Chapter 4 Special Question Bank](chapter:test-exercises-ch04).

### 选择题 4-1

问题：下面哪一组主要属于黑盒测试方法？
Question: Which group mainly belongs to black-box testing?

选项：

- A. 边界值分析、等价类划分、判定表、因果图
- B. 基本路径测试、数据流测试、MC/DC
- C. 节点覆盖、边覆盖、路径覆盖
- D. 符号执行、变异测试、控制流图

答案：==A==。
Answer: ==A==.

解析：黑盒测试从规格说明和输入输出关系出发。
Explanation: Black-box testing is based on specifications and input-output behavior.

### 选择题 4-2

问题：边界值分析的核心思想是？
Question: What is the core idea of boundary value analysis?

选项：

- A. 缺陷常出现在边界及边界附近
- B. 所有路径都必须穷尽执行
- C. 只选择随机输入
- D. 只测试系统正常流程

答案：==A==。
Answer: ==A==.

解析：最小值、最大值、刚好边界、刚好越界是边界值分析的重点。
Explanation: Minimum, maximum, on-boundary, and just-outside-boundary values are key.

### 选择题 4-3

问题：多条件组合决定多个动作时，最适合先使用哪种方法？
Question: Which method is most suitable when multiple conditions determine multiple actions?

选项：

- A. 判定表 Decision table
- B. 随机测试 Random testing
- C. 代码走查 Walk-through
- D. 性能基准 Benchmark

答案：==A==。
Answer: ==A==.

解析：判定表把条件、动作和规则列清楚，适合组合逻辑题。
Explanation: Decision tables organize conditions, actions, and rules for combination logic.

### 选择题 4-4

问题：判定覆盖要求什么？
Question: What does decision coverage require?

选项：

- A. 每个判定的 true 和 false 结果至少各出现一次
- B. 每个输入值都被测试
- C. 每条路径都被穷尽执行
- D. 每个变量都至少赋值一次

答案：==A==。
Answer: ==A==.

解析：判定覆盖关注每个判定结果的真假分支。
Explanation: Decision coverage focuses on true and false outcomes of each decision.

### 选择题 4-5

问题：单入口单出口控制流图中，圈复杂度常用公式是？
Question: What is a common formula for cyclomatic complexity in a single-entry single-exit graph?

选项：

- A. `V(G)=E-N+2`
- B. `V(G)=N-E+2`
- C. `V(G)=E+N`
- D. `V(G)=2E-N`

答案：==A==。
Answer: ==A==.

解析：E 是边数，N 是节点数；结构化程序也常用“判定节点数 + 1”估算。
Explanation: E is edges and N is nodes; structured programs can also estimate it as decision nodes plus one.

### 选择题 4-6

问题：变异测试中的 mutation score 衡量什么？
Question: What does mutation score measure in mutation testing?

选项：

- A. 测试用例击杀变体的能力
- B. 程序运行速度
- C. 用户满意度
- D. 接口吞吐量

答案：==A==。
Answer: ==A==.

解析：变异评分通常是 killed mutants / non-equivalent mutants。
Explanation: Mutation score is usually killed mutants divided by non-equivalent mutants.

## 第5章：单元测试与集成测试

### 选择题 5-1

问题：下面哪一种评审形式最正式，通常使用检查表并输出错误报告？
Question: Which review type is the most formal and usually uses checklists and reports?

选项：

- A. Peer review
- B. Walk-through
- C. Inspection
- D. Ad-hoc chat

答案：==C==。
Answer: ==C==.

解析：Inspection / 会议审查最正式，强调准备、检查表、记录和复查。
Explanation: Inspection is the most formal, emphasizing preparation, checklists, recording, and follow-up.

### 选择题 5-2

问题：==SAST== 通常指什么？
Question: What does ==SAST== usually mean?

选项：

- A. Static Application Security Testing
- B. System Acceptance Stress Testing
- C. Selenium Automated Script Tool
- D. Sprint Agile Story Tracking

答案：==A==。
Answer: ==A==.

解析：SAST 通过静态分析技术识别安全缺陷模式。
Explanation: SAST identifies security defect patterns using static analysis techniques.

### 选择题 5-3

问题：在单元测试中，driver 的作用是？
Question: In unit testing, what is the role of a driver?

选项：

- A. 模拟被测模块调用的下层模块
- B. 模拟被测模块的上级调用者
- C. 替代测试报告
- D. 自动生成生产数据库

答案：==B==。
Answer: ==B==.

解析：Driver 调用被测单元并传入测试数据；stub 模拟下层被调用模块。
Explanation: A driver calls the unit under test with test data; a stub simulates lower-level modules.

### 选择题 5-4

问题：Mock 和 Stub 的区别更准确的是？
Question: What is a more accurate difference between mock and stub?

选项：

- A. Stub 主要提供预设返回；Mock 还能验证交互是否发生
- B. Mock 只能用于性能测试
- C. Stub 一定是生产代码
- D. 二者完全相同

答案：==A==。
Answer: ==A==.

解析：Mock 记录调用并检查交互；Stub 更偏固定返回值。
Explanation: A mock records calls and verifies interactions; a stub mainly returns predefined values.

### 选择题 5-5

问题：Big-bang integration / 大棒集成的主要缺点是？
Question: What is the main disadvantage of big-bang integration?

选项：

- A. 一次性集成后问题多且难定位
- B. 永远不能发现接口问题
- C. 不需要任何测试环境
- D. 只能用于微服务

答案：==A==。
Answer: ==A==.

解析：大棒集成把多个模块一次性组合，缺陷定位成本高。
Explanation: Big-bang integration combines many modules at once, making defect localization difficult.

### 选择题 5-6

问题：消费者驱动契约测试 CDC 主要解决什么问题？
Question: What does consumer-driven contract testing mainly address?

选项：

- A. 微服务消费者和提供者之间的接口兼容性
- B. 单机 CPU 温度
- C. 页面颜色是否美观
- D. 编译器版本选择

答案：==A==。
Answer: ==A==.

解析：CDC 用消费者期望定义契约，帮助验证服务接口变更不会破坏调用方。
Explanation: CDC defines contracts from consumer expectations and verifies provider changes do not break consumers.

## 第6章：系统测试

### 选择题 6-1

问题：系统测试通常在什么之后进行？
Question: When is system testing usually performed?

选项：

- A. 完成集成测试后，在完整系统环境中进行
- B. 需求尚未确定前进行
- C. 只在单个函数内部进行
- D. 只在代码评审会议中进行

答案：==A==。
Answer: ==A==.

解析：系统测试验证完整系统在硬件、网络、支撑软件等环境中是否满足需求。
Explanation: System testing validates the complete system in its environment against requirements.

### 选择题 6-2

问题：系统功能测试主要依据什么判断是否通过？
Question: What is the main basis for judging system functional testing results?

选项：

- A. 需求规格说明书和用户业务场景
- B. 开发人员个人喜好
- C. 代码行数
- D. 服务器品牌

答案：==A==。
Answer: ==A==.

解析：系统功能测试关注完整业务流程是否符合需求。
Explanation: System functional testing checks whether complete business flows satisfy requirements.

### 选择题 6-3

问题：RESTful 接口的典型特点是？
Question: What is a typical feature of RESTful APIs?

选项：

- A. 用 URI 表示资源，用 HTTP 方法表示操作
- B. 必须只使用 SOAP 消息
- C. 服务端必须保存每个客户端会话状态
- D. URL 中必须使用动词

答案：==A==。
Answer: ==A==.

解析：REST 倾向于名词化资源 URI，HTTP GET/POST/PUT/DELETE 表示操作，并强调无状态。
Explanation: REST uses resource URIs, HTTP methods for operations, and stateless communication.

### 选择题 6-4

问题：下面哪个工具主要用于 Web UI 自动化测试？
Question: Which tool is mainly used for Web UI automation testing?

选项：

- A. Selenium
- B. JMeter
- C. PMD
- D. SonarLint

答案：==A==。
Answer: ==A==.

解析：Selenium 常用于浏览器 UI 自动化；JMeter 更常用于性能测试。
Explanation: Selenium is commonly used for browser UI automation; JMeter is commonly used for performance testing.

### 选择题 6-5

问题：回归测试的目标是？
Question: What is the goal of regression testing?

选项：

- A. 修改后确认原有功能没有被破坏
- B. 只测试新功能，不看旧功能
- C. 只统计代码注释
- D. 替代需求分析

答案：==A==。
Answer: ==A==.

解析：回归缺陷是原本正常的功能因改动被破坏。
Explanation: A regression defect is a previously working feature broken by a change.

### 选择题 6-6

问题：精准测试选择回归用例的关键依据是？
Question: What is the key basis for selecting regression cases in precision testing?

选项：

- A. 代码变更与测试用例之间的映射关系
- B. 测试人员当天心情
- C. 所有用例随机抽 1 个
- D. 只运行耗时最长的用例

答案：==A==。
Answer: ==A==.

解析：精准测试通过代码差异、影响分析和用例映射选择受影响测试。
Explanation: Precision testing uses code differences, impact analysis, and test mappings to select affected tests.

## 第7章：专项测试

### 选择题 7-1

问题：性能测试的核心对象通常包括哪些指标？
Question: Which metrics are commonly central in performance testing?

选项：

- A. 响应时间、吞吐量、TPS、资源利用率
- B. 字体大小、页面配色、图标风格
- C. 代码注释数量
- D. 项目经理姓名

答案：==A==。
Answer: ==A==.

解析：性能测试通过工具模拟负载并监控关键性能指标。
Explanation: Performance testing simulates load and monitors key performance metrics.

### 选择题 7-2

问题：Soak test / 浸泡测试主要用于发现什么？
Question: What does a soak test mainly try to reveal?

选项：

- A. 长时间运行后的内存泄漏、资源泄漏和稳定性问题
- B. 需求文档错别字
- C. UI 按钮颜色偏差
- D. 单元测试命名规范

答案：==A==。
Answer: ==A==.

解析：Soak test 强调长时间运行，不只是短时高并发。
Explanation: A soak test emphasizes long-duration execution, not just short high concurrency.

### 选择题 7-3

问题：安全测试中的 CIA 指什么？
Question: What does CIA mean in security testing?

选项：

- A. Confidentiality, Integrity, Availability
- B. Code, Interface, Algorithm
- C. Cost, Investment, Asset
- D. Create, Inspect, Accept

答案：==A==。
Answer: ==A==.

解析：CIA 是保密性、完整性、可用性，是安全性的核心目标。
Explanation: CIA stands for confidentiality, integrity, and availability, the core goals of security.

### 选择题 7-4

问题：Fuzz testing 的基本思想是？
Question: What is the basic idea of fuzz testing?

选项：

- A. 输入随机或变异数据，寻找崩溃、异常或安全漏洞
- B. 手工检查代码缩进
- C. 只验证正常业务流程
- D. 比较两个页面哪个更美观

答案：==A==。
Answer: ==A==.

解析：Fuzz 常从攻击者和异常输入角度暴露健壮性和安全问题。
Explanation: Fuzz testing exposes robustness and security problems through abnormal or mutated inputs.

### 选择题 7-5

问题：向后兼容 backward compatibility 的含义是？
Question: What does backward compatibility mean?

选项：

- A. 新版本可以使用旧版本的数据或接口
- B. 旧版本必须支持未来所有功能
- C. 系统只能向后运行，不能升级
- D. 用户不能导入旧数据

答案：==A==。
Answer: ==A==.

解析：向后兼容关注新版本对旧数据、旧接口、旧配置的支持。
Explanation: Backward compatibility means a new version supports old data, interfaces, or configurations.

### 选择题 7-6

问题：A/B 测试为什么适合用户体验优化？
Question: Why is A/B testing suitable for user-experience optimization?

选项：

- A. 它通过真实用户分流和数据比较减少主观判断
- B. 它完全不需要统计数据
- C. 它只能用于安全漏洞扫描
- D. 它只适合编译器测试

答案：==A==。
Answer: ==A==.

解析：A/B 测试把用户分流到不同版本，用真实行为数据比较方案。
Explanation: A/B testing splits real users into variants and compares them using behavior data.

## 最后速刷答案表

| 章节 | 答案 |
| --- | --- |
| 第1章 | 1-B, 2-B, 3-B, 4-A, 5-B, 6-B |
| 第2章 | 1-B, 2-A, 3-B, 4-A, 5-C, 6-B |
| 第3章 | 1-A, 2-C, 3-A, 4-C, 5-A, 6-B |
| 第4章 | 1-A, 2-A, 3-A, 4-A, 5-A, 6-A |
| 第5章 | 1-C, 2-A, 3-B, 4-A, 5-A, 6-A |
| 第6章 | 1-A, 2-A, 3-A, 4-A, 5-A, 6-A |
| 第7章 | 1-A, 2-A, 3-A, 4-A, 5-A, 6-A |
