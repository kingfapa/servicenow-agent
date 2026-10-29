# Zero Touch IT Support - AI-Assisted to Autonomous

Source: https://mynow.servicenow.com/now/best-practices/assets/zero-touch-it-support-aiassisted-to-autonomous

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `967cd9165f52e91be99e2fec106d6f39188926c2ebd06b8ae5e720a7352ada0f`

## Page 1

AI-Assisted to

Autonomous: The Zero

Touch IT Support

Journey

A Strategic Primer for Now Assist for ITSM

ServiceNow Autonomous IT

Zurich Release

March 2026

## Page 2

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

2

Table of contents

About this document   ................................................................................................................................................................... 3

Executive summary ........................................................................................................................................................................ 3

1. The Framework: Insight   →   Automation   →   Autonomy   ........................................................................................... 5

2. Who AI Serves: Requestors and fulfillers   ........................................................................................................................ 5

3. Phase 1: Insight — What must be in place first   .......................................................................................................... 6

What phase 1 delivers?   ................................................................................................................................................... 6

The Phase 1 Exit gate   ....................................................................................................................................................... 7

4. Phase 2: Automate — AI that recommends to AI that acts   ............................................................................. 8

Value point 3 — Core ITSM workflows \[Enhanced\]   ......................................................................................... 8

Value point 4 — AI &amp; Automation ............................................................................................................................. 8

5. Phase 2 capability reference   ............................................................................................................................................. 9

Value Point 3 — Core ITSM workflows \[enhanced\]: Now Assist skills   ...................................................... 9

Value point 4 — AI &amp; Automation ............................................................................................................................ 11

6. Measuring success   ...................................................................................................................................................................   13

Fulfiller-side metrics (Value point 3 &amp; Value point 4 Agentic workflows) ........................................... 13

Conversational self-service metrics (Value point 4 requestor channel) ............................................ 14

7. Organizational readiness: The human side of AI adoption ...............................................................................   15

Fulfiller-side risks   .................................................................................................................................................................. 15

Requestor-side risks   .......................................................................................................................................................... 15

8. What we’ve learned ...............................................................................................................................................................   16

9. Phase 3: Autonomy — Where is this building to?   .................................................................................................... 17

Value point 3 — Core workflows (Autonomous) ..............................................................................................   17

Value point 4 — AI agents &amp; skills (Full autonomy)   .........................................................................................   17

## Page 3

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

3

About this document

This document is a strategic primer for Now Assist for ITSM — the AI capability set that sits within Value

Points 3 and 4 of Phase 2 of the Zero Touch IT Support journey.

It does not cover Value Points 1 and 2 — the Platform &amp; Data Foundation (Knowledge Graph, CMDB

health, data quality) and Workspace &amp; User Experience (omni-channel, Agent Experience). Those are

Phase 2 foundations that support the AI capabilities described in this document.

For more information about the value journeys, refer to Autonomous IT: Zero Touch Support and Zero

Service Outage Journey Maps.

This primer orients you on the framework, the capability landscape, and the key decisions that

determine whether Phase 2 succeeds. It is not an implementation guide. Step-by-step configuration

guidance lives in the companion Zero Touch IT Support Best Practice Guides, which will follow:

•   Fulfiller Guide — Now Assist skills and agentic workflows for Incident Management

•   Requestor Guide: Virtual Agent — Conversational self-service with Now Assist Virtual Agent

Executive summary

IT organizations are under pressure to do more with less. Ticket volumes continue to climb — 34% of

support teams report year-on-year increases. ³   Capacity isn't keeping pace: IT leaders rank the talent

shortage as the single most likely factor to disrupt their business in the next 12 months. ⁴   The answer

isn't more headcount — it's a structured journey toward AI-driven service management.

Our Autonomous IT value journeys map this across three phases:   Insight ,   Automation ,

and   Autonomy . Phase 2: Automation encompasses a broad range of capabilities — this guide focuses

specifically on the   Now Assist for ITSM   and AI capability within Phase 2, covering how generative AI

skills and agentic workflows transform how work gets done for both fulfillers and requestors. Detailed

implementation guidance is covered in the companion Zero Touch IT Support Best Practice Guides.

