import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nếu muốn gửi mail, có thể dùng nodemailer
// Nếu muốn lưu MongoDB, có thể dùng mongoose hoặc mongodb

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Thiết lập transporter cho nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // hoặc dịch vụ khác nếu bạn dùng
      auth: {
        user: process.env.EMAIL_USER, // đặt biến môi trường EMAIL_USER
        pass: process.env.EMAIL_PASS // đặt biến môi trường EMAIL_PASS
      }
    });

    // Nội dung email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || 'hoangan072024@gmail.com', // hoặc email nhận cố định
      subject: 'Xác nhận tham dự đám cưới',
      text: `Tên: ${data.name}\nLời nhắn: ${data.message}\nTham dự: ${data.attendance}\nĐi cùng: ${data.companion}\nKhách mời của: ${data.guestType}`
    };

    // Gửi mail
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true, message: 'Đã gửi xác nhận thành công!' });
  } catch (error) {
    console.error('Send mail error:', error);
    return NextResponse.json(
      { success: false, message: 'Có lỗi khi gửi mail', error: error?.toString() },
      { status: 500 }
    );
  }
}
