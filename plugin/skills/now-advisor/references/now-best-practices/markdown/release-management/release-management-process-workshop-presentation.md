# Release Management - Process Workshop

Source: https://mynow.servicenow.com/now/best-practices/assets/release-management-process-workshop

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `13e57457ed8dc531990d4fb520058d71404432697f256c3613dd9495750cc89b`

## Slide 1

Release Management

Process Workshop Presentation

December 2025

Asset number: 0001361

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

Release Management overview

Release Management process

Release Management roles

Use cases and examples

Enable Release V2

Release Management configuration decisions

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

Release Management overview:

Release Management goals

Release Management concepts

Relationship to other processes

Release Management process

Release roles

Release use cases and examples

Release Management configuration discussion

Release Management discussion overview

## Slide 16

Release Management overview

Key concepts and definitions

## Slide 17

Definition

Goal

A release is defined as one or more changes to an IT service that are built, tested and deployed together. Release management is the process responsible for controlling the lifecycle of releases to minimize the risk of disruption to IT services.

The goal of the release management process is to enable beneficial changes to be made with minimum disruption to business operations, thus ensuring that the best possible levels of service quality and availability are maintained.

This is accomplished through a formal approach that plans, schedules and controls the build, test, and deployment of releases to deliver new functionality required by the business while protecting the integrity of existing services.

Release Management – Key definitions and goals

## Slide 18

Release Management – a conduit for IT work

New investments

(Other terms used: Build, Project, New development)

Ongoing Operations

(Other terms used: Run, Maintenance, O&amp;M)

DEMAND

CHANGE

PROBLEM

IDEA

PROJECT

Agile / SAFe

Project

Stories

Epics

Enhancement

Changes

RELEASE MANAGEMENT

INCIDENT

ENHANCEMENT

A ‘generic’ request can be used to initiate work that is funded ongoing maintenance

A group of changes can be part of a single release or individual changes can be deployed

Release uses enterprise governance processes such as Change Advisory Board (CAB), Architectural Review Board (ARB), to ensure integrity of production environment.

Production Systems

A project, epics, and features can be part of one or many releases

REQUEST

## Slide 19

Ideation to delivery

Application Portfolio

Compliance Projects

Strategy and Goals

Demand

Strategic

Product, Program, Project, Epic

Operational

Change

Release

Waterfall, Agile, Hybrid

Idea Portal

ITSM

Optimize portfolio inline with Priorities &amp; Constraints

Align to Strategy &amp; Goals

Estimate Demand

RTB

Ensure only right ideas proceed

 Feedback Loop

Fast Track

Portfolio

A release is a container or a box that bundles all work done for a product(s)/service(s) together to be built, tested, and deployed on sub-prod/prod environments. RTB refers to “Run the Business.

### Speaker notes

This diagram helps to show the value of bringing this all together on one platform. Something no other vendor can do.

As you can tell this all starts with what the business needs.

We have direct insight into what capabilities support the businesses strategy and all the applications and infrastructure that support those capabilities.

Where any gaps exist we are the system of engagement for the business to point out gaps or areas of enhancement.

This is the first step in working where it matters the most and redirecting spend to critical applications.

Coupled with all of the operational data in our platform we can help prioritize the portfolio and select the optimal investments.

Strategic demand is driven through product or project workstreams while operational demand is managed in the operational products – the key value here is that we have an overall perspective of all work and the resources that are involved in the work whether it is incident/problem/change or development or project work – or even a mix of both\!

While this looks nice and pretty on a slide, it’s out ability to do this over and over again in an automated and consistent way so that you spend less time gathering data, and more time relentlessly prioritizing and sequencing demand from the business.

\[ANIMATE\] And how do we solve this? ITBM.

Our vision is to help organizations redirect spend to critical applications, work where it matters the most, and accelerate time to value so that you can shift from running to changing the business.

We do so by providing capabilities in 4 domains. IT financial management, application portfolio management, PPM and agile delivery.

19

## Slide 20

Release Management components

Key Inputs / Decisions

Release Type

Major

Minor

Maintenance outage

Release calendar

Release window

Outage plans

Release Process

Phases

Tasks

Milestones

Release Planning

Select Inputs into release

Select projects, stories, epics, incidents, problems, changes

Define the ‘right’ release process

