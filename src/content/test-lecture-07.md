# 第7章：专项测试

本章覆盖非功能和专项方向：==性能测试、安全性测试、兼容性测试、可靠性测试、易用性测试/A-B 测试==。复习时不要死背工具截图，而要抓住定义、目标、类型、指标、方法和流程。
This chapter covers non-functional and special testing: ==performance, security, compatibility, reliability, and usability/A-B testing==.

## 1. 本章考试地图

| 专项 | 必背内容 | English |
| --- | --- | --- |
| 性能测试 | 目标、类型、负载、虚拟用户、指标、JMeter | performance testing |
| 安全性测试 | CIA、安全功能 vs 漏洞测试、STRIDE、Fuzz、渗透测试、Web 漏洞 | security testing |
| 兼容性测试 | 硬件、软件、系统、数据兼容；向前/向后兼容 | compatibility testing |
| 可靠性测试 | 可靠性、DDP、容错、故障注入、全链路压测、混沌工程 | reliability testing |
| 易用性测试 | 用户体验方法、GSM/PULSE/HEART、A/B 测试 | usability testing |

## 2. 性能测试

==Performance testing / 性能测试== 是为了发现系统性能问题或获取性能指标而进行的测试。通常在真实或近似真实环境、特定负载条件下，用工具模拟系统运行和用户操作，同时监控性能指标并分析结果。

目标：

- 获取系统性能指标。
- 验证是否达到用户提出的性能需求。
- 发现性能瓶颈。
- 为性能调优提供依据。

性能测试一般只能通过工具有效完成，且结果分析需要较强技术能力。

### 2.1 性能问题表现和内因

| 外部表现 | 可能内因 |
| --- | --- |
| 启动慢、页面打开慢 | 资源瓶颈、数据库慢查询、缓存失效 |
| 响应时间越来越长 | 资源泄漏、队列堆积 |
| 高峰期失败率升高 | 线程/连接池不足、限流配置不合理 |
| 系统崩溃 | CPU/内存/连接耗尽 |
| 长时间运行后变慢 | 内存泄漏、GC 压力、句柄泄漏 |

### 2.2 基本概念

| 概念 | 说明 |
| --- | --- |
| Workload / 负载 | 系统承受的请求、用户、数据量和操作强度 |
| Virtual user / 虚拟用户 | 工具模拟的用户 |
| Simultaneous connections / 并发连接数 | 同时保持连接的数量 |
| Response time / 响应时间 | 请求发出到收到响应的时间 |
| Throughput / 吞吐量 | 单位时间处理请求或事务数量 |
| TPS | 每秒事务数 |
| Resource utilization | CPU、内存、磁盘、网络等资源利用率 |
| Baseline | 标准配置下的性能基线 |

### 2.3 性能测试类型

| 类型 | 目标 | English |
| --- | --- | --- |
| 性能基准测试 | 在标准配置下获得指标，作为未来比较基线 | benchmark test |
| 性能验证测试 | 验证是否满足已定义性能指标 | performance verification |
| 性能规划测试 | 比较不同配置，决定部署软硬件选型 | capacity/planning test |
| 容量测试 | 找系统最大容量或容量变化趋势 | capacity test |
| 压力测试 | 高负载、异常负载或长时间运行，促使问题暴露 | stress test |
| 渗入/浸泡测试 | 长时间运行，发现内存泄漏、GC、稳定性问题 | soak test |
| 峰谷测试 | 高低负载突变，发现恢复、队列和稳定性问题 | peak-rest test |

### 2.4 性能需求可测试性

不好的性能需求：

- “系统要很快。”
- “能处理大量用户。”

好的性能需求：

- “登录接口 P95 响应时间不超过 500ms。”
- “系统每秒平均处理 130 笔交易。”
- “CPU 使用率在目标负载下不超过 70%。”
- “数据通信延时小于 80ms。”

### 2.5 性能测试层次

| 层次 | 关注 |
| --- | --- |
| Web/App 客户端 | 页面渲染、客户端资源、帧率 |
| 应用服务器 | 线程、连接池、业务逻辑、缓存 |
| 数据库访问层 | SQL、ORM、事务、连接 |
| 数据库 | 索引、锁、IO、查询计划 |
| 网络 | 带宽、延迟、丢包 |

