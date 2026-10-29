# Walk-Up Experience - Starter Stories

Source: https://mynow.servicenow.com/now/best-practices/assets/walkup-experience-starter-stories

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `365c8db46d9e3407aea202ba6350b753c3c3e8316f1edb49f4c61983d5ee683d`

## Sheet: Instructions to import stories

| Column 1 | Column 2 |
| --- | --- |
| Row 1 | Asset number: 0001308 |
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
| Row 2 | Walk-Up Experience | Walk-Up Experience | Appointments | Walk-up: (Optional) Appointment Reminder | As a walk-up customer, I want to be reminded when it's almost my appointment time. | I know this is complete when I get an appointment notification when its XX minutes from my appointment time. |

The threshold email could be used in place of this. This is not an OOB notification.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 3 | Walk-Up Experience | Walk-Up Experience | Appointments | Walk-up: (Optional) enable advanced appointment configuration | As a customer, I want to be able to book appointments variably based on location and check-in reasons. | I know this is complete when available walk-in appointment times differ based on location and check-in reasons |
| Row 4 | Walk-Up Experience | Walk-Up Experience | Appointments | Walk-up: Appointment Booking Service | As a manger I want an appointment booking service configured to indicate which schedule and record producer are tied to a particular walk-up location. | I know this is complete when an appointment booking service is created for each walk up location. |
| Row 5 | Walk-Up Experience | Walk-Up Experience | Appointments | Walk-up: Appointment Record Producer | As a manager I want appointments made by customers to be correctly managed and stored. | I know this is complete when Appointment record producers are created for each walk up location. |
| Row 6 | Walk-Up Experience | Walk-Up Experience | Check-in | Walk-up: (Optional CSM) Guest Check-in | As a walk-up manager, I want to allow customers who are not yet registered to be able to check in as a guest. | I know this is complete when guest check ins are allowed. |
| Row 7 | Walk-Up Experience | Walk-Up Experience | Check-in | Walk-up: Check-in Reasons | As a walk-up manager, I want customers to select from a list of reasons when they are checking into the walk-up lounge. | I know this is complete when the following reasons are available for selection when checking into a walk-up lounge: |

- Something is Broken

- I need something

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 8 | Walk-Up Experience | Walk-Up Experience | Configuration | Walk-up: (Optional) Audio sound for next customer | As a customer, visiting a walk-up lounge, I want to be audibly alerted when the person currently at the top of the check-in lounge changes in order to stay updated on progression of the queue. | I know this is complete when I hear an audio sound when the user currently at the top of the check-in queue changes. |
| Row 9 | Walk-Up Experience | Walk-Up Experience | Configuration | Walk-up: (Optional) Configure walk-up kiosk | To increase servicing efficiency for a configured location, as a process owner, I want customers to have the ability to access multiple kiosks at a given location. | I know this is complete when multiple kiosks are configured at a given location: XXXX |

Below please find the Configurable options for a location:

- Enable Kiosk

- Show Kiosk

- Walk-up location kiosk record(s) is/are created/shown on the Walk-up Location Kiosk related list tab

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 10 | Walk-Up Experience | Walk-Up Experience | Configuration | Walk-up: (Optional) Estimated wait time | As a walk-up manager, I want customers to see an estimated wait time when they have checked into a walk-up lounge. | I know this is complete when customers see an estimated wait time of XX once they have checked into a walk-up lounge. |
| Row 11 | Walk-Up Experience | Walk-Up Experience | Configuration | Walk-up: (Optional) On behalf of | As a walk-up customer, I want to be able to check-in on behalf of someone else. | I know this is complete when I can check-in another customer, or on behalf of someone else. |
| Row 12 | Walk-Up Experience | Walk-Up Experience | Configuration | Walk-up: After Hours Message | As a walk-up manager, I want customers to see an after hours message when they arrive to the walk-up location before or after working hours. | I know this is complete when the following message is visible on the walk-up check-in screen before or after working hours: XXX |

What should the after hours message say?

Additional configuration options:

- Message

- Last Check-in (mins)

- Schedule

- After hours contact

