# DevOps Change Velocity - Starter Stories

Source: https://mynow.servicenow.com/now/best-practices/assets/devops-change-velocity-starter-stories

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `8c3ce31644d4ff802315ddc6f8bc80de3d03be27977f68e95e7a8390dafe4372`

## Sheet: Instructions to import stories

| Column 1 | Column 2 |
| --- | --- |
| Row 1 | Asset number: 0001389 |
| Row 2 | How to import the stories xlsx into the rm\_story table in the ServiceNow Agile Development app on the target instance |
| Row 3 | 0. In case you don't want to import the one or more of the columns from this xlsx, remove the column from this spreadsheet on the second tab before import |
| Row 4 | 1. Understand the product model structure in ServiceNow: EITHER |

a) the product name stated in the product column exists in your product model table (here, the correct product model table is cmdb\_application\_product\_model) - this refers to the "Product" field on the story form OR

b) put the existing product name into the product column (A)

| Column 1 | Column 2 |
| --- | --- |
| Row 5 | 2. In the ServiceNow Agile Development app, open the "Stories" module to open the story list. |
| Row 6 | 3. Right click on any column header and choose "Import" - choose the downloaded file and make sure you import the correct tab. |
| Row 7 | 4. Verify that the imported Stories are visible in the list when opening the "Stories" module |

## Sheet: Stories

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 1 | Product | Theme | Epic | Short description | Description | Acceptance criteria |
| Row 2 | DevOps |  |  | Ensure Access to the DevOps applications on the store | As a system administrator, |  |

I need to access the ServiceNow DevOps application and DevOps Insights applications,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| So that I can download for installation. | I can see the 3 applications on the store |  |  |  |  |
| Row 3 | DevOps |  |  | Configure Change Policies | As a system administrator, |

I need to configure the ServiceNow Change Management Change Policies ,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| To accurately implement the Change Management Strategy developed during the Pipeline Change Control Workshop(s) . | I know this is complete when my pipeline is behaving according to my policy of choice |  |  |  |  |  |
| Row 4 | DevOps |  |  | Create DevOpsTool alias | Create a connection to connect back the ServiceNow instance with an admin account | I know this is complete when a valid connection exists in the CreateDevOps alias and the URL points to /api/now/table and I can create new DevOps tool records. |
| Row 5 | DevOps |  |  | Set the password for DevOps Integration User | The devops.integration.user is provided by the application but with no password for security reason | I know this is done when a password has been set and I can successfully configure DevOps tools |
| Row 6 | DevOps |  |  | As XXX, I would like to gain insight of my DevOps environment | After installing DevOps Insight application, need to run the DevOps PA jobs to collect data for the dashboards. |  |

I need to activate the jobs and make sure I properly set up the user for Run As.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| I need to run "\[DevOps\] Historical Data Collection" the first time and set up "\[DevOps\] Daily Data Collection" to run daily as part of my job schedule plan | I know this is done when I can see data populated into DevOps Insight Dashboard |  |  |  |  |  |
| Row 7 | DevOps |  |  | Activate SonarQuebe Software Quality Results for ADO | As DevOps admin, I would like to include SonarQuebe Software Quality results for ADO in ServiceNow so I can use the information for the change request approval. | 1. SonarQube Quality Software results are displayed in Change request related list |

1. SonarQube Quality Software results are displayed in Pipeline UI after execution

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 8 | DevOps |  |  | Activate SonarQuebe Software Quality Results for Jenkins | As DevOps admin, I would like to include SonarQuebe Software Quality results for Jenkins in ServiceNow, so I can use the information for the change request approval. | 1. SonarQube Quality Software results are displayed in Change request related list |

1. SonarQube Quality Software results are displayed in Pipeline UI after execution

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 9 | DevOps |  |  | Set up ADO Pipelines | As DevOps admin, I would be able to select which ADO pipelines inbound events are processed | 1. I can see a new field in DevOps tools form &amp;\#34;Track specific Pipeline&amp;\#34; (checkbox) |

