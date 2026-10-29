# Major Incident Management - Process Workshop Presentation

Source: https://mynow.servicenow.com/now/best-practices/assets/major-incident-management-process-workshop-presentation

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `7ecbf2d0db1a176fd4b6d0fc9f57cd5cbe5340e6cf5ed5a38de24d05ac050e07`

## Slide 1

Major Incident Management (MIM)

Process Workshop Presentation

Australia

August 2026

Asset number: 0002435

Speaker Name

### Speaker notes

1

## Slide 2

User instructions

PLEASE REMOVE THIS SLIDE BEFORE PRESENTING

Who: This deck is built for delivery of a ServiceNow product/capability. The delivery of this deck may be undertaken by Customers, ServiceNow Partners and ServiceNow Expert Services.  Assigned Business Process Analysts, Business Process Consultant, Technical Consultants and/or Developers will normally be responsible for its delivery.

Why: We want to make it easier for you by spending more time on the implementation and build, not creating workshop materials. The purpose of this presentation is to outline the baseline process explaining the configurable options with the objective of determining the to-be process and corresponding configuration requirements, usually in the form of user stories.

## Slide 3

User instructions

PLEASE REMOVE THIS SLIDE BEFORE PRESENTING

How:

Customers (self–implementation) – Use the deck as it is or add to your corporate template. Alternatively, utilize individual slides to enhance your internal communications.

Partner or Co-Delivery implementations – Use the deck  and add your logo, following the instructions on a following slide.

ServiceNow Expert Services

Remove the PartnerLogo using the Slide Master (View &gt; Slide Master &gt; select the vertical line and the PartnerLogo at the bottom of the Master Slide and delete. If you see any other instances of PartnerLogo just follow the same process from that slide). If you have any issues, please submit a feedback on the Best Practices portal.

Tailor the presentation for the needs of your specific implementation.

## Slide 4

FAQs

PLEASE REMOVE THIS SLIDE BEFORE PRESENTING

How can I provide feedback on this asset or other parts of the Best Practices portal? The Best Practices portal has several feedback buttons throughout, you can submit feedback using the thumbs up/thumbs down buttons. Click on those icons, and a small form will appear for you to leave specific feedback regarding the asset you are accessing.

If we use this deck or slides from this deck, are we breaking any copyright?  No. We designed this deck to be used by our whole ecosystem.

What should I do if I don’t need all the content contained within this, or other assets?  You can either hide or delete the slide(s). You may also want to move the slide(s) to the end of the presentation, review it when you have finished updating the asset for your own use, and then deleting any content you don’t need. Remember to regularly check the Best Practices portal to make sure you have the most up-to-date asset.

## Slide 5

Adding your Logo

PLEASE REMOVE THIS SLIDE BEFORE PRESENTING

To provide credibility to ServiceNow documents, the ServiceNow and your logo should be visible, but not domineering.

Click View &gt; Slide Master &gt; Slide &gt; Select Page 1

What to do:

Download logos from the Brand Center site.

Scale logos to an exact height of 0.45cm.

Place your logos after the ServiceNow logo, divided by a grey bar.

The same rule should be applied when more than one partner logo is required.

What not to do:

Do not scale logos beyond 0.45cm height.

Do not stack ServiceNow and Partner logos.

## Slide 6

Deleting the PartnerLogo

PLEASE REMOVE THIS SLIDE BEFORE PRESENTING

What to do:

Click ‘View’ at the top of the screen.

Click on ‘Slide Master’ - this takes you to the slide master for the slide you are looking at.

Scroll up to Slide 1 in the master view. You may have to pull out the view on the left slide, so you can see all the slides. Slide 1 will be the slide that looks larger than all the rest. It’s kind of the master of that group of slides.

At the bottom of the slide there are 2 shapes that you can highlight. A small vertical grey line and the PartnerLogo text.

Once highlighted, simply press delete. That should remove the PartnerLogo from the slides.

1.

2.

3.

4.

5.

## Slide 7

Housekeeping

## Slide 8

We’ll aim to start and finish on time

Breaks will be taken as needed; approximately every 1-2 hours

Please return from breaks and lunch promptly; if late, please catch-up during breaks or after the workshop

If you are comfortable, please keep your Webcam on

Please let the host know if you need to leave the workshop, via the chat

Avoid temptation to multitask while in the workshop

More than 3 second’s silence = concurrence with the point made

All phones on vibrate and make sure you mute your microphone when not contributing to the discussion

Maintain a positive atmosphere – everyone’s ideas are valued

Please wait for one speaker to finish. Feel free to raise your (virtual) hand if you would like to make a point

Discussion topics needing greater detail will be recorded in a “Parking Lot” for later resolution

