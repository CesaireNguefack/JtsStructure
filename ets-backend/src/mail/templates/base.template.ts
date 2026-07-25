export function baseTemplate(content:any, t?: any) {
  return `
  <html>
  <body style="margin:0; padding:0; background:#eef3f7; font-family:Arial, Helvetica, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:28px 12px;">

          <table width="600" cellpadding="0" cellspacing="0" bgcolor="#0b2545" style="width:100%; max-width:600px; border-collapse:collapse;">

            <!-- HEADER -->
            <tr>
              <td style="padding:26px 30px 22px; text-align:left; color:white; border-bottom:4px solid #16486f;">
                <div style="font-size:26px; line-height:1.1; font-weight:800; letter-spacing:1.5px; text-transform:uppercase;">
                  JTS Structure
                </div>
                <div style="margin-top:8px; color:#c9d8e6; font-size:13px; line-height:1.4; letter-spacing:2px; text-transform:uppercase;">
                  Consulting Engineers
                </div>
              </td>
            </tr>

            <!-- CONTENT -->
            <tr>
              <td style="background:#ffffff; padding:34px 30px; color:#152238; font-size:15px; line-height:1.7;">
                ${content}
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="padding:18px 30px; text-align:left; color:#d8e4ef; font-size:12px; line-height:1.6;">
                <strong style="color:#ffffff;">JTS Structure</strong><br/>
                Ingénierie des structures, études techniques et accompagnement de projets.
                <div style="margin-top:10px; color:#9fb6ca;">${t?.thanks ?? "Merci pour votre confiance"}</div>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}
