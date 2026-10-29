# On-Call Scheduling - Starter Stories

Source: https://mynow.servicenow.com/now/best-practices/assets/oncall-scheduling-starter-stories

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `94b77ac57c06071520a43fcbda81495a8b65da47472978f4ad0f7fef5938c68c`

## Sheet: Instructions to import stories

| Column 1 | Column 2 |
| --- | --- |
| Row 1 | Asset number: 0001277 |
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
| Row 2 | On-Call Scheduling |  |  | On-Call: Configure an On-call Schedule | As a Service Desk Manager, I would like to configure an on-call shift, so that I am able to link the support group with its respective schedule template | &lt;p&gt;I know this is complete when I am able to see that the on-call shift is created and has its respective support group and schedule associated.&lt;/p&gt; |

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;https://docs.servicenow.com/csh?topicname&amp;\#61;create-update-schedule-oncall.html&amp;amp;version&amp;\#61;latest&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 3 | On-Call Scheduling |  |  | On-Call: Create a Schedule Template | As an On-Call Agent, I would like to create a schedule template, so that I am able to determine the hours that the on-call groups provide support | &lt;p&gt;I know that this is true when I can create/edit a schedule template and add the corresponding schedule entries to determine the amount of hours that a support groups will be on-call. Configure the entries in the related list &amp;\#34;schedule entries&amp;\#34; as follows: - From X hour to 23:59:59 - From 12:00 to x hour&lt;/p&gt; |
| Row 4 | On-Call Scheduling |  |  | On-Call: Configure a Custom Escalation Policy for SMS and Voice | As a Service Desk Manager, I want to configure a custom Escalation Policy, so that I am able to define a clear escalation chain to contact Agents via SMS and/or Voice (calls) | &lt;p&gt;I know this is complete when I can see that the Custom Escalation Policy is defined for a specific shift. When creating a new Custom Escalation Policy, these steps should be followed:&lt;/p&gt; |

&lt;p&gt;- Activate the plugin Notify (com.snc.notify)&lt;/p&gt;

&lt;p&gt;- Create an on-call Group (Support team)&lt;/p&gt;

&lt;p&gt;- Add the &amp;\#34;Notification Device&amp;\#34; related list on the Group Form&lt;/p&gt;

&lt;p&gt;- Register the devices at the group level - During the shift creation, click on &amp;\#34;Override Escalation Policy&amp;\#34; or on the Shift form&lt;/p&gt;

&lt;p&gt;- Build the Escalation chain in the “Edit Escalation and Contact Preferences” related link&lt;/p&gt;

&lt;p&gt;- Select the Escalation Audience (device and/or roster) from the Escalation Step Form&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 5 | On-Call Scheduling |  |  | On-Call: Determine the PTO Approval | As a Service Desk Manager, I want to be able to configure the PTO approval preference, so that I can determine whether a PTO requires approval or not | &lt;p&gt;I know that this is complete when the system property com.snc.on\_call\_rotation.pto.configuration is defined based on the establish PTO approval preference.&lt;/p&gt; |

&lt;p&gt;&lt;a href="https://docs.servicenow.com/csh?topicname&amp;\#61;manage-time-off-requests-oncall.html&amp;amp;version&amp;\#61;latest" rel="nofollow"&gt;https://docs.servicenow.com/csh?topicname&amp;\#61;manage-time-off-requests-oncall.html&amp;amp;version&amp;\#61;latest&lt;/a&gt;&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 6 | On-Call Scheduling |  |  | On-Call: Install Plugin | As an Incident Process Owner, I would like to ensure that the plugin On-Call Scheduling (com.snc.on\_call\_rotation) is active in the system, so that I can take advantage of the extra capabilities that it provides | &lt;p&gt;I know that this is complete when I can see that the On-Call Scheduling plugin is active in the system.&lt;/p&gt; |

&lt;p&gt;Activating the On-Call Scheduling plugin activates the following third-party libraries: FullCalendar library DHTMLX scheduler Roles installed with on-call scheduling On-call scheduling adds the rota\_admin and rota\_manager roles.&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;Tables and Scheduled Jobs installed:&lt;/p&gt;

&lt;p&gt;&lt;a href="https://docs.servicenow.com/csh?topicname&amp;\#61;t\_ActivateOnCallScheduling.html&amp;amp;version&amp;\#61;latest" rel="nofollow"&gt;https://docs.servicenow.com/csh?topicname&amp;\#61;t\_ActivateOnCallScheduling.html&amp;amp;version&amp;\#61;latest&lt;/a&gt;&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;Quick start tests for On-call scheduling&lt;/p&gt;

&lt;p&gt;Validate that On-Call Scheduling still works after you make any configuration change such as apply an upgrade or develop an application. Copy and customize these quick start tests to pass when using your instance-specific data.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 7 | On-Call Scheduling |  |  | On-Call: Configure Dashboard | AS a Service Desk Manager, I would like to configure the On-Call Scheduling Dashboard, so that I can review and make improvements and also provides a better reporting experience | &lt;p&gt;I know that this is complete when I am able to see the Dashboard configured with specific reports.&lt;/p&gt; |

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;&lt;a href="https://docs.servicenow.com/csh?topicname&amp;\#61;viewing-performance-report-oncall.html&amp;amp;version&amp;\#61;latest" rel="nofollow"&gt;https://docs.servicenow.com/csh?topicname&amp;\#61;viewing-performance-report-oncall.html&amp;amp;version&amp;\#61;latest&lt;/a&gt;&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 8 | On-Call Scheduling |  |  | On-Call: Configure a Roster | As a Service Desk Manager, I would like to set a roster up, so that I am able to define the frequency, escalation level and rotation order of a shift | &lt;p&gt;I know that this is complete when I am able to see that the list of agent who are part of a specific shift.&lt;/p&gt; |

&lt;p&gt;https://docs.servicenow.com/csh?topicname&amp;\#61;config-roster-oncall.html&amp;amp;version&amp;\#61;latest&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 9 | On-Call Scheduling |  |  | On-Call: Configure a Default Escalation Policy for Emails | As a Service Desk Manager, I would like to configure the Escalation Policy, so that I am able to contact Agents via Email and rotate them through the roster members in the established order | &lt;p&gt;I know this is complete when I can see that the Escalation Policy is configured for a specific shift. A Default Escalation Policy is configured in the Roster related list on the Shift form.&lt;/p&gt; |

&lt;p&gt;All the entries create the Escalation chain which can be visualized in the “Edit Escalation and Contact Preferences” related link.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 10 | On-Call Scheduling |  |  | On-Call: Define Trigger Rules | As a Service Desk Manager, I would like to create a trigger rule, so that I can determine which what conditions an Escalation Policy occurs | &lt;p&gt;I know that this is complete when an Escalation Policy is triggered when certain conditions are met.&lt;/p&gt; |

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;https://docs.servicenow.com/csh?topicname&amp;\#61;designing-escalation-process-oncall.html&amp;amp;version&amp;\#61;latest&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 11 | On-Call Scheduling |  |  | On-Call: SOW or UI16 redirection from email link | As a Service Desk Manager, I would like to control whether an on-call schedule or shift record link in all major on-call email notifications redirects you to Service Operations Workspace (SOW) or to the classic UI16 interface in On-Call Scheduling. | I know this to be true when the user is redirected to the specified experience from clicking on the email link |

Technical specs-

The Redirect SOW Email notification (sow\_email\_notification\_redirect) property is set to true.

The Redirect SOW Email notification for On-call scheduling (sow\_email\_notification\_redirect.on\_call) property is set to true.