2. Once selected, I can click in one of the pipeline included for that DevOps tool and I see a new attribute call &amp;\#34;Track&amp;\#34;

3. Only events from the pipelines selected are in ServiceNow tables

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| Row 10 | DevOps |  |  | configure Coding Tool | As a system administrator, |

I need to Configure a Coding Tool \[e.g., GitHub, GitLab, Bit Bucket\] ,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| So that the commit, build, etc. meta data can be obtained by the ServiceNow DevOps application . | I know this is complete when I can see my list of repositories and commits from the SCM show up in the commit table |  |  |  |  |
| Row 11 | DevOps |  |  | Set up ServiceNow Change Management \[i.e., Change control\] | As a system administrator, |

I need to configure the ServiceNow DevOps Application Stages Change control ,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| To accurately implement the Change Management Strategy developed during the Pipeline Change Control Workshop(s) . | I know this is complete when my pipeline reflects my change management policy change control and change approval group) |  |  |  |  |  |
| Row 12 | DevOps |  |  | configure Orchestration Tool | As a system administrator, I need to Configure an Orchestration Tool \[e.g., Jenkins\], So that the pipeline meta data can be obtained by the ServiceNow DevOps application . | I know this is complete when I can see my list of tasks/stages/jobs and the pipeline UI renders the pipeline |
| Row 13 | DevOps |  |  | GitLab | As a Business Consultant, I need to conduct working sessions with the business owners and ServiceNow DevOps Product Owner, So that I can develop an associated Business Value Goal to each on-boarded Business Application, which will be used to determine when the desired Business Goal has been achieved by ServiceNow DevOps for the pertinent Business Application. | &lt;p&gt;1. WBS activity holding story&lt;/p&gt; |
| Row 14 | DevOps |  |  | Apply to 'get' the DevOps Application and DevOps Insights Application | As a System Administrator, |  |

I need to access the ServiceNow DevOps application and DevOps Insights applications and request permission to download and install within my ServiceNow Instance,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| So that I can run the DevOps and DevOps Insights applications. | The DevOps application can be installed |  |  |  |  |
| Row 15 | DevOps |  |  | Activate Enterprise DevOps prerequisite plugins | As a system administrator, |

I need to activate the prerequisite ServiceNow plugins,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| So that the ServiceNow DevOps Application can be installed. | The DevOps application can be installed |  |  |  |  |  |
| Row 16 | DevOps |  |  | Install DevOps Application | As a Sysadmin, I want to install the DevOps application on my instance so I can enable faster change management | I know this is complete when  the navigation menu shows the  DevOps application |
| Row 17 | DevOps |  |  | Install DevOps Insight Application | As a SysAdmin, I want to install the DevOps application on my instance so I can show that my DevOps development is more effective | I know this is complete when  the navigation menu shows the  DevOps Insight module |
| Row 18 | DevOps |  |  | Install DevOps Integrations Application | As a SysAdmin, I want to install the DevOps Integrations application on my instance so I can integrate with the DevOps tool chain | I know this is complete when the Azure DevOps entry is present in the DevOps Tool Integrations module |
| Row 19 | DevOps |  |  | Develop list of business applications to on-board | As a Business Consultant, |  |

I need to conduct working sessions with the business owners and ServiceNow DevOps Product Owner ,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| So that I can develop a list of Business Applications with a time-line to be on-boarded into ServiceNow DevOps. | I know this is complete when the workshop has been held and a list of business applications has been created and ordered by priority |  |  |  |  |
| Row 20 | DevOps |  |  | configure Planning Tool | As a system administrator, |

I need to Configure a Planning Tool \[e.g., Jira, Agile\] ,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| So that the development changes can be traced back to their original requirements . | I know this is complete when I can see my list of stories and new stories show up in the Work Item table |  |  |  |  |
| Row 21 | DevOps |  |  | Install DevOps Mid Server | As a system administrator, |