Phases, tasks, milestones, and approvals

Conduct close activities

Deployment

Build

Assemble code packages

Design reviews

Test

Conduct required tests: Unit, Integrated, Regression

Deploy

Execute deployment

Early life support

## Slide 21

Release concepts

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Concept | Description |  |
| Release | Bundles all the work done (projects, epics, stories, enhancements, defects, problems, incidents, and so on) for products or services together and ensures that these work items are built, tested, and deployed in non-production and/or production environments. |  |
| A Release may be the parent of multiple child releases. |  |  |
| Product | Represents the hardware or software for which releases are built. A product can be linked with a Business Service in the CMDB to link it with other ITIL processes. |  |
| Release Phases | Represents the planned phases within a release, which are used to group the tasks required to carry out the release. For example, gathering requirements, planning, design, development, testing, and deployment. |  |
| Release Tasks | Represents any of the tasks required to implement a feature of a product. |  |
| Release Scope | Represents the projects, epics, stories, enhancements, and changes that are components of the release. Also known as Release Items |  |

## Slide 22

Release concepts

The Release Management application encompasses the planning, design, build, configuration, and testing of hardware and software releases to create a defined set of release components

Release management comprises a series of activities performed to ensure that the changes are applied successfully to both pre-production and product environments

Determine Release Schedule

Identify Scope

Compliance and Governance

Deployment Tools

Build Tools

QE Tools

Epic

Project

Work artifacts

### Speaker notes

22

## Slide 23

A Release may or may not be associated with one or more Products

A release may encompass the release of one or products via the particular projects or agile workstreams that deliver, enhance and maintain the products

A release may encompass the oversight management of multiple workstreams that are making non-product changes to the IT environment(s)

Pre-Orlando users of Release V2 may possibly be using the prior version’s Feature and Feature Tasks. If so, these tables are still available and simply need to be added back to the Release form

Release concepts

## Slide 24

Release hierarchy

Release

Phase A

Task 1

Task 2

Task3

Phase B

Task 1

Task 2

## Slide 25

Relationship to other processes

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 |
| --- | --- | --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Process | Relationship | Input to RM | Output of RM |  |
| Change Management | Release provides the actual execution of many changes |  |  |  |
| Release plans are a significant part of the change schedule, and they must be managed together |  | X |  |  |
| Knowledge Management | Provides pertinent input such as operational support and Service Desk information |  | X |  |
| Problem Management | Known Errors introduced as part of the release deployment are documented |  | X |  |
| Service Catalog Management | The Service Catalog item is created (or revised) to reflect information about the new (or revised) service |  | X |  |
| Configuration Management | Information from the CMDB is used to plan and coordinate the release changes to business services or CIs |  |  |  |
| Release Management provides updates to CI data to ensure that the CMDB is kept up to date | X | X |  |  |
| Demand Management / Enhancements | Approved Demands can trigger Enhancements that can be associated with Releases | X |  |  |

## Slide 26

Release Management roles

## Slide 27

Relationship to other processes

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Role | Description |  |
| Process Owner | A Senior Manager with the ability and authority to ensure that the process is rolled out and used in all departments within the IT organization. The Process Owner is responsible for:  |  |

Defining the overall mission of the process

Establishing and communicating the process mission, goals, and objectives to all stakeholders

Resolving any cross-functional (departmental) issues

Ensuring consistent execution of the process across the organization

Reporting on the effectiveness of the process to senior management

Initiating any process improvement initiatives

| Column 1 | Column 2 |
| --- | --- |
| Release Manager | The Release Manager is responsible for: |

Managing the day-to-day activities of the process

Gathering and reporting on process metrics

Tracking compliance to the process

Ensuring that release requirements have been identified and addressed

Producing and maintaining an up-to-date forecast of releases

Working closely with Change Owners to ensure that new functionality is delivered without negatively impacting existing services

Participating in the Change Advisory Board (CAB) meetings

Working with Agile Scrum Product Owners, Agile Scrum Masters, and Project Owners to insure alignment and coordination of work efforts in relation to the release

## Slide 28

Relationship to other processes

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Role | Description |  |
| Project Manager | Responsible for the initiation, planning and execution of assigned projects. In the context of Release Management, this role is responsible for  |  |

Timely and accurate status reporting via assigned Release tasks of scope-related projects

