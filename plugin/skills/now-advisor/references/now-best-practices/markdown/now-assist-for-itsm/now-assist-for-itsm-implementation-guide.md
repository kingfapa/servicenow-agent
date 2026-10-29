# Now Assist for ITSM - Implementation Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/now-assist-for-itsm-implementation-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `e7cc8be23354ae61017b172dbf39a8b5db0ad78f85d1357dea122967ee607b2d`

## Page 1

Now Assist for ITSM Implementation Guide

April 2025

© 2025 ServiceNow, Inc. All rights reserved.

## Page 2

Table of Contents

Now Assist General Product Overview

Now Assist Skills

Now Assist Framework

Now Assist User Personas

Now Assist Pre-Implementation Assessment

Summarization and Generation Skills

Now Assist Admin Console Overview

Now Assist Overview

Now Assist Features

Now Assist Experiences

Now Assist Settings

Now Assist Panel Overview

Choosing a Now Assist display experience

Implementation Insights

General Insights

Insights by Skill Group

Activating Now Assist Plugins

How to Activate a Now Assist Skill

Procedure

Chat Summarization

Overview

Before you Start

Activation

Configuration

Skill Implementation Insights

Incident summarization

Overview

Before you Start

Activation

Supported User interfaces

Configuration

Skill Implementation Insights

Change Summarization

Overview

Before you Start

Configuration

Skill Implementation Insights

Resolution Notes Generation

© 2025 ServiceNow, Inc. All rights reserved.

## Page 3

Overview

Before you Start

Activation

Configuration

Skill Implementation Insights

Knowledge Generation

Overview

Before you Start

Activation

Configuration

Skill Implementation Insights

Chat Reply Recommendation

Overview

Before you Start

Activation

Configuration

Skill Implementation Insights

Now Assist in AI Search

Overview

Before you Start

Activation

Configuration

Skill Implementation Insights

Now Assist in Virtual Agent

Overview

Before you Start

Activation

Configuration

Skill Implementation Insights

Helpful Links

© 2025 ServiceNow, Inc. All rights reserved.

## Page 4

Now Assist General Product Overview

This page provides a general product overview of the new Now Assist functionality, including,

Now Assist Skills

Now Assist Framework

Now Assist Skills

A skill delivers a feature plus the use case to the user. An example of a skill is chat summarization within a customer

workspace. Now Assist products provide features and skills that are tailored to

meet the needs of users in different workflows.

Now Assist Framework

The Now Assist framework is supported across the Now Platform. To use Now Assist skills, activate one or more Now Assist

products.

Now Assist User Personas

Now Assist provides benefits to all types of users in your organization.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 5

Developers   will leverage Now Assist to write code and quickly customize our products.

Admins   will improve app delivery, maintenance, and time to value.

Customer support   will be empathetic, personalized, and, best of all, simple.

Agents   will work faster and smarter.

Employees   get what they want when they need it.

Now Assist helps every person who touches our platform accelerate productivity, increase agility, and transform experiences.

Tip

Consider these personas and how Now Assist will benefit them. Decide which skills to deploy first to have the maximum

impact on the personas that you prioritise.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 6

Now Assist Pre-Implementation Assessment

Before proceeding to install Now Assist features, there are a number of general principles to be considered that can impact

the success of implementation and, as a result, should be regarded prior to beginning the implementation process. Pre-

implementation considerations are grouped below by skill type:

Summarization and Generation Skills

Examples: Incident Summarization, Case Summarization, Resolution Notes Generation

1.   Are there additional input fields that facilitate summarization? Adding additional fields to the summarization prompts

may increase the accuracy and completeness of summarization outputs.

2.   Are Short Description and Description fields out-of-box? Any changes to out-of-the-box fields may cause unexpected

results or failures.

3.   Are State choice values out of the box? Any changes to out-of-the-box fields may cause unexpected results or

failures.

4.   Is the Resolution workflow out-of-the-box or are there any customizations around task resolution to be aware of? Any

changes to the workflows will need to be assessed and reverted to out-of-the-box settings for the core functionality

of the plugin to work.

5.   As a part of task resolution, are there additional mandatory fields that need to be factored in to prompts?

6.   Do agents typically use UI16 and the Next Experience UI? If only one is used, which interface is used? This may impact

which experiences you wish to enable for the Now Assist features.

7.   Are there any customizations in the Next Experience Workspace that you should know about? These may impact the

skills' behavior.

8.   Are the agent roles out-of-box, or are any custom roles used that need to be factored in?

© 2025 ServiceNow, Inc. All rights reserved.

## Page 7

Now Assist Admin Console Overview

The Now Assist Admin console is separated into four sections:

Overview

Now Assist Features

Now Assist Experiences

Settings

The Home tab shows plugins that have yet to be installed. The top section lists product-specific plugins, such as IT, Customer,