Key outcome targets across the journey: ¹

•   Phase 1 — Insight: 24% reduction in MTTR, 28% reduction in incident volume

•   Phase 2 — Automation: additional 24% MTTR reduction, 35% fewer incidents requiring human input

•   Phase 3 — Autonomy: further 35% reduction in human-required incidents, 10–17% decrease in

hardware and software spend

## Page 4

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

4

Figure 1 Autonomous IT: Zero Touch Support

## Page 5

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

5

1. The Framework: Insight   →   Automation   →   Autonomy

The Autonomous IT journey is a   sequenced program, not a feature checklist . Each phase builds the

data quality, process discipline, and organizational trust that the next phase depends on.

Phase   Focus   Mindset

Phase 1: Insight   Activate core ITSM workflows, establish data

visibility, and understand your environment

"We can see and measure."

Phase 2: Automation   Layer AI onto workflows, reduce toil, AI assists

and acts on behalf of humans

"AI helps us work faster."

Phase 3: Autonomy   AI acts independently with human oversight at

the exception level, self-healing

"AI works, humans oversee."

Skip Insight, and Automation struggles with bad data. Rush to Autonomy without mature Automation,

and you're trusting AI that hasn't earned it. Garbage in, garbage out.

This guide focuses on Phase 2, with Phase 3 summarized in Section 9 as the destination Phase 2 is

building toward.

2. Who AI Serves: Requestors and fulfillers

Now Assist for ITSM serves two distinct audiences with fundamentally different needs, data

requirements, and success measures. Understanding this split is essential before any implementation

planning begins.

Requestors are the employees and end users who need help. They submit tickets, ask questions, and

try to resolve issues through self-service. AI serving requestors is about speed and self-resolution —

giving employees the ability to resolve issues themselves, in minutes, without waiting for an agent.

Success from the requester's perspective is measured by resolution speed, self-service adoption, and

satisfaction. Requestor-facing capabilities centre on conversational access: Virtual Agent, AI Search,

and conversational catalog ordering.

Fulfillers are the IT agents, change managers, and knowledge workers who resolve issues. AI serving

fulfillers is about productivity — reducing time spent on documentation, triage, and information

gathering so they can focus on resolution. Success is measured in several ways, including MTTR,

agent handling time, knowledge quality, ticket deflection from self-resolution, agent experience and

## Page 6

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

6

satisfaction, and cost per resolution. Fulfiller-facing capabilities center on in-workflow assistance:

summarization, resolution notes, suggested steps, and agentic triage.

This distinction drives different preparation work, different rollout sequencing, and different success

metrics. Before activation, complete the appropriate data readiness assessment for the capabilities

you are planning to deploy:

•   Now Assist Data Readiness Checklist — Requestor : Knowledge Base quality, Service Catalog

conversational readiness, AI Search configuration, Virtual Agent topics

•   Now Assist Data Readiness Checklist — Fulfiller : Incident and case record quality, custom field

handling, state field configurations, resolution workflow integrity, change request data

3. Phase 1: Insight — What must be in place first

Phase 2 AI capabilities are only as effective as the foundations built in Phase 1. AI summarization works

best with rich, consistent work notes. AI triage relies on clean category and assignment data.

Knowledge generation depends on well-structured resolution notes. Most organizations carry technical

debt in these areas. Phase 1 is where you identify the gaps, clean the data, and build the process

discipline that gives AI something reliable to work with.

What phase 1 delivers?

•   Incident, Problem, Change, Request, and Knowledge Management — core workflows live and

generate structured, consistent data

•   Employee Center / Employee Portal — a single front door for all IT requests, ensuring consistent

intake data quality

•   CMDB with endpoint integrations (Intune, SCCM, or equivalent) — authoritative end-user asset and

configuration data

•   Reporting and Dashboards — visibility into top support drivers, SLA performance, and volume

baselines

## Page 7

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

7

The Phase 1 Exit gate

Before proceeding to Phase 2, you should be able to answer the following from your ServiceNow data

with confidence:

Insight question   Why it matters for phase 2

What are my top 10 incident categories by

volume?

Prioritizes which AI capabilities to activate first

Which requests are repetitive and high-volume?   Identifies candidates for Virtual Agent deflection