### 2.6 全生命周期性能测试

性能不是上线前一次压测解决的：

- 需求阶段明确性能指标。
- 架构阶段进行性能设计和评审。
- 编码阶段关注性能问题和代码评审。
- 单元层做关键代码性能测试。
- 系统层做性能测试和调优。
- 上线后监控和容量管理。

### 2.7 JMeter

JMeter 常见组件：

| 组件 | 作用 |
| --- | --- |
| Test Plan | 测试计划 |
| Thread Group | 线程组，模拟用户和负载 |
| Sampler | 请求取样器，如 HTTP 请求 |
| Controller | 控制请求执行逻辑 |
| Listener | 查看结果、响应时间、吞吐量 |
| Assertion | 断言响应是否正确 |

性能测试报告应包含：

- 被测系统和版本。
- 测试环境。
- 场景设计。
- 负载模型。
- 执行过程。
- 指标结果。
- 瓶颈分析。
- 调优建议。

## 3. 安全性测试

### 3.1 安全目标 CIA

==Security / 安全性== 常围绕 CIA 三元组：

| 目标 | 中文 | 说明 |
| --- | --- | --- |
| Confidentiality | 保密性 | 信息只被授权者访问 |
| Integrity | 完整性 | 信息和处理过程不被非法篡改 |
| Availability | 可用性 | 授权用户需要时可访问 |

扩展目标：

- Authenticity / 真实性。
- Non-repudiation / 不可否认性。
- Accountability / 可审查性。

### 3.2 漏洞与威胁

==Vulnerability / 漏洞== 是系统中可能被威胁利用并造成损害的薄弱环节。

漏洞来源：

- 故意恶意：木马、陷门、逻辑炸弹。
- 非恶意：隐秘通道、设计疏漏、配置错误。
- 实现错误：边界检查不足、输入验证缺失。

### 3.3 STRIDE 威胁模型

课件写作 STRIED，本质对应常见 STRIDE 威胁分类：

| 字母 | 威胁 | 中文 |
| --- | --- | --- |
| S | Spoofing | 假冒身份 |
| T | Tampering | 篡改 |
| R | Repudiation | 抵赖 |
| I | Information disclosure | 信息泄露 |
| D | Denial of Service | 拒绝服务 |
| E | Elevation of privilege | 权限提升 |

### 3.4 安全性测试范围

| 类型 | 关注 | 例子 |
| --- | --- | --- |
| Security Functional Testing / 安全功能测试 | 安全机制是否按需求工作 | 身份认证、授权、访问控制、审计、隐私保护 |
| Security Vulnerability Testing / 安全漏洞测试 | 从攻击者角度发现可利用漏洞 | 注入、XSS、CSRF、越权、弱会话 |

功能性测试 vs 安全性测试：

| 功能性测试 | 安全性测试 |
| --- | --- |
| 验证软件做它应该做的事 | 验证软件不做它不应该做的事 |
| 关注正确输出 | 关注危险输入、滥用和攻击 |
| 找 bug | 找安全风险和漏洞 |

### 3.5 安全性测试任务

- 检验需求中防止危险状态措施是否有效。
- 测试提高安全性的结构、算法、容错、冗余、中断处理。
- 在异常条件下测试系统不会进入不安全状态。
- 对安全关键单元和组件加强测试。

### 3.6 安全性测试方法

| 方法 | 说明 |
| --- | --- |
| 静态测试 | 工具扫描代码、人工架构/代码评审 |
| 专家安全风险评估 | 识别高风险设计和资产 |
| 安全功能测试 | 测认证、授权、访问控制、审计等 |
| 模糊测试 Fuzz testing | 向程序输入随机或变异数据，观察崩溃或异常 |
| 渗透测试 Penetration testing | 模拟攻击者寻找系统薄弱环节 |
| 基于风险的安全测试 | 基于攻击模式、滥用案例和风险分析设计测试 |

### 3.7 Fuzz Testing

==Fuzz testing / 模糊测试== 是把随机或变异数据作为输入，如果程序崩溃或异常退出，就定位缺陷。

类型：

| 类型 | 说明 |
| --- | --- |
| 黑盒随机模糊 | 对正确格式输入随机变异 |
| 基于语法的模糊 | 根据输入语法生成或变异复杂格式 |
| 白盒模糊 | 动态执行程序，收集约束，取反约束生成新路径输入 |