and Employee Workflows. Once a plugin has been installed, it will no longer display.

On the   Home   page, scroll down to see the   Now Assist Summary and Skill Usage Metrics . These can be used to validate skills

activation and usage.

In your instance, you can access the Now Assist Admin console using   Now Assist Admin &gt; Home .

Important

Now Assist skills cannot be activated in sub-production instances.

The admin console is separated into four areas:

Now Assist Overview

The console's overview section provides summary information, such as the plugins and skills status, and provides shortcuts to

activate plugins for various workflows.

Now Assist Features

Now assist features allows you to view and configure all of the available Now Assist Skills.

Now Assist Experiences © 2025 ServiceNow, Inc. All rights reserved.

## Page 8

Now Assist Experiences

Now assist experiences allows you to view and configure the Now Assist Panel as well as the Write with Now Assist feature.

Now Assist Settings

Now assists settings provides a general overview of the plugins available, provides the ability to switch on/off the now assist

panel, and configure other settings like dynamic translation.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 9

Now Assist Panel Overview

With the Now Assist panel, you can get assistance from generative AI experiences to solve customer issues faster. Use this

conversational interface to interact with the Now Assist skills and features.

In addition to suggestions displayed in the chat window, you can use custom commands such as:

Summarize a record - Summarizes the current open record

Summarize an incident - Summarizes the open incident

Choosing a Now Assist display experience © 2025 ServiceNow, Inc. All rights reserved.

## Page 10

Choosing a Now Assist display experience

Depending on the Now Assist skill, you can configure options as to where the skill is displayed.

In Product

This will show the skill actions in the context of the current screen, form, or record. For example, a UI action may appear with

a ‘Summarize’ button to summarize an incident.

Now Assist Panel

This will allow users to use the conversational Now Assist panel to complete actions using Now Assist skills.

Tip

You can choose one or both options depending on how you would like users to experience Now Assist. We recommend

turning on both to make it as easy as possible for users to access the skills.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 11

Category   Insights

Data

quality and

preparation

Now Assist skills take advantage of the Now LLM to interpret data from your instance and

provide summarizations, recommendations and analysis. Consider the data that will be used

by Now LLM, such as common fields such as summaries, descriptions and call diary

information. What is captured in those fields today? Could it be effectively summarized? What

process improvements could you make to improve this?

Skill access   Do you wish to restrict access to Now Assist skills, for example by user role or other user criteria,

or make a skill available only when certain conditions are met? Consider the technical debt

impact of making these decisions and ensure these decisions are manageble as you scale.

Implementation Insights

Here are some key things to consider when implementing Now Assist skills and features to maximize your success. Consider

these general insights before proceeding with your implementation:

General Insights

Consider the following overall insights before and during implementation of Now Assist Skills:

Insights by Skill Group

These insights apply to specific groups of skill. These insights help you get the best results for all skills of this type.

Summarization

Complete a pre-assessment of the processes that you will be augmenting with Now Assist and the technical

configuration in the platform. Are there any customizations or configurations to workflows, field names, or labels that

may cause issues with summarization? If so, take note of these and develop a plan to either revert them out of the

box or modify the skill configuration. For example, if activating the Resolution Notes Generation skill, are you using

out-of-the-box labels and values for resolving incident/case records? If not, adjustments will need to be made to skill

configuration to accommodate such custom settings. Similarly, is the out-of-box resolve UI action being used, or are

there any customizations around this that need to be factored in? In case there are articles in the community that

guide you on how to handle such scenarios both in ITSM and CSM Now Assist implementations.

For both incident/case summarization as well as resolution notes generation skills, do agents typically enter

investigation and resolution details properly in the task records as the output NOW LLM will generate can only be as

good as the input content provided.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 12

Activating Now Assist Plugins

For all Now Assist product related plugin installs and updates, it is best to install and update plugins at the product level.

For example:

Now Assist for ITSM

Now Assist for HRSD

Now Assist for Creator

This ensures that all underlying entitlements and dependencies are seamlessly managed during the product plugin update

and correctly deployed to the instance.

The Now Assist product related plugins are listed on the   Now Assist Admin &gt; Settings &gt; Plugins   page.

Installed plugins can be viewed from the   Installed   tab of this page.

Whether this is a first-time Now Assist installation or an update as part of a ServiceNow family release or patch upgrade, it is

best to start by requesting the product plugins from the ServiceNow store. This will install all the required dependencies for the

plugins, as well as the entitlements needed for the requested product plugin to install successfully.

Complete the process by clicking on the   Install   or   Process to update   UI action.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 13

How to Activate a Now Assist Skill

Procedure

1.   Navigate to   All &gt; Now Assist Admin &gt; Features.

If you’re already in the Now Assist Admin console, select the Now Assist Features tab.

