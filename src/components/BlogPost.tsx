import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface BlogPostProps {
  slug: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug === 'best-restaurant-upselling-software-india-2026') {
      document.title = "Best Restaurant Upselling Software in India 2026 | Honest Comparison | Orlena Blog";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Looking for the best restaurant upselling software in India? We compare the top options for cafe and restaurant owners in 2026, from POS-based upselling to AI-powered QR menu systems.');
      }
    } else {
      document.title = "How to Increase Average Order Value in Your Cafe or Restaurant (2026 Guide) | Orlena Blogs";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Learn proven strategies to increase average order value in your cafe or restaurant. From AI-powered QR menu upselling to staff training techniques, this guide covers everything restaurant and cafe owners need to know.');
      }
    }
  }, [slug]);

  if (slug !== 'how-to-increase-average-order-value-restaurant' && slug !== 'best-restaurant-upselling-software-india-2026') {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28">
            <h1 className="text-2xl font-bold text-stone-600">Post not found.</h1>
        </main>
        <Footer />
      </div>
    );
  }

  if (slug === 'best-restaurant-upselling-software-india-2026') {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-20 md:pt-40 md:pb-28">
          <article className="container mx-auto px-4 md:px-6 max-w-3xl">
            <a href="/blog" className="inline-flex items-center text-[#FF6B35] font-semibold mb-8 hover:text-[#e85d00] transition-colors">
              ← Back to Blogs
            </a>
            
            <header className="mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-stone-900 leading-tight">
                Best Restaurant Upselling Software in India 2026: An Honest Comparison
              </h1>
              <div className="flex items-center gap-4 text-sm text-stone-500">
                <time>March 19, 2026</time>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none text-stone-800 space-y-6">
              <p>
                Most restaurant software in India focuses on billing, inventory, and GST compliance. That is important. But none of it answers the question that directly impacts your daily revenue: How do I get customers to spend more per visit?
              </p>
              <p>
                That is what upselling software solves. This guide compares the honest options available to cafe and restaurant owners in India in 2026, what they do well, what they miss, and which one is right for your business.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">What Is Restaurant Upselling Software?</h2>
              <p>
                Restaurant upselling software is any tool that systematically encourages customers to add more items to their order, such as sides, drinks, desserts, or premium upgrades. The goal is simple: increase your average order value without adding more customers or more staff.
              </p>
              <p>
                Done manually, upselling is inconsistent. Staff are busy, forget, or feel awkward suggesting add-ons. Done with software, it happens at every table, every order, automatically.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">The 5 Main Options in India Right Now</h2>
              
              <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">1. Petpooja</h3>
              <p>
                Petpooja is India&apos;s leading restaurant management platform, powering over 1,00,000 restaurants across India. It is primarily a POS and billing system with basic upselling features built in, such as suggested items at checkout and combo bundling. The upselling is staff-driven and manual.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Best for:</strong> Restaurants that want a complete POS system with basic upselling built in.</li>
                <li><strong>Limitation:</strong> Upselling depends entirely on your staff using it consistently.</li>
                <li><strong>Pricing:</strong> Starts around Rs 12,000 per year.</li>
              </ul>

              <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">2. Restroworks</h3>
              <p>
                Restroworks has menu engineering features that help you identify and promote high-margin items. The upselling is largely dependent on staff execution. It works well for multi-outlet restaurants that want centralized control.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Best for:</strong> Mid-size to large restaurant chains.</li>
                <li><strong>Limitation:</strong> No automated upselling at table level.</li>
                <li><strong>Pricing:</strong> Premium pricing, better suited for chains.</li>
              </ul>

              <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">3. LimeTray</h3>
              <p>
                LimeTray has QR ordering capabilities with some upsell prompt features at checkout. The upselling logic is rule-based rather than AI-driven, meaning you manually set which items get recommended.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Best for:</strong> Restaurants that want a digital menu with basic checkout upselling.</li>
                <li><strong>Limitation:</strong> Recommendations are static and do not adapt to what the customer is actually ordering.</li>
                <li><strong>Pricing:</strong> Mid-range, typically bundled with their POS.</li>
              </ul>

              <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">4. DotPe</h3>
              <p>
                DotPe offers QR-based digital ordering with some upsell nudges built into the checkout flow. It integrates well with WhatsApp and is popular with smaller cafes and QSRs because of its low setup cost.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Best for:</strong> Small cafes and QSRs looking for affordable digital ordering with light upselling.</li>
                <li><strong>Limitation:</strong> Upsell recommendations are generic and not personalized to the order.</li>
              </ul>

              <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">5. Orlena</h3>
              <p>
                Orlena is the only platform in this list built specifically for one purpose: increasing average order value through AI-powered QR menu upselling.
              </p>
              <p>
                When a customer selects a cold coffee, Orlena automatically recommends a brownie. When a customer picks a pasta, Orlena suggests garlic bread and a mocktail. These recommendations are driven by AI that learns from ordering patterns at your specific cafe.
              </p>
              <p>
                The result is consistent upselling at every single table, every shift, without your staff doing anything.
              </p>
              <p>
                Early results show a 23% increase in average order value from week one.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Best for:</strong> Cafes and restaurants that want to increase average order value automatically.</li>
                <li><strong>Limitation:</strong> Focused on upselling specifically. Not a full POS or billing system. Most cafes use it alongside their existing POS.</li>
                <li><strong>Pricing:</strong> See <a href="https://hello.orlena.talk/pricing" className="text-primary underline" target="_blank" rel="noopener noreferrer">hello.orlena.talk/pricing</a></li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Comparison Table</h2>
              
              <p>
                Want to know exactly how much revenue you are missing right now? Try the free <a href="/calculator" className="text-primary underline">Orlena Revenue Calculator</a> and see your numbers in 30 seconds.
              </p>

              <div className="overflow-x-auto mt-6 mb-8 rounded-lg border border-stone-200">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#1A1A2E] text-white">
                      <th className="p-4 font-semibold text-sm">Software</th>
                      <th className="p-4 font-semibold text-sm">Primary Focus</th>
                      <th className="p-4 font-semibold text-sm">Upselling Type</th>
                      <th className="p-4 font-semibold text-sm">Staff Required</th>
                      <th className="p-4 font-semibold text-sm">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-800 text-sm">
                    <tr className="border-b border-stone-200 bg-white">
                      <td className="p-4 font-medium">Petpooja</td>
                      <td className="p-4">POS and billing</td>
                      <td className="p-4">Manual staff-driven</td>
                      <td className="p-4">Yes</td>
                      <td className="p-4">All restaurant types</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-50">
                      <td className="p-4 font-medium">Restroworks</td>
                      <td className="p-4">Chain management</td>
                      <td className="p-4">Menu engineering</td>
                      <td className="p-4">Yes</td>
                      <td className="p-4">Multi-outlet chains</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-white">
                      <td className="p-4 font-medium">LimeTray</td>
                      <td className="p-4">Digital ordering</td>
                      <td className="p-4">Rule-based at checkout</td>
                      <td className="p-4">Partial</td>
                      <td className="p-4">Mid-size restaurants</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-50">
                      <td className="p-4 font-medium">DotPe</td>
                      <td className="p-4">QR ordering</td>
                      <td className="p-4">Generic prompts</td>
                      <td className="p-4">Partial</td>
                      <td className="p-4">Small cafes and QSRs</td>
                    </tr>
                    <tr className="bg-[#FFF5F1]">
                      <td className="p-4 font-bold text-[#FF6B35]">Orlena</td>
                      <td className="p-4 text-[#FF6B35]">AI upselling</td>
                      <td className="p-4 text-[#FF6B35]">Fully automated AI</td>
                      <td className="p-4 text-[#FF6B35]">No</td>
                      <td className="p-4 text-[#FF6B35]">Cafes focused on AOV</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Which One Should You Choose?</h2>
              <p>
                <strong>If you need a complete POS system first:</strong> Start with Petpooja or DotPe. Get your billing and operations sorted, then add Orlena on top for automated upselling.
              </p>
              <p>
                <strong>If you already have a POS and want to increase revenue:</strong> Orlena is the only purpose-built solution that increases average order value automatically without any staff training or operational changes.
              </p>
              <p>
                <strong>If you run multiple outlets:</strong> Restroworks gives you the best centralized control, but pair it with an AI upselling layer for revenue optimization at each table.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">The Bottom Line</h2>
              <p>
                Most restaurant software in India solves the wrong problem. Billing accuracy, inventory tracking, and GST compliance are important but they do not grow your revenue per table.
              </p>
              <p>
                The cafes and restaurants winning in 2026 combine a solid POS system for operations with an AI upselling layer for revenue. These are two different tools solving two different problems. You need both.
              </p>
              <p>
                If your average bill is Rs 400 and you serve 60 tables a day, a 23% increase in average order value adds over Rs 1.6 lakh in additional monthly revenue from the same customers you already have.
              </p>
              <p>
                Want to calculate exactly how much your cafe is leaving on the table? Try the free <a href="/calculator" className="text-primary underline">Orlena Revenue Calculator</a>.
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Read our founder story on IndieHackers: {' '}
              <a 
                href="https://www.indiehackers.com/post/i-built-an-ai-upselling-system-for-restaurants-after-visiting-47-cafes-in-bangalore-just-launched-on-product-hunt-today-7qRI8pgmvm2YXOPRxvSv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                How I built Orlena after visiting 47 cafes in Bangalore
              </a>
            </p>

            <div className="my-8 flex justify-center">
              <div dangerouslySetInnerHTML={{ __html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; border: 1px solid rgb(224, 224, 224); border-radius: 12px; padding: 20px; max-width: 500px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px;">
                  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <img alt="Orlena" src="https://ph-files.imgix.net/ca582ef5-5d0e-4c68-8acc-55876b73a09a.png?auto=format&fit=crop&w=80&h=80" style="width: 64px; height: 64px; border-radius: 8px; object-fit: cover; flex-shrink: 0;">
                    <div style="flex: 1 1 0%; min-width: 0px;">
                      <h3 style="margin: 0px; font-size: 18px; font-weight: 600; color: rgb(26, 26, 26); line-height: 1.3; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Orlena</h3>
                      <p style="margin: 4px 0px 0px; font-size: 14px; color: rgb(102, 102, 102); line-height: 1.4; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">AI that increases your restaurant's average order value</p>
                    </div>
                  </div>
                  <a href="https://www.producthunt.com/products/orlena?embed=true&utm_source=embed&utm_medium=post_embed" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 4px; margin-top: 12px; padding: 8px 16px; background: rgb(255, 97, 84); color: rgb(255, 255, 255); text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">Check it out on Product Hunt →</a>
                </div>
              ` }} />
            </div>

            <div className="mt-16 p-8 bg-[#FFF5F1] rounded-2xl border border-[#FFE4D6] text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-stone-900">Ready to increase your restaurant&apos;s average order value?</h3>
              <p className="text-stone-600 mb-6 font-medium">See how Orlena&apos;s AI upselling system automates cross-selling recommendations and boosts your revenue by 37-40%.</p>
              <a 
                href="https://cal.com/vishnu-rajan-3siibd/secret?overlayCalendar=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#FF6B35] text-white font-bold py-3 px-8 rounded-full hover:bg-[#e85d00] transition-colors shadow-sm"
              >
                Book a Free Demo
              </a>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 md:pt-40 md:pb-28">
        <article className="container mx-auto px-4 md:px-6 max-w-3xl">
          <a href="/blog" className="inline-flex items-center text-[#FF6B35] font-semibold mb-8 hover:text-[#e85d00] transition-colors">
            ← Back to Blogs
          </a>
          
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-stone-900 leading-tight">
              How to Increase Average Order Value in Your Cafe or Restaurant (2026 Guide)
            </h1>
            <div className="flex items-center gap-4 text-sm text-stone-500">
              <time>March 15, 2026</time>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-stone-800 space-y-6">
            <p>
              If you run a cafe or restaurant in India, you already know that getting customers through the door is only half the battle. The real revenue game is in what they spend once they sit down.
            </p>

            <p>
              Indian restaurants saw a 37-40% higher average check value after implementing digital menus and QR codes. Yet most cafe and restaurant owners in Bangalore, Mumbai, Delhi, and across India are still leaving that revenue on the table every single day.
            </p>

            <p>
              This guide covers the most effective, proven strategies to increase average order value (AOV) in your cafe or restaurant in 2026, without hiring more staff or spending more on marketing.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">What Is Average Order Value and Why Does It Matter?</h2>
            <p>
              Average order value is the average amount a customer spends per visit. If your cafe serves 80 tables a day with an average bill of Rs 400, your daily revenue is Rs 32,000. Increase that average bill by just Rs 80 per table and you add Rs 6,400 per day, which is over Rs 1.9 lakh in additional monthly revenue, with zero new customers.
            </p>
            <p>
              The Indian cafe and bar segment is estimated at $18.83 billion in 2025 and is projected to reach $30.11 billion by 2030. In a market growing this fast, the cafes and restaurants that win are not the ones acquiring the most customers. They are the ones extracting the most value from every single table.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">1. Use AI-Powered QR Menu Upselling</h2>
            <p>This is the single highest-impact strategy available to restaurant owners in 2026. Traditional QR menus are just digital PDFs. They display your menu but do nothing to increase what a customer orders. An AI-powered QR menu upselling system like Orlena works differently. It automatically recommends high-margin add-ons, sides, and drinks at the exact moment a customer is browsing, based on what they have already selected.</p>
            <p>A customer orders a cold coffee. The system suggests a chocolate brownie at a 90% preference match. A customer orders pasta. The system recommends garlic bread and a mocktail. These are not random suggestions. They are data-driven restaurant cross-selling recommendations that convert at significantly higher rates than staff-driven upselling.</p>
            <p>The result is a consistent 37-40% increase in average order value across every table, every shift, with zero staff training required. For cafes in Bangalore neighborhoods like Koramangala, Indiranagar, and HSR Layout where footfall is high and competition is fierce, this kind of automated revenue optimization is no longer optional. It is a competitive necessity.</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">2. Train Your Staff to Upsell Consistently</h2>
            <p>Even with the best restaurant upselling system in place, your staff remains a critical touchpoint. The problem is consistency. Research consistently shows that servers miss upsell opportunities at over 70% of tables, not because they do not want to upsell but because they are busy, distracted, or simply forget.</p>
            <p>Effective restaurant upsell training focuses on three things. First, teach your team to recommend specific items, not vague suggestions. Instead of "would you like anything else," train them to say "our truffle fries pair really well with your burger, can I add those?" Second, train staff to recommend your highest-margin items first, not just their personal favorites. Third, use timed prompts, such as recommending a dessert just before a customer finishes their main course.</p>
            <p>The limitation here is obvious. Staff training produces inconsistent results and needs constant reinforcement. This is exactly why automated restaurant upselling software exists to fill the gaps staff naturally leave.</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">3. Engineer Your Menu for Higher Average Bill Size</h2>
            <p>Menu engineering is one of the most underused strategies for increasing average order value in Indian restaurants. The placement, description, and pricing of items on your menu directly influences what customers order.</p>
            <p>Place your highest-margin items in the top right corner of the menu. This is where the eye naturally goes first. Use descriptive, sensory language for premium items. "Hand-churned seasonal ice cream" converts better than "ice cream." Bundle high-margin items together as combos or meal deals. A customer who might order just a sandwich is far more likely to add a drink and dessert when they are presented as a value bundle.</p>
            <p>For cafes in Bangalore and other metros where the average diner is increasingly food-savvy, premium menu descriptions signal quality and justify higher price points.</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">4. Introduce High-Margin Add-Ons and Sides</h2>
            <p>One of the fastest ways to increase average restaurant bill size is through strategic add-on promotion. High-margin add-ons including breads, sauces, toppings, and beverages typically cost very little to produce but add significant value to the bill.</p>
            <p>The challenge is visibility. Most restaurants bury their add-ons at the bottom of the menu where they are rarely seen. With a digital menu upsell system, add-ons are surfaced automatically at the right moment in the ordering flow. A customer adding a main course is immediately shown relevant, high-margin accompaniments. This is restaurant cross-selling at its most effective because it happens without any human intervention.</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">5. Leverage Data to Optimise Your Menu Over Time</h2>
            <p>Most cafe and restaurant owners in India make menu decisions based on gut feeling. The cafes that consistently grow their average order value make decisions based on data.</p>
            <p>Track which items are most frequently ordered together. Track which upsell suggestions are accepted most often. Track which tables and time slots produce the highest average bill. Use this data to refine your menu, adjust pricing, and improve your upselling strategy over time.</p>
            <p>Urban Indians now dine out around 5 times a month, and this is expected to increase to 7 to 8 times per month. As dining frequency increases, the cafes and restaurants that capture data and act on it will consistently outperform those that do not.</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">6. Optimize for the Digital Ordering Experience</h2>
            <p>Digital payments now cover 87% of urban outlets in India. This means the majority of your customers are already comfortable with digital ordering. A frictionless digital menu experience directly increases average order value because customers who browse digitally spend more time exploring the menu and are more receptive to suggestions.</p>
            <p>Ensure your QR menu loads fast, looks great on mobile, and makes it easy to add items. Every extra second of load time or confusing navigation costs you conversions and reduces your average bill size.</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">The Bottom Line</h2>
            <p>Increasing average order value in your cafe or restaurant does not require more customers, more marketing spend, or more staff. It requires a smarter system at the point of ordering.</p>
            <p>The most effective combination in 2026 is an AI-powered QR menu upselling system that automates cross-selling recommendations, combined with well-engineered menu design and basic staff upsell training. Together these strategies can realistically increase your average order value by 37-40% within the first month.</p>
            <p>For cafe and restaurant owners in Bangalore, Mumbai, Pune, Hyderabad, and across India, the window to adopt this technology before your competitors do is still open. It will not stay open for long.</p>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Read our founder story on IndieHackers: {' '}
            <a 
              href="https://www.indiehackers.com/post/i-built-an-ai-upselling-system-for-restaurants-after-visiting-47-cafes-in-bangalore-just-launched-on-product-hunt-today-7qRI8pgmvm2YXOPRxvSv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              How I built Orlena after visiting 47 cafes in Bangalore
            </a>
          </p>

          <div className="my-8 flex justify-center">
            <div dangerouslySetInnerHTML={{ __html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; border: 1px solid rgb(224, 224, 224); border-radius: 12px; padding: 20px; max-width: 500px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <img alt="Orlena" src="https://ph-files.imgix.net/ca582ef5-5d0e-4c68-8acc-55876b73a09a.png?auto=format&fit=crop&w=80&h=80" style="width: 64px; height: 64px; border-radius: 8px; object-fit: cover; flex-shrink: 0;">
                  <div style="flex: 1 1 0%; min-width: 0px;">
                    <h3 style="margin: 0px; font-size: 18px; font-weight: 600; color: rgb(26, 26, 26); line-height: 1.3; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Orlena</h3>
                    <p style="margin: 4px 0px 0px; font-size: 14px; color: rgb(102, 102, 102); line-height: 1.4; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">AI that increases your restaurant's average order value</p>
                  </div>
                </div>
                <a href="https://www.producthunt.com/products/orlena?embed=true&utm_source=embed&utm_medium=post_embed" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 4px; margin-top: 12px; padding: 8px 16px; background: rgb(255, 97, 84); color: rgb(255, 255, 255); text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">Check it out on Product Hunt →</a>
              </div>
            ` }} />
          </div>

          <div className="mt-16 p-8 bg-[#FFF5F1] rounded-2xl border border-[#FFE4D6] text-center shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-stone-900">Want to increase your restaurant's average order value?</h3>
            <p className="text-stone-600 mb-6 font-medium">See how Orlena's AI upselling system automates cross-selling recommendations and boosts your revenue by 37-40%.</p>
            <a 
              href="https://cal.com/vishnu-rajan-3siibd/secret?overlayCalendar=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#FF6B35] text-white font-bold py-3 px-8 rounded-full hover:bg-[#e85d00] transition-colors shadow-sm"
            >
              Book a free demo with Orlena
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
