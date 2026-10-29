# Zero Outages Phase One Major Incident Management

Source: https://mynow.servicenow.com/now/best-practices/assets/zero-outages-phase-one-major-incident-management

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `ba5a37f6b018261b1c941f153c33f8abd37db9b29f9c76f17402f3348ea07d96`

## Page 1

Zero Outages Phase

One Major Incident

Management

Best practice guide

Asset number: 0004340

## Page 2

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

2

About this guide

This guide helps you establish coordinated major incident response with streamlined communications

using Major Incident Management in ServiceNow. This is a critical component of your Zero Outage

journey—ensuring high-impact incidents are handled with precision, clear accountability, and

transparent stakeholder communication.

•   Prerequisites — This guide assumes: Licensing: any ITSM license – Note: some optional

components may require higher-tier licensing indicated with ^

•   Platform version: Yokohama or later

•   Service Operations Workspace V5 or later for full workspace capabilities

This guide walks you through the deployment of:

•   OnCall &amp; Escalation— on call schedules and rosters, escalation paths and policies, notification

mechanisms.

•   Communications — communication plans &amp; templates, stakeholder notification workflows, status

page integration (if applicable), Bridge/war room protocols.

•   Investigation &amp; Response— OOTB Playbooks (Procedural MIM Playbook), incident timeline

tracking, workaround documentation.

•   Post Incident Review— Post incident review process (manual documentation), root cause capture,

action item tracking, knowledge article creation.

## Page 3

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

3

Table of Contents

Introduction   ....................................................................................................................................................................................... 4

Where does this fit in the journey?   ........................................................................................................................................ 5

Key roles and responsibilities   .....................................................................................................................................................   7

Strategic prerequisites .................................................................................................................................................................. 8

Technical Prerequisites   ................................................................................................................................................................ 9

Step 0: Establish foundation and readiness   ................................................................................................................... 10

Step 1: Activate plugin and configure core settings   .................................................................................................   12

Step 2: Configure roles, groups, and assignments   ......................................................................................................   13

Step 3: Configure major incident triggers   ........................................................................................................................14

Step 4: Configure communication plans and templates   .......................................................................................   15

Step 5: Configure workspace &amp; response framework   ..............................................................................................   18

Step 6: Configure collaboration tools   ................................................................................................................................   19

Step 7: Configure post-incident review   ............................................................................................................................   20

Step 8: Monitor and optimize using dashboards ..........................................................................................................   21

Key Performance Indicators   ................................................................................................................................................... 23

Early Warning Signals   ..................................................................................................................................................................   24

Positive signals ................................................................................................................................................................................   24

Warning signals (Needs attention) ..........................................................................................................................................   24

Where do you go from here?   ................................................................................................................................................   24

Appendix A: Enablers &amp; Resources to Support Your Success   ..............................................................................   25

Additional guidance &amp; training materials: ............................................................................................................................   25

## Page 4

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

4

Introduction

The Norm

Organizations without structured major incident processes experience 40-60% longer Mean Time to

Resolution (MTTR) for critical incidents. Communication breakdown during high-impact events leads to

stakeholder frustration, duplication of effort, and prolonged business disruption. Teams scramble to

coordinate a response while leadership lacks visibility into the progress of resolution.

The Vision

When Major Incident Management is working well, your organization responds to critical incidents with

confidence and coordination. A single Major Incident Manager orchestrates the response,

communication flows automatically to the right stakeholders, and technical teams collaborate

efficiently through a unified workspace. Leadership has real-time visibility into incident status, and

post-incident reviews drive continuous improvement—the result: faster resolution, reduced business

impact, and increased stakeholder trust.

Ultimate goal:   Zero service outages through predictive prevention (Autonomous IT)

Think of this value point as moving from "crisis chaos" to "coordinated response." That confidence is

what enables the AI-powered, self-healing capabilities that come later in your journey to Zero Outage.

## Page 5

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

5

Where does this fit in the journey?

The Zero Service Outages journey transforms IT from reactive chaos to resilient, intelligent operations

that anticipate and prevent disruption.

Journey Phases

•   Phase I (Insight): See your estate, detect issues, respond with structure (You Are Here).

•   Phase II (Automation): AI reduces noise, accelerates response, and prevents self-inflicted

outages.

•   Phase III (Autonomy): AI agents predict and prevent outages with human oversight.

Why start here?