2.   In the navigation panel, select a workflow, such as Technology.

Each workflow contains feature sets.

3.   On the feature set card that is associated with the skill you would like to activate, select   View Details .

4.   In the All available skills section, select   Activate Skill .

5.   Each skill configuration has steps that are shown in the guided setup in the left column of the configuration screen.

The exact steps vary from skill to skill. A symbol next to each step indicates whether the step is completed, partially

completed, or not completed.

6.   After configuring a step, select   Save and continue   to go to the next step. Return to a previous step by selecting   Back .

7.   (Optional) Some skills include a step where you can configure the availability.

You can select   Skill is always available   if you do not want to place any restrictions on when the skill is available for

use. If you want to add conditions, select   Customize skill availability . Selecting this option opens up a condition

builder for you to select fields and values that determine whether someone can use the skill.

8.   The   Select display   step of the skill configuration allows you to select where you would like to display the skill.

You can select In-product desktop, Now Assist panel or both.

In-product desktop: When selected, Now Assist skills are displayed on forms and workspaces. Select the down arrow

to identify the roles that can use the skill.

Now Assist panel: When selected, Now Assist skills are available in the Now Assist panel. Select the down arrow to

identify the roles that can use the skill. If you don't see this option, you must activate the Now Assist panel. For more

information, see Turn on the Now Assist panel.

Important

Think about what you want the experience across all the Now Assist skills to look like. It is important to implement

a unified and consistent experience across the skills.

Roles can be added by entering the name of the role in the   User roles   field. Existing roles can be removed by selecting the

X icon in the role bubble. You must have at least one role specified, but you can add as many as you like.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 14

9.   Review your choices and select   Activate   to complete the configuration.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 15

Chat Summarization

Overview

Chat summarization provides the ability to summarize chats. The chat summarization is a condensed version of the

conversation between live agents or between a requester and Virtual Agent. Chat summarizations are generated in these

situations:

When the conversation ends.

When the agent uses the summarize quick action in Agent Chat.

When the user selects chat summarization or enters summarize chat in the Ask Now Assist field on the Now Assist

panel.

When an interaction is transferred from a Virtual Agent to a live agent and is at least six lines long, the chat summarization

displays in a summary card in the conversation and populates the interaction's summarization and short description fields.

A live agent transfers an interaction to a different live agent.

Before you Start

Activation

For details on activating Now Assist skills, refer to the procedure at How to Activate a Now Assist Skill.

Note

Virtual Agent and Advanced Work Assignment must be set up to summarize chats between the end user and agent.

Refer to the docs links below for guidance around this:

Configure Now Assist in VA

Get started with Advanced Work Assignment

Configuration

Configuration for skill can be reached by going to   Admin &gt; Now Assist Admin &gt; Now Assist Features , choosing the category

(e.g., Technology) and skill card you want to configure, and pressing the view details button. You can then click on the skill

name to edit the skill configuration.

Trigger Definitions

Select which of the triggers you wish to use to initiate chat summarization. You can select from one or more of the following

options:

Virtual agent to live agent handoff – A chat summary will be created when the conversation moves from a virtual

agent to a live agent.

Insight

This is useful when ensuring a live agent is quickly up to speed after a virtual agent chat to reduce the time the customer

waits for a live agent to review all previous chat content.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 16

Live agent to live agent handoff: When the conversation moves from a live agent to a live agent, a chat summary

will be created.

Quick action – Agents can use the summarize quick action to summarize the chat. This allows for anytime

summarization via a UI action.

Chat wrap up

Short description

Task creation

Select Display

Here, you can choose which display method to use for the skill. For more information, refer to Now Assist Panel Overview

Tip

If you don't see the display option for this skill next to Now Assist Panel, you must first activate Now Assist   panel

under settings.

Click on the down arrow next to display for Now Assist Panel to identify and configure the roles that can use the

skill.

Skill Implementation Insights

Consider which trigger definitions will work best in your organization’s workflow.

When activating Chat Summarization skill, since it also works in conjunction with live agent transfer from Virtual Agent, you

need to consider whether that is already in place or if we need to include it as part of the implementation as well.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 17

Incident summarization

Overview

Incident summarization can scan the contents of an incident and provide a succinct summary of the history, preventing an

agent from having to read through all of the details of an incident record before taking action.

Before you Start

Incident summarization uses the following fields to generate the summary:

Short description

Description

State

Priority

Work notes

Additional comments

Resolution notes (For a resolved incident)

Important

Any modifications to the names or labels of these fields will result in issues with summarization generation. You have two

options when dealing with this issue:

1.   It is recommended to revert back to the out-of-the-box settings for the field name and field label for the

affected fields.

2.   You can choose to remove incompatible fields from the summarization (This will impact the quality of the

summarization). To do this, you must clone the skill. Please note that not all the fields are

