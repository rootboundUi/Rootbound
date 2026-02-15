# Rootbound Premium Shopify Theme

**Contemporary streetwear design for the authentic individual.**

A modern, fully-featured Shopify Online Store 2.0 theme designed for premium fashion brands with a focus on clean aesthetics, performance, and user experience.

## 🎯 Theme Features

### Design & UX
- ✨ Modern, clean, premium aesthetic
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ WCAG 2.1 AA accessibility compliant
- ⚡ Performance optimized (lazy loading, optimized assets)
- 🎨 Customizable color schemes and typography
- 🏎️ Lightning-fast page load times

### Core Features
- **Hero Banner** - Full-width hero with CTA
- **Featured Collections** - Showcase multiple collections
- **Featured Products** - Highlight bestsellers and new items
- **Product Pages** - Full variant support (size, color, etc.)
- **Collection Pages** - Faceted filtering, sorting, pagination
- **Shopping Cart** - Editable quantities, discount codes
- **Customer Accounts** - Login, registration, order history
- **Testimonials Section** - Customer reviews and ratings
- **Image Gallery** - Community/lifestyle images
- **Newsletter** - Mailchimp integration ready
- **Search** - Predictive search functionality

### Technical Excellence
- Online Store 2.0 architecture (JSON templates)
- Semantic HTML5
- Mobile-first responsive design
- Performance best practices
- Clean, maintainable code
- No JavaScript conflicts
- Native Shopify features compatibility

## 📦 Installation

### Prerequisites
- Shopify store (any plan)
- Basic understanding of Shopify Admin

### Steps

1. **Download Theme**
   - Clone or download this repository
   - Or upload directly to Shopify

2. **Upload to Shopify**
   - Go to Online Store → Themes
   - Click "Add theme" → "Upload ZIP file"
   - Select the Rootbound folder
   - Wait for upload to complete

3. **Configure Settings**
   - Click "Customize" on the uploaded theme
   - Navigate to Theme Settings
   - Configure:
     - Colors (primary, secondary, accent)
     - Typography (heading & body fonts)
     - Site navigation menu
     - Social media links
     - Newsletter settings

4. **Set Up Navigation**
   - Go to Online Store → Navigation
   - Create "Main menu" as configured in theme settings
   - Add menu items (Shop, About, Contact, etc.)

5. **Customize Home Page**
   - Go to Themes → Customize
   - Click sections to edit content
   - Update hero banner image, text, CTA
   - Add featured collections and products
   - Configure testimonials and gallery

## 🎨 Customization Guide