Where are my knowledge gaps?   Drives KB content work before AI Search can be effective

Which groups handle the highest volumes?   Focuses on automation where the productivity gain is

highest

Is my CMDB healthy enough for automation?   AI triage accuracy depends directly on CMDB quality

What incidents repeat for the same users or

assets?

Identifies proactive remediation candidates

If you cannot answer most of these with confidence, Phase 2 AI will underperform. The Data Readiness

Checklists referenced in Section 2 provide the step-by-step guidance to close these gaps.

## Page 8

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

8

4. Phase 2: Automate — AI that recommends to AI that acts

The Automate phase is not a single mode of working with AI — it is a progression. The two Value Points

in this phase represent a meaningful shift in what AI does and in the human's role.

In Value Point 3, AI plays the role of advisor — surfacing information, drafting content, flagging risks —

and the human acts on every output. In Value Point 4, AI becomes an actor — executing tasks end-to-

end while the human monitors the outcome.

Value point 3 — Core ITSM workflows \[Enhanced\]

Aviation equivalent: Avionics alert the pilot. AI flags and recommends — the human flies.

Single-step GenAI   skills   generate a summary, draft, or recommendation at a single point in the fulfiller's

workflow. The agent reads it and decides what to do. Nothing happens without a human acting on the

output.

Configured in the Now Assist Admin Console. Fastest path to measurable productivity improvement,

lowest implementation risk. The correct starting point for most organizations.

Value point 4 — AI &amp; Automation

Aviation equivalent: Autopilot engaged for cruise. AI executes — the human monitors.

AI operates autonomously without a human in the loop — and this applies across both sides of the

service experience.

For fulfillers, multi-step agentic workflows execute autonomously — triaging an incident, generating

change plans, and wrapping up resolutions. The fulfiller reviews the outcome, not each step.

Configured in AI Agent Studio.

For requestors, conversational self-service capabilities (Virtual Agent, Voice Agent, conversational

catalog) replace the traditional intake channel entirely — requestors resolve issues and submit

requests through natural-language conversations with AI assistants without involving a fulfiller at all.

Configured in Assistant Designer and the Now Assist setup pages.

Both share the same Value Point 4 principle: AI acts; humans monitor. The difference is in which side

of the service experience they serve. Activate skills first to help teams gain confidence in AI output

quality before progressing — most organizations find this takes at least 30 days, but the gate is quality,

not time.

Grouping   How AI operates   Configured in   Primary audience

Value Point 3 — Core ITSM

Workflows \[Enhanced\]

Recommends, summarizes, drafts   Now Assist

Admin Console

Fulfiller

Value Point 4 — AI &amp;

Automation

Acts autonomously — agentic

workflows for fulfillers, conversational

self-service for requestors

AI Agent Studio /

Assistant

Designer

Fulfiller &amp;

Requestor

## Page 9

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

9

5. Phase 2 capability reference

Capability currency:   The tables below reflect Zurich's release of general availability. Additional

capabilities are in active development per ServiceNow's release schedule. Always check for the latest:

•   Skills: Now Assist for ITSM Skills

•   Agentic Workflows: Agentic Workflows in ITSM

Value Point 3 — Core ITSM workflows \[enhanced\]: Now Assist skills

Single-step GenAI skills activated in the Now Assist Admin Console, primarily fulfiller-facing.

Skill   Description   Audience   Docs

Incident Summarization   Generates summaries to understand incident context in

seconds, not minutes quickly   Fulfiller   ↗

Incident Reassignment

Summarization

Summarizes all actions taken when handing off to another

agent or group, so the next agent starts with full context

Fulfiller   ↗

Chat Summarization   Summarizes Virtual Agent chat conversations for live agent

handoff, eliminating repeat questions to the user   Fulfiller   ↗

Sidebar Discussion

Summarization

Summarizes sidebar discussions between agents and

subject matter experts, capturing decisions that would

otherwise be lost in chat

Fulfiller   ↗

Change Request

Summarization

Captures key details and current status of a change request,

reducing CAB preparation time   Fulfiller   ↗

Change Request Risk

Explanation

Explains the risk assessment of a change request in plain