removable/configurable.

Activation

For details on activating Now Assist skills, refer to the procedure on How to Activate a Now Assist Skill.

In addition, to access Now Assist features in the Service Operations Workspace, the   Service Operations Workspace   ITSM

Applications   plugin needs to be installed on the instance in the latest version.

Supported User interfaces

The   Now Assist for ITSM   application supports the below skills in both   SOW Next Experience   and   UI16 :

Incident summarization

Resolution notes generation

Now Assist   panel

Knowledge article generation

Change request risk explanation

Change request summarization

Chat summarization, however, is only supported in SOW Next Experience UI.

Configuration

© 2025 ServiceNow, Inc. All rights reserved.

## Page 18

Incident summarization can be accessed from the Now Assist Admin console's technology tab under Now Assist features. The

shipped skill record is a read-only template, which you can create a copy of by clicking on the 3 dot menu options. Creating

a copy allows to customize prompts for the skill.

Input Selection

In the out-of-the-box shipped record, there are four input templates for New, Work in Progress, Resolved, and Closed states,

with different inputs in each template. The shipped input templates cannot be edited; however, we can make a copy of the

skill configuration and customize the copied version to include different input prompts and select new fields, conditions, and

data sources as inputs to the large language model (LLM).

Each base input table field requires a description. The description informs the LLM what the field is for and how the

information should be interpreted. The more information you put in the description means that the model has more context

for the data.

Prompt Customization

Prompt customization is possible in a copied version of the shipped summarization skill record template. Proceed to the

Customize prompt   section. In the shipped summarization skill record, the headers are pre-selected and locked by default.

However, changes can be configured in the copied version, which can then be used to activate the skill.

Caution

Each time you test a prompt output, the operation counts as an assist, which will count towards your subscription.

Availability Definition

Availability can be configured in both the shipped summarization skill record and a copied and customized version. Here,

you can make the skill available only when certain fields have pre-determined values or allow it to be available always.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 19

Display

You can control the display of the skill for both the product and the Now Assist panel, as well as control the display of skills

based on a certain user role within the system.

General guidance on which type of experience to choose for a skill (In-product or via the Now Assist Panel) is included in the

Now Assist Panel Overview.

Skill Implementation Insights

Now Assist can generate a summarization of cases and incidents only if the case or incident has at least 50 words in

the fields used for the input data. In general, incidents or cases with over 200 words optimize the agent experience

by ensuring that there’s enough information to summarize.

You can configure the availability of the summarize skill to appear only when certain conditions are met, such as

when the status is greater than 'In Progress.'

Encourage agents to use the feedback function to assess whether the summary was helpful. This will help improve

the skill's accuracy in the future.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 20

Change Summarization

Overview

Quickly capture the important details of a change request, including the current status, using the change request

summarization skill in the Now Assist for IT Service Management (ITSM) application.

You can summarize a change request in Core UI and Service Operations Workspace for ITSM.

A change request summary provides a concise summary of a change request record. The summary appears in a banner at

the top of the change request record.

When you're finished summarizing a change request, you can add it to the work notes, expand or collapse it, provide

feedback, copy it, or view information about it.

Before you Start

Ensure all correct plugins are installed prior to configuration. The summary is based on the change request state and is

generated from the information you enter in the following fields:

Short description

Description

Work notes

Additional comments

Risk

© 2025 ServiceNow, Inc. All rights reserved.

## Page 21

Impact

Justification

Implementation plan

Risk and impact analysis

Test plan

Backout plan

Configuration item

Service

Service offering

Conflict status

Type

Important

Any modifications to the names or labels of these fields will result in issues with summarization generation. You have two

options when dealing with this issue:

1.   It is recommended to revert back to the out-of-the-box settings for the field name and field label for the

affected fields.

2.   You can choose to remove incompatible fields from the summarization (this will impact the quality of the

summarization). To do this, you must make a copy of the skill. Not all fields are removable/configurable.

Activation

For details on activating Now Assist skills, refer to the procedure on How to Activate a Now Assist Skill.

Configuration

The Configuration for the change summarization skill can be found in the   technology   section of the   features   page of Now

Assist admin. The shipped skill record is a read-only template, which you can create a copy of by clicking on the 3 dot menu

options. Creating a copy allows to customize prompts for the skill.

Input Selection

© 2025 ServiceNow, Inc. All rights reserved.

## Page 22

In the out-of-the-box shipped skill record, there are four input templates for Assess, Authorize and Scheduled, Implement and

Review, and Closed states with different inputs in each template. The shipped input templates cannot be edited. However,

we can make a copy of the skill configuration and customize the copied version to include different input prompts and

select new fields, conditions, and data sources as inputs to the large language model (LLM).

Each base input table field requires a description. The description informs the LLM what the field is for and how the

information should be interpreted. The more information you put in the description means that the model has more context

