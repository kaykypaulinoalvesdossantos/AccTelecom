import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
  }

  // Monta o payload para a API REST da Brevo
  const payload = {
    sender: {
      name: 'Marketing ACC Telecom',
      email: 'marketing@acctelecom.com.br',
    },
    to: [
      {
        email: 'contato@acctelecom.com.br',
        name: 'ACC Telecom',
      },
    ],
    subject: `Nova Mensagem do Contato - ${name}`,
    htmlContent: `
      <html><head></head><body>
        <p>Olá,</p>
        <p>Você recebeu uma nova mensagem de contato pelo site.</p>
        <p><b>Nome:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensagem:</b><br>${message.replace(/\n/g, '<br>')}</p>
      </body></html>
    `,
    replyTo: { email, name },
  };

  try {
    console.log('==> [API] Enviando e-mail via Brevo REST:', payload);
    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': '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',
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const brevoData = await brevoRes.json();
    console.log('==> [API] Resposta da Brevo:', brevoData);
    if (brevoRes.ok) {
      return NextResponse.json({ message: 'E-mail enviado com sucesso!', brevoData });
    } else {
      return NextResponse.json({ error: brevoData.message || 'Erro ao enviar e-mail pela Brevo.' }, { status: 500 });
    }
  } catch (error) {
    console.error('==> [API] Erro ao enviar e-mail pela Brevo REST:', error);
    return NextResponse.json({ error: 'Erro interno ao enviar o e-mail. Por favor, tente novamente.' }, { status: 500 });
  }
} 