This guide helps you establish coordinated high-impact incident response—a critical foundation for

Zero Service Outages. By establishing clear ownership, communication flows, and structured

resolution processes, you ensure that when high-impact incidents occur, your organization responds

with precision rather than panic. This sets the stage for proactive operations, allowing your

organization to accelerate response with AI assistance and ultimately prevent issues before they

impact the business.

How do the capabilities work together?

1.   Major Incident Identification defines what constitutes a major incident and how candidates are

proposed/accepted via trigger rules or manual promotion.

2.   Major Incident Management (MIM) provides a single-pane view in the Service Operations

Workspace (SOW) for coordinating responses, managing tasks, and tracking impact.

3.   Communication Plans automate stakeholder notifications with pre-defined templates, schedules,

and recipient groups.

4.   Incident Tasks enable parallel work streams across multiple support groups during investigation

and resolution.

5.   Playbooks guide responders through standardized investigation and resolution procedures.

6.   Post-Incident Review &amp; Timeline captures lessons learned, generates incident timelines, and

drives continuous improvement.

7.   Dashboards and Analytics show real-time status and historical trends to optimize the process.

Note: The OnCall &amp; Escalation capability is not covered in this guide, as it is addressed in a separate

dedicated best practice guide. You can find that guide here.

## Page 6

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

6

A broader look at platform capabilities associated with this Value Point:

## Page 7

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

7

Key roles and responsibilities

Successful Major Incident Management requires clear ownership across activation and ongoing

operations. Below you'll find the key personas involved in establishing and maintaining effective major

incident management. Explore detailed descriptions of roles in the Major Incident Management

Process guide

⚠   Stop if: Any of the above Personas aren't in place or haven't agreed to participate—forced adoption

leads to coordination failures and stakeholder frustration.

Persona   Primary Focus   Key Deliverable

Major Incident Management

Process Owner

E.g. VP/Director of Service

Operations

Process ownership and

continuous

improvement

Functional MIM process with measurable

MTTR reduction and stakeholder

satisfaction

Communications Manager   Stakeholder

communication

management

Timely, consistent stakeholder updates

throughout incident lifecycle

Major Incident Manager   End-to-end incident

coordination

Resolved major incidents within SLA with

comprehensive communication

ITSM Administrator   Technical configuration

and system

maintenance

Fully configured MIM module with

automated triggers and communication

plans

## Page 8

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

8

Strategic prerequisites

Make these organizational decisions before configuring anything in ServiceNow. Skip them, and you'll

reconfigure later when decisions are eventually taken, or you'll launch a process nobody uses.

⚠ Stop if: You don't have clear major incident criteria or executive approval—configuration without

direction leads to rework.

Prerequisite   Why it Matters   What to do:

Major incident

criteria defined

Clear criteria prevent both

unnecessary escalations and miss

critical incidents. Without this, every P1

becomes a major incident,

overwhelming the process.

Define what constitutes a major incident

beyond just priority (e.g., multiple users

affected, critical business service impacted,

specific CI types). Document trigger criteria

and review with stakeholders.

Communication

stakeholders

identified

Knowing who needs to be informed—

and when—prevents communication

gaps during high-pressure situations.

Map stakeholders by incident type: technical

teams, business owners, executives,

customers. Define communication frequency

expectations for each group.

Executive Sponsor

approval secured

Major incident response often requires

cross-functional coordination and may

impact multiple business units.

Map out resource requirements,

communication protocols, and escalation

paths. Get approval before activation.

CMDB foundations   Although not a hard prerequisite, it's

effectively required to get full value

from impact tracking and outage

management.

Confirm that critical services are defined in

your CMBD with relationships mapped.

## Page 9

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

9

Technical Prerequisites

These are the technical building blocks assumed to be in place for activating Major Incident

Management in ServiceNow. Missing any of these will hinder your progress.

⚠   Stop if: You don't have the right version or entitlements. If Notify isn't configured, please reference

this ServiceNow Documentation. You can always add Notify later to enhance communication and

enable conference call.

Common Pitfalls to Avoid:   Not testing notification channels. Conference calls and SMS alerts need

verification before a real major incident occurs. •   "Set-and-forget" approach. Major incident processes

need regular review and refinement based on post-incident report (PIR) review and learnings.

Prerequisite   Why it Matters   How to Validate

Service Operations

Workspace (SOW)

Modern MIM experience

requires SOW v5 or later for