for the data.

Prompt Customization

Prompt customization is possible in a copied version of the shipped summarization skill record template. Proceed to the

Customize prompt   section. In the shipped summarization skill record, the headers are pre-selected and locked by default.

However, changes can be configured in the copied version, which can then be used to activate the skill.

Caution

Each time you test a prompt output, the operation counts as an assist, which will count towards your subscription.

Availability Definition   © 2025 ServiceNow, Inc. All rights reserved.

## Page 23

Availability Definition

Availability can be configured in both the shipped summarization skill record and a copied and customized version of it.

Here, you can choose to make the skill available only when certain fields have pre-determined values or to allow it to always

be available.

Display

You can control the display of the skill for both the product and Now Assist panel and also control the display of skills based

on a certain user role within the system.

General guidance on which type of experience to choose for a skill (In-product or via the Now Assist Panel) is included in the

Now Assist Panel Overview.

Skill Implementation Insights

Now Assist can generate a summarization on change records only if the record has at least 50 words in the fields that

are used for the input data.

You can configure the availablity of the summarize skill to only appear when certain conditions are met, for example,

when the status is greater than 'Assess.'

Encourage agents to use the feedback function to assess whether the summary was helpful. This will help to improve

the accuracy of the skill in the future.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 24

Resolution Notes Generation

Overview

You can quickly learn the details of how an interaction was resolved by generating and reading the Now Assist resolution

notes.

Generating the resolution notes creates a condensed version of the incident's resolution notes generated by Now Assist. The

generated resolution notes can provide information to other agents who might encounter similar interactions. You can

generate the incident resolution notes in Core UI and Service Operations Workspace for ITSM.

Before you Start

Incident resolution notes are generated from the information that you enter in the following fields:

Short description

Description

State

Work notes

Additional comments

Important

Any modifications to the names or labels of these fields will result in issues with summarization generation. You have two

options when dealing with this issue:

1.   It is recommended to revert back to the out-of-the-box settings for the field name and field label for the

affected fields.

2.   You can choose to remove incompatible fields from the summarization (This will impact the quality of the

summarization) - To do this, you will need to make a copy of the skill - Not all fields are removable/configurable.

Further information on scenarios and workarounds can be found in this community article.

Activation

For details on activating Now Assist skills, refer to the procedure on How to Activate a Now Assist Skill.

Configuration

Choose input

Choose tables and fields to create prompts that will determine where to pull data from:

Define availability   © 2025 ServiceNow, Inc. All rights reserved.

## Page 25

Define availability

Customize how and when the skill capability will exist and be available.

Select display

Determine where to display the resolution notes: In-product, Now Assist panel or both.

Review and activate

Go over the default setup and turn on the skill for agents.

Skill Implementation Insights © 2025 ServiceNow, Inc. All rights reserved.

## Page 26

Interface   Procedure

Core UI   a. Change the state to   Resolved . The Resolve dialog box is displayed with the generated

resolution notes. b. Update the resolution code and select   Resolve . The resolution summary is

shown in the   Resolution Information   tab on the Incident form.

Service

Operations

Workspace

for ITSM

In the   Details   tab of the Incident, change the state to   Resolved.   The resolution summary is

updated in the Resolution section of the   Details   tab.

Skill Implementation Insights

In Core UI or Service Operations Workspace for ITSM, the incident can be resolved by changing its state.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 27

Knowledge Generation

Overview

Now Assist can create drafts of knowledge articles on how to resolve a case, an incident, or a work order task for agents to

review and edit before publishing. Articles can be created in:

CSM Configurable Workspace

Service Operations Workspace for ITSM

Agent Workspace for HR Case Management

CSM/FSM Configurable Workspace

Core UI

Now Assist panel

Before you Start

Field Customization

Any changes that have been made to the names or configuration of the following fields will impact the generation and/or

quality of knowledge articles:

Short description

Description

Resolution notes

Close notes

Work notes

Comments

Complete a pre-assessment on these fields and revert names back to out-of-box before continuing.

Knowledge Management Application and Plugin versions

Before you begin, ensure you are using the latest versions of the knowledge management plugins and the relevant

workspace plugins.

Activation

For details on activating Now Assist skills, refer to the procedure on How to Activate a Now Assist Skill

Configuration

Choose input

© 2025 ServiceNow, Inc. All rights reserved.

## Page 28

Choose tables and fields to create prompts that will determine where to pull data from:

The   Input Table   and   Input Fields   are pre-populated and cannot be modified.

The   Default Knowledge Base for NAP   field can be modified and allows you to specify which Knowledge Base should

be used when the Knowledge Generation is triggered from the Now Assist Panel (NAP)

Define availability

Customize how and when the skill capability will exist and be available.

Select display

Determine where to display the Knowledge Generation Skill: In-product desktop, Now Assist panel or both.

