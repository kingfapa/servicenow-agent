# Zero Outages Phase One - On Call Scheduling Best Practice Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/zero-outages-phase-one-on-call-scheduling-best-practice-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `02a8060dcfca00707d16edfb22f5ad9e5b4873b8580fa99d563d1d81d9fecf25`

## Page 1

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

1

Zero Outages Phase

One - On Call

Scheduling Best

Practice Guide

This guide helps you establish predictable 24/7 coverage with automated escalations using

On-Call Scheduling in ServiceNow. This is the foundation of your Zero Outage journey—

predictable, automated incident response that frees your team to focus on prevention rather

than reaction.

Asset Number: 0004330

Updated: February 2026

## Page 2

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

2

Table of Contents

Summary .............................................................................................................................................................................................. 3

Where This Fits in Your Zero Outages Journey................................................................................................................... 3

Key Product Features and Capabilities .................................................................................................................................. 5

Before you start: Prerequisites ................................................................................................................................................... 6

Key Roles and Responsibilities ............................................................................................................................................. 6

Strategic Prerequisites .............................................................................................................................................................. 6

Steps to Adopt On-Call Capabilities ........................................................................................................................................ 9

What Success Looks Like ........................................................................................................................................................... 22

Appendix A — Enablers &amp; Resources to Support Your Success   ...............................................................................   24

Appendix B – Roles and Responsibilities ............................................................................................................................   24

## Page 3

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

3

Summary

The Norm: Organizations with unmanaged on-call processes report Mean Time to Resolution (MTTR)

for critical incidents that are up to 20% higher and SLA compliance that drops by 10–15%. Beyond the

metrics, there's team burnout, operational chaos, and the constant fear that the next incident will hit

when no one's watching.

The Vision: When on-call management is working well, your team operates with confidence, not chaos.

Incidents are automatically routed to the right person, responders acknowledge alerts within minutes

(not hours), and coverage gaps simply don't exist. Your IT Ops team shifts from firefighting to fine-

tuning, and your leadership sees the proof in the numbers: faster resolution times, happier end users,

and SLAs that get met.

Where This Fits in Your Zero Outages Journey

This guide helps you establish a predictable 24/7 incident response—a critical foundation for Zero

Service Outages. By reducing Mean Time to Acknowledge (MTTA) to under 5 minutes and cutting

MTTR by 15–20%, you create the operational discipline needed for everything that follows.

Ultimate goal: Zero service outages through predictive prevention (Autonomous IT)

10

ServiceNow Public

ServiceNow Public   10

The Stakes

Alert

Fatigue

Manual

Escalations

Smart

Routing

After with On -Call

Capabilities

Before:

Predictive

Insights

Fewer

Disruptions

## Page 4

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

4

Think of this value point as moving from "hoping the right person picks up" to "knowing the system

always routes to someone who can respond." That confidence is what enables the AI-powered, self-

healing capabilities that come later in your journey to Zero Outage.

The Zero Service Outages journey transforms IT from reactive chaos to resilient, intelligent operations

that anticipate and prevent disruption.

Journey Phases:

1.   Stabilize core operations with strong service foundations (You Are Here)

2.   Accelerate delivery while minimizing risk

3.   Prevent outages and enable self-healing through intelligent automation

Why start here?

On-call scheduling is a foundational step in this journey. By stabilizing core operations with strong

service foundations, on-call automation eliminates delays and uncertainty, ensuring incidents are

acknowledged and routed instantly. This sets the stage for proactive operations, allowing your

organization to accelerate response with AI assistance and ultimately prevent issues before they

impact the business.

## Page 5

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

5

Key Product Features and Capabilities

On-Call Scheduling in ServiceNow isn't a single feature—it's an integrated system of features that work

together to eliminate coverage gaps, automate escalations, and give you real-time visibility into

incident response.

You can leverage these features when you fully activate On-Call Scheduling:

1.   The On-Call Schedule defines who's responsible and when

2.   Roster Management ensures fair rotation and backup coverage

3.   Escalation Policies automatically engage responders when incidents occur

4.   Multi-Channel Notifications (optional but recommended) deliver alerts through the responder's

preferred channels

5.   Mobile Management (optional but recommended) enables acknowledgment from anywhere

6.   Dashboards show you how well it's all working and where to optimize

A broader look at platform capabilities associated with this Value Point:

## Page 6

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

6

Before you start: Prerequisites

Key Roles and Responsibilities

Owner: Executive Sponsor

Successful on-call management requires clear ownership across activation and ongoing operations.

Below you’ll find the key personas involved in establishing and maintaining adequate on-call coverage.

See Appendix for details.

Persona   Primary Focus   Key Deliverable

ServiceOps Lead

Ex. Major Incident Manager

Process ownership and

continuous improvement

Functional on-call process with

measurable MTTR reduction and SLA

compliance

ITSM Administrator

Ex. Developer

Technical configuration and