Everyone’s ideas are valued

Have fun\! 

Time

Presence

Collaboration

Housekeeping

For virtual/hybrid workshops. Update depending on which application you are using to run your workshop

### Speaker notes

\*\* USE THIS SLIDE IF DELIVERING THE WORKSHOP IN A VIRTUAL OR HYBRID FORMAT \*\*

8

## Slide 9

We’ll aim to start and finish on time

Breaks will be taken as needed; approximately every 1-2 hours

Please return from breaks and lunch promptly; if late, please catch-up during breaks or after the workshop

In the case of an emergency…..

All phones on vibrate. Please leave the room if you must take a call

Avoid temptation to check email. Please keep laptops closed unless taking notes or working on something for the Workshop

More than 3 second’s silence = concurrence with the point made

Maintain a positive atmosphere – everyone’s ideas are valued

Active participation and listening

Discussion topics needing greater detail will be recorded in a “Parking Lot” for later resolution

Everyone’s ideas are valued

Have fun\! 

Time

Presence

Collaboration

Housekeeping

For in-person workshops. Update depending on your location, e.g. you may have to add fire exit information

### Speaker notes

\*\* USE THIS SLIDE IF DELIVERING THE WORKSHOP IN A MORE TRADITIONAL MEETING ROOM ENVIRONMENT \*\*

9

## Slide 10

Agenda

## Slide 11