For each of these, the display of the skill can be restricted to show only for certain roles by selecting the arrow.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 29

Review and activate

Go over the default setup and turn on the skill for agents.

Skill Implementation Insights

Now Assist can create drafts of knowledge articles on how to resolve a case, incident, or work order task for agents to review

and edit before publishing. Articles can be created in the CSM Configurable Workspace, Service Operations Workspace for

ITSM, Agent Workspace for HR Case Management, CSM/FSM Configurable Workspace, classic environment, or Now Assist

panel.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 30

Chat Reply Recommendation

Overview

Generate a reply based on the context of the chat conversation using Write with Now Assist. Chat reply recommendations

provide agents with quick replies to common questions.

The chat reply recommendation skill displays a pop-up window that an agent can use to generate a recommendation with

Write with Now Assist and then review it before sending it as a reply.

In the chat message window, either type a response, or leave it blank, and then select the Now Assist icon. You can do these

actions by using the Now Assist icon:

Generate a recommended reply that is based on the context of the conversation

Refine the recommendation by elaborating or shortening the response

You can use chat reply recommendations in   Now Assist for ITSM   and   Now Assist for CSM.

Before you Start

Install the latest version of CSM Configurable Workspace:   SR - CSM - CSM Configurable Workspace Bundle v4.0   or higher

Ensure the ‘Now Assist for IT Service Management’ and/or ‘Now Assist for CSM’ plugin is installed from the ServiceNow Store,

depending on your use case:

Activation

© 2025 ServiceNow, Inc. All rights reserved.

## Page 31

For details on activating Now Assist skills, refer to the procedure on How to Activate a Now Assist Skill.

Configuration

Configure the skill by navigating to   Admin &gt; Now Assist Admin &gt; Now Assist Features   and selecting the appropriate

‘Technology’ or ‘Customer’ category, depending on the skill you want to enable.

Select the skill card for ‘Chat’ (or ‘Case’, for CSM) to view details and activate the   Chat reply recommendation   skill.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 32

© 2025 ServiceNow, Inc. All rights reserved.

## Page 33

Chat message

window   Now Assist icon

Typed response   Provides the option to refine your response a. Elaborate b. Shorten

Left blank   Generates a recommended reply based on the context of the conversation up to

this point.

Note

General guidance on which type of experience to choose for a skill (In-product or via the Now Assist panel) is included

in the Now Assist Panel Overview content block.

Skill Implementation Insights

In the chat message window, either type a response or leave it blank, and then select the Now Assist icon.

The reply response appears in the Write with Now Assist modal. If the response was refined, you can toggle between versions.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 34

Now Assist in AI Search

Overview

Now Assist in AI Search combines the power of search with the Now LLM service generative AI model to provide actionable

AI-generated or AI-selected answers in user searches.

Now Assist in AI Search supports the following capabilities:

Now Assist Q&amp;A Genius Results, which uses the Now LLM Service to generate actionable Q&amp;A Genius Result answers

from the most relevant knowledge article results.

External Content Q&amp;A Genius Results generate actionable Q&amp;A Genius Result answers from documents in your

Microsoft SharePoint Online instance.

Now Assist Actions Genius Results use the Now LLM Service to select, filter, and display the most relevant catalog Item

and Virtual Agent topic results as answers.

Before you Start

For Now Assist Q&amp;A Genius Results in global search, the Next Experience UI must be activated on your instance. To learn

about activating Next Experience UI, see considerations for activating Next Experience.

In addition to this, check the following:

ServiceNow instance should be on Vancouver Patch 2 or higher.

ServiceNow instance should have one of the Pro Plus SKUs installed (ITSM/CSM/HR)

ServiceNow instance should be AI Search enabled. Refer to AI Search documentation to have AI Search provisioned

on your instance.

Activation

The Now Assist in AI Search plugin is automatically installed when you install any Now Assist features from Now Assist Admin.

When you upgrade to the latest version of Now Assist in AI search, the system reindexes content from the Catalog Item Table

and Knowledge Table indexed sources.

Now Assist for AI search can be verified as activated by navigating to   All &gt; Now Assist Admin &gt; Features , selecting a

platform, and verifying that the Now Assist Q&amp;A Genius Results and Now Assist actions skills appear in the all conversational

experience skills listing.

Configuration

To configure Now Assist in AI Search for portals and mobile applications, specify the Now Assist Genius Result types you want

to make available in each of your AI Search portals and mobile applications.

Navigate to   All &gt; AI Search &gt; Now Assist   in AI Search Setup.

The Set up Now Assist in AI Search panel displays a list of search profiles associated with AI Search portals and mobile

applications and a prerequisites section for each Now Assist Genius Result configuration.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 35

In each search profile row, select the options for the individual Now Assist Genius Results you want to enable for the