system maintenance

Fully configured On-Call Scheduling

module with automated escalations

Shift Manager

Ex. Application Manager

Schedule management and

coverage optimization

Configured and updated on-call shifts

and schedules, including adding or

removing members and managing

roster details

On-Call Responder

Ex. Application Specialist

Timely incident response

and collaboration

Acknowledged and resolved incidents

within SLA targets

⚠   Stop if: Any of the above Personas aren't in place or haven't agreed to participate—forced adoption

leads to missed alerts and team friction.

Strategic Prerequisites

Owner: ServiceOps Lead

Make these organizational decisions before configuring anything in ServiceNow. Skip them, and you'll

reconfigure later when eventually decisions are taken, or you'll launch a process nobody uses. The

table shows decisions to make first.

Prerequisite   Why It Matters   What To Do

Coverage requirements

defined

Defined and consistent

coverage helps maintain

service commitments and

prevents outages, especially

for critical infrastructure

Identify which services require 24/7

coverage, which can use business-

hours-only, and what your SLA

commitments are before building

schedules.

## Page 7

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

7

Document each coverage model

(follow-the-sun, 24/7, regional) and map

to critical business services.

Teams and services

identified for initial rollout

Ensures the right support

members are available to

resolve issues, enables

effective incident

assignment, and streamlines

escalation and coverage

processes.

Identify pilot teams with a manageable

scope and executive buy-in.

Pilot with 1-2 teams first. Starting with

every team at once creates chaos.

Executive Sponsor

approval secured   Fosters strategic alignment

with organizational priorities

and confirms the product's

relevance and necessity

Map out budget requirements for

additional licenses, integrations (Notify

for SMS), and training.

Confirm funding and resource allocation

with the Executive Sponsor.

Get approval before activation.

⚠   Stop if: You don't have precise coverage requirements or executive approval—configuration without

direction leads to rework.

Technical Prerequisites

Owner: ITSM Administrator

These are the technical building blocks assumed to be in place for activating On-Call Scheduling in

ServiceNow. Missing any of these will block the progress.

Prerequisite   Why It Matters   How to Validate

Platform version:

Washington DC or later

On-Call Scheduling in SOW

requires Washington DC. Earlier

versions don't support SOW.

Check System Diagnostics &gt; Stats for

instance version.

Licensing and

Entitlements: ITSM

Standard or higher

If you are on user-based

licensing: On-Call Scheduling is

typically licensed per user

(responders + managers).

Confirm your license count

supports your planned rollout.

Check System Definition &gt; Subscription

Management for On-Call Scheduling or

contact your ServiceNow Account

Manager.

## Page 8

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

8

(Optional) Notify

integration configured

(for SMS/voice alerts)

Email-only notifications aren't

enough for critical incidents.

SMS ensures responders get

alerted even when away from

their desk.

Test Notify/Twilio connection: Notify &gt;

Administration &gt; Connection. Send a

test SMS to confirm delivery.

Service Operations

Workspace (SOW)

Reimagined intuitive UX to

create, edit, manage on-call

schedules, members,

notifications, conflicts,

escalation triggers, and policies,

all from within SOW

Check whether the Service Operations

Workspace application is present and

the ServiceNow instance.

Incident Management

(IM)

IM is the core of incident

response to ensure the rapid

restoration of IT services to

minimize business disruptions

Check if the Incident Management

application is present and accessible in

the ServiceNow instance.

⚠   Stop if: You don’t have the correct version or entitlements.

If SOW isn’t turned on, see ServiceNow Docs on configuring SOW. If Notify isn't configured, please

reference this ServiceNow Documentation. You can always add Notify later to enhance

communication by sending SMS and voice alerts instead of just emails.

Common Pitfalls to Avoid

•   Resist the urge to over-customize before you understand how the system works. Start simple; use

out-of-the-box configurations first.

•   Assuming notifications “just work”. More implementations fail due to notification issues than

configuration errors. Send test alerts to every channel (email, SMS, Teams, Slack) before go-live.

•   Skipping mobile: Responders expect mobile access. If you force them to use a laptop for

acknowledgment, adoption suffers.

•   “Set-and-forget" dashboards: Set a weekly recurring calendar invite with your Shift Managers.

Data is only valuable if you act on it.

## Page 9

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

9

Steps to Adopt On-Call Capabilities

For organizations implementing ServiceNow On-Call Scheduling from scratch, follow these six steps to

establish an effective on-call management process.

Step 0: Establish Foundation and Readiness

Action: Align stakeholders on terminology, document coverage requirements, and configure platform

prerequisites before building schedules or escalation policies.

Primary Owner: ServiceOps Lead

Why This Matters: Clear requirements prevent rework and ensure alignment across teams. Skipping

this step means you'll have to reconfigure later when decisions are eventually made, or you'll launch a

process nobody uses.

Core Activities:

1.   Understand Key On-Call Scheduling Terminology