I need to install the ServiceNow Mid Server,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| So that the ServiceNow application running on the ServiceNow Instance can access the necessary DevOps tool Chain. | &lt;p&gt;1. Mid server is installed and tested&lt;/p&gt; |  |  |  |  |
| Row 22 | DevOps |  |  | IP Range Inventory | As a network administrator, I need to itemize all mid server IP Ranges and verify that the ServiceNow DevOps mid server has IP Range access to the DevOps tool chain tools, |
| So that the ServiceNow DevOps application has adequate access to all DevOps tool chain tools. | I know this is complete when the connect action of each tool is working properly and the tool are connected |  |  |  |  |
| Row 23 | DevOps |  |  | Tool Chain Tool Access | As a system administrator, |

I need to verify access to all pertinent tool chain tools via mid server,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| So that the ServiceNow DevOps application has adequate access to all DevOps tool chain tools. | I know this is complete when the connect action of each tool is working properly and the tool are connected |  |  |  |  |
| Row 24 | DevOps |  |  | Configure ServiceNow DevOps pipeline | As a system administrator, |

I need to Configure a ServiceNow DevOps Pipeline ,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| So that I can accurately and reliably automate the development process which allows the develops to compile, build and deploy their code to the production platform. | I know this is complete when I can see my orchestration pipeline representation in ServiceNow |  |  |  |  |
| Row 25 | DevOps |  |  | Enable ServiceNow extension for Azure DevOps | As a system administrator, |

I need to install the ServiceNow extension,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| So that it can be used in the Azure DevOps Instance. | The extension is installed |  |  |  |  |
| Row 26 | DevOps |  |  | obtain credentials for all tool chain tools | As a tool chain tool, |

I need to allow REST API access to the ServiceNow DevOps application,

| Column 1 | Column 2 |
| --- | --- |
| So that queries can be made and meta data can be retrieved concerning a project, code or any other development item. | &amp;gt; You have verified that you have the necessary access to all tools in your tool chain whether those tools be cloud-based or on-prem \[i.e., accessed via mid server\]: |

        &amp;gt;  planning tool

        &amp;gt; coding tool

        &amp;gt; orchestration tool

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| Row 27 | DevOps |  |  | designate Pipeline Change Control | As a Business Consultant, |

I need to conduct working sessions with the Development Organizations, Business Owners, Change Management Organizations and ServiceNow DevOps Product Owner ,

So that I can develop a Change Management Strategy with associated Change Management Policies for each stage of the developed Application Pipeline ,

| Column 1 | Column 2 |
| --- | --- |
| Which can be:  1) none, 2) auto approval, or 3) manual approval . | &lt;p&gt;1. Change management strategy meets that determined in the workshop&lt;/p&gt; |

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;Note: WBS holder&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| Row 28 | DevOps |  |  | Develop Application Pipeline(s): Current and Desired | As a Business Consultant, |

I need to conduct working sessions with the Development Organizations, Business Owners, Change Management Organizations and ServiceNow DevOps Product Owner ,

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| So that I can development a 'process' \[i.e., pipeline\] which accurately reflects the current and desired development stages from initial 'commit' to 'production push.' | &lt;p&gt;1. Process is developed that matches that defined in the story&lt;/p&gt; |  |  |  |  |
| Row 29 | DevOps |  |  | Install and configure Jenkins plugin | As a Jenkins system Administrator, |

I need to install the ServiceNow Jenkins Plugin into the Jenkins instance ,

| Column 1 | Column 2 |
| --- | --- |
| So that the Jenkins Instance can communication back to the ServiceNow DevOps application. | The plugins is installed and configured. |

The Jenkins server has been restarted.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| Row 30 | DevOps |  |  | Download the Jenkins Plugin from the ServiceNow store | As a system administrator, |

I need to download the ServiceNow Jenkins Plugin,

| Column 1 | Column 2 |
| --- | --- |
| So that it can be installed in the Jenkins Instance. | &lt;p&gt;1. Jenkins plugin is active&lt;/p&gt; |