AFL 思想：

- 对程序插桩，记录执行状态。
- 对输入文件进行变异。
- 如果新输入触发新的状态转换，就加入队列。
- 反复探索更多路径。

### 3.8 Web 安全测试

常见 Web 漏洞：

| 漏洞 | 含义 | 测试思路 |
| --- | --- | --- |
| Injection / 注入 | 构造输入改变命令或 SQL 语义 | 输入 `' OR 1=1 --` 等 |
| XSS | 注入脚本到其他用户页面 | 输入 `<script>` 或事件属性 |
| CSRF | 利用用户登录态伪造请求 | 检查 token、SameSite、Referer |
| Session hijacking | 窃取或伪造 Cookie/Session | 检查会话有效期和传输安全 |
| Broken authentication | 弱认证、明文密码、重置逻辑漏洞 | 检查密码策略、找回密码 |
| Direct object reference | 直接改 URL/ID 访问他人对象 | 横向越权测试 |
| Missing function-level access control | 未限制功能 URL | 直接访问 admin URL |
| Unvalidated redirect | 未验证跳转 URL | 构造钓鱼跳转链接 |

### 3.9 安全测试工具

| 类型 | 例子/说明 |
| --- | --- |
| 静态分析 | CppCheck, FindBugs, C++Test/Jtest |
| Web 渗透 | Burp Suite, W3af |
| 端口扫描 | Nmap |
| Fuzzer | AFL |

## 4. 兼容性测试

==Compatibility testing / 兼容性测试== 验证软件在不同硬件、软件、系统、数据和环境组合下能否正常工作。

### 4.1 类型

| 类型 | 例子 |
| --- | --- |
| 软件与硬件兼容 | 不同 CPU、显卡、手机型号、外设 |
| 软件系统之间兼容 | 应用、中间件、OS、数据库版本 |
| 客户端兼容 | 浏览器、移动端系统版本 |
| 数据兼容 | 文件格式、旧版本数据、导入导出 |
| 环境组合兼容 | OS + 浏览器 + 分辨率 + 设备组合 |

课件强调：==数据兼容更重要，因为数据更有价值==。
Data compatibility is especially important because data is valuable.

### 4.2 向后兼容和向前兼容

| 概念 | 定义 | 例子 |
| --- | --- | --- |
| Backward compatibility / 向后兼容 | 新版本可以使用旧版本数据 | 新版 Word 打开旧版 doc |
| Forward compatibility / 向前兼容 | 旧版本可在一定程度使用未来版本数据 | 旧客户端能忽略新版新增字段 |

### 4.3 兼容性测试设计

由于组合爆炸，常用：

- Pairwise 组合测试。
- 正交试验法。
- 市场占有率数据。
- 风险优先级。

测试矩阵示例：

| OS | Browser | Device | Network | Priority |
| --- | --- | --- | --- | --- |
| Windows 11 | Chrome | PC | Wi-Fi | High |
| macOS | Safari | Mac | Wi-Fi | High |
| Android | Chrome | Phone | 5G | High |
| iOS | Safari | iPhone | 4G | High |

## 5. 可靠性测试

==Reliability / 可靠性== 是软件在规定时间和条件下维持性能水平的能力。

可从三个子特性理解：

| 子特性 | 含义 |
| --- | --- |
| Maturity / 成熟性 | 缺陷少、错误发现率低 |
| Fault tolerance / 容错性 | 故障发生时仍能维持服务或安全降级 |
| Recoverability / 易恢复性 | 故障后能恢复数据和服务 |

### 5.1 DDP

课件给出：

```text
DDP = 测试发现的错误数量 / 已知的全部错误数量
```

这里课件说 DDP 越小软件越成熟，但注意在一些资料中 DDP 也可能被用作 defect detection percentage，解释会因上下文不同。考试按课件记忆：==DDP 越小，软件越成熟==。

### 5.2 容错测试

==Fault tolerance testing / 容错测试== 是对抗性的测试过程，通过各种手段使软件进入故障或异常条件，观察其是否保持安全、稳定和可恢复。

故障例子：