What to accomplish: Get everyone on the same page about what schedules, shifts, rosters, and

escalations mean in ServiceNow. Misaligned vocabulary leads to misaligned configurations.

What to do

•   Review the differences between terms when creating on-call schedules, shifts, rosters, and on-

call escalations.

•   Clarify the distinction between "schedules" (platform-wide time management) and "on-call

schedules" (specific to on-call rotation).

•   Share the terminology guide with all stakeholders before configuration meetings.

•   Note: Schedules (NOT On-Call Schedules) are used across the platform for different time

management needs and can be modified by an admin.

•   Review the differences between terms when creating on-call schedules, shifts, rosters, and on-

call escalations.

## Page 10

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

10

\*Please note schedules (NOT On-Call Schedules) are used across the platform for different

time management needs and can be modified by an admin. You can learn more about

schedules in the ServiceNow Documentation.

Link to documentation:   Definitions in ServiceNow Documentation here.

2.   Gather Coverage Requirements and Policies

What to accomplish: Document who needs to be available when, and what happens if they don't

respond. Without this, you're configuring blind.

What to do

•   Provide documented coverage requirements, escalation policies, and review success metrics

(section ???)

•   Identify pilot Services and elicit commitment from response teams.

•   Ensure team managers and team members check the Group and user data are current

and accurate.

o   Assignment groups populated

o   User contact info complete (phone, email, SMS)

3.   Platform readiness

What to accomplish: Confirm your instance has the right plugins turned on and roles assigned.

Missing these will lead to technical dead ends mid-configuration.

What to do:

•   Review the Technical Prerequisites (above)

•   Check/Activate Plugins

11 11

An on-call schedule is a higher-level configuration that contains one or

more shifts. A shift defines the specific hours for a rotation, which

determines which team member is on -call at a given time.

A schedule speci fi es the times that

shifts are active. 9 to 5, 24/7

For example, companies that provide

support around the globe could use a

follow-the-sun schedule to cover time

zones across continents.

A shift is assigned one or more

rosters/members, which are lists

of users who participate in the on-

call rotation.

Schedule   Roster Shift

A single schedule can contain

multiple shifts to provide coverage

for di ff erent times of the day or week.

For example, a team may have one

team member on call from 5-9pm

and then another 9pm – 1am .

You can de fi ne escalation

policies and rules on a per-shift

basis, which determine how

alerts are routed if the initial

contact doesn't respond.

Rotation   On-call Escalation and

Triggers

A rotation is created within a shift to

determine the sequence in which

team members are assigned the on-

call duty.

## Page 11

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

11

o   com.snc.on\_call\_rotation (On-Call Scheduling): This plugin activates the On-Call

Scheduling features.

•   Assign roles

o   rota\_admin (full admin access) to the ITSM Administrator

o   rota\_manager to the Shift Manager

o   itil for responders

•   Update Group and user data (as needed per coverage requirements)

o   Assignment groups populated

o   User contact info complete (phone, email, SMS)

Link to documentation: Definitions of On-Call Scheduling terms, Activate On-Call Scheduling, Assigning

On-Call Scheduling roles

Step 1: Define On-Call Schedule

Action: Create and publish an on-call schedule specifying shifts, time zones, and coverage periods.

Include holiday schedules to avoid manual updates.

Primary Owner: Shift Manager

Why it Matters: Shift Managers are assured their critical services are adequately supported. Without a

published schedule, responders don't know when they're on duty, leading to missed alerts and

coverage gaps that delay incident response.

Core Activities:

1.   Create and edit a shift in the Service Operations Workspace

What to accomplish: Establish a published schedule that clearly defines who's responsible for

incident response during each time window—eliminating the "who's on call?" scramble when

incidents occur.

What to do:

•   Navigate to All&gt;Service Operations Workspace &gt; On-Call &gt; Schedules.

•   Create a new on-call schedule and select the appropriate assignment group

•   Define your coverage model:

o   24/7 coverage (round-the-clock for critical services)

o   Business hours only (e.g., 8 am-6 pm Monday-Friday)

o   Follow-the-sun (rotating coverage across regional teams and time zones)

•   Add shifts to your schedule:

o   Specify shift start and end times.

o   Set the correct time zone for each shift (critical for distributed teams).

o   Configure shift duration (8-hour, 12-hour, or weekly blocks).

## Page 12

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

12

o   Build in handoff overlap between shifts if needed (e.g., 15-30 minutes for knowledge

transfer).

•   Include holiday schedules:

o   Add your organization's holiday calendar to the schedule.

o   Define whether coverage continues during holidays or follows modified hours.

o   Set up automatic adjustments so you don't manually update schedules for every holiday.

•   Preview the schedule to check for coverage gaps or overlaps.

•   Publish the schedule to make it active and visible to responders.

Link to Documentation: Create and edit a shift in the Service Operations Workspace

