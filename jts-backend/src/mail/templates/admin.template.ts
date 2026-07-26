// templates/admin.template.ts

import { baseTemplate } from "./base.template";
import { getLang } from 'src/getlanguage';

export function adminTemplate(data: any) {
    const t = getLang(data.lang);
  const content = `
    <h2 style="margin:0 0 18px; color:#0b2545; font-size:24px; line-height:1.25;">${t.newReservation}</h2>

    <table width="100%" style="border-collapse:collapse; border:1px solid #d8e2eb;">
      <tr>
        <td style="padding:10px 12px; border:1px solid #d8e2eb; background:#f4f7fa; color:#0b2545;"><strong>Nom</strong></td>
        <td style="padding:10px 12px; border:1px solid #d8e2eb;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid #d8e2eb; background:#f4f7fa; color:#0b2545;"><strong>Email</strong></td>
        <td style="padding:10px 12px; border:1px solid #d8e2eb;">${data.email}</td>
      </tr>
       <tr>
        <td style="padding:10px 12px; border:1px solid #d8e2eb; background:#f4f7fa; color:#0b2545;"><strong>Tel</strong></td>
        <td style="padding:10px 12px; border:1px solid #d8e2eb;">${data.phone}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid #d8e2eb; background:#f4f7fa; color:#0b2545;"><strong>Service</strong></td>
        <td style="padding:10px 12px; border:1px solid #d8e2eb;">${data.service.titre}</td>
      </tr> 
       <tr>
        <td style="padding:10px 12px; border:1px solid #d8e2eb; background:#f4f7fa; color:#0b2545;"><strong>Adresse</strong></td>
        <td style="padding:10px 12px; border:1px solid #d8e2eb;">${data.street}, ${data.zipcode} ${data.city}</td>
      </tr>
       <tr>
        <td style="padding:10px 12px; border:1px solid #d8e2eb; background:#f4f7fa; color:#0b2545;"><strong>Message</strong></td>
        <td style="padding:10px 12px; border:1px solid #d8e2eb;">${data.message}</td>
      </tr>
    </table>
  `;

  return baseTemplate(content,t);
} 