full workbench capabilities.

Check if Service Operations Workspace

application is present. Navigate to All &gt;

Service Operations Workspace.

(Optional) Notify

integration configured

Enables conference calls

directly from MIM

Workbench for rapid team

mobilization.

Check Notify &gt; Administration &gt;

Connection. Requires separate Twilio

contract.

Task Outage plugin   Outage records provide

critical data for

understanding the true

business impact of major

incidents.

Check plugins, search for "Task Outage"

(com.snc.task\_outage)

## Page 10

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

10

Step 0: Establish foundation and readiness

Action: Align stakeholders on terminology, document major incident criteria, and configure platform

prerequisites before building trigger rules or communication plans.

Primary owner: MIM Process Owner

Why it matters: Clear requirements prevent rework and ensure alignment across teams. Skipping this

step means you'll have to reconfigure later when decisions are eventually made, or you'll launch a

process nobody uses.

Core activities:

1.   Understand key Major Incident Management terminology

What to accomplish: Get everyone on the same page about what major incidents, candidates,

promotion, and the workspace mean in ServiceNow. Misaligned vocabulary leads to misaligned

processes – you might refer to major incidents as “Critical” or “Sev1” incidents.

What to do:

•   Review the distinction between "incident" and "major incident" in the ServiceNow context.

•   Clarify the "candidate" workflow—incidents are proposed as candidates before being

accepted as major incidents.

•   Understand "promotion" vs "creation"—promoting converts an existing incident; creating

generates a new record.

•   Understand the role of the Outage record – for capturing and tracking the actual duration of

service disruption, affected CIs/services, and business impact during major incidents.

•   Share the terminology guide with all stakeholders before configuration meetings.

Best practice: If not already implemented, establish an outage management process that clearly

defines when to create and close outage records. This ensures precise calculations for SLA

compliance and Mean Time to Recovery (MTTR).

For more information, see Managing Outages within a Service Management Envir... - ServiceNow

Community

## Page 11

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

11

2.   Define major incident criteria and policies

What to accomplish: Document what constitutes a major incident for your organization and what

response is expected. Without this, your configuration is not effective.

What to do:

•   Define criteria beyond just priority (e.g., critical business service affected, multiple users

impacted, revenue-impacting systems).

•   Identify which services or CIs warrant for major incident treatment.

•   Establish escalation paths when primary responders are unavailable.

Pitfalls to avoid: Treating every Priority 1 incident as a Major Incident. The definition of a Major

Incident is subjective and often depends on factors such as customer escalation, reputational

impact, or security-related risk.

3.   Document communication plans and bridge/war room protocols

What to accomplish: Document who needs to be informed—and when— this prevents

communication gaps during high-pressure situations.

What to do:

•   Document how bridge calls are initiated, who joins, escalation paths, and handoff procedures

between shifts.

•   Map stakeholders by incident type: technical teams, business owners, executives, customers.

•   Define communication points (acknowledgment, first communication, resolution, updates),

frequency, and distinct templates for each group.

4.   Platform readiness

What to accomplish: Ensure that your instance is equipped with the necessary plugins and

assigned roles prior to activation. Failure to complete these steps may result in technical obstacles

during the configuration process.

What to do:

•   Review about this guide and the technical prerequisites (above).

•   Identify the users who require major\_incident\_manager and communication\_manager roles.

Link to documentation: Managing major incidents, Major Incident Management process

## Page 12

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

12

Step 1: Activate plugin and configure core settings

Action: Activate the Major Incident Management plugin and configure core properties that determine

how major incidents are identified, assigned, and processed.

Primary Owner: ITSM Administrator

Why it matters: The plugin activation establishes the foundation for all MIM capabilities. Core

properties determine whether candidates are promoted or new incidents created, how assignment

works, and which notifications are triggered.

Core activities:

1.   Activate the Major Incident Management plugin

What to accomplish: Enable the MIM functionality in your ServiceNow instance.

What to do:

•   Navigate to All &gt; Service Operations Workspace &gt; Configurations.

•   On the Admin Center Overview tab, locate "Configure ITSM Core section”.

•   Select Install under Major Incident Management (If it says “configure” it means it's already

installed).

2.   Configure Major Incident properties

What to accomplish:

What to do: Set the core behavioral properties that govern how major incidents are processed.

•   Navigate to All&gt; Incident &gt; Administration &gt; Major Incident Properties.