Best Practice: Use "follow-the-sun" or 24/7 schedules for global coverage. Build in an overlap between

shifts for handoff coordination.

Pitfall to Avoid: Avoid using a catch-all group for different on-call schedules and services

It's important to highlight that you have selected the correct group for your On-Call Schedule. Having

groups for On-call scheduling enables domain separation, streamlines shift management, and

enhances security by restricting access to sensitive scheduling information. Each group can have its

own unique schedule, escalation policies, and roster members, making it easier to manage coverage

and responsibilities.

Acceptance Criteria: 100% shift coverage with zero gaps; schedule visible to all team members in the

Service Operations Workspace

Step 2: Configure Rosters and Rotation

Action: Set up primary and secondary rosters with rotation intervals to evenly distribute the workload

across responders.

Primary Owner: Shift Manager

Why it Matters: Fair rotation prevents responder burnout and ensures someone is always available,

even during absences or peak incident periods.

Core Activities:

1.   Identify and commit responders

What to accomplish: Confirm who's willing and able to participate in on-call rotation before you

add their names to rosters.

What to do:

•   Hold kick-off meetings with each team to explain rotation expectations (schedule cadence,

acknowledgment SLAs, escalation procedures).

•   Document responder commitments—forced participation breeds resentment and missed

alerts.

## Page 13

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

13

•   Verify each responder understands their responsibilities and has agreed to participate.

2.   Gather shift preferences

What to accomplish: Collect responder preferences for rotation timing, blackout dates, and

coverage patterns to build schedules that balance fairness with individual needs.

What to do:

•   Survey responders on preferred rotation intervals (weekly, bi-weekly, monthly).

•   Document blackout dates (planned PTO, known conflicts).

•   Note time zone considerations for distributed teams.

•   Identify responders who prefer weeknight shifts vs. weekend coverage.

3.   Confirm escalation contacts

What to accomplish: Establish transparent backup chains so that incidents don't stall when the

primary responder is unavailable or doesn't acknowledge.

What to do:

•   Document primary   →   secondary   →   catch-all escalation chain for each team.

•   Verify contact information for all escalation levels.

•   Confirm backup responders understand they're part of the escalation path.

•   Define catch-all groups or individuals who serve as the final escalation.

Link to Documentation: Exploring On-call Scheduling in Service Operations Workspace

Best Practice: Define rotation intervals and reminders for each roster. Include both primary and

secondary responders to handle overflow or non-response scenarios.

Pitfall to Avoid: Forgetting to publish after editing shifts—unpublished changes won't trigger

notifications or update dashboards.

Acceptance Criteria: Active rosters with automated rotation logic; no manual intervention required for

handoffs; balanced workload distribution across team members

Step 3: Configure Delivery Channels

Action: Set up and test notification integrations (email, SMS, Teams, Slack) to ensure the system can

deliver alerts to responders without failures.

Primary Owner: ITSM Administrator

Why it Matters: Notification channels are the delivery mechanism for on-call alerts. If these aren't

configured and tested, your entire escalation process fails silently—responders never get notified,

incidents sit unassigned, and you won't know there's a problem until SLAs are already breached.

Core Activities

## Page 14

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

14

1.   Configure notification integrations

What to accomplish: Set up all available notification channels in ServiceNow so alerts can reach

responders through multiple methods.

What to do:

•   Configure available notification channels in ServiceNow:

o   Email (typically enabled by default)

o   SMS (requires Notify or similar integration)

o   Voice (requires Notify or similar integration)

o   Slack (requires Slack integration)

o   Microsoft Teams (requires Teams integration)

o   Mobile Push (requires ServiceNow mobile app setup)

o   Custom service providers (if your organization uses alternatives)

•   Document configuration settings for each channel

•   Note any licensing requirements (e.g., Notify for SMS/voice)

•   Establish which channels are mandatory vs optional for your organization

2.   Test notification delivery

What to accomplish: Verify all notification channels can deliver alerts to responders without failures

or delays.

What to do:

•   Send test notifications through each configured channel:

o   Email to corporate and personal addresses

o   SMS to mobile numbers (including international numbers if you have global teams)

o   Push notifications to mobile devices (iOS and Android)

o   Slack/Teams notifications to channels responders monitor

o   Voice calls (if configured)

•   Confirm delivery times for each channel (some channels may have delays)

•   Verify message format and readability on each channel

•   Test during different times of day to check for delivery consistency

•   Document which channels are reliable, and which have limitations (e.g., SMS may fail

internationally, Teams may require specific permissions)

3.   Set up failover and redundancy

What to accomplish: Ensure critical alerts still reach responders even if a primary notification

channel fails.

## Page 15

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

15

What to do:

•   Configure failover channels for critical incidents (e.g., if SMS fails, try voice call).

•   Set up notification attempts (e.g., try primary channel twice before switching to failover).

•   Document escalation logic when channels fail.

•   Test failover scenarios by deliberately disabling a channel and confirming backup activates.