language so that approvers can make better and faster

decisions

Fulfiller   ↗

Resolution Notes

Generation

Generates resolution notes for an incident on demand,

ensuring consistent documentation without adding to agent

workload

Fulfiller   ↗

Knowledge Article

Generation

Creates knowledge articles from incident resolution data,

eliminating the hours spent manually authoring KB content

Fulfiller   ↗

Chat Reply

Recommendation

Generates context-based reply suggestions during live chat,

reducing agent response time and improving consistency   Fulfiller   ↗

Email Response

Generation

Generates email recommendations based on incident

context, reducing time spent drafting routine communications

Fulfiller   ↗

Major Incident Email

Recommendation

Drafts stakeholder communications during a major incident,

freeing the MIM team to focus on resolution instead of status

updates

Fulfiller   ↗

Incident Q&amp;A   Let's agents ask natural language questions about an incident

record, surfacing details without scrolling through work notes

Fulfiller   ↗

## Page 10

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

10

Sentiment Analysis

Surfaces requester sentiment and trend at each stage of the

incident lifecycle, helping agents prioritize and adjust tone

before escalation

Fulfiller   ↗

Suggested Steps

Generation

Generates resolution steps from clusters of similar closed

incidents, giving agents a proven starting point instead of

starting from scratch

Fulfiller   ↗

Activity Stream

Response Generation

Generates contextual responses directly in the incident

activity stream, keeping agents in flow without switching

context

Fulfiller   ↗

Release Notes

Generation

Generates structured release notes for a release record,

reducing manual effort and improving consistency across

releases

Fulfiller   ↗

Incident Deflection with

Self-Service

Surfaces' self-service solutions to deflect incidents before

they are created, reducing ticket volume at source   Requestor   ↗

Generative AI

Capabilities Request

Let's users request GenAI capabilities (summarize, resolution

notes, etc.) via the Now Assist panel, providing a single

access point for all AI-assisted actions

Both   ↗

## Page 11

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

11

Value point 4 — AI &amp; Automation

AI acts autonomously without a human in the loop. It has two expressions: ITSM Agentic

Workflows serving fulfillers, and Conversational Self-Service serving requestors.

ITSM Agentic Workflows are configured in AI Agent Studio, primarily for fulfiller-facing.

Agentic workflow   Description   Audience   Docs

Triage and categorize

ITSM incidents

Autonomously categorizes, prioritizes, routes, and links

incidents to related records, removing the manual triage

bottleneck that delays resolution

Fulfiller   ↗

Investigate and resolve

ITSM incidents

Investigates root cause and executes resolution steps end-

to-end, resolving routine incidents without agent involvement

Fulfiller   ↗

Wrap up and resolve the

incident

Completes incident closure, including resolution notes and

categorization, ensuring consistent documentation without

agents spending time on admin after resolution

Fulfiller   ↗

Generate post-incident

reviews

Generates structured post-incident review documentation,

reducing the hours spent compiling PIRs

Fulfiller   ↗

Generate change

request plans

Generates implementation, test, and back-out plans for

change requests, giving change managers a structured

starting point

Fulfiller   ↗

Explain SLA   Explains SLA status, breach risk, and commitments in plain

language, so agents and managers can act on SLA data

without interpreting complex rules

Fulfiller   ↗

Assess conflicts for a

change request

Identifies scheduling and resource conflicts for a change

request, catching collision risks before they reach the CAB

Fulfiller   ↗

Assess the quality of a

change request

Evaluates the completeness of change request

documentation before approval, reducing CAB rework and

rejection rates

Fulfiller   ↗

Schedule a change   Identifies optimal scheduling windows for a change request,

minimizing service impact and avoiding blackout conflicts

Fulfiller   ↗

Suggest configuration

items for a change

request

Identifies related CIs that should be included in the change

scope, reducing the risk of missed dependencies and

downstream incidents

Fulfiller   ↗

Create outages for a

change request

Automatically creates outage records linked to a change

request, so affected users can be notified, and SLA clocks

are managed effectively

Fulfiller   ↗

Create a standard

change template

proposal

Proposes new standard change templates based on

patterns in existing change data, surfacing repetitive normal