- 设备 I/O 故障。
- 数据库连接断开。
- 网络延迟或丢包。
- 无效指针或关键字。
- 服务实例崩溃。

## 6. 全链路压测

全链路压测可看作性能测试的右移，用真实或近真实链路、真实业务场景和生产级容量目标测试系统稳定性。

核心工作：

1. 界定被压系统范围。
2. 设计场景、流量和方案。
3. 评审设计。
4. 构造基础数据。
5. 脱敏、筛选、隔离测试数据。
6. 发压并监控全链路。
7. 分析结果和瓶颈。

Takin 特点：

- 基于 Java 的生产全链路压测系统。
- 业务代码 0 侵入。
- 数据安全隔离。
- 可在生产环境对写接口做安全性能压测。
- 快速定位链路性能瓶颈。

## 7. 混沌工程

==Chaos Engineering / 混沌工程== 是分布式系统中的实验学科，通过在系统中引入真实事件变量来提高系统弹性和抵御突发事件的能力。

可以理解为故障注入测试的右移和工程化升级。

### 7.1 原则

课件列出的核心原则：

- 建立围绕稳定状态行为的假说。
- 引入反映真实事件的变量，如服务器崩溃、硬盘故障、网络断开。
- 多样化真实世界事件。
- 在生产环境中运行实验。
- 自动化并持续运行实验。
- 最小化爆炸半径。

### 7.2 关键工作

| 工作 | 说明 |
| --- | --- |
| 实验设计 | 明确假设、场景、范围、指标 |
| 故障画像 | 抽象历史故障和潜在故障 |
| 上下游依赖梳理 | 明确链路和影响范围 |
| 链路受力分析 | 评估故障下系统压力 |
| 观测性 | 日志、指标、链路追踪、告警 |
| 爆炸半径控制 | 从小范围开始，逐步扩大 |

### 7.3 局限性

- 人为设计的故障模式可能只覆盖过去发生过的问题。
- 不能修复糟糕架构本身。
- 某一方面优化可能增加其他脆弱性。
- 实验发现问题后，修复成本可能很高。

### 7.4 工具

| 工具 | 说明 |
| --- | --- |
| Chaos Toolkit | 开源混沌工程工具 |
| Litmus Chaos | 云原生混沌工程 |
| Chaos Mesh | Kubernetes 混沌工程平台 |
| ChaosBlade | 阿里开源故障注入工具 |

Chaos Mesh 常见故障类型：

- PodChaos。
- NetworkChaos。
- IOChaos。
- TimeChaos。
- StressChaos。
- DNSChaos。

## 8. 易用性测试与 A/B 测试

### 8.1 用户体验测试方法

| 方法 | 说明 |
| --- | --- |
| 探索式测试 | 发现产品应包含哪些内容和功能，评估早期原型 |
| 评估性测试 | 发布前后评估新版本用户体验 |
| 比较性测试 | 比较多个产品或设计方案优劣 |

### 8.2 UX 指标模型

| 模型 | 内容 |
| --- | --- |
| GSM | Goals -> Signals -> Metrics，从目标到信号再到指标 |
| PULSE | Page view, Uptime, Latency, Seven-day active user, Earning |
| HEART | Happiness, Engagement, Adoption, Retention, Task success |

### 8.3 A/B 测试

==A/B Testing / A/B 测试== 是把用户分成不同组，同时在线试验产品不同版本，根据真实用户反馈数据判断哪个方案更好。

特点：

| 特点 | 含义 |
| --- | --- |
| 先验性 | 小流量验证，再逐步推广 |
| 并行性 | 多版本同时运行，环境一致 |
| 科学性 | 基于统计数据决策，减少主观判断 |

适用场景：

- 灰度发布。
- 技术/算法迭代。
- 界面模块、样式、交互优化。
- 推广海报、落地页、文案优化。
- 运营策略和沟通话术优化。

### 8.4 桶、层、流量

| 概念 | 含义 |
| --- | --- |
| 场景 | 对应业务场景，场景之间独立 |
| 桶 | 圈定特定用户流量，不同桶互斥 |
| 层 | 一类实验集合，同层实验流量互斥，不同层实验流量正交 |
| 正交 | 用户可同时进入不同层实验，互不干扰 |
| 互斥 | 用户只能进入同层某一个实验 |

