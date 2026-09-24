import React from "react";
import EmailHeader from "./EmailHeader";
import EmailBody from "./EmailBody";

export default function GeneratedEmail({generatedMailData}) {
  return (
     <div className="container">
      <h2 className="text-center">Generated Email</h2>
      <EmailHeader subject={generatedMailData.subject} />
      <EmailBody body={generatedMailData.body}/>
    </div>
  );
}
