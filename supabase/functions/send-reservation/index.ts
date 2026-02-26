// Supabase Edge Function: δέχεται reservation form data, στέλνει 2 emails μέσω Resend
// (1) Στο ξενοδοχείο: νέο αίτημα, (2) Στον πελάτη: επιβεβαίωση ότι το λάβαμε

const RESEND_API = 'https://api.resend.com/emails';
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
};

function escapeHtml(s: string): string {
  return (s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function textToHtml(text: string): string {
  return text.replace(/\n/g, '<br />');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { status: 200, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  const apiKey = Deno.env.get('RESEND_API_KEY');
  const hotelEmail = Deno.env.get('HOTEL_EMAIL') || 'lafeyra.hotel@gmail.com';
  const fromEmail = Deno.env.get('FROM_EMAIL') || 'onboarding@resend.dev';

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Resend API key not configured' }), {
      status: 500,
      headers: corsHeaders,
    });
  }

  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  const email = (data.email || '').trim();
  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  const isFullForm = 'firstname' in data || 'arrival' in data;
  const subject = 'Reservation request – Lafeyra Hotel';

  let hotelBody = '';
  if (isFullForm) {
    hotelBody = `
      <p><strong>New reservation request</strong></p>
      <p><strong>First Name:</strong> ${escapeHtml(data.firstname || '')}</p>
      <p><strong>Last Name:</strong> ${escapeHtml(data.lastname || '')}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone || '')}</p>
      <p><strong>Arrival:</strong> ${escapeHtml(data.arrival || '')}</p>
      <p><strong>Departure:</strong> ${escapeHtml(data.departure || '')}</p>
      <p><strong>Adults:</strong> ${escapeHtml(data.adults || '')}</p>
      <p><strong>Children:</strong> ${escapeHtml(data.children || '')}</p>
      <p><strong>Accommodation:</strong> ${escapeHtml(data.accommodation || '')}</p>
      ${(data.message || '') ? `<p><strong>Message:</strong><br />${textToHtml(escapeHtml(data.message))}</p>` : ''}
    `;
  } else {
    hotelBody = `
      <p><strong>New reservation request (short form)</strong></p>
      <p><strong>Name:</strong> ${escapeHtml(data.name || '')}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong><br />${textToHtml(escapeHtml(data.message || ''))}</p>
    `;
  }

  // ----- Mail στον ΠΕΛΑΤΗ (επιβεβαίωση) – άλλαξε κείμενο / subject παρακάτω -----
  const guestSubject = 'We received your reservation request – Lafeyra Hotel';
  const guestBody = `
    <p>Hello${data.firstname ? ' ' + escapeHtml(data.firstname) : ''},</p>
    <p>Thank you for your reservation request. We have received your details and will get back to you shortly with our best available offer.</p>
    <p>Best regards,<br />Lafeyra Hotel Team</p>
  `;

  const sendEmail = async (to: string, subject: string, html: string) => {
    const res = await fetch(RESEND_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [to],
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(err || res.statusText);
    }
    return res.json();
  };

  try {
    await sendEmail(hotelEmail, subject, hotelBody);
    await sendEmail(email, guestSubject, guestBody);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (e) {
    console.error('Resend error:', e);
    return new Response(
      JSON.stringify({ error: 'Failed to send email', detail: String(e) }),
      { status: 500, headers: corsHeaders }
    );
  }
});
