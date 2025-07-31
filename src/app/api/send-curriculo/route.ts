import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('==> [API] /api/send-curriculo chamada. Método: POST');

  // Parse multipart form data
  const formData = await req.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const position = formData.get('position') as string;
  const message = formData.get('message') as string;
  const curriculum = formData.get('curriculum') as File | null;

  if (!name || !email || !phone || !position || !curriculum) {
    console.log('==> [API] Campos obrigatórios ausentes:', { name, email, phone, position, curriculum: !!curriculum });
    return NextResponse.json({ error: 'Por favor, preencha todos os campos e anexe o currículo.' }, { status: 400 });
  }

  // Lê o arquivo e converte para base64
  const buffer = Buffer.from(await curriculum.arrayBuffer());
  const attachments = [
    {
      content: buffer.toString('base64'),
      name: curriculum.name,
    },
  ];

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
    subject: `Novo Currículo de ${name} (${position})`,
    htmlContent: `
      <html><head></head><body>
        <p>Olá,</p>
        <p>Você recebeu um novo currículo pelo site.</p>
        <p><b>Nome:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefone:</b> ${phone}</p>
        <p><b>Área de Interesse:</b> ${position}</p>
        <p><b>Mensagem:</b><br>${message.replace(/\n/g, '<br>')}</p>
      </body></html>
    `,
    attachments,
    replyTo: { email, name },
  };

  try {
    console.log('==> [API] Enviando e-mail via Brevo REST:', payload);
    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.SENDINBLUE_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const brevoData = await brevoRes.json();
    console.log('==> [API] Resposta da Brevo:', brevoData);
    if (brevoRes.ok) {
      return NextResponse.json({ message: 'Currículo enviado com sucesso!', brevoData });
    } else {
      return NextResponse.json({ error: brevoData.message || 'Erro ao enviar currículo pela Brevo.' }, { status: 500 });
    }
  } catch (error) {
    console.error('==> [API] Erro ao enviar currículo pela Brevo REST:', error);
    return NextResponse.json({ error: 'Erro interno ao enviar o currículo. Por favor, tente novamente.' }, { status: 500 });
  }
} 