- Closed image (displayed at bottom)

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 13 | Walk-Up Experience | Walk-Up Experience | Configuration | Walk-up: Enable plugin | As a walk-up manager, I want to be able to use the walk-up experience to better serve my customers. | As an admin, validate the walk-up experience plugin is active. |

Validate the walk-up application displays in the menu.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 14 | Walk-Up Experience | Walk-Up Experience | Configuration | Walk-up: Enable plugin for CSM | As a walk-up manager, I want to be able to use the walk-up experience to better serve my customers. | As an admin, validate the walk-up experience plugin is active. |

Validate the walk-up application displays in the menu.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 15 | Walk-Up Experience | Walk-Up Experience | Configuration | Walk-up: State reasons | As a walk-up manager I want to ensure there is a reason given when a walk-up interaction is placed on hold. | I know this is complete when I put a walk-up interaction on hold and a state reason is required. And the correct state reasons are displayed |
| Row 16 | Walk-Up Experience | Walk-Up Experience | Configuration | Walk-up: Walk-up experience Portal User | As a walk-up manager I want to ensure there is a user created that can access the portal for onsite walk-up monitors.     |  |
| User should be created with a single role: sn\_walk-up.walk-up\_login | I know this is complete when the walk-up login user can be impersonated on devices that will display the onsite screens. |  |  |  |  |  |

sn\_walk-up.walk-up\_login need to be used to pull up the onsite walk-up screens

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 17 | Walk-Up Experience | Walk-Up Experience | Core Data | Walk-up: Locations | As a process owner, I want several walk-up locations configured so as to assist customers onsite at many office locations. | I know this is complete when the following walk-up locations are configured: XXXX |

Below please find the Configurable options:

- Location name

- Location image

- Location description (under image)

- Schedule (hours of operation)

- Reasons

- Last check-in (mins)

- Contextual Search (at bottom)

- Contextual Search config (see below)

- Number of search results

- Appointment Type

- Enable Kiosk - Show Kiosk

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 18 | Walk-Up Experience | Walk-Up Experience | Groups &amp; Assignment | Walk-up: (Optional if using agent auto assign Reject work items) | As a technician, I want to be able to reject work items when I am too busy so that other technicians who are available can work them. | I know this is complete when I am able to reject work items. Upon rejecting a work item, I should be forced to select a reason for rejecting. The reasons presented should be: |

Busy

Not my expertise.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 19 | Walk-Up Experience | Walk-Up Experience | Groups &amp; Assignment | Walk-up: (Optional if using agent auto assign) Assignment Rules | As a manager, I want Advanced Work Assignment rules created for each walk up location so as to automatically assign the appropriate agent to walk-up customers. | I know this is complete when AWA rules are defined for each walk-up location. |
| Row 20 | Walk-Up Experience | Walk-Up Experience | Groups &amp; Assignment | Walk-up: (Optional if using agent auto assign) Timeouts | As a manager, I want a walk-up interaction to be requeued after a certain period of time has passed and an agent has not accepted a walk-up, so that it can be assigned to another available technician. | I know this is complete when a walk-up interaction is requeued after a certain period of time has passed and an agent has not accepted a walk-up. Please define what the period of time should be. |
| Row 21 | Walk-Up Experience | Walk-Up Experience | Groups &amp; Assignment | Walk-up: Assignment Eligibility | As a manager I want assignment eligibility records setup for each walk-up location to relate a location to an assignment routing rule. | I know this is complete when eligibility records are created for each walk-up location. |
| Row 22 | Walk-Up Experience | Walk-Up Experience | Groups &amp; Assignment | Walk-up: Technician Groups | As a manager, I want groups setup for each walk-up location so as to indicate which group of technicians is working a walk-up location. | I know this is complete when the following groups are setup, with the following members (walk-up technicians). |

