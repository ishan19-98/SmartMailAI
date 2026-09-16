import React from "react";
import EmailHeader from "./EmailHeader";
import EmailBody from "./EmailBody";

export default function GeneratedEmail({email}) {
  return (
    <div className="container">
      <h2>Generated Email</h2>
      <EmailHeader sender={email.sender} receiver={email.receiver} subject={email.subject} />
      <EmailBody body={email.body}/>
    </div>
  );
}
