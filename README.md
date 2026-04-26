# 📧 SmartMailAI - AI-Powered Email Generator

An intelligent backend application built using **Java** and **Spring Boot** that generates professional, well-structured emails from minimal user input by leveraging the capabilities of **Google Gemini AI API**.

---

## 🚀 Overview

Writing professional emails can be time-consuming and sometimes challenging. This application simplifies the process by allowing users to provide basic details such as context, sender, receiver, and tone — and automatically generates a polished email.

The system uses **AI-powered prompt engineering** to transform raw input into structured, grammatically correct, and context-aware email content.

---

## ✨ Features

* 🧠 **AI-Based Email Generation**

  * Converts minimal input into complete professional emails

* 🎯 **Tone Customization**

  * Supports multiple tones such as:

    * Formal
    * Friendly
    * Apologetic
    * Request-based

* 📝 **Dynamic Subject Line Generation**

  * Automatically generates a relevant subject

* ⚡ **Clean REST API Design**

  * Simple and scalable backend architecture

* 🛡️ **Error Handling & Fallbacks**

  * Handles API failures and rate limits gracefully

---

## 🏗️ Tech Stack

* **Java 17+**
* **Spring Boot**
* **REST APIs**
* **Jackson (JSON Parsing)**
* **Google Gemini AI API**

---

## 🔧 How It Works

1. User sends a request with:

   * Sender name
   * Receiver name
   * Context (short description)
   * Tone
   * 
2. Backend builds a structured prompt

3. Request is sent to **Google Gemini AI API**

4. AI generates:

   * Subject line
   * Email body

5. Response is parsed and returned in structured format

---

## 📥 Sample Request

```json
{
  "senderName": "Sender",
  "receiverName": "Manager",
  "subjectHint": "Leave Request",
  "context": "Need leave for 3 days due to personal reasons",
  "tone": "FORMAL"
}
```

---

## 📤 Sample Response

```json
{
  "subject": "Request for Leave for Three Days",
  "emailBody": "Dear Manager,\n\nI hope you are doing well...\n\nRegards,\nSender"
}
```
---

## 💡 Author

**Ishan Choudhary**
