#!/usr/bin/env python3
import os

def create_resume_pdf(output_path):
    # Construct a valid, clean, standards-compliant PDF 1.4 file
    lines = [
        "BT",
        "/F1 20 Tf",
        "50 780 Td",
        "(FAIYAZ KHAN) Tj",
        "/F2 11 Tf",
        "0 -18 Td",
        "(MERN Stack Developer / Frontend & Backend Web Developer) Tj",
        "/F2 9 Tf",
        "0 -14 Td",
        "(Mumbai, India  |  +91 7208111411  |  khanfaiyaz359@gmail.com) Tj",
        "0 -12 Td",
        "(LinkedIn: linkedin.com/in/faiyaz-khan-83489b234  |  GitHub: github.com/Fk4111) Tj",
        "0 -18 Td",
        "/F1 12 Tf",
        "(CURRENT WORK EXPERIENCE) Tj",
        "/F2 9 Tf",
        "0 -14 Td",
        "(Aptechnosys - Full Stack Developer | Mumbai  [March 2025 - Present]) Tj",
        "0 -12 Td",
        "(- Building modern, scalable web applications using React.js, Next.js, Node.js, Express.js, REST API, MongoDB) Tj",
        "0 -11 Td",
        "(- Actively developing responsive, SEO-optimized web solutions with 94%+ Core Web Vitals and accessible UI) Tj",
        "0 -11 Td",
        "(- Architecting serverless API endpoints, Resend transactional email flows, and database schemas) Tj",
        "0 -16 Td",
        "/F1 12 Tf",
        "(FEATURED PRODUCTION PROJECTS) Tj",
        "/F2 9 Tf",
        "0 -14 Td",
        "(1. KNK Admin Panel - Court Verification Workflow System [MERN Stack]) Tj",
        "0 -11 Td",
        "(   Live: knk-partners.vercel.app  |  GitHub: github.com/Fk4111/knk-Dashboard) Tj",
        "0 -11 Td",
        "(   - Candidate background verification engine with role-based access (Admin/User) and vendor tracking) Tj",
        "0 -11 Td",
        "(   - Server-to-Server (S2S) API integration, automated status pull/callback, rate limiting, and audit logs) Tj",
        "0 -11 Td",
        "(   - Tech: React.js, Node.js, Express.js, MongoDB, JWT, Tailwind, Joi, Helmet, Docker) Tj",
        "0 -13 Td",
        "(2. Aptechnosys - Corporate IT Services Website [Next.js Platform]) Tj",
        "0 -11 Td",
        "(   Live: Aptechnosys.com  |  GitHub: github.com/Fk4111/aptechnosysWebsite) Tj",
        "0 -11 Td",
        "(   - Corporate web platform elevated from 58% to 94% performance and 100% SEO + Best Practices) Tj",
        "0 -11 Td",
        "(   - Integrated Resend API contact forms, responsive showcase layout, and edge deployment on Vercel) Tj",
        "0 -13 Td",
        "(3. Equity Backtester [React.js, FastAPI, PostgreSQL]) Tj",
        "0 -11 Td",
        "(   GitHub: github.com/Fk4111/equity_backtester) Tj",
        "0 -11 Td",
        "(   - Quantitative equity strategy backtester with fundamental screening and portfolio ranking metrics) Tj",
        "0 -16 Td",
        "/F1 12 Tf",
        "(TECHNICAL SKILLS) Tj",
        "/F2 9 Tf",
        "0 -14 Td",
        "(Frontend: React.js, Next.js, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Material UI) Tj",
        "0 -11 Td",
        "(Backend: Node.js, Express.js, MongoDB, Mongoose, REST APIs, Socket.io, SQL) Tj",
        "0 -11 Td",
        "(Auth & Security: JWT, bcrypt, OAuth, API Key Authentication, CORS, HTTPS Security) Tj",
        "0 -11 Td",
        "(DevOps & Cloud: Git, GitHub, Docker, Postman, Vercel, Netlify, Railway, AWS (S3, EC2)) Tj",
        "0 -11 Td",
        "(AI Dev Tools: Copilot, Cursor, Claude Code, Code Rabbit, ChatGPT, Perplexity) Tj",
        "0 -16 Td",
        "/F1 12 Tf",
        "(EDUCATION & CERTIFICATIONS) Tj",
        "/F2 9 Tf",
        "0 -14 Td",
        "(Bachelor of Science in Information Technology (B.Sc. IT) - 2022 [CGPA: 6.70]) Tj",
        "0 -11 Td",
        "(Bhavna Trust Junior & Degree College, University of Mumbai) Tj",
        "0 -12 Td",
        "(Full-Stack Development Certification - Aimerz.ai (11/2024)) Tj",
        "0 -11 Td",
        "(Java Development Certification - Coding Ninjas (11/2022 - 03/2023) [OOPS, DSA]) Tj",
        "0 -11 Td",
        "(Web & Software Development Internship - Afame Technologies (02/2024 - 07/2024)) Tj",
        "ET"
    ]
    
    stream_content = "\n".join(lines).encode('latin1')
    stream_len = len(stream_content)

    objects = []
    
    # 1: Catalog
    objects.append("<< /Type /Catalog /Pages 2 0 R >>")
    # 2: Pages
    objects.append("<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    # 3: Page
    objects.append("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>")
    # 4: Stream
    objects.append(f"<< /Length {stream_len} >>\nstream\n".encode('latin1') + stream_content + b"\nendstream")
    # 5: Font F1 (Helvetica-Bold)
    objects.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    # 6: Font F2 (Helvetica)
    objects.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

    # Assemble PDF with cross-reference table
    output = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    xref_offsets = [0]
    
    for i, obj in enumerate(objects, 1):
        xref_offsets.append(len(output))
        output.extend(f"{i} 0 obj\n".encode('latin1'))
        if isinstance(obj, str):
            output.extend(obj.encode('latin1'))
        else:
            output.extend(obj)
        output.extend(b"\nendobj\n")

    xref_start = len(output)
    output.extend(f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n".encode('latin1'))
    for offset in xref_offsets[1:]:
        output.extend(f"{offset:010d} 00000 n \n".encode('latin1'))

    output.extend(f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_start}\n%%EOF\n".encode('latin1'))

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "wb") as f:
        f.write(output)
    print(f"Successfully generated PDF: {output_path} ({len(output)} bytes)")

if __name__ == "__main__":
    create_resume_pdf("public/faiyaz_khan_resume.pdf")
