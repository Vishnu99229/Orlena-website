import re

with open('src/components/BlogPost.tsx', 'r') as f:
    content = f.read()

# 1. Add import
content = content.replace("import { Footer } from './Footer';", "import { Footer } from './Footer';\nimport SEO from './SEO';")

# 2. Fix the first if-block (lines 12-81 approx)
# We want to remove everything between `if (slug === 'how-to-increase-restaurant-sales-on-weekends') {`
# and `// Add JSON-LD Schema`
pattern1 = r"(if \(slug === 'how-to-increase-restaurant-sales-on-weekends'\) \{)\s*document\.title = .*?// Add JSON-LD Schema"
content = re.sub(pattern1, r"\1\n      // Add JSON-LD Schema", content, flags=re.DOTALL)

# 3. Fix the else-ifs (lines 159-199 approx)
pattern2 = r"\} else if \(slug === 'best-restaurant-upselling-software-india-2026'\) \{.*?\}\s*\}, \[slug\]\);"
content = re.sub(pattern2, r"}\n  }, [slug]);", content, flags=re.DOTALL)

# 4. Inject SEO tags into the return statements
# For post not found:
content = content.replace(
    '        <Navbar />\n        <main className="flex-grow flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28">',
    '        <SEO title="Post Not Found | Orlena" description="Blog post not found." canonical="https://orlena.talk/blog" />\n        <Navbar />\n        <main className="flex-grow flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28">'
)

# For 'how-to-increase-restaurant-sales-on-weekends':
content = content.replace(
    '  if (slug === \'how-to-increase-restaurant-sales-on-weekends\') {\n    return (\n      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">\n        <Navbar />',
    '''  if (slug === 'how-to-increase-restaurant-sales-on-weekends') {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
        <SEO 
          title="How to Increase Restaurant Sales on Weekends: 12 Proven Strategies | Orlena"
          description="Want to know how to increase restaurant sales on weekends without hiring more staff or raising prices? Here are 12 practical strategies Indian cafes and restaurants are using right now to turn weekend rushes into real profit."
          canonical="https://orlena.talk/blog/how-to-increase-restaurant-sales-on-weekends"
          ogImage="https://orlena.talk/og-image.png"
          ogType="article"
        />
        <Navbar />'''
)

# For 'qr-menu-upselling-complete-guide-india':
content = content.replace(
    '  if (slug === \'qr-menu-upselling-complete-guide-india\') {\n    return (\n      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">\n        <Navbar />',
    '''  if (slug === 'qr-menu-upselling-complete-guide-india') {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
        <SEO 
          title="QR Menu Upselling India: How Smart Cafes Are Adding ₹50,000/Month Without Extra Staff | Orlena"
          description="Most QR menus in India just show food. The smart ones sell it. Here is exactly how restaurant and cafe owners are using QR menu upselling to increase average order value by 23% without hiring anyone new."
          canonical="https://orlena.talk/blog/qr-menu-upselling-complete-guide-india"
          ogType="article"
        />
        <Navbar />'''
)

# For 'best-restaurant-upselling-software-india-2026':
content = content.replace(
    '  if (slug === \'best-restaurant-upselling-software-india-2026\') {\n    return (\n      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">\n        <Navbar />',
    '''  if (slug === 'best-restaurant-upselling-software-india-2026') {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
        <SEO 
          title="Best Restaurant Upselling Software in India 2026 | Honest Comparison | Orlena Blog"
          description="Looking for the best restaurant upselling software in India? We compare the top options for cafe and restaurant owners in 2026, from POS-based upselling to AI-powered QR menu systems."
          canonical="https://orlena.talk/blog/best-restaurant-upselling-software-india-2026"
          ogType="article"
        />
        <Navbar />'''
)

# For 'how-to-increase-average-order-value-restaurant':
content = content.replace(
    '  if (slug === \'how-to-increase-average-order-value-restaurant\') {\n    return (\n      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">\n        <Navbar />',
    '''  if (slug === 'how-to-increase-average-order-value-restaurant') {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
        <SEO 
          title="Why Your Cafe Loses ₹40,000/Month (And How to Stop It) | Orlena"
          description="Most cafe owners in India don't realise their menu is silently killing revenue. Here's exactly how to increase average order value by 20-30% without hiring more staff or spending on ads."
          canonical="https://orlena.talk/blog/how-to-increase-average-order-value-restaurant"
          ogType="article"
        />
        <Navbar />'''
)

with open('src/components/BlogPost.tsx', 'w') as f:
    f.write(content)

print("Modifications applied successfully.")