Managing coordination of project activities to align with release goals and schedules

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Scrum Product Owner | In the context of Release Management, the Scrum product owner is a likely candidate to be assigned release tasks to provide status updates and help coordinate sprint planning to align with Release goals by proper management of backlogs. |  |
| Scrum Master | As coordinator and facilitator of scrum team efforts, the Scrum Master may well be a candidate for assignment of certain Release tasks to provide coordination and updates for the release. |  |
| Release and Deployment Coordinator | The Release and Deployment Coordinator is responsible for: |  |

Developing detailed release plans, including change records

Acting as a liaison to appropriate management

Defining and managing the release communication plan

Coordinating the release build, test, and deployment activities, as appropriate

Participating in the release review prior to closure

There may be a different coordinator for each specific release

## Slide 29

Relationship to other processes

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Role | Description |  |
| Implementer(s) | This role may also be referred to as release packaging or deployment practitioner. Responsibilities of this role include the building, testing, and physical deployment (change) tasks associated with approved release components. |  |
| This role will/may include participants in Project and Agile work tasks as well as change implementors. |  |  |
| Change Advisory Board (CAB) | The CAB (typically comprised of representatives from all areas of IT, the business, and possibly 3rd party providers or suppliers) supports the assessment, prioritization, authorization, and scheduling of changes. |  |

The CAB is responsible for:

Reviewing and approving Requests For Change (RFC)

Reviewing the change schedule and providing information to help identify conflicts or resource issues

Reviewing projected service outages

Reviewing unauthorized and failed changes

| Column 1 | Column 2 |
| --- | --- |
| Business Stakeholder | A user who requires to read and retrieve data from any table of the Release Management application to generate reports |

### Speaker notes

Business Stakeholder plugin must be activated for this role to be available: https://docs.servicenow.com/bundle/rome-it-service-management/page/product/release-management/reference/business-stakeholder-role-for-release-management.html

Decision Required:

Should the role be made available?

29

## Slide 30

Use cases and examples

## Slide 31

A simple use case – ServiceNow Kingston Release

| Column 1 | Column 2 |
| --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Merge 1 – Phase | Aug 21 through 25 |
| Links Stories so that Program Management can check the status |  |
| Merge 2 – Phase | Sept 25 – 29 |
| Links Stories so that Program Management can check the status |  |
| Integration Testing | Oct 2 – 20 |
| Links problems and tests so that Program Management can check the status |  |

Runs May through November

## Slide 32

Traditional Release Management example from an anonymous customer

| Column 1 | Column 2 |
| --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Release phase 1 | 1-month period |
| Project Scope Requests are used to add projects to the “Release Train”: Scope requests are reviewed and approved by Release Management |  |
| Release phase 2 | 2-3-month period |

Project Status is tracked

RAG Status rolls up from individual projects

Project Change Requests are used to add or remove projects from the release

Dependencies are used between projects to determine Release risks

| Column 1 | Column 2 |
| --- | --- |
| Release phase 3 | 1 month |

System integration testing

## Slide 33

Enable Release V2

Workshop discussion material

## Slide 34

Licensing

SPM Standard and Pro and ITSM Standard and Pro are entitled to Release Management

Prerequisites

Dependencies: ITSM or ITBM

Plug-ins: Release Management (com.snc.release\_management\_v2): The Release Management v2 plugin is a rewrite of the original release management module. All products, releases, features, and release tasks are now planned\_task extensions, and much of the project management functionality (Gantt charts, timelines, timecards) is now shared with the release

Licensing and Prerequisites

## Slide 35

Release Management configuration decisions

## Slide 36

Release Types

Release Process – Phases, tasks, and milestones:

Integration with Build and Test toolset - Automated or manual process

Integration with processes that support deployment

Map Release Process to Release Types

Release Scope – Projects, changes, enhancements, etc.

Visualizing release scope–related lists

Release calendar configuration

Release timeline visualization

Release dashboard

Configuration decisions

### Speaker notes

Related Stories

“RM - Reports”

36

## Slide 37

It’s a wrap

## Slide 38

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

Example – next steps may be different for your specific Product/Capability workshop

### Speaker notes

38

## Slide 39

Questions?

### Speaker notes

39

## Slide 40

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

40

## Slide 41

Thank you

### Speaker notes

41