Link to Documentation: Set up SMS, Microsoft Teams, Slack, and more using On-call

Best Practice: Test all notification channels in a sub-production environment before go-live. Include

international numbers and various device types in testing if you have distributed teams.

Pitfall to Avoid: Assuming notifications work without testing—integrations can fail silently. Always send

test alerts through all channels before production rollout.

Acceptance Criteria: All notification channels configured and tested; delivery confirmed for each

channel; failover logic validated; documentation complete showing which channels work and any

known limitations.

Step 4: Set Escalation Triggers and Policies

Action: Configure triggers for critical incidents (e.g., Priority 1 assigned to a specific group) to

automatically engage on-call responders. Define escalation paths with reminders, trigger rules, and

catch-all fallback.

Primary Owner: ServiceOps Lead (with ITSM Administrator ensuring proper access and providing

setup guidance)

Why it Matters: Escalation triggers and policies determine what happens if a roster member does not

respond to a notification. Automated escalation ensures that when critical business events occur, such

as a P2 Incident, a responder is aware within minutes vs potentially hours.

Core Activities:

1.   Enable escalation logging (glide.on\_call.enable\_escalation\_tracking) system property (ITSM

Administrator)

What to accomplish: Enable system-level tracking to capture escalation data for reporting and

optimization.

What to do:

•   Navigate to All &gt;s On-Call Scheduling &gt; Administration &gt; On-Call Properties and enable

glide.on\_call.enable\_escalation\_tracking

•   Verify escalation logs are being written by checking the On-Call Escalation table.

## Page 16

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

16

•   Grant ServiceOps Leads access to escalation reports and dashboards.

•   Document where escalation data is stored and how to access it.

•   Provide training or documentation on configuring escalation triggers to ServiceOps Leads.

2.   Define escalation trigger rules

What to accomplish: Establish which incident types and priorities automatically engage on-call

responders instead of relying on manual assignment.

What to do:

•   Define trigger criteria based on incident priority and urgency:

o   Which priorities require immediate on-call engagement (typically P1, sometimes P2).

o   Which assignment groups must trigger on-call escalation

o   Whether triggers fire on incident creation or after a timeout period

•   Map each trigger to the appropriate on-call schedule.

•   Set acknowledgment timeouts (e.g., primary responder has 5 minutes before escalating to

secondary).

•   Configure reminder intervals for unacknowledged alerts (e.g., remind every 2 minutes).

•   Document trigger logic for each service or team.

•   Test trigger rules with sample incidents in a sub-production environment before enabling live.

3.   Configure escalation workflows and subflows for P1 incidents

What to accomplish: Automate the sequence of who gets notified and when, so incidents don't

stall waiting for manual intervention.

What to do:

•   Build escalation paths for each on-call schedule:

o   Primary responder (first contact)