MurmurHash 用于分流：

- 快。
- 对相似字符串分布变化剧烈，便于均匀分桶。

### 8.5 A/B 测试流程

```mermaid
flowchart LR
  A["Idea<br/>实验想法"] --> B["Priority<br/>优先级评估"]
  B --> C["Design & Develop<br/>设计开发"]
  C --> D["Traffic split<br/>流量分发"]
  D --> E["Data collection<br/>数据采集"]
  E --> F["Analysis<br/>分析"]
  F --> G["Decision<br/>决策"]
```

平台能力：

- 实验元数据管理。
- 配置发布。
- 接入示例和测试支持。
- 实时报表和离线报表。
- 异常监控和告警。
- 白名单。
- 多环境支持。

## 9. 本章速记

| 高频词 | 一句话 |
| --- | --- |
| 性能测试 | 工具模拟负载，监控并分析性能指标 |
| 基准测试 | 建立 baseline |
| 压力测试 | 高负载/异常负载逼出瓶颈 |
| Soak test | 长时间运行找泄漏和稳定性问题 |
| CIA | 保密性、完整性、可用性 |
| 安全功能测试 | 验证认证、授权、审计等机制 |
| 安全漏洞测试 | 从攻击者角度找可利用弱点 |
| Fuzz | 随机/变异输入找崩溃异常 |
| 向后兼容 | 新版本用旧数据 |
| 向前兼容 | 旧版本容忍未来数据 |
| 可靠性 | 规定时间和条件下维持性能 |
| 混沌工程 | 通过受控故障实验提升弹性 |
| A/B 测试 | 分流真实用户，用数据比较方案 |

## 10. 自测

### Q1. 性能测试、压力测试、容量测试有什么区别？

答案 / Answer:

中文：性能测试是总称，用于发现性能问题或获取性能指标；压力测试在高负载、异常负载或长时间运行下加速暴露瓶颈和不稳定问题；容量测试关注系统在给定配置下能承载多少用户、请求或数据量。

English: Performance testing is the general activity of obtaining performance metrics or finding performance issues. Stress testing uses high, abnormal, or long-running load to expose bottlenecks and instability. Capacity testing determines how much load, users, requests, or data the system can handle under a given configuration.

### Q2. 安全功能测试和安全漏洞测试有什么区别？

答案 / Answer:

中文：安全功能测试验证安全机制是否按需求工作，例如身份认证、授权、访问控制和审计；安全漏洞测试从攻击者角度寻找系统设计、实现、配置和管理中可被利用的弱点。

English: Security functional testing verifies that security mechanisms such as authentication, authorization, access control, and audit work as required. Security vulnerability testing looks for exploitable weaknesses in design, implementation, configuration, or management from an attacker's perspective.

### Q3. 什么是向后兼容和向前兼容？

答案 / Answer:

中文：向后兼容是新版本可以使用旧版本的数据或接口；向前兼容是旧版本可以在一定程度上识别或容忍未来版本的数据，例如忽略新增字段而不崩溃。

English: Backward compatibility means a new version can use data or interfaces from older versions. Forward compatibility means an older version can recognize or tolerate data from future versions, for example by ignoring new fields without crashing.

### Q4. 混沌工程的核心思想是什么？

答案 / Answer:

中文：混沌工程通过在系统中有控制地注入真实世界故障，验证系统稳定状态假设，观察监控和恢复能力，从而提升分布式系统弹性。它强调实验设计、故障画像、依赖梳理、可观察性和爆炸半径控制。

English: Chaos engineering injects realistic failures in a controlled way to test steady-state hypotheses, observe monitoring and recovery behavior, and improve resilience of distributed systems. It emphasizes experiment design, fault modeling, dependency analysis, observability, and blast-radius control.

### Q5. A/B 测试为什么是易用性/用户体验测试的一种科学方法？

答案 / Answer:

中文：A/B 测试把用户分流到不同版本，在相同时间和环境中收集真实行为数据，用统计结果比较方案优劣，减少主观经验判断，因此是一种数据驱动的用户体验优化方法。

English: A/B testing splits users into different versions, collects real behavior data under comparable conditions, and uses statistical evidence to compare alternatives. It reduces subjective judgment and supports data-driven user-experience improvement.