\*\* please define

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 23 | Walk-Up Experience | Walk-Up Experience | Groups &amp; Assignment | Walk-up: Walk-up experience roles | As a walk-up manager,  I want to ensure the correct groups and users have the correct roles for walk-up admin, walk-up manager, and walk-up technician | I know this is complete when the roles have been added to appropriate users and groups. |
| Row 24 | Walk-Up Experience | Walk-Up Experience | Integration | Walk-up: (Optional) iCalendar Option \[Not required if Office 365 Integration is in place, unless desired for end-users who may use alternative calendars\] | As a user, when I check-in to a lounge from the portal, I want to be able to download an iCalendar file containing appointment details, including appointment location. | I know this is complete when I check-in to a lounge from the portal, and I can download an iCalendar file containing appointment details, including appointment location. |
| Row 25 | Walk-Up Experience | Walk-Up Experience | Integration | Walk-up: (Optional) Integrate badge reader | As a walk-up customer, I want to be able to check in by scanning my company badge when arriving to the walk-up lounge. | I know this is complete when a badge reader has been integrated with ServiceNow and customers are able to check into the walk-up lounge by scanning their company badge. |
| Row 26 | Walk-Up Experience | Walk-Up Experience | Integration | Walk-up: (Optional) MS Teams Integration | In supporting a hybrid future of work model with remote employee support, as a MS Teams user, I want the ability to communicate via MS Teams concerning walk-up support. | I know this is complete when I am able to communicate via MS Teams concerning walk-up support interactions.  |

Prerequisites:

- This feature is only applicable to customers who use MS Teams

- The ‘Microsoft Spoke’ has been configured to integrate with a customer’s Microsoft Online Tenant, this includes:

- - Microsoft Azure Application is created and is configured

- - The connections and credentials have been set up and tested.  ServiceNow For Teams is installed and configured on the associated instance.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 27 | Walk-Up Experience | Walk-Up Experience | Integration | Walk-up: (Optional) Office 365 Calendar Integration | As an Office 365 user, when I create an appointment to visit a walk-up lounge, I want a calendar entry created in Outlook.  This calendar entry should be updated if I modify or cancel my walk-up appointment. | I know this is complete when I create an appointment to visit a walk-up lounge, and a calendar entry is created in Outlook. This calendar entry is updated if I modify or cancel my walk-up appointment. |

Prerequisites:

- This feature is only applicable to customers who use MS Office 365 hosted Outlook/calendaring service

- The ‘Microsoft Spoke’ has been configured to integrate with a customer’s Microsoft Online Tenant, this includes:

- - Microsoft Azure Active Directory &amp;amp; Office 365 tenant exists and is configured

- - The connections and credentials have been set up and tested

- Admin will need to enable the flow in flow designer:

“Create Walkup Appointment Calendar” and “Update/Delete Appointment Calendar”

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 28 | Walk-Up Experience | Walk-Up Experience | Mobile | Walk-up: Mobile Experience | As a walk-up manager, I want to ensure the walk-up features are displaying correctly from the mobile application. | I know this is complete when I |

Need to know if this should be viewable from the mobile application. Additional mobile work may also be needed.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 29 | Walk-Up Experience | Walk-Up Experience | Notification | Walk-up: (Optional) Notification - Walk-up Queue Length Notification | As a manager, I want to be notified when the walk-up queue reaches more than 10 visitors. | I know this is complete when I receive a notification when the walk-up queue reaches more than 10 visitors. |

Please confirm threshold value.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 30 | Walk-Up Experience | Walk-Up Experience | Notification | Walk-up: Notification - Appointment Booked | As a walk-up customer, I want to get an email when I have booked an appointment so I know my appointment is booked | I know this is complete when I get an Appointment Booked notification when I set a walk-up appointment. |

This is not an OOB notification.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 31 | Walk-Up Experience | Walk-Up Experience | Notification | Walk-up: Notification - Walk up Threshold | As a customer, I want to be notified when I am the nth person in line so I am ready when it is my turn to see a walk-up technician. | I know this is complete when I receive a notification when I am the Nth person in line. |

Please define what value N should be.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 32 | Walk-Up Experience | Walk-Up Experience | Notification | Walk-up: Notification - Walk-up Abandoned | As a customer, I want to be notified when my ticket is closed because I have abandoned the walk-up queue. | I know this is complete when I receive a notification when my interaction is set to closed abandoned. |
| Row 33 | Walk-Up Experience | Walk-Up Experience | Notification | Walk-up: Notification - Walk-up Closed | As a customer, I want to be notified when my walk-up ticket has been completed, and have a satisfaction survey emailed to me after leaving the walk-up lounge. | I know this is complete when I receive a notification when my walk-up interaction is closed complete and I receive an email with a satisfaction survey once I have left the walk-up lounge. The survey should appear as follows: XXX |

