# Personal Website

A modern, responsive personal CV website built with HTML, CSS, and JavaScript. Features a clean design with Catppuccin color palette, language toggle (English/Spanish), and PDF download functionality.

## Features

- **Modern Design**: Clean, minimalistic interface inspired by professional CV websites
- **Catppuccin Theme**: Beautiful pastel color palette for comfortable viewing
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Language Toggle**: Switch between English and Spanish seamlessly
- **PDF Download**: Download CV in the selected language
- **Smooth Animations**: Parallax effects and fade-in animations
- **Home-Lab Hosting**: Optimized for self-hosting environments

## File Structure

```
personal-website/
├── index.html          # Main HTML structure
├── styles.css          # Styling with Catppuccin theme
├── script.js           # Interactive functionality
├── cv/                 # CV PDF files directory
│   ├── CV_EN.pdf       # English CV (you need to add this)
│   ├── CV_ES.pdf       # Spanish CV (you need to add this)
│   └── README.md       # CV directory instructions
└── README.md           # This file
```

## Setup Instructions

1. **Add Your CV Files**
   - Place your English CV as `CV_EN.pdf` in the `cv/` directory
   - Place your Spanish CV as `CV_ES.pdf` in the `cv/` directory

2. **Customize Content**
   - Edit `index.html` to update your personal information:
     - Name and profession
     - External links (LinkedIn, GitHub, email)
     - About section
     - Work experience
     - Education
     - Skills
     - Interests

3. **Host Your Website**
   - Upload all files to your web server or home-lab
   - Ensure the `cv/` directory is accessible for PDF downloads

## Customization

### Personal Information
Edit the following sections in `index.html`:

- **Name**: Update the `<h1 class="name">` element
- **Profession**: Update the `<p class="profession">` element
- **External Links**: Update href attributes in the `.external-links` section
- **Content**: Replace placeholder text in all CV sections

### Styling
- Modify `styles.css` to adjust colors, fonts, and layout
- The Catppuccin color palette is defined in CSS variables
- Responsive breakpoints are included for mobile optimization

### Language Support
- Add new languages by extending the `data-en` and `data-es` attributes
- Update `script.js` to handle additional languages
- Add corresponding CV PDF files

## Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Performance Features

- Optimized CSS with modern techniques
- Lazy loading for animations
- Efficient JavaScript with minimal dependencies
- Responsive images and layouts

## Security Notes

- No external dependencies except Google Fonts
- HTTPS recommended for production
- CV files should be properly secured if containing sensitive information

## License

This website template is open source. Feel free to customize and use it for your personal CV website.

## Support

For issues or questions about the website template, please check the code comments and documentation within the files.