o   Secondary responder (backup if primary doesn't acknowledge)

o   Catch-all group or escalation manager (final safety net)

•   Set escalation timing between levels (e.g., escalate after 5 minutes of non-response)

•   Configure "assign by acknowledgment" for P1 incidents so the first person to acknowledge

automatically becomes the assignee.

•   Create workflows or subflows that handle:

o   Initial notification to primary

o   Escalation to secondary after timeout

o   Final escalation to catch-all

o   Assignment upon acknowledgment

## Page 17

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

17

•   Define what happens if no one in the chain acknowledges (manager notification, executive

alert).

•   Test end-to-end escalation flow with simulated P1 and P2 incidents.

•   Document escalation sequences and timing for each team.

Best Practice: Use "assign by acknowledgment" workflow for critical incidents—this ensures ownership

transfers automatically upon acknowledgment. Include a catch-all group as the final escalation tier.

Pitfall to Avoid: Not enabling the escalation tracking property

(glide.on\_call.enable\_escalation\_tracking)—without this, escalation logs won't be captured for

reporting.

Link to Documentation: Escalation triggers and policies

Success Criteria: 95%+ of critical incidents escalated within 5 minutes; Acknowledgment time under 5

minutes for P1 incidents; automated escalation sequence visible in escalation reports; zero incidents

falling through cracks.

Step 5: Responder Preferences

Action: Configure individual responder preferences for how and when they receive on-call alerts, with

overrides for critical incidents.

Primary Owner: On-Call Responder for personal preferences and contact details, ITSM Administrator

support for override configuration

Why it Matters: Responders are more likely to acknowledge alerts quickly if they receive them through

channels they monitor—reducing missed notifications and faster incident response. But critical

incidents can't wait for someone to check their preferred channel, so overrides ensure P1 incidents

always break through.

Core Activities:

1.   Update and verify user contact details (ITSM Administrator/Responder)

What to accomplish: Maintain accurate contact information for every responder so notifications

reach the right person through the right channel.

What to do:

•   Audit existing user records for completeness:

o   Mobile phone number (required for SMS)

o   Email address (corporate and personal if they prefer)

o   Teams/Slack handle (if using these channels)

## Page 18

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

18

o   Time zone (critical for international teams)

•   Require responders to verify and update their contact information:

o   Send an email asking each responder to review and confirm details

o   Provide a self-service interface for updates

o   Flag any responders who don't respond within the set timeframe

•   Establish an ongoing process for keeping contact details current:

o   Quarterly reviews with Shift Managers

o   Self-service updates available anytime

o   Automated reminders when data is outdated (e.g., phone number hasn't been verified in 6

months)

•   Test notifications to each responder's contact methods before adding them to rosters

2.   Set individual notification preferences (On-call responder)

What to accomplish: Allow responders to control how they receive alerts during normal operations

while maintaining the ability to override for critical incidents.

What to do:

•   Have each responder configure their notification preferences:

o   Preferred notification channels (email, SMS, Teams, Slack, push)

o   Channel priority (which to try first)

o   Notification timing (immediate, batched, quiet hours)

o   Device preferences (work phone vs personal phone)

•   Document each responder's preferences in ServiceNow.

•   Test preferences by sending sample notifications and confirming delivery

•   Guide with best practices:

o   At least two channels enabled (redundancy)

o   Mobile-friendly channel for after-hours (SMS or push)

o   Different channels for different times (e.g., SMS for weekends, Teams during work hours)

3.   Configure overrides for critical incidents (ITSM Administrator)

What to accomplish: Ensure P1 and other critical incidents always reach responders through

multiple channels, regardless of personal preferences.

What to do:

•   Define which incident types require notification overrides (typically P1, sometimes P2).

•   Configure override rules in ServiceNow:

o   P1 incidents send to all channels (SMS + email + Teams) regardless of preferences

## Page 19

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

19

o   Multiple notification attempts before escalating

o   No "quiet hours" for critical incidents

•   Set notification frequency for critical incidents (e.g., repeat every 2 minutes until

acknowledged).

•   Document override logic and communicate to responders so they understand when overrides

apply.

•   Test override scenarios to ensure they bypass personal preferences.

Link to Documentation: Setting notification preferences in Core UI

Best Practice: Override personal preferences for P1 incidents—critical alerts must always go to multiple

channels (SMS + email + Teams) regardless of user settings. Balance responder autonomy with

business requirements.

Pitfall to Avoid: Letting responders set preferences without first testing them. Have each responder

send a test alert to themselves before they go on call to confirm everything works.

Completed When: All responder contact details verified and current; individual preferences configured

and tested; override rules in place for critical incidents; zero missed notifications due to incorrect

contact info or preference gaps.

Step 6: Monitor and Optimize Using Dashboards

Action: Use the On-Call Overview dashboard and escalation reports to track active escalations,

response times, and coverage gaps in real time.

Primary Owner: ServiceOps Lead (for strategic monitoring); Shift Manager (for operational

adjustments)

Why it Matters: You can't improve what you don't measure. Real-time visibility into on-call

performance helps you spot problems early (missed escalations, slow response times) and make

data-driven adjustments.

Core Activities:

1.   Verify escalation logging is enabled (ITSM Administrator)

What to accomplish: Confirm the system is capturing escalation data so dashboards and reports

have the information they need.

What to do:

•   Check that the system property glide.on\_call.enable\_escalation\_tracking is enabled.

•   Verify escalation events are being logged to the On-Call Escalation table.

•   Confirm timestamps, acknowledgment status, and responder information are being captured.

## Page 20

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

20

•   Test by triggering a sample escalation and checking if it appears in reports.

2.   Grant dashboard access and configure views (ITSM Administrator)

What to accomplish: Ensure ServiceOps Leads and Shift Managers can access on-call

dashboards and filter data relevant to their teams.

What to do:

•   Grant access to the On-Call Overview dashboard for ServiceOps Leads and Shift Managers.

•   Configure dashboard filters so Shift Managers can view data specific to their assignment

groups.

•   Set up personalized views for different personas:

o   ServiceOps Lead: cross-team metrics, SLA compliance, MTTR trends

o   Shift Manager: team-specific response times, coverage gaps, individual responder

performance

•   Document where to find dashboards and how to navigate them

•   Provide brief training on interpreting key metrics

3.   Establish baseline metrics (ServiceOps Lead)

What to accomplish: Capture starting-point performance data so you can measure improvement

over time and know what "normal" looks like for your teams.

What to do:

•   Run initial reports to establish baseline performance:

o   Mean Time to Acknowledgment (MTTA) by team and priority

o   Mean Time to Resolution (MTTR) for on-call incidents

o   Escalation acknowledgment rate (percentage of escalations acknowledged within the

target time)

o   Coverage gap frequency (times when no one is scheduled)

o   Unacknowledged escalation count

•   Document baseline metrics with the date captured

•   Set improvement targets based on organizational goals (e.g., reduce MTTA from 15 minutes to

under 5 minutes)

•   Share baselines with Shift Managers and responders so everyone knows the starting point

Link to Documentation: On-Call Overview Dashboard

Best Practice: Review the dashboard weekly with your team. Segment data by group and priority to

identify patterns (e.g., "Backend team has slower response times on weekends"). Use insights to adjust

rosters or escalation policies.

## Page 21

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

21

Pitfall to Avoid: Ignoring unacknowledged escalations in reports—these are red flags indicating

notification failures, incorrect rosters, or responder unavailability that need immediate attention.

Acceptance Criteria: Weekly dashboard reviews completed; actionable insights identified (e.g.,

coverage gaps during specific shifts); MTTR trending downward over time

Step 7: Validate and Iterate

Primary Owner: ServiceOps Lead (leads validation); all personas participate in testing

Action: Conduct user acceptance testing with real scenarios (e.g., simulate a P1 incident during off-

hours) to validate schedules, escalation flows, and notifications work as designed.

Why it Matters: What works in theory often breaks in practice. Validation catches configuration errors,

usability issues, and gaps before they impact real incidents—saving you from firefighting on day one.

Core Activities:

1.   Test scenarios prepared (e.g., P1 during weeknight, P2 during weekend, responder non-response)

2.   Stakeholder availability for testing (IT Ops Lead, Shift Managers, Responders)

3.   Rollback plan in case major issues is discovered

Best Practice: Include both process owners (IT Ops Lead) and frontline responders in validation—

they'll catch different types of issues. Run tests during various shifts and scenarios (business hours,

weekends, holidays).