The closed notification should be part of the survey notification so customers don’t get two emails. Edit the survey notification to include closure info and deactivate the closed notification.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 34 | Walk-Up Experience | Walk-Up Experience | Portal | Walk-up: Add walk-up check-in widget to Home Page | As a process owner, I want the walk-up check-in widget to be added to the Home page. | I know this is complete when customers are able to check-in to the walk-up queue using the walk-up check-in widget on the Home page. |
| Row 35 | Walk-Up Experience | Walk-Up Experience | Portal | Walk-up: Walk-Up Branding | As a walk-up manager, I want the walk-up check-in experience to be branded with our company logo. | I know this is complete when the walk-up check-in screen is configured with the company logo. |

Additionally the following configuration options are available:

Message

Reasons (same as online check-in)

Name entry (one or both):

User Lookup

Guest login

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 36 | Walk-Up Experience | Walk-Up Experience | Queues | Walk-up: Queue Display | As the manager, I want the queue display to be configured as per company standards so that customers receive the same experience regardless of walk up location. | I know this is complete when the following Queue Display options are configured: |

- Logo

- Message

- Check-in sound

- Queue time display: Time waited or Check-in time

- Technician details

- Technician avatar

- Customer’s name

- - Full name

- - First name only

- - First name and last initial

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 37 | Walk-Up Experience | Walk-Up Experience | Reporting | Walk-up: Manager Dashboard | As a manager, I want a dashboard that shows me metrics for the different walk-up locations. | I know this is complete when I have a dashboard that shows me: |

- Completed walk-ups for the Quarter

- Exit Survey CSAT for this Year

- Overall CSAT within the last year

- Walk-ups by Location for the last year

- Walk-up Interactions w/ Incidents by Location

- Walk-up Interactions w/Requests by Location

- Walk-up Reasons by Locations within the last year

- Walk-ups by day of the week

- Walk-ups by Hour

- Walk-up consumables

- Average service time by location

- Average wait time by location

Is anything additional required from what is available OOB?

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 38 | Walk-Up Experience | Walk-Up Experience | Scheduling | Walk-up: Schedules | As a manager, I want schedules for operating hours and local holidays created, to help with scheduling of walk-up appointments. | I know this is complete when the following walk-up schedules are created: |

\*\* please define

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 39 | Walk-Up Experience | Walk-Up Experience | Scheduling | Walk-up: Stop Check-ins | As a manager, I want to prevent customers from checking in 30 minutes before the tech lounge closes, so that there is ample time left to support each person that has checked in. | I know this is complete when customers are prevented from checking in 30 minutes before the close of the walk-up location. |

How long before close should check-ins be stopped? Default is 30 minutes

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 40 | Walk-Up Experience | Walk-Up Experience | Scheduling | Walk-up: Variable time-slot schedules | As a manager, I want service specific length time-slots, to help with scheduling of walk-up appointments. | I know this is complete when the following walk-up schedules are created per location: |

\*\* please define

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 41 | Walk-Up Experience | Walk-Up Experience | Stockroom | Walk-up: My Walk-up Stockroom | As a walk-up manager, I want to enable a stock room so that customers can obtain peripherals via the walk-up. | I know this is complete when stockrooms are enabled for specific walk-up locations. |

Please define which stockroom should be assigned to each walk-up location.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 42 | Walk-Up Experience | Walk-Up Experience | Stockroom | Walk-up: Stockroom and Consumables | As a manager, I want stockrooms created for certain walk-up locations to allow customers to consume assets. | I know this is complete when the following stockrooms are created and populated with consumables. |
| Row 43 | Walk-Up Experience | Walk-Up Experience | Virtual Agent | Walk-up: (Optional) enable/configure Virtual Agent walk-up appointment booking conversation | As a customer, I want to be able to book appointments virtually/remotely through virtual agent | I know this is complete when I am able to book a walk-up appointment using topics available using virtual agent |