changes that should be candidates for pre-approval

Fulfiller   ↗

Create a standard

change request

Creates a standard change request from a template or

natural language input, removing friction for low-risk, routine

changes

Both   ↗

## Page 12

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

12

Manage Microsoft 365

group members

Manages M365 group membership as part of incident

resolution — fulfiller-initiated but executed on behalf of a

requestor automating access fulfillment

Both   ↗

Notify users with Twilio   Sends incident or outage notifications to affected users via

Twilio, keeping employees informed without agents manually

sending updates

Requestor   ↗

DEX issue diagnosis and

resolution

Autonomously diagnoses and remediates endpoint issues

without user or agent intervention, fixing problems before

employees notice them

Requestor   ↗

Integration dependencies: Several agentic workflows require external system connections that must

be in place before activation. Treat these as architectural prerequisites, not configuration steps.

•   Notify users with Twilio — requires a Twilio account and the Integration Hub Twilio spoke

•   Manage Microsoft 365 group members — requires the Integration Hub M365 spoke and

appropriate Microsoft Graph API permissions

•   DEX issue diagnosis and resolution — requires endpoint management integration (Intune, SCCM,

or equivalent) and the DEX agent deployed to managed devices

•   Create Standard Change Request (via natural language) — requires Virtual Agent to be configured

and active

•   All agentic workflows require Integration Hub to be licensed and active on the instance

Conversational self-service capabilities are configured in Assistant Designer and the Now Assist setup

pages. Now, Assist uses LLM-powered intent understanding to route conversations to the correct

resolution path without rigid NLU decision trees.

Capability   Description   Docs

Now Assist

Virtual Agent

Conversational chat assistants that deflect and resolve requests through natural

language across portal, Slack, Teams, and SMS — without agent involvement

↗

Now Assist Voice

Agents

Hands-free voice interaction that resolves requests through natural language   ↗

Governance is not optional: Two platform capabilities should be active before your first AI skill goes

live. Treat these as foundational prerequisites, not follow-on configuration.

•   Now Assist Guardian — enforces real-time guardrails on every AI interaction: offensive content

detection, prompt injection blocking, and sensitive topic filtering. Configure for every Now Assist

capability you deploy.

•   AI Control Tower — provides centralized visibility across all AI activity: compliance monitoring,

performance tracking, and drift detection. Without it, you're deploying AI you can't measure.

## Page 13

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

13

6. Measuring success

Knowing when Phase 2 is working and when it is ready to progress toward Phase 3 requires active

measurement from day one. Because Phase 2 serves two distinct audiences, metrics fall into two

groups, each with its own primary dashboards.

Fulfiller-side metrics (Value point 3 &amp; Value point 4 agentic workflows)

Metric   What it measures   Where to find it   Target

Skill acceptance rate   % of AI skill outputs accepted

by agents

Now Assist Admin   →

Performance   →   Skill

Performance

≥ 70% sustained

Incident

categorization

consistency

% of incidents with populated,

consistent category and

subcategory

Custom report on Incident

table

≥ 85%

Resolution notes

population rate

% of closed incidents with

resolution notes present

Custom report on Incident

table filtered on state

≥ 80%

Agentic workflow

performance

Volume and outcome of AI

agent executions

AI Control Tower   Baseline established;

error rate trending

downward

Mean Time to

Resolve (MTTR)

Average elapsed time from

incident creation to resolution

Report or Performance

Analytics indicator

Trending downward

month-on-month

## Page 14

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

14

Conversational self-service metrics (Value point 4 requestor channel)

Metric   What it measures   Where to find it   Target

VA Success (%)   % of conversations completed

without live agent transfer, with

positive or neutral feedback

Conversational

Analytics Dashboard

Trending upward —

baseline established

before Phase 3

Topic Flows

Completed (%)

% of topic conversations

completed at the final node

Conversational

Analytics Dashboard

Trending upward

month-on-month

Self-service

resolution rate

% of Now Assist queries resolved

without creating a ticket

Now Assist Admin   →

Performance   →   Self-

Service Performance

Trending upward

month-on-month

Search query

effectiveness

Volume of queries with vs. without

genius results; click-through on

AI-surfaced articles