•   Create a major incident from the candidate —choose whether candidates are promoted (same

record) or create new incidents.

•   Set "Auto-assign major incidents to group" to specify the default assignment group.

•   Configure notification properties for candidate proposals and acceptances.

Link to documentation: Major Incident Management plugins, Components installed with Incident

Management - Major Incident Management

Best practice: Start with the "promote candidate to major incident" option rather than "create new

incident." This maintains the incident history and avoids confusion about which record to work on.

## Page 13

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

13

Step 2: Configure roles, groups, and assignments

Action: Establish the Major Incident Management group, assign appropriate roles to users, and

configure assignment rules.

Primary Owner: ITSM Administrator (with MIM Process Owner input)

Why it matters: Clear role assignment ensures the right people have access to manage major

incidents. The Major Incident Management group provides a dedicated team that can be automatically

notified when candidates are proposed.

Core activities:

1.   Create the Major Incident Management group and assign roles

What to accomplish: Establish a dedicated group for Major Incident Management that receives

notifications and own major incident coordination.

What to do:

•   Navigate to All&gt;User Administration &gt; Groups

•   Create a new group "Major Incident Management" or verify the existing group configuration.

•   Consider creating sub-groups for Communications Managers if they are separate.

•   Add users to serve as Major Incident Managers.

•   Configure the group manager for escalation purposes.

•   Grant the major\_incident\_manager and communication\_manager role to the relevant group or

users

2.   Configure assignment rules

What to accomplish: Determine how major incidents are automatically assigned when candidates

are accepted.

What to do:

•   Review the "Major incident assignment" business rule.

•   Configure whether the assignment goes to the MIM group or remains with the original

assignment group.

•   Consider on-call integration to automatically assign users based on the schedule.

•   Document assignment logic and communicate to stakeholders.

Link to documentation: Major incident assignment, Request ITSM Roles - Incident Management

What good looks like: MIM group created with designated members, roles assigned to appropriate

users, assignment rules configured and documented.

## Page 14

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

14

Step 3: Configure major incident triggers

Action: Define the trigger rules for proposing incidents as major incident candidates and optionally

configure alert management rules for event-driven major incidents.

Primary Owner: MIM Process Owner (with ITSM Administrator support)

Why this matters: Trigger rules ensure that high-impact incidents are automatically flagged for major

incident treatment. Without well-designed trigger rules, critical incidents may be missed, or the MIM

process may be overwhelmed with false positives.

Please Note: Much of the configuration in Steps 3 through 8 can also be accessed from the Service

Operations Workspace Admin

Navigate to the All menu in your instance, search for "Service Operations Workspace Admin" and

select the Overview module. This provides a centralized location for configuring SOW for ITSM and the

functionality, like MIM, that is integrated into SOW.

Core activities:

1.   Document the manual identification process

What to accomplish: Ensure all users understand how to manually propose a major incident

candidate when the criteria aren't automatically met.

What to do:

•   Document the process for proposing a candidate from an existing incident (right-click &gt;

Propose Major Incident).

•   Document the process for creating a candidate directly (Major Incidents &gt; Create Major

Incident Candidate).

•   Communicate when a manual proposal is appropriate vs. waiting for automatic triggers

2.   Review and configure trigger rules (optional)

What to do:

•   Navigate to All&gt; Major Incidents &gt; Administration &gt; Major Incident Trigger Rules.

•   Review the three out-of-the-box trigger rules (disabled by default).

•   Define criteria based on your organizational requirements (e.g., critical business service

affected, specific CI types, multiple locations impacted).

3.   Configure Alert Management Rules (Optional, if event management is in place)

What to accomplish: Enable automatic major incident creation from alerts generated by monitoring

tools.

What to do:

•   Navigate to All&gt;Event Management &gt; Alert Management Rules

## Page 15

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

15

•   Review "Create Major Incident" and "Create Major Incident Candidate" rules (disabled by

default).

•   Update alert filter conditions to match your criteria.

•   Configure whether alerts create candidates (requiring approval) or accepted major incidents

(immediate).

Link to Documentation: Create trigger rules for major incidents

Best practice: Start with conservative triggers and expand based on experience. It's easier to add

triggers than to deal with alert fatigue from too many false positives.

What good looks like: Trigger rules configured and tested, alert management rules configured (if using

Event Management), and manual process documented and communicated.