Pitfall to Avoid: Skipping validation and going straight to production rollout. Even minor configuration

errors (wrong time zone, missed notification setting) can cause significant disruptions during real

incidents.

Success Criteria: All test scenarios pass without manual intervention; responders confirm notifications

arrived, and schedules are accurate; zero critical issues identified during UAT.

## Page 22

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

22

What Success Looks Like

Key Performance Indicators

To know you've reached the value point, use these suggested metrics and targets, which you can

adjust to your needs.

Metric   Baseline

(Typical)

Target   Why It Matters

Mean Time to

Acknowledgment

(MTTA)

15-30

minutes

&lt;5 minutes   Faster acknowledgment means incidents get

triaged sooner, reducing overall resolution time

Mean Time to

Resolution (MTTR)

Varies by

severity

15-20%

reduction

Structured escalation eliminates delays

caused by hunting for responders

SLA Compliance

(P1/P2)

70-85%   &gt;95%   Automated on-call processes ensure you meet

commitments consistently

Escalation

Acknowledgment

Rate

60-75%   &gt;90%   High acknowledgment means your notification

channels are working and responders are

engaged

Coverage Gaps   5-10 per

month

Zero   Automated scheduling eliminates the risk of

unassigned shifts

Early Warning Signals: How to Know It's Working

Without having to wait for quarterly reports to see progress, watch for these diagnostic signals that

indicate the on-call process is maturing:

✅   Positive Signals (You're on track):

•   Fewer missed alerts: Responders are receiving and acknowledging notifications consistently.

•   Higher escalation acknowledgment rates: Backup responders are engaging when the primary

doesn't respond.

•   Reduced manual overrides: Incidents are flowing through automated escalation paths without

admin intervention.

•   Fewer "who's on call?" questions: Team members check the schedule in ServiceNow instead of

pinging Slack or sending emails.

•   Declining after-hours panic: Leadership stops getting late-night calls asking, "Who should handle

this?"

## Page 23

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

23

⚠   Warning Signals (Needs attention):

•   Escalations timing out to catch-all groups: Indicates notification failures or roster

misconfigurations.

•   Repeated manual reassignments: Suggests escalation policies aren't aligned to the actual team

structure.

•   Responder complaints about notification overload: May need to tune alert thresholds or

priorities.

•   Coverage gaps appearing in dashboards: Points to PTO not being managed or rosters not

updated.

## Page 24

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

24

Appendix A — Enablers &amp; Resources to Support Your

Success

Quick Setup Tools:

•   ServiceNow On-Call Scheduling module in Service Operations Workspace

Automated Workflows:

•   Escalation paths with reminders, rotation logic, and catch-all fallback

Additional Guidance &amp; Training Materials:

•   On-Call Scheduling Process Guide

•   On-Call Scheduling Process Workshop

•   On-Call Scheduling Starter Stories

•   Set up an on-call schedule (Video)

•   Getting Started with On-Call Scheduling in Service Operations Workspace

•   Service Operations Workspace Adoption Series Session 1: Art of the Possible (Video)

•   On-call Scheduling (video)

Pro Tip: Share the videos with your Shift Managers and Responders during activation—visual

walkthroughs reduce the learning curve and increase adoption.

Appendix B – Roles and Responsibilities

Below, you'll find detailed activation and operationalization responsibilities for each persona. Use

these as a checklist during implementation and as an ongoing reference for role clarity.

ServiceOps Lead (Process Owner)

Activation Responsibilities:

•   Define on-call coverage requirements based on Incident Management or Major Incident

Management process and SLA commitments.

•   Collaborate with ITSM Admin to establish escalation policies aligned to incident severity.

•   Identify and assign Shift Managers for each service area or team.

•   Approve shift templates, rosters, and escalation workflows before go-live.

•   Conduct a readiness review with all stakeholders before activation.

•   Validate end-to-end escalation workflows through test scenarios before go-live to ensure

notifications, acknowledgments, and handoffs work as designed.

## Page 25

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

25

Operationalization Responsibilities:

•   Monitor on-call performance metrics (MTTR, escalation response times, coverage gaps).

•   Conduct regular retrospectives with Shift Managers and responders to identify process

improvements.

•   Ensure escalation policies evolve with changing business needs and service portfolio.

•   Report on-call effectiveness and outcomes to the Executive Sponsor.

•   Address team burnout risks and advocate for workload balance.

ITSM Administrator

Activation Responsibilities

•   Turn on the On-Call Scheduling plugin and fine-tune settings, such as escalation logging and

triggers, so notifications reach the right people without delay.

•   Build reusable shift and group templates that make it easy for teams to create consistent

schedules without starting from scratch.

•   Assign roles (rota\_admin, rota\_manager, itil) and ensure the correct permissions to manage

schedules and escalation policies.

•   Configure escalation trigger rules and workflows/subflows for critical incidents (e.g., P1 triggers) to

automate assignment and notification (can be delegated to rota\_admin).

•   Test integrations with Notify, MS Teams, and Slack to ensure alerts reach responders, no matter

where they're working.

Operationalization Responsibilities

•   Maintain system properties for escalation tracking and reporting.

•   Keep an eye on escalation logs and the On-Call Overview dashboard to catch issues early—

whether it's a missed notification or a coverage gap.

•   Update templates and escalation policies based on feedback and evolving business needs.

Shift Manager (rota\_manager)

Activation Responsibilities

•   Build out primary, secondary, and escalation rosters that account for rotation patterns, holidays,

and time zones—so there's always someone ready to respond.

•   Set up escalation paths that automatically move up the chain if someone doesn't respond, with a

catch-all to ensure incidents never fall through the cracks.

•   Double-check schedules for any gaps or conflicts and lock them down before launch day—no

surprises.

## Page 26

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

26

Operationalization Responsibilities

•   Review schedules for gaps and conflicts; provide or replace coverage as needed.

•   Approve or reject time-off requests and manage PTO coverage.

•   Use escalation tracking to see how quickly your team is responding and where delays are

happening so you can course-correct.

•   Run performance and escalation reports to identify opportunities for improvement.

On-Call Responder (itil role)

Activation Responsibilities

•   Make sure your contact preferences are up to date—whether you want alerts via email, text, or

Teams—so you never miss a critical notification.

•   Confirm roster membership and ensure readiness for assigned shifts.

Operationalization Responsibilities

•   When you get an alert, acknowledge it quickly, so the system (and your team) knows you're on it.

•   Tap into the "Experts on Call" feature when you need backup—it shows you exactly who's

available and how to reach them fast.

•   Utilize the On-Call feature to Schedule Time off and absences and delegate a suggested

coverage person while out.

•   Check your personal on-call schedule regularly to know when you're up and which incidents

you've handled.

Executive Sponsor

Activation Responsibilities

•   Approve initial investment in ServiceNow ITSM Fulfiller/Agent license (e.g., ITSM Standard or

higher), integration tools (Notify, MS Teams, Slack), and responder training to ensure readiness for

24/7 coverage.

•   Establish an accountability framework by defining which teams/services require on-call coverage

and assigning executive ownership for escalation policy compliance.

•   Set baseline success metrics with the IT Ops Lead (e.g., target MTTR reduction of 15%, 95% of

escalations acknowledged within 5 minutes) to measure ROI post-launch.

•   Remove organizational barriers by authorizing cross-functional collaboration between IT Ops,

Service Desk, and Security teams to align on escalation workflows.

•   Communicate the "why" to the broader organization—connecting on-call improvements to

customer experience, revenue protection, and the Zero Outage vision.

## Page 27

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered

trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective

companies with which they are associated.

27

Operationalization Responsibilities

•   Review quarterly scorecards to track MTTR trends, escalation response times, and SLA

compliance—celebrate wins and flag areas in need of investment.

•   Allocate budget for training, tooling, or process improvements based on Ops Lead

recommendations.

•   Ensure on-call workload is factored into performance reviews and workload planning.

•   Champion both team recognition and continuous improvement—celebrate responders who

demonstrate excellence while advocating for process enhancements (like regional coverage or

expanded integrations) that tie to broader resilience and Zero Outage objectives.