### Colors
All colors are controlled via theme settings:
- **Primary Color** - Main brand color (default: #000000)
- **Secondary Color** - Supporting color (default: #666666)
- **Accent Color** - CTA colors (default: #E85D04)
- **Text Color** - Body text (default: #1a1a1a)
- **Light Background** - Subtle backgrounds (default: #f5f5f5)

### Typography
- **Heading Font** - Playfair Display (serif) - elegant and premium
- **Body Font** - Inter (sans-serif) - clean and readable

Update via Theme Settings → Typography

### Sections

#### Hero Banner
- Upload custom hero image
- Edit headline and subtitle
- Customize CTA button text and link
- Adjust text alignment and height

#### Featured Collections
- Add collection cards with images
- Customize section title
- Toggle "View All Collections" link

#### Featured Products
- Select collection to feature
- Choose number of products to display
- Customize section title and subtitle

#### Testimonials
- Add customer testimonials
- Upload customer avatars
- Include location and review text
- 5-star ratings

#### Image Gallery
- Upload lifestyle/community images
- Add captions for hover effect
- Choose grid columns (2, 3, or 4)

#### Rich Text
- Header and body content
- Optional button CTA
- Hero image with text overlay
- Choose image position (left/right)

### Layouts

#### Product Page
- Image gallery with thumbnails
- Size, color, and other variant options
- Pricing with sale discount display
- Add to cart and quantity selector
- Product badges (free shipping, guarantee)
- Related products section

#### Collection Page
- Faceted filters (price, tags, variants)
- Sort options (best-selling, price, A-Z, newest)
- Responsive product grid
- Pagination support

#### Cart Page
- Editable item quantities
- Discount code application
- Order summary totals
- Trust badges
- Continue shopping link

## 🔧 Theme Structure

```
Rootbound/
├── config/
│   ├── settings_schema.json      # Theme customization options
│   └── settings_data.json        # Default settings
├── layout/
│   └── theme.liquid              # Main layout template
├── templates/
│   ├── index.json                # Home page
│   ├── collection.json           # Collection page
│   ├── product.json              # Product page
│   ├── cart.json                 # Cart page
│   ├── page.json                 # Generic pages
│   ├── 404.json                  # Not found
│   ├── search.json               # Search results
│   └── customers/
│       ├── login.json            # Login/register
│       ├── account.json          # Account dashboard
│       ├── addresses.json        # Saved addresses
│       └── order.json            # Order details
├── sections/                      # Reusable components
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero.liquid
│   ├── featured-collections.liquid
│   ├── featured-products.liquid
│   ├── testimonials.liquid
│   ├── image-gallery.liquid
│   ├── rich-text.liquid
│   ├── collection-banner.liquid
│   ├── collection-filters.liquid
│   ├── collection-products.liquid
│   ├── product-main.liquid
│   ├── related-products.liquid
│   ├── cart-main.liquid
│   ├── page-main.liquid
│   ├── customer-login.liquid
│   ├── customer-account.liquid
│   ├── customer-addresses.liquid
│   └── customer-order.liquid
├── snippets/                      # Reusable includes
│   ├── product-card.liquid       # Product card component
│   └── direction.liquid           # RTL support
├── assets/
│   ├── theme.css                 # Main stylesheet
│   ├── theme.js                  # Main JavaScript
│   ├── predictive-search.css     # Search styles
│   └── predictive-search.js      # Search functionality
├── locales/
│   └── en.json                   # English translations
└── theme.json                     # Theme metadata
```

## 📋 Product Requirements

### Product Setup
1. **Images**
   - Featured image + additional images for gallery
   - Multiple images enable image thumbnails on product page
   - JPG or PNG format recommended
   - Optimize for web (72 DPI, < 100KB)

2. **Variants**
   - Size (XS, S, M, L, XL, XXL)
   - Color (specific color names)
   - Other variants as needed

3. **Pricing**
   - Regular price and compare-at price (for sales)
   - Sales automatically display discount badge

4. **Collections**
   - Organize products by collection
   - Add collection descriptions for SEO

5. **Vendor/Brand**
   - Set product vendor for display

## 🔍 SEO Best Practices

### On-Page Optimization
- Meta titles and descriptions included
- Semantic HTML structure
- Image alt text support
- Schema markup ready
- Canonical URLs

### Performance
- CSS minification
- Lazy loading for images
- Optimized JavaScript
- Fast page load times
- Mobile-optimized for Core Web Vitals

## 📱 Responsive Design

Theme is optimized for:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

All layouts adapt automatically.

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- ARIA labels and roles
- Color contrast ratios
- Screen reader friendly
- Focus visible indicators

## 🛠️ Developer Guide

### CSS Customization
Main CSS file: `assets/theme.css`

CSS variables for easy customization:
```css
:root {
  --color-primary: #000000;
  --color-secondary: #666666;
  --color-accent: #E85D04;
  --color-text: #1a1a1a;
  --color-light-bg: #f5f5f5;
}
```

### JavaScript
Main JS file: `assets/theme.js`

Global object: `window.Rootbound` for theme utilities

### Adding Custom Sections
1. Create new `.liquid` file in `/sections`
2. Include `{% schema %}` block with settings
3. Reference in JSON templates

## 📝 Supported Shopify Features

- ✅ Product variants (size, color, etc.)
- ✅ Collections and tags
- ✅ Discount codes
- ✅ Wishlist (via app integration)
- ✅ Customer accounts
- ✅ Gift cards
- ✅ Smart collections
- ✅ Newsletter integration ready
- ✅ Multiple currencies (Shopify native)
- ✅ Multi-language ready (via locale files)

## 🚀 Performance Metrics

Target performance scores (using Lighthouse):
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📦 Browser Support

- Chrome/Edge (latest)
- Safari (latest)
- Firefox (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Products not displaying
- Ensure products are in active collections
- Check product images are uploaded
- Verify product is published and visible

### Cart not working
- Clear browser cache
- Check if JavaScript is enabled
- Ensure checkout is properly configured

### Mobile menu not expanding
- Check if JavaScript file is loading
- Clear theme cache
- Preview in incognito/private window

## 📞 Support & Documentation

**Theme Store Documentation**: [Official Shopify Theme Docs](https://shopify.dev/themes)

**Shopify Liquid Reference**: [Liquid Cheat Sheet](https://shopify.dev/api/liquid)

**Common Issues**: See troubleshooting section above

## 📄 License

Rootbound Theme © 2026. All rights reserved.

For Shopify Theme Store submission and usage rights, refer to Shopify's Terms of Service.

## 🎁 Theme Extras

### Included Features
- Mobile-responsive design
- Performance optimized
- Accessibility compliant
- SEO friendly
- Newsletter ready
- Social media integration ready
- Search functionality
- Customer accounts
- Gift card support

### Future Enhancements
- Wishlist functionality
- Quick view modals
- Instagram feed integration
- Advanced filtering
- Reviews/ratings system

---

**Created with ❤️ for Premium Fashion Brands**

*Rootbound - Contemporary Streetwear Made Modern*