AI Search   →   Search

Experience   →   Analytics

Queries without

results are trending

downward

Catalog

conversational

coverage

% of high-volume catalog items

enabled for conversational

ordering

Catalog Conversational

Coverage Dashboard

Top 20 catalog items

by volume enabled

and tested

For conversational self-service, allow time for requestors to discover and build habits around the new

channel — self-service adoption curves are typically slower than fulfiller-side tool adoption.

Note: Dashboards and metrics evolve with each platform release and store app update. The

dashboard names and navigation paths referenced above reflect available documentation at the time

of writing. Metrics marked as custom reports are not available out of the box and must be built using

Performance Analytics or standard reporting against the relevant tables.

## Page 15

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

15

7. Organizational readiness: The human side of AI adoption

Phase 2 implementations fail as often because of people as because of data. Research from Prosci

shows that projects with strong change management are up to seven times more successful than

those without it. ²   Because Phase 2 serves two distinct audiences, the OCM risks are different on each

side.

Fulfiller-side risks

Trust in AI outputs.   Teams that don't trust AI outputs will override them consistently, eliminating the

productivity gains and producing misleading acceptance-rate metrics. The fix is a controlled, persona-

by-persona rollout — prove the output quality with one team, then use that team as advocates before

scaling. Appointing   Now Assist Champions   from within fulfillment teams — people known for

mentoring peers — builds trust faster than any top-down mandate.

Management confidence.   Service desk managers need to understand what AI is and isn't doing

before they will accept AI-generated content in audit trails or performance reviews. Brief them before

go-live, show them the acceptance rate dashboard, and involve them in the quality review process

from the start.

Feedback loops.   Skills improve when teams flag poor outputs. Without a formal process for collecting

and acting on that feedback, skill quality degrades as workload patterns shift. Establish a monthly

review cadence for the first quarter, moving to quarterly thereafter.

Process discipline. Fulfillers don't just consume AI outputs—they produce the data AI depends on.

Consistent work notes, accurate categorization, and complete resolution notes are what make

summarization, triage, and knowledge generation work. If process discipline slips, AI quality follows.

Make the connection visible to agents: the quality of what AI gives you is directly tied to the quality of

what you give it.

Requestor-side risks

Awareness and discovery.   Requestors will not use a self-service channel they don't know exists or

don't trust. Simply activating Virtual Agent is not enough — employees need to be told it exists, shown

what it can do, and given a reason to try it before reaching for email or phone. A targeted internal

communications campaign at launch is not optional; it is the difference between a self-service channel

that gets used and one that sits idle.

Channel preference. Many employees have deeply ingrained habits for requesting IT support. Shifting

those habits takes time and repeated positive experiences. Start with high-volume, low-complexity use

## Page 16

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

16

cases — password resets, software requests, access provisioning — where Virtual Agent can reliably

deliver a fast, correct outcome. Early wins build the confidence that drives broader adoption.

Expectation management. AI Search and Virtual Agent will not answer every question correctly from

day one. If requestors encounter a poor response early in their experience, they are likely to disengage

entirely. Set expectations clearly at launch: the system improves over time, here is how to escalate

when it doesn't help, and here is how to give feedback. A clear fallback path is as important as the self-

service capability itself.

8. What we’ve learned

Skipping Phase 1 data quality work is the most common cause of Phase 2 underperformance on both

sides of the experience. For fulfillers, sparse incident records produce AI summaries nobody trusts.

For requestors, a thin or poorly structured knowledge base results in Virtual Agent and AI Search

responses that fail to answer real questions — and once they have a poor experience, they stop trying.

Activating agentic workflows before skills are proven is the second most frequent fulfiller-side mistake.

Teams that haven't built confidence in AI summaries will not accept agentic triage. The sequencing is

non-negotiable: skills first, agents second.

Deploying Virtual Agent before the knowledge base is ready is the equivalent mistake on the requester

side — and arguably more damaging, because the failure is visible to the entire organization. A Virtual

Agent that can't answer basic questions erodes trust in AI broadly, not just in the channel.

Deploying AI without governance produces unmanaged automation, not Autonomous IT. AI Control

Tower should be configured before agentic workflows go live at scale — without it, you cannot measure