Step 4: Configure communication plans and templates

Action: Create communication plan definitions that specify stakeholder notification workflows,

configure message templates, establish status page integration (if applicable), and define bridge or

war room protocols.

Primary owner: Communications Manager (with MIM Process Owner input)

Why it matters: Timely communication during a major incident is crucial to ensure IT teams, business

stakeholders, end users, and customers are informed about the impact and progress. Pre-defined

communication plans enable the incident response team to focus on resolution while ensuring

consistent stakeholder updates.

Core activities:

1.   Define communication plan definitions

What to accomplish: Create the overall communication plan structure that is attached to major

incidents.

What to do:

•   Navigate to All&gt;Major Incidents &gt; Administration &gt; Communication Plan Definitions.

•   Create plans based on incident priority or type (e.g., separate plans for P1 vs P2 major

incidents). Consider higher-priority incidents that may require more frequent communication

•   Define plan applicability conditions.

## Page 16

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

16

2.   Configure communication task definitions and templates

What to accomplish: Define the specific communication tasks within each plan, including timing,

recipients, and message templates.

What to do:

•   Create task definitions for Initial Notification, Status Updates, and Resolution Notification.

•   Specify timing for each task (e.g., initial notification within 5 minutes, status updates every 30

minutes).

•   Define recipient groups such as Technical Resolution, Business Stakeholders, and Executive

Leadership.

•   Create email templates with consistent formatting and required information (Impact, Status,

ETA, Next Update, etc.).

o   Create or select email templates for each communication type.

3.   Configure stakeholder notification workflows

What to accomplish: Define who receives each type of communication and how notifications are

delivered.

What to do:

•   Create contact definitions for different stakeholder groups.

•   Consider dynamic recipients based on affected services or CIs.

•   Include escalation contacts for extended major incidents.

•   Configure notification channels: email, SMS (via Notify), Microsoft Teams, and Slack.

•   Test that all contact definitions resolve to valid recipients.

4.   Configure status page integration (If Applicable)

What to accomplish: Enable automatic or manual updates to external status pages during major

incidents.

What to do:

•   If your organization uses an external status page (e.g., Statuspage.io, custom portal).

•   Configure integration to update the status page when the major incident state changes.

•   Define which incidents must be published externally vs. internal-only.

•   Create templates for public-facing status messages.

•   Establish approval workflow for external communications if required.

## Page 17

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

17

5.   Configure bridge/war room integration (Optional)

What to accomplish: Establish integrations for running bridge calls during major incidents.

What to do:

•   Configure conference call provider using Notify (All&gt;Major Incidents &gt; Administration &gt;

Conference Call Provider).

•   Define when bridge calls are initiated (e.g., all P1 major incidents, or based on specific criteria).

•   Create a standing agenda for bridge calls: Status, Impact, Actions in Progress, Blockers, Next

Steps, Next Update.

Link to documentation: Communication plan definition, Communication task definition, Configure a

communication plan in MIM SOW, Incident Communications Management

Best practice: Create multiple communication plans tailored to incident type, priority, or audience. A P1

major incident affecting customer-facing services needs different communication than an internal

system outage.

Pitfall to avoid: Over-communicating to stakeholders who don't need updates. This creates noise and

leads people to ignore major incident communications.

What good looks like: Communication plans defined for different incident types, task and contact

definitions configured, email templates created and tested.

## Page 18

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

18

Step 5: Configure workspace &amp; response framework

Action: Configure Major Incident Management (MIM) in Service Operations Workspace (SOW), set up

OOTB Playbooks for procedural guidance, enable incident timeline tracking, and establish workaround

documentation practices.

Primary owner: ITSM Administrator (with MIM Process Owner input)

Why it matters: The investigation and response phase is where incidents get resolved. A well-

configured workspace, standardized playbooks, and proper documentation practices ensure

consistent, efficient response regardless of who is handling the incident.

Core activities:

1.   Configure MIM in SOW

What to accomplish: Ensure the workspace displays relevant information and provides efficient

investigation tools.

What to do:

•   Review the Summary tab configuration (child incidents, affected CIs, impacted services, active

outages).

•   Configure the Impact panel to show relevant CI and service information.

•   Verify the Communication tab displays your configured communication plans.

•   Enable the Collaborate panel for chat and collaboration features.

•   Configure workspace views for different roles (Incident Commander vs. Resolver)

