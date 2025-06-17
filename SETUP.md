# Cylestio Website Setup

## Environment Variables

To make the contact form functional, you only need to set up the Resend API key in a `.env.local` file in the root directory:

### Resend Configuration
1. Go to [Resend](https://resend.com/) and create an account
2. Navigate to API Keys section
3. Create a new API key

```
RESEND_API_KEY=your_resend_api_key_here
```

## Complete .env.local file

Create a `.env.local` file in the root directory with:

```
# Resend Configuration 
RESEND_API_KEY=your_resend_api_key_here
```

## Features

The contact form now includes:
- ✅ **Invisible bot protection** using honeypot + timing analysis
- ✅ Email delivery to info@cylestio.com
- ✅ Form validation
- ✅ Error handling
- ✅ Success feedback
- ✅ **Clean, beautiful design** with no intrusive CAPTCHA
- ✅ Responsive design with dark theme

## Bot Protection Method

Instead of using intrusive CAPTCHA, the form uses:
- **Honeypot field**: Hidden field that bots typically fill but humans can't see
- **Timing analysis**: Prevents forms submitted too quickly (likely bots)
- **Zero user friction**: Real users see a clean form with no verification steps

## Testing

1. Install dependencies: `npm install`
2. Set up environment variables as described above
3. Run development server: `npm run dev`
4. Navigate to the form and test submission

The form will validate all fields, perform invisible bot detection, and send formatted emails to info@cylestio.com upon successful submission.

## Production Ready

This solution is production-ready and provides:
- **Better user experience** than CAPTCHA
- **Effective bot protection** for most use cases
- **Clean, professional appearance** 
- **Fast, responsive performance** 