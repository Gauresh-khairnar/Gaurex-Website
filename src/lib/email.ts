import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Persistence directory for lead safety
function getLeadDataDir() {
  if (process.env.VERCEL === "1") {
    return path.join("/tmp", "data");
  }
  return path.join(process.cwd(), "data");
}

function saveLeadToDisk(type: "inquiry" | "booking", payload: Record<string, unknown>) {
  try {
    const dataDir = getLeadDataDir();
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, `${type}s.json`);
    let existing: Record<string, unknown>[] = [];
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      try {
        existing = JSON.parse(content);
      } catch {
        existing = [];
      }
    }
    existing.unshift({ ...payload, recordedAt: new Date().toISOString() });
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");
    console.log(`[LEAD PERSISTED]: Saved ${type} to ${filePath}`);
  } catch (err) {
    console.error(`[LEAD PERSIST ERROR]:`, err);
  }
}

// Nodemailer Transporter configuration with fallback
function getTransporter() {
  const user = process.env.SMTP_USER || process.env.EMAIL_USER || "khairnargauresh01@gmail.com";
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS || "defkjhdxfigigolv";
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;

  if (user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }
  return null;
}

export interface BookingEmailData {
  referenceId: string;
  name: string;
  email: string;
  company: string;
  slot: string;
  timestamp: string;
}

export interface InquiryEmailData {
  referenceId: string;
  fullName: string;
  email: string;
  companyName: string;
  industry: string;
  problem: string;
  requiredSolution: string;
  budget: string;
  timeline: string;
  timestamp: string;
}

