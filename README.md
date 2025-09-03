# Rijul Dhakal - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with neon green accents
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 📧 Contact form with email functionality
- 🚀 Fast and optimized performance

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Email Configuration (Important!)

To enable the contact form email functionality:

1. **Create a Gmail App Password:**
   - Go to your Google Account settings
   - Enable 2-Factor Authentication
   - Go to "App passwords" and generate a new password
   - Copy the 16-character app password

2. **Update the .env file:**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### 3. Run the Application

**Development (Frontend + Backend):**
```bash
npm run dev:full
```

This will start:
- Frontend on `http://localhost:5173`
- Backend API on `http://localhost:3001`

**Frontend only:**
```bash
npm run dev
```

**Backend only:**
```bash
npm run server
```

## Contact Form

The contact form automatically sends emails to `rijuldhakal95@gmail.com` with:
- ✅ Form validation
- ✅ Success/error messages
- ✅ Professional email formatting
- ✅ Responsive design

## Customization

### Profile Picture
Replace `/src/assets/profile.jpg` with your image.

### Projects
Update the `projects` array in `/src/components/Projects.tsx`.

### Contact Information
Update social links and contact details in `/src/components/Contact.tsx`.

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, Nodemailer
- **Build Tool:** Vite
- **Email Service:** Gmail SMTP

## Deployment

For production deployment, make sure to:
1. Set up environment variables on your hosting platform
2. Update the API endpoint URL in the Contact component
3. Configure CORS for your production domain

## Support

If you need help setting up the email functionality or have any questions, feel free to reach out!