2.   Configure OOTB Playbooks (Procedural MIM Playbook)

What to accomplish: Set up playbooks that guide responders through standardized investigation

and resolution procedures.

What to do:

•   Navigate to Process Automation Designer to review available playbooks.

•   Review the OOTB Major Incident Management (MIM) playbook.

•   Clone and customize the playbook for your organization's procedures.

•   Define playbook activities: Initial Assessment, Impact Analysis, Technical Investigation,

Resolution Implementation, Verification

•   Navigate to SOW Admin Center and assign the playbook to Major Incident Management.

•   Configure playbook triggers (when the playbook must be automatically launched)

## Page 19

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

19

3.   Configure Incident timeline tracking

What to accomplish: Enable detailed timeline tracking to document all activities during major

incident response.

What to do:

•   Verify incident activity logging is enabled.

•   Configure the "Actions taken" journal field for Major Incident Managers to log key actions.

•   Enable milestone tracking (time to acknowledge, time to first communication, time to resolve).

•   Configure automatic timeline entries for state changes, assignments, and communications.

•   Review the timeline display in the workspace and the post-incident report (PIR).

Links to documentation: Major Incident Management in Service Operations Workspace

Pitfall to avoid: Creating overly complex playbooks that slow down response. Playbooks should guide,

not constrain. Also, don't neglect timeline documentation—it's essential for post-incident review.

What good looks like: Workspace configured and accessible, playbooks customized and assigned,

timeline tracking enabled, workaround documentation process established.

Step 6: Configure collaboration tools

Action: Enable real-time collaboration capabilities for major incident response teams.

Primary owner: ITSM Administrator

Why it matters: During a major incident, responders need to communicate in real-time across multiple

teams without fragmenting into separate email threads and undocumented calls. Integrated

collaboration tools bring everyone into a single space—enabling faster swarming, captured

conversation history for PIR, and seamless shift handoffs.

Core activities:

1.   Configure collaboration tools

What to accomplish: Enable real-time collaboration capabilities for major incident response teams.

What to do:

•   Enable chat functionality (sidebar discussions or MS Teams integration).

•   Configure conference call provider if using Notify (All &gt; Major Incidents &gt; Administration &gt;

Conference Call Provider).

•   Test collaboration tools work from the workspace.

•   Document collaboration expectations for major incident response.

Link to documentation: Communicating with stakeholders about incidents and major incidents in

SOW, MIM in Service Operations Workspace

What good looks like: Collaboration tools tested and working

## Page 20

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

20

Step 7: Configure post-incident review

Action: Configure post-incident review capabilities to capture lessons learned, generate incident

timelines, and drive continuous improvement.

Primary owner: MIM Process Owner, ITSM Administrator for configuration

Why It matters: Post-incident reviews are essential for learning from major incidents and preventing

recurrence. The review process captures what happened, what went well, what could be improved,

and what follow-up actions are needed.

Core activities:

1.   Configure post-incident report fields

What to accomplish: Ensure the post-incident report captures the information your organization

needs for analysis and improvement.

What to do:

•   Review the Post Incident Report (PIR) tab on the incident form.

•   Configure required fields for your review process.

•   Ensure fields capture root cause, lessons learned, and required follow-up actions.

•   Test that reports can be exported to PDF for distribution.

2.   Configure timeline settings

What to accomplish: Configure the incident timeline generation for post-incident analysis.

What to do:

•   Navigate to All &gt; Major Incidents &gt; Administration &gt; Post-Incident Report Timeline Settings.

•   Select data sources for timeline events (incident milestones, state changes, communications).

•   Configure event grouping and time interval settings.

•   Test timeline generation with a sample major incident.

3.   Establish review and follow-up process

What to accomplish: Define how post-incident reviews are conducted and how follow-up actions

are tracked.

What to do:

•   Define when reviews occur (e.g., within 5 business days of resolution).

•   Establish who participates in reviews (Major incident manager, resolver teams, business

stakeholders).

•   Configure integration with Problem Management for root cause tracking.

•   Consider Continual Improvement Management for tracking improvement actions.

## Page 21

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

21

Link to documentation: Review and update a post incident report , Associate a new post-incident

report

Best practice: Conduct blameless post-incident reviews focused on process improvement rather than

individual fault. This encourages honest reporting and drives real improvement.

What good looks like: PIR fields configured, timeline generation working, review process documented,

integration with Problem Management established.