// 1. DISCOVERY CALL EMAILS
export async function dispatchDiscoveryCallEmails(data: BookingEmailData) {
  // Always safely persist to local disk
  saveLeadToDisk("booking", { ...data });

  const meetLink = "https://meet.google.com/xwv-gaur-exm";
  const transporter = getTransporter();

  // HTML Email for Admin (Gauresh)
  const adminHtml = `
  <!DOCTYPE html>
  <html>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #09090b; background: #fafafa; padding: 24px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
      <div style="background: #09090b; color: #ffffff; padding: 24px 28px;">
        <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #a1a1aa;">GAUREX Alert</span>
        <h2 style="margin: 6px 0 0 0; font-size: 20px; font-weight: 800;">New Discovery Call Scheduled</h2>
      </div>
      <div style="padding: 28px;">
        <p style="font-size: 14px; color: #52525b; margin-top: 0;">A prospective client has requested a 15-minute technical discovery call:</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 20px 0;">
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a; width: 140px;">Client Name:</td><td style="padding: 10px 0; font-weight: 700; color: #09090b;">${data.name}</td></tr>
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a;">Business Email:</td><td style="padding: 10px 0; font-weight: 700; color: #09090b;"><a href="mailto:${data.email}" style="color: #09090b;">${data.email}</a></td></tr>
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a;">Company:</td><td style="padding: 10px 0; font-weight: 700; color: #09090b;">${data.company || "Not Specified"}</td></tr>
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a;">Preferred Window:</td><td style="padding: 10px 0; font-weight: 700; color: #16a34a;">${data.slot}</td></tr>
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a;">Booking Ref:</td><td style="padding: 10px 0; font-family: monospace; font-weight: 700;">${data.referenceId}</td></tr>
          <tr><td style="padding: 10px 0; color: #71717a;">Google Meet:</td><td style="padding: 10px 0;"><a href="${meetLink}" style="color: #2563eb; font-weight: 600;">Open Meet Room</a></td></tr>
        </table>
        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #f4f4f5;">
          <a href="mailto:${data.email}?subject=Confirmed:%20GAUREX%20Technical%20Discovery%20Call%20(${encodeURIComponent(data.referenceId)})" style="display: inline-block; background: #09090b; color: #ffffff; text-decoration: none; padding: 12px 22px; border-radius: 999px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Reply Directly to Client</a>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  // HTML Email for Customer
  const customerHtml = `
  <!DOCTYPE html>
  <html>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #09090b; background: #fafafa; padding: 24px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
      <div style="background: #09090b; color: #ffffff; padding: 28px;">
        <span style="font-size: 12px; font-weight: 800; letter-spacing: 1px; color: #ffffff;">GAUREX</span>
        <h2 style="margin: 12px 0 0 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">Your Discovery Call is Confirmed</h2>
      </div>
      <div style="padding: 28px;">
        <p style="font-size: 14px; color: #27272a; margin-top: 0; line-height: 1.6;">
          Hello ${data.name},<br /><br />
          Thank you for reaching out to <strong>GAUREX</strong>. We have confirmed your 15-minute technical discovery session.
        </p>

        <div style="background: #f4f4f5; border: 1px solid #e4e4e7; border-radius: 12px; padding: 18px 20px; margin: 24px 0;">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #71717a; margin-bottom: 8px;">Meeting Details</div>
          <div style="font-size: 14px; font-weight: 700; color: #09090b; margin-bottom: 4px;">Time: ${data.slot}</div>
          <div style="font-size: 13px; color: #3f3f46; margin-bottom: 12px;">Host: Gauresh Khairnar (Founder, GAUREX)</div>
          <div>
            <a href="${meetLink}" style="display: inline-block; background: #09090b; color: #ffffff; text-decoration: none; padding: 10px 18px; border-radius: 8px; font-size: 12px; font-weight: 700;">Join Google Meet Room &rarr;</a>
          </div>
        </div>

        <h4 style="font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; margin: 24px 0 10px 0;">What to Expect During the Call</h4>
        <ul style="font-size: 13px; color: #52525b; line-height: 1.6; padding-left: 20px; margin: 0 0 24px 0;">
          <li>Direct analysis of your current operational bottlenecks and workflow pain points.</li>
          <li>Review of whether custom software, AI agents, or automation is the appropriate solution.</li>
          <li>A clear technical roadmap with estimated implementation timeline and budget.</li>
          <li><strong>Zero sales pressure:</strong> Our focus is purely technical feasibility and problem diagnosis.</li>
        </ul>

        <p style="font-size: 12px; color: #71717a; line-height: 1.6; border-top: 1px solid #f4f4f5; padding-top: 18px;">
          Have any documentation, architecture diagrams, or notes to share ahead of time? Feel free to reply directly to this email or reach us at <a href="mailto:gaurex.ai@gmail.com" style="color: #09090b; font-weight: 600;">gaurex.ai@gmail.com</a>.<br /><br />
          Warm regards,<br />
          <strong>Gauresh Khairnar</strong><br />
          Founder & Principal Architect, GAUREX<br />
          <span style="font-size: 11px; color: #a1a1aa;">Ref: ${data.referenceId}</span>
        </p>
      </div>
    </div>
  </body>
  </html>
  `;

  if (transporter) {
    try {
      // Send to Admin (deliver to both gaurex.ai and founder email)
      await transporter.sendMail({
        from: `"GAUREX Alert" <khairnargauresh01@gmail.com>`,
        to: "gaurex.ai@gmail.com, khairnargauresh01@gmail.com",
        subject: `[DISCOVERY CALL] ${data.name} (${data.company || "Individual"}) - ${data.slot}`,
        html: adminHtml,
      });

      // Send to Customer
      await transporter.sendMail({
        from: `"Gauresh Khairnar | GAUREX" <khairnargauresh01@gmail.com>`,
        to: data.email,
        replyTo: "gaurex.ai@gmail.com",
        subject: `Confirmed: 15-Minute Technical Discovery Call with GAUREX`,
        html: customerHtml,
      });
      console.log(`[EMAIL DISPATCH SUCCESS]: Discovery call emails sent to admin and ${data.email}`);
    } catch (err) {
      console.error(`[EMAIL DISPATCH ERROR]: Failed to send via SMTP:`, err);
    }
  } else {
    console.log(`[EMAIL DISPATCH MOCK]: SMTP credentials not set in .env. Both emails generated and saved locally.`);
  }

  return { meetLink };
}

// 2. CONTACT INQUIRY EMAILS
export async function dispatchInquiryEmails(data: InquiryEmailData) {
  // Always safely persist to local disk
  saveLeadToDisk("inquiry", { ...data });

  const transporter = getTransporter();

  // Admin Notification Email
  const adminHtml = `
  <!DOCTYPE html>
  <html>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #09090b; background: #fafafa; padding: 24px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
      <div style="background: #09090b; color: #ffffff; padding: 24px 28px;">
        <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #a1a1aa;">GAUREX B2B Lead</span>
        <h2 style="margin: 6px 0 0 0; font-size: 20px; font-weight: 800;">New Technical Project Inquiry</h2>
      </div>
      <div style="padding: 28px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a; width: 140px;">Client Name:</td><td style="padding: 10px 0; font-weight: 700;">${data.fullName}</td></tr>
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a;">Business Email:</td><td style="padding: 10px 0; font-weight: 700;"><a href="mailto:${data.email}" style="color: #09090b;">${data.email}</a></td></tr>
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a;">Company:</td><td style="padding: 10px 0; font-weight: 700;">${data.companyName}</td></tr>
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a;">Industry:</td><td style="padding: 10px 0;">${data.industry}</td></tr>
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a;">Required Solution:</td><td style="padding: 10px 0; font-weight: 700; color: #09090b;">${data.requiredSolution}</td></tr>
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a;">Approx Budget:</td><td style="padding: 10px 0; font-weight: 700; color: #16a34a;">${data.budget}</td></tr>
          <tr style="border-bottom: 1px solid #f4f4f5;"><td style="padding: 10px 0; color: #71717a;">Timeline:</td><td style="padding: 10px 0;">${data.timeline}</td></tr>
          <tr><td style="padding: 10px 0; color: #71717a;">Tracking Ref:</td><td style="padding: 10px 0; font-family: monospace;">${data.referenceId}</td></tr>
        </table>
        
        <div style="margin-top: 20px; background: #f4f4f5; border: 1px solid #e4e4e7; border-radius: 12px; padding: 16px;">
          <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #71717a; display: block; margin-bottom: 6px;">Problem Description:</span>
          <p style="font-size: 13px; color: #18181b; margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.problem}</p>
        </div>

        <div style="margin-top: 24px;">
          <a href="mailto:${data.email}?subject=Re:%20GAUREX%20Project%20Inquiry%20(${encodeURIComponent(data.referenceId)})" style="display: inline-block; background: #09090b; color: #ffffff; text-decoration: none; padding: 12px 22px; border-radius: 999px; font-size: 12px; font-weight: 700; text-transform: uppercase;">Reply Directly to Prospect</a>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  // Customer Confirmation Email
  const customerHtml = `
  <!DOCTYPE html>
  <html>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #09090b; background: #fafafa; padding: 24px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
      <div style="background: #09090b; color: #ffffff; padding: 28px;">
        <span style="font-size: 12px; font-weight: 800; letter-spacing: 1px; color: #ffffff;">GAUREX</span>
        <h2 style="margin: 12px 0 0 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">We Received Your Technical Inquiry</h2>
      </div>
      <div style="padding: 28px;">
        <p style="font-size: 14px; color: #27272a; margin-top: 0; line-height: 1.6;">
          Hello ${data.fullName},<br /><br />
          Thank you for contacting <strong>GAUREX</strong>. Your project inquiry has been queued directly for engineering evaluation by Founder Gauresh Khairnar and our senior systems architects.
        </p>

        <div style="background: #f4f4f5; border: 1px solid #e4e4e7; border-radius: 12px; padding: 18px 20px; margin: 24px 0;">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #71717a; margin-bottom: 8px;">Inquiry Summary</div>
          <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
            <tr><td style="color: #71717a; padding: 4px 0; width: 130px;">Company:</td><td style="font-weight: 600; color: #09090b;">${data.companyName}</td></tr>
            <tr><td style="color: #71717a; padding: 4px 0;">Required Solution:</td><td style="font-weight: 600; color: #09090b;">${data.requiredSolution}</td></tr>
            <tr><td style="color: #71717a; padding: 4px 0;">Timeline:</td><td style="font-weight: 600; color: #09090b;">${data.timeline}</td></tr>
            <tr><td style="color: #71717a; padding: 4px 0;">Tracking ID:</td><td style="font-family: monospace; font-weight: 700;">${data.referenceId}</td></tr>
          </table>
        </div>

        <h4 style="font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; margin: 24px 0 10px 0;">What Happens Next?</h4>
        <ol style="font-size: 13px; color: #52525b; line-height: 1.6; padding-left: 20px; margin: 0 0 24px 0;">
          <li>We review your operational requirements against our architectural standards.</li>
          <li>We deliver a preliminary technical architecture review within 24 business hours.</li>
          <li>All submitted data is covered under strict commercial confidentiality.</li>
        </ol>

        <p style="font-size: 12px; color: #71717a; line-height: 1.6; border-top: 1px solid #f4f4f5; padding-top: 18px;">
          Need an immediate response? You can reply directly to this email or message our engineering desk on WhatsApp at <a href="https://wa.me/919579098477" style="color: #09090b; font-weight: 600;">+91 95790 98477</a>.<br /><br />
          Warm regards,<br />
          <strong>Gauresh Khairnar</strong><br />
          Founder & Principal Systems Architect, GAUREX<br />
          <a href="https://gaurex.vercel.app" style="color: #71717a; text-decoration: none;">gaurex.vercel.app</a>
        </p>
      </div>
    </div>
  </body>
  </html>
  `;

  if (transporter) {
    try {
      // Send to Admin (deliver to both gaurex.ai and founder email)
      await transporter.sendMail({
        from: `"GAUREX Lead Intake" <khairnargauresh01@gmail.com>`,
        to: "gaurex.ai@gmail.com, khairnargauresh01@gmail.com",
        subject: `[NEW INQUIRY] ${data.fullName} - ${data.companyName} (${data.requiredSolution})`,
        html: adminHtml,
      });

      // Send to Customer
      await transporter.sendMail({
        from: `"Gauresh Khairnar | GAUREX" <khairnargauresh01@gmail.com>`,
        to: data.email,
        replyTo: "gaurex.ai@gmail.com",
        subject: `Receipt: GAUREX Technical Project Inquiry (${data.referenceId})`,
        html: customerHtml,
      });
      console.log(`[EMAIL DISPATCH SUCCESS]: Inquiry emails sent to admin and ${data.email}`);
    } catch (err) {
      console.error(`[EMAIL DISPATCH ERROR]: Failed to send inquiry email via SMTP:`, err);
    }
  } else {
    console.log(`[EMAIL DISPATCH MOCK]: SMTP credentials not set in .env. Both emails generated and saved locally.`);
  }
}

