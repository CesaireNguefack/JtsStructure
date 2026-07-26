// templates/cancel.template.ts

import { getLang } from "src/getlanguage";
import { baseTemplate } from "./base.template";

export function cancelTemplate(data: any) {
     const t = getLang(data.lang);
  const content = `
    
    <p>Bonjour <strong>${data.name}</strong>,</p>

    <p>
      ${t.callationDetail}
    </p>
     <table width="100%" style="border-collapse:collapse; margin-top:20px; border:1px solid #d8e2eb;">
      <tr>
        <td style="padding:10px 12px; border:1px solid #d8e2eb; background:#f4f7fa; color:#0b2545;"><strong>Service</strong></td>
        <td style="padding:10px 12px; border:1px solid #d8e2eb;">${data.service.titre}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid #d8e2eb; background:#f4f7fa; color:#0b2545;"><strong>Adresse</strong></td>
        <td style="padding:10px 12px; border:1px solid #d8e2eb;">${data.street}, ${data.zipcode} ${data.city}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid #d8e2eb; background:#f4f7fa; color:#0b2545;"><strong>Date</strong></td>
        <td style="padding:10px 12px; border:1px solid #d8e2eb;">${data.date}</td>
      </tr>
    </table>
    <p>
      ${t.callationerror}
    </p>

    <br/>
    <p style="margin-top:20px;">
      ${t.salutation}<br/> <br/>
      <strong>${t.team}</strong>
    </p>
  `;

  return baseTemplate(content,t);
}