Step 8: Monitor and optimize using dashboards

Action: Use the Major Incident Overview dashboard and analytics to track active incidents, response

times, and improvement trends.

Primary owner: MIM Process Owner

Why this matters: You can't improve what you don't measure. Real-time visibility into major incident

performance helps you spot problems early and make data-driven process improvements.

Core activities:

1.   Configure Major Incident overview dashboard

What to accomplish: Ensure stakeholders have access to real-time visibility into major incidents.

What to do:

•   Navigate to All &gt; Major Incidents &gt; Major Incident Overview.

•   Review available dashboard widgets (active incidents, proposed candidates, trends).

•   (Optional) Review the major incident dashboard information on mobile.

•   Consider activating Performance Analytics Content Pack for Major Incident Management

(premium)^

•   Provide dashboard access to appropriate stakeholders.

2.   Establish baseline metrics

What to accomplish: Capture starting-point performance data so you can measure improvement

over time.

What to do:

•   Document current major incident volume (number per month).

•   Capture baseline MTTR and other metrics if possible (See KPI’s in What success looks like).

## Page 22

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

22

Link to documentation: Major incident overview dashboard, Major incident dashboard Mobile , Major

Incident Dashboard

Best practice: Review the dashboard weekly with your MIM team. Segment data by service, team, and

time to identify patterns.

What good looks like: Dashboard accessible to stakeholders, baseline metrics documented, regular

review cadence established.

## Page 23

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

23

Key Performance Indicators

To know you've reached the value point, use these suggested metrics and targets, which you can

adjust to your needs.

Metric   Example Target   Target   Why it matters

Mean Time to

Resolution (MTTR)

4-8 hours   25-35%

reduction

Coordinated response accelerates

resolution

Mean Time to

Acknowledge (MTTA)

15-30 minutes   &lt;5 minutes   Faster acknowledgment means faster

mobilization

Mean Outage Duration   Varies by service   20-30%

reduction

Measures actual service disruption

time

Communication

Compliance

60-70%   &gt;95%   Stakeholders receive timely,

consistent updates

Post-Incident Reviews

Completed

50-60%   100% for all

MIs

Every major incident drive learning

and improvement

## Page 24

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

24

Early Warning Signals

Positive signals

•   Stakeholders report improved visibility and reduced surprise about outages.

•   Post-incident reviews consistently identify actionable improvements.

•   Major incident volume is stable or decreasing over time.

Warning signals (Needs attention)

•   Major incident candidates are sitting unreviewed for extended periods.

•   Communication tasks are frequently missed or delayed.

•   Stakeholders are complaining they weren't informed about outages.

•   Post-incident reviews are not being completed or driving improvements.

•   Major incident process being bypassed for "real" emergencies.

Where do you go from here?

Completing this guide establishes the foundational MIM capabilities needed in your Zero Outages

journey. The next step is to layer intelligence onto this foundation.

Next, in Phase II (Automate), you'll enhance MIM with AI-powered capabilities, including Now Assist for

automated summaries and PIR drafts, intelligent alert correlation, and predictive impact analysis.

These features accelerate response and reduce manual effort, but they require the structured

processes and quality data you've built here.

Before advancing to AI-Assisted MIM, you’ll need to make sure: ITOM Visibility (Discovery and Service

Mapping) provides the service context AI needs for accurate impact analysis, and AIOps Foundation

(Event Management and alert normalization) creates the clean signal data that powers intelligent

correlation.

In Phase III (Autonomy), MIM evolves further—AI detects anomalies before they become incidents,

self-healing automation resolves issues without human intervention, and your team shifts from fighting

fires to governing intelligent systems. The disciplined processes and quality data you're building now

are what make that future possible.

## Page 25

© 2026 ServiceNow, Inc. All rights reserved. CONFIDENTIAL. ServiceNow, the ServiceNow logo, and other ServiceNow marks are trademarks and/or registered trademarks

of ServiceNow, Inc. in the United States and/or other countries. Other company names, product names, and logos may be trademarks of the respective companies with

which they are associated.

25

Appendix A: Enablers &amp; Resources to Support Your Success

Additional guidance &amp; training materials:

•   Major Incident Management Process Guide (Best Practice Library)

•   Major Incident Management Process Workshop (Best Practice Library)

•   Major Incident Management Starter Stories (Best Practice Library)

•   Major Incident Management Fundamentals (Now Learning)
