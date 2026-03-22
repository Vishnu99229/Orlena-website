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
    } else if (slug === 'qr-menu-upselling-complete-guide-india') {
      document.title = "QR Menu Upselling India: How Smart Cafes Are Adding ₹50,000/Month Without Extra Staff | Orlena";
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', "Most QR menus in India just show food. The smart ones sell it. Here is exactly how restaurant and cafe owners are using QR menu upselling to increase average order value by 23% without hiring anyone new.");
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', "QR Menu Upselling India: How Smart Cafes Are Adding ₹50,000/Month Without Extra Staff | Orlena");
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', "Most QR menus in India just show food. The smart ones sell it. Here is exactly how to increase average order value by 23% without hiring anyone new.");
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', "QR Menu Upselling India: How Smart Cafes Are Adding ₹50,000/Month Without Extra Staff | Orlena");
      
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', "Most QR menus in India just show food. The smart ones sell it. Here is exactly how to increase average order value by 23% without hiring anyone new.");
    } else {
      document.title = "Why Your Cafe Loses ₹40,000/Month (And How to Stop It) | Orlena";
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', "Most cafe owners in India don't realise their menu is silently killing revenue. Here's exactly how to increase average order value by 20-30% without hiring more staff or spending on ads.");
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', "Why Your Cafe Loses ₹40,000/Month (And How to Stop It) | Orlena");
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', "Most cafe owners in India don't realise their menu is silently killing revenue. Here's how to increase average order value by 20-30% without hiring more staff.");
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', "Why Your Cafe Loses ₹40,000/Month (And How to Stop It) | Orlena");
      
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', "Most cafe owners in India don't realise their menu is silently killing revenue. Here's how to increase average order value by 20-30% without hiring more staff.");
    }
  }, [slug]);

  if (slug !== 'how-to-increase-average-order-value-restaurant' && slug !== 'best-restaurant-upselling-software-india-2026' && slug !== 'qr-menu-upselling-complete-guide-india') {
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

  if (slug === 'qr-menu-upselling-complete-guide-india') {
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
                Your QR Menu Is Showing Food. It Should Be Selling It.
              </h1>
              <div className="flex items-center gap-4 text-sm text-stone-500">
                <time>March 23, 2026</time>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none text-stone-800 space-y-6">
              <p>
                Every cafe and restaurant in Bangalore is putting a QR code on the table. Most of them are using it as a digital menu and nothing else. That is the equivalent of hiring a salesperson and telling them to stay quiet.
              </p>
              <p>
                This guide is for cafe and restaurant owners who want to use their QR menu as an actual revenue tool, not just a laminated card replacement.
              </p>
              <p>
                By the end of this you will know exactly how QR menu upselling works, why it outperforms staff upselling every single time, and how to set it up in your cafe this week.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">What Is QR Menu Upselling?</h2>
              <p>
                QR menu upselling is when your digital menu automatically suggests additional items to a customer while they are ordering. Instead of a static list of dishes and prices, the menu becomes an intelligent sales tool that recommends the right add-on at the right moment.
              </p>
              <p>Examples of what this looks like in practice:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A customer selects a cappuccino. The menu shows: "Most people add a Hazelnut shot for just ₹40 more." One tap and it is added.</li>
                <li>A customer orders a pasta. The menu shows: "This pairs perfectly with our Garlic Bread - add it for ₹120?" One tap.</li>
                <li>A customer selects a burger. The menu shows: "Upgrade to a combo with fries and a cold brew for ₹89 extra?" One tap.</li>
              </ul>
              <p>
                None of this requires your staff to say a word. The menu does the selling while your team focuses on serving.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Why Staff Upselling Fails (And Why This Matters For Your Cafe)</h2>
              <p>If you have ever told your staff to upsell, you already know the problem.</p>
              <p>
                They forget. They feel awkward asking. During a rush they skip it entirely. A new staff member does not know which items to recommend together. And even your best waiter is only at one table at a time.
              </p>
              <p>
                Research across restaurants shows that staff miss over 70% of upsell opportunities during a normal service. Not because they are bad at their jobs. Because upselling is a sales skill, and most restaurant staff are hospitality people, not salespeople.
              </p>
              <p>
                A QR menu upselling system never forgets. It never feels awkward. It works on every single order, at every single table, during the lunch rush and the quiet Tuesday afternoon. It is consistent in a way that no human team can be.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">The Numbers: What QR Menu Upselling Actually Does to Revenue</h2>
              <p>Here is a real example using typical Bangalore cafe numbers:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Tables served per day:</strong> 60</li>
                <li><strong>Average order value without upselling:</strong> ₹420</li>
                <li><strong>Monthly revenue:</strong> ₹7,56,000</li>
              </ul>
              
              <p className="mt-4 font-semibold">With QR menu upselling (23% AOV increase):</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>New average order value:</strong> ₹517</li>
                <li><strong>Monthly revenue:</strong> ₹9,30,600</li>
              </ul>
              
              <p className="mt-4 font-bold text-xl">Additional revenue per month: ₹1,74,600</p>
              <p>
                That is not a projection. That is the math on a 23% increase in average order value, which is the average result Orlena produces across cafes and restaurants using the system.
              </p>
              <p>
                Want to see what this looks like for your specific cafe? Use the calculator at <a href="/calculator" className="text-[#FF6B35] font-semibold hover:text-[#e85d00] transition-colors">hello.orlena.talk/calculator</a> - enter your tables and average bill and you will see your exact number in 30 seconds.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">What Gets Upsold and What Does Not</h2>
              <p>Not every item is an upsell opportunity. The best QR menu upselling systems know the difference.</p>
              
              <p className="font-semibold">High conversion upsell items:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Add-on shots and syrups for coffee drinks (high margin, low price, easy yes)</li>
                <li>Desserts suggested at the end of a meal (timing matters hugely here)</li>
                <li>Combo upgrades (give them more for a small extra amount)</li>
                <li>Beverages paired with food orders</li>
                <li>Seasonal or limited specials shown prominently</li>
              </ul>

              <p className="font-semibold mt-6">Low conversion upsell items:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Main course upgrades (too big a decision)</li>
                <li>Premium item swaps when the price gap is large</li>
                <li>Items that do not logically connect to what they ordered</li>
              </ul>

              <p>
                The key insight is that the best upsells are small decisions. A customer who has already committed to spending ₹400 can easily say yes to spending ₹440. The mental barrier for a ₹40 add-on is almost zero.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">How QR Menu Upselling Works Technically</h2>
              <p>You do not need to rebuild your entire ordering system. Here is how it works at a basic level:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Your menu is digitised into the QR system</li>
                <li>You define upsell rules - "when someone orders X, suggest Y"</li>
                <li>The system can also learn from order patterns and automate suggestions over time</li>
                <li>Customer scans QR, browses menu, sees suggestions inline while ordering</li>
                <li>One tap to add, no friction, no staff involvement needed</li>
              </ol>
              <p>
                The setup takes a few hours. The ongoing management is minimal. You set it up once and it runs every service.
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">The Three Upsell Moments That Matter Most</h2>
              <p>There are three specific moments in a customer's ordering journey where upselling works best. Miss these and the opportunity is gone.</p>
              
              <h3 className="text-xl font-bold text-stone-900 mt-6 mb-2">Moment 1: Right after the main item is selected</h3>
              <p>This is the highest conversion moment. The customer is in buying mode. They just said yes to something. A small add-on suggestion here gets a yes 30-40% of the time.</p>
              
              <h3 className="text-xl font-bold text-stone-900 mt-6 mb-2">Moment 2: At the beverage selection stage</h3>
              <p>Beverages are the highest margin items in any cafe. If someone is ordering food without a drink, a well-timed suggestion converts at surprisingly high rates.</p>
              
              <h3 className="text-xl font-bold text-stone-900 mt-6 mb-2">Moment 3: At checkout before confirming the order</h3>
              <p>A summary screen that shows "You might also like" with one or two items converts a portion of customers who would otherwise have finalised a smaller order.</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">What Makes a Good Upsell Suggestion</h2>
              <p>The difference between an upsell that works and one that annoys the customer comes down to three things:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Relevance</strong> - the suggestion must make sense with what they ordered. Suggesting a cold brew with a pasta works. Suggesting a biryani with a cold brew does not.</li>
                <li><strong>Price gap</strong> - the upsell should be 10-25% of the original item price. A ₹400 main course pairs well with a ₹60-100 add-on. A ₹400 add-on suggestion will be ignored.</li>
                <li><strong>Framing</strong> - "Most people add this" and "Pairs perfectly with" convert better than "Would you like to add". Social proof framing works even in a digital menu.</li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">QR Menu Upselling vs Traditional Upselling: A Direct Comparison</h2>
              <div className="overflow-x-auto mt-6 mb-8 rounded-lg border border-stone-200">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#1A1A2E] text-white">
                      <th className="p-4 font-semibold text-sm">Feature</th>
                      <th className="p-4 font-semibold text-sm">Staff Upselling</th>
                      <th className="p-4 font-semibold text-sm">QR Menu Upselling</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-800 text-sm">
                    <tr className="border-b border-stone-200 bg-white">
                      <td className="p-4 font-medium">Consistency</td>
                      <td className="p-4">Varies by staff member</td>
                      <td className="p-4">100% consistent every order</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-50">
                      <td className="p-4 font-medium">Training required</td>
                      <td className="p-4">Ongoing</td>
                      <td className="p-4">None</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-white">
                      <td className="p-4 font-medium">Works during rush</td>
                      <td className="p-4">Often skipped</td>
                      <td className="p-4">Always on</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-50">
                      <td className="p-4 font-medium">Tracks what works</td>
                      <td className="p-4">No data</td>
                      <td className="p-4">Full analytics</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-white">
                      <td className="p-4 font-medium">Cost</td>
                      <td className="p-4">Staff time and training</td>
                      <td className="p-4">Fixed monthly cost</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-50">
                      <td className="p-4 font-medium">Scales with tables</td>
                      <td className="p-4">Harder as you grow</td>
                      <td className="p-4">Scales automatically</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Why Indian Cafes and Restaurants Are Switching Now</h2>
              <p>Three things have changed in the last two years that make QR menu upselling a practical reality for Indian restaurants:</p>
              <p>First, QR menus are now normal. Customers in Bangalore, Mumbai and Delhi are completely comfortable scanning and ordering digitally. The adoption barrier is gone.</p>
              <p>Second, the technology has become affordable. What used to require a large POS investment is now available as a monthly subscription that costs less than one staff member's daily wage.</p>
              <p>Third, margins are getting tighter. Rent is up. Ingredient costs are up. Staff costs are up. The cafes that survive the next three years will be the ones that extract maximum value from every customer who walks in, not the ones that cut costs.</p>
              <p>Upselling is the only lever that increases revenue without increasing costs or customers.</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">How to Get Started With QR Menu Upselling in Your Cafe</h2>
              <p>Here is the honest step by step:</p>
              
              <h3 className="text-xl font-bold text-stone-900 mt-6 mb-2">Step 1: Audit your current menu</h3>
              <p>Identify your top 10 selling items. For each one, write down the most logical add-on or upgrade. That is your upsell map.</p>
              
              <h3 className="text-xl font-bold text-stone-900 mt-6 mb-2">Step 2: Calculate your current missed revenue</h3>
              <p>Before you invest in any system, know what you are leaving on the table. Use the free calculator at <a href="/calculator" className="text-[#FF6B35] font-semibold hover:text-[#e85d00] transition-colors">hello.orlena.talk/calculator</a>. Enter your tables per day and average bill. The number that comes up is your monthly missed revenue at current conversion rates.</p>
              
              <h3 className="text-xl font-bold text-stone-900 mt-6 mb-2">Step 3: Choose a QR upselling system built for Indian restaurants</h3>
              <p>Not all QR menu systems have upselling built in. Most are just digital menus. Look specifically for a system that has AI-driven upsell suggestions, Indian payment integration, works on any smartphone without app download, and gives you analytics on what is being upsold.</p>
              
              <h3 className="text-xl font-bold text-stone-900 mt-6 mb-2">Step 4: Start with your highest margin items</h3>
              <p>Do not try to upsell everything at once. Pick your top 5 highest margin items and build your first upsell rules around those. See the results in week one before expanding.</p>
              
              <h3 className="text-xl font-bold text-stone-900 mt-6 mb-2">Step 5: Track average order value weekly</h3>
              <p>This is your single most important metric. If average order value is going up, the system is working. If it is flat, adjust your upsell suggestions.</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">The Cafe That Is Not Using This Is Losing To The One That Is</h2>
              <p>Here is a reality that is uncomfortable but true. If two cafes in the same area are serving similar food at similar prices, the one using intelligent upselling will make 20-30% more revenue from the exact same number of customers.</p>
              <p>That gap compounds. More revenue means better ingredients, better staff, better marketing. The cafe that figures out upselling first wins the neighbourhood.</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Try Orlena Free - Built Specifically for Indian Cafes and Restaurants</h2>
              <p>Orlena is an AI-powered QR menu upselling system built specifically for the Indian restaurant and cafe market. It plugs into your existing setup, requires zero staff training, and starts increasing your average order value from the first day.</p>
              <p>Cafes using Orlena see an average 23% increase in order value within the first two weeks.</p>
              <p>See what Orlena could do for your cafe:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Calculate your missed revenue at <a href="/calculator" className="text-[#FF6B35] font-semibold hover:text-[#e85d00] transition-colors">hello.orlena.talk/calculator</a></li>
                <li>Read what other restaurant owners are saying:</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 my-8 max-w-sm mx-auto">
              <a 
                href="https://www.producthunt.com/posts/orlena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1A1A2E] text-white font-medium py-3 px-6 rounded-lg text-center hover:bg-stone-800 transition-colors"
              >
                View Orlena on Product Hunt
              </a>
              <a 
                href="https://www.indiehackers.com/product/orlena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FAFAFA] border border-stone-200 text-stone-800 font-medium py-3 px-6 rounded-lg text-center hover:bg-stone-50 transition-colors"
              >
                Read our story on Indie Hackers
              </a>
            </div>

            <div className="bg-[#FAFAFA] border border-stone-200 rounded-xl p-6 mb-8 text-center mt-12">
              <h3 className="text-xl font-bold text-stone-900 mb-4">Talk to Vishnu directly - WhatsApp or call:</h3>
              <a 
                href="https://wa.me/919880622570?text=Hi%20Vishnu!%20I%20read%20your%20blog%20on%20QR%20menu%20upselling%20and%20want%20to%20know%20more%20about%20Orlena."
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-[#1D9E75] text-white font-bold py-3 px-6 rounded-full hover:bg-[#15805e] transition-colors text-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +91 98806 22570
              </a>
              <p className="mt-4 text-sm text-stone-600">Tap the number above to open WhatsApp directly. No forms, no demos, no pitch decks. Just a conversation about whether Orlena makes sense for your cafe.</p>
            </div>

            <div className="mt-16 p-8 bg-[#FFF5F1] rounded-2xl border border-[#FFE4D6] text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-stone-900">Ready to increase your restaurant's average order value?</h3>
              <p className="text-stone-600 mb-6 font-medium">See how Orlena's AI upselling system automates cross-selling recommendations and boosts your revenue by 37-40%.</p>
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
              Why Your Cafe Is Losing ₹40,000 Every Month (And Exactly How to Stop It)
            </h1>
            <div className="flex items-center gap-4 text-sm text-stone-500">
              <time>March 15, 2026</time>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-stone-800 space-y-6">
            <p>
              If your cafe serves 40 tables a day with an average bill of ₹450, you are likely leaving between ₹30,000 and ₹50,000 on the table every single month. Not because of bad food. Not because of bad location. But because of three specific things your menu and staff are not doing. This guide covers exactly what those three things are and how to fix them today.
            </p>
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