associated AI Search portal or mobile application.

Configure Now Assist Q&amp;A Genius Results

Now Assist Q&amp;A Genius Results sends the most relevant Knowledge articles from your search to the Now LLM Service, which

generates answer snippets from the articles' HTML fields.

Now Assist Q&amp;A Genius Result configuration to the search profile used by AI Search for Next Experience.

Navigate to All &gt; AI Search &gt; Search Experience &gt; Search Profiles.

Open the Next Experience Search Configuration search profile record by selecting it from the list.

In the Genius Results related list, select Link Existing and select Now Assist Q&amp;A for Genius Result Configuration and an order

value. If there is an existing related list row, this needs to be unlinked.

The performance of Now Assist Q&amp;A for Genius Results can be tuned using various parameters.

This ensures that the quality of the returned results delivers a good user experience.

•   Define a query filter for Now Assist Q&amp;A Genius Results

•   Change the minimum search term count for Now Assist Q&amp;A Genius Results

•   Specify which search results Now Assist Q&amp;A Genius Results can send to the Now LLM Service

•   Activate user context matching for Now Assist Q&amp;A Genius Results

© 2025 ServiceNow, Inc. All rights reserved.

## Page 36

•   Dynamic Translation for Now Assist Q&amp;A Genius Results

•   Caching for Now Assist Q&amp;A Genius Results

External Content Q&amp;A Genius Results can be configured for SharePoint, including OAuth settings and permission restrictions

using KQL.

To learn more about how Genius Results work, see Genius Results. For details on the Now Assist Genius Result configurations,

see Now Assist Q&amp;A Genius Results and Now Assist Actions Genius Results.

Enabling Now Assist in AI Search in Service Portals

Important

Custom portals may require additional setup or configuration to use AI Search applications.

1.   Navigate to Navigate to   All &gt; AI Search &gt; Now Assist in AI Search Setup.   The Set up Now Assist in AI Search panel

displays a list of search profiles associated with AI Search portals and mobile applications and a Prerequisites section

for each Now Assist Genius Result configuration.

2.   (Optional) If a Now Assist Genius Result enablement option isn't selectable, follow the guidance in its Prerequisites

entry to make it selectable.

3.   In each search profile row, select the options for the individual Now Assist Genius Results you want to enable for the

associated AI Search portal or mobile application. As an example, to enable Now Assist Q&amp;A Genius Results in the

Service Portal, select the Now Assist Q&amp;A option in the Service Portal Default Search Profile row.

The Set up Now Assist in AI Search panel displays a list of search profiles associated with AI Search portals and mobile

applications and a prerequisites section for each Now Assist Genius Result configuration.

Note

You can disable a Now Assist Genius Result for an AI Search portal or mobile application by clearing its option.

Skill Implementation Insights

Use this section to highlight key insights, learnings, or ‘good-to-know’ items for the skill. Use an unordered list where possible.

By default, Now Assist Q&amp;A Genius Results only supports English-language searches. Administrators can activate Dynamic

Translation to enable support for other languages.

As part of the pre-assessment for Search, it is important to know if AI Search is already live. If not, this needs to be factored in

since Now Assist Search uses AI Search as its backend.

Understanding and knowing the portals where Now Assist Search will be activated is also helpful.

Review whether Service Portal widgets used by Now Assist Search are out-of-the-box or customized. If customized,

these must be reverted to out-of-the-box for Now Assist Search to work. Here are the widgets that should be

checked:

'Homepage Search' widget

'Typeahead Search' widget

'Faceted Search' widget

'Catalog Homepage Search' widget

'Knowledge Breadcrumbs' widget

The following companion links in product documentation provide further detail on the features of Now Assist in AI Search:

Enabling Now Assist Q&amp;A Genius Results

Define a query filter for Now Assist Q&amp;A Genius Results

Specify which search results Now Assist Q&amp;A Genius Results can send to the Now LLM Service

Activate user context matching for Now Assist Q&amp;A Genius Results.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 37

Caching for Now Assist Q&amp;A Genius Results

Now Assist in AI Search FAQ

Under the hood: Now Assist in AI Search

Now Assist in AI Search

Configuring Now Assist in AI Search

© 2025 ServiceNow, Inc. All rights reserved.

## Page 38

Now Assist in Virtual Agent

Overview

Virtual Agents built with Now Assist generative AI skills can conduct intelligent conversations by working with information from

your platform, such as Knowledge and Catalog items. Users can self-solve by answering questions right in the chat. The

experience becomes smarter and more fluid with each skill you turn on.

Now Assist in Virtual Agent uses large language models (LLMs) to create a natural-language conversational experience that

can improve the success of your self-service workflows.

Using LLM vs NLU in Virtual Agent will improve deflection rates and reduce development time.

Before you Start