\{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Introductions

Objectives

Major Incident Management process overview

Roles and responsibilities

Core process configuration

DEX Integration

Outages

On-Call Scheduling and Notify

Agenda

Update this slide based on your workshop content

## Slide 12

Introductions

### Speaker notes

12

## Slide 13

Name

Role

Involvement in the project/implementation

Experience with ServiceNow and/or other related experience

Introductions

### Speaker notes

During introductions, include experience level with ServiceNow, the product/capability, and expectations from the workshop

If the workshop is being held in-person, and there are a large number of participants, consider writing people’s names on card and standing in front of each individual

13

## Slide 14

Objectives

## Slide 15

Objectives

Approach

Present ServiceNow’s out-of-the-box Major Incident Management process, which is the basis for platform health, usability, and ease of upgrades. The out-of-the-box core process is intentionally simple and lean

Review the Process Guide to prepare for the configuration workshop

Walk through the Major Incident Management process as it works technically within ServiceNow

Define a set of stories to capture configuration decisions necessary for go-live

Workshop objectives and approach

Update with the product/capability being discussed

### Speaker notes

Explain and discuss

Explain that the purpose of this workshop is, specifically, to identify the stories required to configure the product so that the customer can go live with it and achieve expected value quickly and efficiently

The customer has purchased ServiceNow because they are not happy with their old tool and therefore, we are not going to build their old tool again into ServiceNow.

       We will not discuss how their old tool or process works. We also do not ask the customer to come with a list of their requirements

Explain that the workshop is totally focused on how ServiceNow offers the Incident Management process and includes recommendations and guidance from BPCs and TCs to ensure that the customer does not build a solution that will prevent their successful evolution and maximum benefit from ServiceNow in the future

Explain that the customer dictates the outcomes to be achieved by the process, but ServiceNow (tool and team) determines how those outcomes are achieved

15

## Slide 16

What are your high-level business objectives and strategic drivers that must be considered when configuring the Major Incident Management process?

Common examples:

Manage high impact incidents more efficiently

Route the right work to the right person

Streamline collaboration across the enterprise

Enable visibility to prioritize work and monitor performance against service level agreements (SLO/OLA/SLAs)

Business objectives

If known, update with specific examples for the product/capability

### Speaker notes

Explain and discuss

Explain that although we do not walk through the customer’s existing process or ask for a list of requirements, we do need to understand the high-level business objectives or strategic drivers as this will inform decisions taken during the workshop

Decisions to make

Identify and document the business drivers that will impact functional process decisions

16

## Slide 17

ServiceNow supports common industry approaches to Major Incident Management by providing our leading practices as an out-of-the-box sub process to:

Identify and verify Major Incident candidates

Assign to appropriate teams to investigate and diagnose Incidents

Manage similar Incidents to capture impact

Utilize communication plan to disseminate information

Create outages to communicate and measure

Determine ownership for Resolution

Monitor, track, and analyze service levels and improvement

Major Incident Management overview

### Speaker notes

Explain and discuss

Explain that ServiceNow Major Incident Management can support all common industry frameworks and practices such as ITIL and IT4IT

Explain that while ITIL is still a core framework within the industry it is not the only framework to drive/influence the ServiceNow Leading Practice design

Explain that newer frameworks and a drive for a more Agile DevOps approach to ITSM are the emerging market trends. As a result, ServiceNow is focusing on supporting these trends rather than being tightly aligned to the old ITIL framework

ServiceNow is intended to be framework agnostic

17

## Slide 18

Major Incident Management Process Overview

## Slide 19

A sub-process occurring within Incident Management often where Priority = Critical

Incidents are coordinated by a single individual (Incident Manager) who will manage the situation through to resolution

Incident tasks are used to allow multiple support groups and users to work on the resolution concurrently

Incident Managers communicate regular updates on the state of the incident through the lifecycle

Incident Managers review the incident after it has been resolved to confirm lessons learned and follow up actions to prevent reoccurrence

Alert management rules and flows can create a major incident candidate or a major incident

Major Incident Management

### Speaker notes

Explain and discuss

Explain that major incidents are the only type of incident that is directly coordinated by a manager and therefore handled differently

Explain that tasks are used in major incidents so that the incident manager can assign work to the different support teams that are required to help resolve the issue

Plugin to be activated:

Major Incident Management (com.snc.incident.mim)

Event Management (com.glideapp.itom.snac)

This activates the Alert Management Rules shipped as active=false

Create Major Incident

Create Major Incident Candidate

The Subflows required to trigger the creation of major incident and major incident candidate are also activated

Create Major Incident from Alert

Create Major Incident Candidate

19

## Slide 20

Roles and responsibilities

## Slide 21

Roles and responsibilities

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Roles | Responsibilities |  |
| Process Owner | The MIM Incident Management Process Owner’s primary objective is to own and maintain the MIM Incident Management process. The role of the Process Owner is usually a senior manager with the ability and authority to ensure the process is rolled out and used by all stakeholders. |  |

Responsible for:

Defining the overall mission of the process

Establishing and communicating the process mission, goals, and objectives to all stakeholders

Documenting and maintaining the process and procedures

Resolving any cross-functional (departmental) issues

Ensuring proper staffing and training for execution

Directing the MIM Incident Management roles

Ensuring consistent execution of the process across the organization

Monitoring, measuring, and reporting on the effectiveness of the process to senior management

Continually improving the process

| Column 1 | Column 2 |
| --- | --- |
| ServiceNow Role | No specific ServiceNow role |

## Slide 22

Roles and responsibilities

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Roles | Responsibilities |  |
| Major Incident Manager | Concerned entirely with major incidents. They are the coordinator responsible for getting a major incident resolved as soon as possible and ensuring that it does not reoccur. |  |

Responsible for:

Coordinating the investigation and resolution of a major incident

Assigning tasks to other teams to investigate and resolve the major incident

Initiating the major incident process by assessing and approving major incident candidates or creating a major incident

Rejecting a major incident candidate

Demoting a major incident after it is accepted so that the incident can be handled as a regular incident

Maintaining ownership and accountability for the lifecycle of the incident

Identifying the users and groups to be involved in the resolution activities

Managing communications during the major incident to both business and IT stakeholders

Creates ad-hoc communication plans and tasks

Edits a communication plan that is attached to a major incident

Conducting a review of the major incident once resolved

Closing a major incident

| Column 1 | Column 2 |
| --- | --- |
| ServiceNow Role | The major\_incident\_manager role is required in ServiceNow |

### Speaker notes

The Major Incident Manager is engaged in the process by changing the Assignment group field to the Major Incident Management group and the Assigned to field to the correct Major Incident Manager.

22

## Slide 23

Roles and responsibilities

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Roles | Responsibilities |  |
| Communications Manager | The Communications Manager is concerned entirely with the setting of the communications for major incidents.  |  |

Responsible for:

Managing communications for major incidents and communicating with all stakeholders.

Creating ad-hoc communication plans and tasks.

Editing a communication plan that is attached to a major incident.

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| ServiceNow Role | The communication\_manager role is required in ServiceNow to create plans |  |
| Incident Manager | The Incident Manager’s primary objective is to enable efficient restoration of service to minimize business disruption.  |  |

Responsible for:

Managing incident properties and major incident trigger rules.

Creating and editing communication plan definitions.

| Column 1 | Column 2 |
| --- | --- |
| ServiceNow Role | incident\_manager |

### Speaker notes

23

## Slide 24

Roles and responsibilities

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Roles | Responsibilities |  |
| Service Desk Agent (1st Line) – Major Incident Management | The Service Desk Agent (SDA) is the front line or face of the Technology organization. They will be the people the rest of the organization interacts with most commonly and this will typically be when users are experiencing some sort of technology related issue.  |  |

The Service Desk is likely to be the first team to be aware of a major IT incident.

Responsible for:

Recording, ownership, monitoring, tracking, and communication about incidents

Escalating incidents to IT support

Communicating updates to the end users

Updates to portals and / or phone message

Status updates to resolution times

Workarounds that may have been implemented

The Service Desk Agent is engaged in the process by setting the Assignment Group field to the Service Desk group and the Assigned to field to the individual SDA.

| Column 1 | Column 2 |
| --- | --- |
| ServiceNow Role | Service Desk Agents will require the sn\_service\_desk\_agent role |

### Speaker notes

24

## Slide 25

Roles and responsibilities

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Roles | Responsibilities |  |
| IT Support Teams (2nd / 3rd Line) | The IT Support Teams provide the key technical skills and knowledge to implement a work around to resolve the major incidents. They are responsible for the diagnosis, technical resolution and workaround execution. Major incidents can be quite complex and therefore multiple IT support teams maybe involved. |  |

Responsible for:

Investigating and diagnosing incidents

Developing workarounds

Resolving and recovery of assigned incidents

Creating incidents after detecting a service failure or quality degradation or a situation that may result in one

| Column 1 | Column 2 |
| --- | --- |
| ServiceNow Role | SME will require the itil role, or sn\_incident\_read and sn\_incident\_write roles. |

### Speaker notes

25

## Slide 26

Core process configuration

## Slide 27

Service Operations Workspace &amp;

Major Incident Management

Major Incident Management is a capability supported by Service Operations Workspace v5 and later

This workshop presentation assumes the use of SOW v5

### Speaker notes

Explain and discuss

x

Decisions to make

x

27

## Slide 28

Identify Major Incident

A Major Incident (MI) is a high impact and high urgency incident that results in significant disruption to the business. A major incident demands a response beyond the routine incident management process.

Given the urgency of the situation, a well-coordinated response process is required to accelerate the resolution and minimize the business impact.

The first step is to identify a potential major incident. These incidents are classified as major incident candidates and reviewed by major incident managers, who initiate the major incident response process.

### Speaker notes

Explain and discuss

Explain what a major incident candidate is and why it is part of the process

Explain that major incident candidates can be part of the core incident record or a separate record related to the incident record

Explain that major incidents can be created without the need for a candidate directly in the navigation menu using the Create Major Incident option if they have the major\_incident\_manager role (only in the classic UI)

Explain how a Major Incident Manager will review and action the candidate proposal by accepting or rejecting

Explain that a major incident can be demoted after acceptance

Decisions to make

x

28

## Slide 29

Major Incident candidates

## Slide 30

Identify major incident - Trigger criteria

Major incidents can be automatically created based on predefined criteria.

Decision Required:

Agree on the customer specific trigger criteria

Be careful not to create criteria that result in a large proportion of total incidents becoming major incidents.

This devalues the major incident process and creates a bottleneck requiring an incident manager review for everyone. E.g. it would not be advised to make all P1 and P2 incidents major incidents

Major incidents are directly managed and coordinated by a Major Incident Manager using the existing Assignment group and Assigned to fields.

### Speaker notes

Explain and discuss

Explain how trigger criteria works. Note: navigate to classic UI: All -&gt; Service Operations Workspace -&gt; Configurations -&gt; Major Incident Management

Discuss how the customer identifies a major incident – is it simply based on priority field or are there other factors

see https://docs.servicenow.com/csh?topicname=configure-mim-trigger-rules-sow.html&amp;version=latest

Decisions to make

Agree on the customers specific trigger criteria

Recommend

Customers should be careful not to create criteria that results in a large proportion of total incidents becoming major incidents. This devalues the major incident process and creates a bottleneck requiring an incident manager review for everyone. E.g. it would not be advised to make all P1 and P2 incidents major incidents

30

## Slide 31

After a major incident candidate has been identified, the Major Incident Manager assesses the incident to understand its nature. The manager accepts or reject a major incident candidate. This action sets the major incident state to accepted or rejected.

There is a property that determines the major incident promotion process. The options include the following:

Promote candidate to a major incident

Promotes the candidate to a major incident.

Create a major incident from the candidate

Creates a new major incident and associates the candidate as a child record.

Promote vs create major incident

Decision Required:

Agree on whether the incident candidate should be a separate record or mark an existing incident as a major incident candidate

The recommendation is to set the property value to Promote candidate to a major incident

### Speaker notes

Explain and discuss

Explain what a major incident candidate is and why it is part of the process

Explain that major incident candidates can be part of the core incident record or a separate record related to the incident record

   Explain that major incidents can be created without the need for a candidate directly in the navigation menu using the Create Major Incident option if they have the       major\_incident\_manager role (only in the classic UI)

Explain how an Incident Manager will review and action the candidate proposal by accepting or rejecting

Explain that a major incident can be demoted after acceptance

Decisions to make

Agree on whether the incident candidate should be a separate record

Recommend

There is a property (sn\_major\_inc\_mgmt.com.snc.incident.min.major\_incident\_creation) to determine whether a major incident candidate is a record in it’s own right or just part of the standard incident record.

Major incident creation

Determines how a major incident is created from a candidate.

Promote candidate to a major incident – The candidate is promoted to a major incident.

Create major incident from candidate – A new incident is created from a candidate as a major incident. The candidate is associated with the new incident as a child.

This is defaulted to keep as a single record and store the candidate information in the Major Incident form section. This is the recommended approach to reduce the number of different records users must interact with in a single process and to remain as lean as possible

Baseline functionality does not include the ability to propose a new candidate from a closed incident

Optional

Add matching info message to highlight when a candidate has been automatically created based on trigger conditions

Improve the info message to the following text: “INC0000xx has been proposed as a major incident candidate. This will be reviewed by a Major Incident Manager.”

31

## Slide 32

Major incidents can be created manually or automatically from an alert using Alert Management Rules. Based on pre-defined rules, the major incident state is set to Proposed or Accepted.

By default, two alert management rules—Create Major Incident and Create Major Incident Candidate—are available for major incident management. Both of these rules are disabled by default. Activate these alert management rules and update alert filter conditions to control when major incidents (and candidates) are created. Additionally, add or modify the remediation workflows and sub-flows.

Alert rules can be found and configured by System Administrators by navigating to Event Management &gt; Alert Management Rules.

Note: The Event Management (com.snc.service-watch) and Alert Rules Management (sn\_em\_arm) plugins must be activated to use Alert Management Rules.

Major incidents created by Alert management

## Slide 33

Major incident assignment

Decision Required:

Agree on whether a dedicated Major Incident Group or existing assignment group will be used to manage major incidents.

Major incidents are directly managed and coordinated by Major Incident Manager using the existing assignment group and assigned to fields

When a major incident candidate is identified, a push notification is sent to the Major Incident Management group. Assignment of a major incident can be automated at the time of proposal or promotion using the business rule Major incident assignment

Consideration should be made to staffing and scheduling to ensure major incidents can be managed in a timely manner (e.g. on-call scheduling)

### Speaker notes

Explain and discuss

Should a specific group, or an existing group, be responsible for working proposed and promoted candidates

Group configuration to support major incidents

Ensure that staffing and scheduling considerations are made

Decisions to make

Agree on the handling of proposed and/or promoted major incidents

The major incident is assigned to a group based on the property sn\_major\_inc\_mgmt.major\_incident\_management\_group, and is assigned to an individual if the On-call scheduling plugin is enabled and a rota is defined for the group.

Recommend

xx

33

## Slide 34

Major incidents are directly managed and coordinated by a Major Incident Manager

When considering who should be an incident manager take time zone and geography taken into account

Major incident managers

Decision Required:

Agree on who will be Major Incident Managers

### Speaker notes

Explain and Discuss:

Navigate to All &gt; Service Operations Workspace &gt; Configurations -&gt; Major Incident Management

Decide who should be assigned as Major Incident Manager

34

## Slide 35

Major incident impact

Impact panel shows key information relating the Major Incident to affected CIs , Impacted Services, Assets and Locations

### Speaker notes

Explain and discuss

Affected CIs, Impacted Services/CIs, Assets can be added manually by using Add UI button

Impacted Services/CIs can be auto-populated using Refresh impacted services UI action

Decisions to make

x

Recommend

x

35

## Slide 36

Incident communication plans

Decision Required:

Agree whether the customer would like to use communication plans

Agree whether the out-of-the-box communication plans are acceptable

Agree any new Communication Plans that are required

Timely communication during a major incident is crucial to ensure that IT teams, business stakeholders, end users, and customers are informed about the impact and progress of the incident

An occurrence of a major incident requires a comprehensive communication plan that includes who is contacted, the methods and frequency of communication, messaging, and so on

The communication plan enables the incident response team to focus their efforts on the resolution process and sets expectations for any future communications

You can have multiple communication plans based on the type, priority of the incident, or the target audience. For example, communication plans for a P1 major incident could have more frequent communication than a communication plan for a P2 major incident

### Speaker notes

Related Stories

Configure communication plan definitions

Explain and discuss

Explain that Communication Plans allow a set of predefined tasks for communication activities to be applied to a major incident allowing Incident Management process owners to determine exactly how they want major incident communications to be conducted as standard

Explain that each of these plans automatically generates a set of communication tasks visible from the incident record

Explain that it is possible to create adhoc Communication Plans for major incidents where a non standard communication approach is required

Can select a recipient list while sending out communication

Subject field can have scripted values with or without pre-defined templates

Decisions to make

Agree whether the customer would like to use communication plans

Agree whether the out-of-the-box communication plans are acceptable

Agree any new Communication Plans that are required

36

## Slide 37

Incident communication plans

Communication plan definition

Decision Required:

For each communication plan agree the communication task definitions and communication contact definitions

### Speaker notes

Related Stories

Configure communication plan definitions

Explain and discuss

Explain that Communication Tasks are the individual tasks used to complete the Communication Plan as discussed in the previous slide

Create plan definitions

=================

Communication plan definitions outline the task you have to communicate about, the target audience, and the message, method, and frequency of communication.

Create plan definitions to meet your process requirements for major incident communication.

Add contacts

===========

During a major incident, it is crucial to keep impacted users, business stakeholders, and incident response teams informed. You can Define the target audience for a communication plan by configuring communication contact definitions.

Add tasks

========

While a major incident is in progress, it is essential to share known information and tailor it to different audiences. Communications should be sent to users periodically as the incident progresses through its life cycle and as needed. Different communication and collaboration activities for a plan can be defined using communication tasks.

Communication task definitions automate incident communications by creating different communication and collaboration activities along with method and frequency of communications.

Create task definitions to automate communications for a major incident.

Add channels

===========

Communication channels are the means through which people in an organization communicate. Defining communication and collaboration methods in advance makes it easier to notify users and get incident response teams to collaborate during an incident. Communication channels such as Conference, Email, and SMS are pre-configured in the base system.

During a major incident, the last thing you want the incident response team to worry about is defining the communication channels or crafting messages for different channels. Predefine communication channels and messaging templates so that real-time dynamic information can be shared with users, stakeholders, and support teams.

An admin user can define additional channels or deactivate the existing ones. After they are configured, these communication channels can be added to the communication tasks.

Note: The Conference and SMS channels are available only when the Notify plugin is activated.

Decisions to make

Agree individual tasks required per each Communication Plan

Recommend

It is useful to make the Description field mandatory in order to ensure there is enough information to complete the task properly

Ensure the Close notes field is mandatory to set the State field to Closed

37

## Slide 38

Communications

Communication tasks are initiated from the workspace.

Status of the communications tasks

Task Overview

Task record

### Speaker notes

Explain and discuss

Explain what the Communications tab is used for

Explain how emails can be created and sent from within the SOW

Explain that Technical Communications are used to communicate with IT or technical groups and users involved in resolving the incident

Explain that Internal Stakeholder Communications are used to communicate with business stakeholders who have a vested interest in the service being restored

Explain that End User Communications are used to communicate with all employees or impacted users of the service

Explain that these 3 types of communication plans are examples provided out-of-the-box and customers can configure whatever plans work for them

38

## Slide 39

Adhoc communication

You define communication plans for your organization to provide pre-configured plans for major incident communication and collaboration activities. However, in some cases you might need adhoc communication.

For example, you might initiate an adhoc call with other technical resources or send an escalation notification that is not in the plan definition to IT executives.

Decision Required:

Agree on when adhoc communications should be used

For adhoc communications, you can either create a new communication plan or add a task directly in SOW

### Speaker notes

Explain and discuss

When you create an ad-hoc task enter a short description of the communication task, select channels, add the participants and set the communication frequency.

For adhoc conference calls, you can follow a similar process from the Conference tab.  You can create either a new communication plan or add a task with the communication channel is set to Conference.

Decisions to make

x

Recommend

x

39

## Slide 40

Working with major incidents - Incident tasks

## Slide 41

Playbooks

You can create a new playbook or clone an existing one in Process Automation Designer

Once done, come back to the SOW Admin Center and assign the playbook to MIM

Agents can use Playbook Experience to update records, upload attachments, and complete tasks across multiple workflow activities.

### Speaker notes

Explain and Discuss

Explain what playbooks are

Recommend out of the box playbooks for MIM

Explain how to use playbooks

https://docs.servicenow.com/csh?topicname=assign-playbook-mim-sow.html&amp;version=latest

41

## Slide 42

Collaborate

Collaborate with the required stakeholders during the various phases of a major incident to discuss and resolve the incident quickly. You can initiate a chat or make conference calls using a service provider to communicate with stakeholders.

Chat can be a sidebar discussion or MS Teams Chat if enabled

See docs for further information

## Slide 43

The major incident management process provides a unified system for resolving major incidents through the following process:

Identify major incidents

Associate pre-defined communication plans

Coordinate resources needed to troubleshoot

Using this process allows incident response teams focus on fast and effective incident resolution.

You can submit a change request to apply the fixes and create a problem to record the root cause.

Resolve Major Incident

Action Required:

Ensure the process is understood by all involved parties

### Speaker notes

Explain and discuss

x

Decisions to make

x

Recommend

x

43

## Slide 44

Once the incident has been resolved, a review should take place to establish what lessons can be learned for the future.

To streamline the process, a post-incident report is created when an incident is resolved. The post-incident report can be reviewed and updated during the review process before it is shared the report with stakeholders.

This report will compile information from the Post Incident Report tab fields plus other data already captured in the ticket

This report can be exported to PDF for dissemination

Post-incident review

Decision Required:

Agree whether the customer would like to use this feature

Do you want to be able to preview the report?

What the contents of the report should be?

### Speaker notes

Explain and discuss

After the major incident is resolved, a post-incident review is conducted. Its purpose is to analyze the incident, and understand what can be done to prevent a similar incident in the future. This review also provides an opportunity to evaluate the incident response process and identify areas for improvement.

The post-incident report provides a summary of the incident, findings, and resolution information, including change requests and problem records created. A timeline of activities is available in the report, which can be edited by the major incident manager to include important activities, for example, actions taken to resolve an incident.

see https://docs.servicenow.com/csh?topicname=asso-new-post-incident-report.html&amp;version=latest

see https://docs.servicenow.com/csh?topicname=review-update-pir-mim-sow.html&amp;version=latest

Explain that a post incident report can be automatically created when a major incident is at Resolved state

Explain that this report will compile information from the Post Incident Report tab fields plus other data already captured in the ticket

Explain that the report can be exported to PDF for dissemination

Users with the itil role can view and download a PDF version of the post-incident report.

An admin can configure the post-incident report by updating the UI page post\_incident\_report

Decisions to make

Agree whether the customer would like to use this feature

44

## Slide 45

Make changes to the default event sources and format of timelines used in all post-incident reports for major incidents.

Select the data sources to use for timeline events. These sources will be used in the initial generation of the timeline.

E.g., Incident milestones, order of events, event grouping, and event time period interval

Post-incident review - timeline

Action Required:

Determine what settings are required in the PIR timeline

### Speaker notes

Timeline configurations:

Navigate to All-&gt; Service Operations Workspace -&gt; Configurations -&gt; Major Incident management

45

## Slide 46

When a major incident is resolved, callers from the parent and related child incidents are notified to validate the resolution. Additionally, a communication can be sent to all stakeholders in accordance with the communication plan.

Closing a major incident does not automatically close all related child incidents; individual callers must validate and close their own incidents. The only exception is the major incident, or the parent record, which can only be closed by the major incident manager.

A major incident is not automatically closed based on the incident auto closure property.

Close major incident

Action Required:

Ensure the process is understood by all involved parties

Do you want to auto-close major incidents, and under what circumstances

### Speaker notes

Explain and discuss

x

Decisions to make

You can configure the business rule incident auto close to change the behavior based on any process requirements.

Recommend

x

46

## Slide 47

Notifications

The baseline implementation of Major Incident Management includes several notifications.

These can be used or new ones created depending on the requirements.

A push notification message is also configured for this notification.

With the subscription-based notifications feature, users can subscribe to notifications of interest or unsubscribe from notifications they do not want to receive. Before users can manage the notifications they receive, administrators must create email notifications that users can subscribe to. Administrators can also make subscription-based notifications mandatory, so that users cannot unsubscribe from them.

Decision Required:

Determine what notifications are required – When / To Who / What

Do you want users to be able to un-subscribe from notifications

### Speaker notes

Explain and discuss

Email notifications:

Navigate to All -&gt; Service Operations Workspace -&gt; Configurations -&gt; Major Incident management

Decisions to make

What notifications do you want sent for major incidents

Do you want users to be able to un-subscribe from notifications

Recommend

x

47

## Slide 48

Major Incident Overview

The Major Incident Overview is a centralized Performance Analytics dashboard that tracks all aspects of major incidents.

There are 2 versions

normal

premium

Premium version requires activation of Performance Analytics – Content Pack for Major Incident Management

ITSM Pro

Recommendation:

If licensed it is recommended to activate the content pack for MIM

### Speaker notes

Related Stories

Configure major incident overview

Explain and discuss

Explain the overview purpose

It will be necessary to jump into a demo of the tool at this point to show the customer all the available tabs, gauges etc.

see https://docs.servicenow.com/csh?topicname=major-incident-overview.html&amp;version=latest

Decisions to make

Agree whether the customer wishes to the use the overview

Agree any alterations to the overview

Recommend

There should be minimal need for the customer to make adjustments, as the process is thoroughly designed to function well right out of the box. It would be more beneficial for them to go live and use the process for a while before deciding if any changes are necessary.

48

## Slide 49

DEX Integration for MIM

## Slide 50

DEX Integration for MIM

MI Managers can send communications via DEX to end-users impacted by a Major Incident, keeping them closely informed and enabling quick resolution through interactive interaction.

Streamlined Bidirectional Communications

End-Users: are kept in the loop via their Desktop Assistance on critical issues

3

1

Impact Insights: for agents when a Major Incident occurs regarding which and where users are affected

2

Agent Communications: to end-users simplified via surfaced insights, recommended actions, and playbooks

### Speaker notes

Explain and Discuss

===============

Lower MTTR for Major Incidents due to the enhanced communication channels from SOW to DEX Desktop clients

50

## Slide 51

MIM and outages

## Slide 52

An outage can be logged against a specific CI to track its impact.

Outages can be degradations rather than a full loss of service

Outage times can be set before the incident was logged to track the true duration

Logging outages

Decision Required:

Agree whether the customer would like to use this feature

### Speaker notes

Explain and discuss

Explain how the outage feature works

Explain that it is several clicks through related records from the incident to create and see this data

Explain that on Major Incidents outage information is prominently displayed on the Workbench and new outages can easily be created from here

Decisions to make

Agree whether the customer will use this feature

52

## Slide 53

Logging outages

Decision Required:

Agree on for form fields and whether they should be mandatory or not

### Speaker notes

Related Stories

Configure outage record

Explain and discuss

Discuss the fields available on the Outage record.

Why outages are important to Service Portfolio Management (availability KPI)

Decisions to make

Agree which fields are mandatory

Agree any fields to be removed

Agree any new fields to be added including format and logic

Recommend

Add the Outages related to all CI Classes the customer will use

Add Details (existing field) to the form

Improve the layout of the form as per story acceptance criteria

Make all fields mandatory except Details (Duration is read only)

Make the Duration field read only

53

## Slide 54

MIM and On-call Scheduling

## Slide 55

From the SOW, you can view the roster and escalation details for an on-call group

Contact the on-call person directly

See the On-Call Process Guide for further details

Experts on-call

Decision Required:

Does the customer want to use On-Call Scheduling?

### Speaker notes

Explain and discuss

From the SOW, the Major Incident Manager can quickly identify who is on call for a group.

Click on a name to view the profile

Note:

Notify (or some other custom telephony integration) is required to send SMS notifications or call people directly from ServiceNow

Without Notify and Escalation Triggers defined, On-Call Scheduling is basically just a visual aid.

Conference calling through Twilio and Zoom for Incident and Major Incident available via store release

Slack is offered as a communication method

Decisions to make

Does the customer want to use On-Call Scheduling?

Recommended

If the customer does not want the additional cost of a telephony integration, then On-Call Scheduling can still provide value by providing important information in a highly visual and intuitive way

55

## Slide 56

It’s a wrap

## Slide 57

Next steps

1

Create stories based on approved configurations and start to form the backlog

2

Review stories and provide feedback or acceptance of the stories

3

Update the Process Guide based on specific decisions agreed today

4

Review the updated Process Guide and provide feedback or acceptance of the processes

5

Configuration can begin

### Speaker notes

57

## Slide 58

EMPOWERING DIGITAL TRANSFORMATION

Now Learning

Fundamentals

On Demand

Live with Instructor

Manage Certificates

Knowledge

Yearly Conference

CreatorCon

Meetups

Now Learning Live

Link

Now Support

Report an Issue

Knowledge Base

Known Error Portal

Manage Instances

Technical Support

Link

Meet and Learn

Self-Help

Train and Certify

Link

Now Community

Forums

Articles

Blogs

User Groups

Idea Portal

Connect

Link

Best Practices

Workshop Decks

Process Guides

Preparation Guides

Starter Stories

Implement

Link

ITSM Products

Product Insights

Product Benefits

Plans &amp; Packages

Resources

Gain Insights

Link

Product

Documentation

Admin Guides

Release Notes

Detail Product Information

Product Overview

Understand

Developer Portal

App Building Guides

Personal Instance

Coding Best Practice

Build

Link

Additional Content

ServiceNow.com

Blogs

Case Studies

Resources

Spotify Podcasts

TechBytes

Community

Finding Water

Customer Connection

YouTube

NowSupport

Community Live Stream

ServiceNow Store

Out of Band Feature Releases

3rd Party Apps/Solutions

Integrations

Innovation Labs

Link

Content For Customer Success

### Speaker notes

58

## Slide 59

Thank you

### Speaker notes

59
