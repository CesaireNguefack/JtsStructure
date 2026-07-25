import { baseTemplate } from "./base.template";
import { getLang } from 'src/getlanguage';

export function confirmTemplate(data: any) {
  const t = getLang(data.lang);

  const content = `
    <h2 style="margin:0 0 18px; color:#0b2545; font-size:24px; line-height:1.25;">${t.confirmed}</h2>

    <p>${t.greeting} <strong>${data.name}</strong>,</p>

    <p>${t.confirmed_body}</p>

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
    <br/>
    <p style="margin-top:20px;">
      ${t.thanks}<br/><br/>
      <strong>${t.team}</strong>
    </p>
  `;

  return baseTemplate(content, t); // 👈 on passe aussi t au layout
}

export function reservationTemplate(data: any) {
  const t = getLang(data.lang);

  const content = `

    <p>${t.greeting} <strong>${data.name}</strong>,</p>

    <p>${t.received}</p>
    
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
    <p>${t.review}</p>

    <br/>
    <p style="margin-top:20px;">
      ${t.salutation}<br/> <br/>
      <strong>${t.team}</strong>
    </p>
  `;

  return baseTemplate(content, t); // 👈 on passe aussi t au layout
}