Although a Virtual Agent can be exposed through a range of different conversational interfaces, it's important to ensure

these are established so that Now Assist enhances the user experience.

ServiceNow instance should be on Vancouver Patch 4 or higher.

ServiceNow instance should have installed one of the Pro Plus SKUs (ITSM/CSM/HR).

ServiceNow instance should be Virtual Agent enabled. Refer to Virtual Agent documentation to enable Virtual Agent

on your instance.

NLU Migration Tool

ServiceNow provides the Topic Migration tool to seamlessly migrate existing NLU/keyword topics to new LLM-based topics via

a guided setup to assist users in migration.

Important

If you are already using NLU topics in Virtual Agent, carry out an assessment using the migration tool to understand the

impact of migrating to Now Assist in Virtual Agent and plan which topics will be migrated, changed, or retired.

Activation

The Now Assist in Virtual Agent plugins should be activated through the Application Manager. The Now Assist in Virtual Agent

Designer should also be installed.

There are two entry points used to set up Now Assist in Virtual Agent: You can set it up from   All &gt; Conversational Interfaces &gt;

Assistants   or from the Now Assist admin console. If you're already within the   Now Assist Admin console &gt; Platform , the

Conversational experience page is displayed.

Configuration

You can set up Now Assist in Virtual Agent from within the Conversational Interfaces console or from the Now Assist admin

console.

Navigate to   All &gt; Conversational Interfaces &gt; Assistants.

By default, a Now Assist in Virtual Agent is listed and will be status = off.

To configure, a number of steps need to be undertaken by following the Assistant.

Overview

Basic configuration details

Now Assist skills

Now Assist   in   Virtual Agent   uses search and generative AI (Large language models - LLMs) to create a natural-language

conversational experience with knowledge articles and catalog items that can improve the success of your self-service and

deflection.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 39

You can activate and assign the Now Assist skill you want. Now Assist Multi-Turn Catalog Ordering, Now Assist topics, and

Now Assist Q&amp;A Genius Results are available by default. At least one must be selected to move forward.

Display experience

Please select at least one portal or integrate it with your preferred messaging channels to display your Virtual Agent. Choose

the portals and the type of experience you want to use to display your Virtual Agent. In some cases, this will replace current

NLU experience.

Information Sources

The Virtual Agent will start using the default search profile, but you can choose to use another profile. If you select another

profile, it will replace the default.

Branding

You can decide how your Virtual Agent should look by using the default branding or creating new branding in the

Conversational Interface console.

Chat experience

Manage greeting, closing, and fallback messages to enhance the end-user experience. Promoted topics show important,

common content for easy access during a conversation.

Review

Review your choices, test to preview the end-user experience, and turn on your Virtual Agent.

Skill Implementation Insights

Check the Conversational Catalog using the out-of-the-box \*\*Conversational Catalog overview dashboard to

understand the top used catalog items that are conversational versus ones that are not. The dashboard provides

guidance on how to make such catalog items conversational.

Customers who already use NLU/Keyword search can leverage the   Migrate topics to LLM   feature provided in the

Virtual Agent Designer.

Customers already live with VA should also leverage   Chat Summarization   skill to allow agents to summarize chats as

part of live agent transfer.

Now Assist relies on generating predictions based on patterns in data. Therefore, it's important to test and evaluate

this application's accuracy as appropriate for your use case, employ human review as appropriate, and avoid

relying solely on AI-generated outputs for decision-making purposes.

For automation beyond Knowledge or Catalog items, additional topics must be built in Virtual Agent Designer after

setting up the Virtual Agent in this experience.

Use the Now Assist in Virtual Agent Analytics dashboard to monitor the performance of Now Assist in Virtual Agent as

a self-service deflection tool. The dashboard provides metrics that you can use to track its effectiveness and insights

into conversations so that you can see how well Now Assist in Virtual Agent understood and resolved user queries.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 40

Check the Conversational Catalog using the out-of-the-box   Conversational catalog overview dashboard   dashboard

to understand the top used catalog items that are conversational versus ones that are not. The dashboard provides

guidance on how such catalog items can be handled so as to make them conversational.

Customers who already use NLU/Keyword search can leverage the   Migrate topics to LLM   feature provided in the

Virtual Agent Designer.

Customers already live with VA should also leverage   Chat Summarization   skill to allow agents to summarize chats as

part of live agent transfer.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 41

Link   Description

Now Assist Product Documentation   Homepage for the Now Assist product documentation

Now Assist Community Product Hub   Now Assist Community hub page

Now Assist on YouTube ServiceNow

Community

Now Assist related content on YouTube ServiceNow

Community

Now Assist on Now Learning   Now Assist related courses on Now Learning

Helpful Links

See the below table for helpful links with additional content to help you on your implementation Journey

© 2025 ServiceNow, Inc. All rights reserved.
