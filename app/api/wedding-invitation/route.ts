import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nếu muốn gửi mail, có thể dùng nodemailer
// Nếu muốn lưu MongoDB, có thể dùng mongoose hoặc mongodb

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log('Received form data:', data);

    // Kiểm tra xem có email config không
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Email config not found, returning success without sending email');
      return NextResponse.json({
        success: true,
        message: 'Đã gửi xác nhận thành công! (Demo mode - email not configured)'
      });
    }

    // Thiết lập transporter cho nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Nội dung email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || 'hoangan072024@gmail.com',
      subject: 'Xác nhận tham dự đám cưới',
      text: `Tên: ${data.name}\nLời nhắn: ${data.message}\nTham dự: ${data.attendance}\nĐi cùng: ${data.companion}\nKhách mời của: ${data.guestType}`
    };

    // Gửi mail
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return NextResponse.json({ success: true, message: 'Đã gửi xác nhận thành công!' });
  } catch (error) {
    console.error('Send mail error:', error);
    return NextResponse.json(
      { success: false, message: 'Có lỗi khi gửi mail', error: error?.toString() },
      { status: 500 }
    );
  }
}
