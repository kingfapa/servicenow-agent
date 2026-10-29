# Now Assist for ITOM - Implementation Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/now-assist-for-itom-implementation-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `32333da78683f81591c8bcb28bd90707b0ef26bf0c44b456e27501a70fd9d7d9`

## Page 1

Now Assist for ITOM Implementation Guide

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

Alert Analysis

Overview

Before You Start

Activation

Configuration

Skill Implementation Insights

Helpful Links

© 2025 ServiceNow, Inc. All rights reserved.

## Page 3

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

## Page 4

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

## Page 5

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

## Page 6

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

## Page 7

Now Assist Experiences

Now assist experiences allows you to view and configure the Now Assist Panel as well as the Write with Now Assist feature.

Now Assist Settings

Now assists settings provides a general overview of the plugins available, provides the ability to switch on/off the now assist

panel, and configure other settings like dynamic translation.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 8

Now Assist Panel Overview

With the Now Assist panel, you can get assistance from generative AI experiences to solve customer issues faster. Use this

conversational interface to interact with the Now Assist skills and features.

In addition to suggestions displayed in the chat window, you can use custom commands such as:

Summarize a record - Summarizes the current open record

Summarize an incident - Summarizes the open incident

Choosing a Now Assist display experience © 2025 ServiceNow, Inc. All rights reserved.

## Page 9

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

## Page 10

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

## Page 11

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

## Page 12

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

## Page 13

9.   Review your choices and select   Activate   to complete the configuration.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 14

Alert Analysis

Overview

The Alert Analysis Skill automates the summarization and analysis of system alerts, providing IT operations, security, and

support teams with concise and actionable insights. Using AI, this skill extracts key details such as alert severity, affected

systems, root causes, and recommended resolutions. This enables teams to respond to critical alerts faster, improve system

performance, and reduce downtime by making informed decisions based on accurate, summarized data.

Key features include:

Automated generation of alert summaries

Extraction of key alert data, including severity, impact, affected services, and root cause

Integration with incident management and monitoring workflows

Summaries available for review, escalation, and reporting

Before You Start

Before deploying the Now Assist Alert Analysis skill, ensure the following prerequisites are met:

IT Operations Management (ITOM) Module : Ensure that ServiceNow’s ITOM or a relevant alert management system is

installed and configured within your instance.

Alert data : Ensure that alert records contain all necessary fields, such as severity, impact, and affected systems, for

accurate summarization.

Custom workflows : Check if any customized alert management workflows or third-party integrations are in place that

could impact the skill’s functionality.

Activation

To activate the Now Assist Alert Analysis skill, follow these steps:

1.   Navigate to the   Now Assist Skills   module in your ServiceNow instance.

2.   Select   Alert Analysis Summarization   from the list of available skills.

3.   Follow the on-screen instructions to activate the skill for alert and incident management workflows.

4.   Ensure the AI model is integrated with your alert management module for automatic analysis and summarization of

alerts.

For detailed activation steps, refer to How to Activate a Now Assist Skill

Configuration

Linking Summaries to Alerts

To configure the skill to generate and link summaries to alert records:

1.   Navigate to the   ITOM Alert Management   module or your custom alert workflows.

2.   Enable the   Automated Alert Summarization   feature.

3.   Map the key output fields from the AI-generated summary (e.g., severity, root cause, affected systems) to the

relevant sections in the alert or incident records.

Customizing Key Data Extraction

You can configure the skill to extract critical alert data that is essential for your operations:

© 2025 ServiceNow, Inc. All rights reserved.

## Page 15

1.   In the   Skill Configuration   area, access   Alert Data Extraction Settings .

2.   Define the critical elements to be extracted, such as severity, root cause analysis, affected services, and suggested

resolutions.

3.   Save the configuration and run tests on recent alert data to validate that summaries meet your operational needs.

Note

For guidance on selecting the user experience (in-product vs. Now Assist Panel) for deploying the skill, refer to the Now

Assist Panel Overview.

Skill Implementation Insights

Data quality : For best results, ensure that alert records are consistently documented with accurate data regarding

severity, affected systems, and root causes.

Customization impact : Organizations with customized alert workflows or third-party monitoring tools may need to

adjust configurations to ensure proper integration with the summarization skill. Testing in a non-production

environment is advised.

Prioritizing critical alerts : Configure the skill to prioritize high-severity alerts for immediate summarization, helping teams

focus on the most urgent issues.

Operational efficiency : Summarized alert data can speed up incident response times by giving IT operations teams

quick insights into the root causes and potential resolutions of alerts.

Audit and compliance : AI-generated summaries clearly document alert analysis and response actions, which can be

valuable for audits and compliance reporting.

© 2025 ServiceNow, Inc. All rights reserved.

## Page 16

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
