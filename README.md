#  LatteChat --- Under Development

##  Overview
This project is a **privacy-first social platform backend** where users can only interact after **mutual QR-based connection approval**.

Unlike traditional apps, **no one can directly message, react, or interact** unless a connection is explicitly established.


##  Core Concept
* Users register via **OTP authentication**
* Contacts are synced, but:

  * ❌ No chat
  * ❌ No interaction
* Interaction is only enabled after a **QR-based connection handshake**


##  Connection Flow
1. User-A scans User-B’s QR code
2. User-B gets:
   * ✅ Accept
   * ❌ Reject

3. If accepted:
   * Connection is established (persistent)

4. If removed/blocked:
   * Must reconnect via QR again


##  QR System Rules

###  Individual QR
* - Valid for **1 minute**
* - One-time use only
* - Only **1 active request at a time**

### 👥 Group QR
* ⏱️ Valid for **1 hour**
* ♾️ Unlimited joins during validity
* Managed by **Admin**


##  Status / Posts
* Users can share status:

  * 👥 Connected users → can like, comment
  * 🌍 Public users → view only (no interaction)

* Restrictions:

  * - No share
  * - No screenshot (client-level restriction)


##  Philosophy
* Privacy-first
* Intentional connections only
* No random DMs / spam
* Controlled social interaction


##  Current Progress
* Initial backend setup
* Basic server configuration
* User model (MongoDB + Mongoose)


##  Tech Stack
* Node.js
* Express.js
* MongoDB (Mongoose)


##  Upcoming
* - OTP Authentication flow
* - Contact sync logic
* - QR generation & validation system
* - Connection-based messaging
* - Status system


##  Note
This is an early-stage backend. Core architecture is being designed with **scalability and strict privacy controls** in mind.


##  Status
>  In Development — Foundation Phase