ROI, detect drift, or demonstrate compliance.

Treating OCM as an afterthought is the failure pattern that most surprises technical teams. The

platform will work; what breaks is adoption — on both sides. Fulfillers who don't trust AI outputs,

requestors who don't know AI assistants exist, managers who reject AI-generated content, and

feedback loops that were never established. These are what stall programmes, not configuration

errors.

## Page 17

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

17

9. Phase 3: Autonomy — Where is this building to?

Phase 3 is not a separate destination. It is Phase 2 operating without human confirmation gates for

routine cases. The same capabilities continue — but the role shifts from reviewing every output to

approving exceptions.

Phase 3 mirrors the Phase 2 structure with two Value Point groupings, each representing a step up in

autonomy:

Grouping   What it means

Value point 3 — Core

Workflows (Autonomous)

Phase 2 agentic workflows and conversational channels operating without

human confirmation gates, plus new Phase 3-specific capabilities

Value point 4 — AI Agents &amp;

Skills (Full autonomy)

Governance and orchestration infrastructure that makes sustainable

autonomy possible

Value point 3 — Core workflows (Autonomous)

Agentic workflows execute end-to-end for routine cases without human confirmation. The service desk

manages exception queues rather than incident queues. Three capabilities become active that are

specific to Phase 3:   proactive DEX remediation   (detecting and fixing endpoint issues before users

notice),   autonomous major incident communication   (stakeholder updates, notifications, and

escalations handled end-to-end without human drafting), and a   self-improving knowledge base   that

updates from resolved incidents without manual authoring. Conversational channels operate as

primary resolution channels with no human fallback for known patterns.

Value point 4 — AI agents &amp; skills (Full autonomy)

Phase 3 VP4 is where the individual agentic workflows of Phase 2 give way to something more

significant: the Autonomous Workforce—a coordinated system of AI Specialists that collaborate,

reason, and execute end-to-end work as a collective. This is the point at which IT operations shifts

from automation that speeds up human work to automation that performs the work itself, at scale,

under human oversight.

Where Phase 2 agents handle one workflow at a time, an AI Specialist operates like a member of the

team pre-built with its own skills and workflows — not a tool that completes tasks, but a digital worker

that owns an entire role:

•   Has a user record — work is routed to them the same way it is assigned to a human agent

•   Operates autonomously under human oversight, handling end-to-end responsibilities for their role

•   Adaptive and collaborative, working alongside human agents and other AI Specialists to deliver

consistent, on-brand experiences

•   Synthesizes knowledge articles, historical incident data, and device telemetry to improve

resolution accuracy over time

## Page 18

© 2026 ServiceNow, Inc. All rights reserved. NON-CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

18

The L1 Service Desk AI Specialist is the first example of this model — designed to autonomously triage,

investigate, and resolve routine incidents from queue to closure. It is expected to be generally

available with the Australia platform release. Additional AI Specialists for other IT and enterprise

functions are planned throughout 2026.

Why the journey matters. AI Specialists use   your   data, knowledge base, CMDB, and governance

model. Phase 1 builds the data discipline. Phase 2 builds the governance muscle and organizational

trust. Without that maturity, you're handing an autonomous worker a broken toolkit. The phases don't

just prepare the platform—they prepare the organization.

The governance layer makes this sustainable: AI Agent Orchestrator coordinates multi-agent

workflows. AI Control Tower provides compliance monitoring and ROI visibility. AI Guardian enforces

real-time guardrails.

The core principle: The human sets the rules, not the steps. Every autonomous action is auditable,

governed, and reversible.

Footnotes

¹   Outcome targets sourced from the ServiceNow Autonomous IT Value Journey Framework (internal

practitioner validation, January 2026). Figures represent directional benchmarks based on aggregated

customer data and are not guaranteed outcomes. Individual results will vary based on implementation

maturity, data quality, and organizational readiness.

²   Prosci Best Practices in Change Management, 12th Edition. Projects with excellent change

management are up to seven times more likely to meet or exceed objectives than those with poor or

no change management.

³   HDI,   State of Tech Support 2025 .

⁴   Info-Tech Research Group,   Future of IT 2025 Survey   (n=697).
