"use client";

const cardData = [
  { title: "First-Time Buyer Guide", description: "Everything you need to know before applying for your first UAE home loan.", label: "Guides" },
  { title: "Self-Employed Mortgages", description: "Proven strategies to get approved with variable income.", label: "Tips" },
  { title: "Fixed vs Variable Rates", description: "Compare pros and cons to make an informed decision for your mortgage.", label: "Rates" },
  { title: "Dubai Property Market 2025", description: "Latest trends and what to expect when buying in the UAE.", label: "Market" },
  { title: "Down Payment Strategies", description: "How to save for your 20% down payment faster.", label: "Savings" },
  { title: "Refinancing Your Loan", description: "When and how to refinance for better rates.", label: "Refinance" },
];

export function BlogGrid() {
  return (
    <div
      className="blog-grid-container grid gap-2 p-3 max-w-[54rem] w-full"
      style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)" }}
    >
      <div className="grid grid-cols-1 w-full max-w-[54rem] mx-auto gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="blog-card flex flex-col justify-between relative aspect-[4/3] min-h-[180px] w-full p-5 rounded-[20px] border border-border bg-card text-foreground overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(40,48,58,0.1)]"
          >
            <span className="text-base font-medium text-muted-foreground">{card.label}</span>
            <div className="flex flex-col">
              <h3 className="font-normal text-base m-0 mb-1 line-clamp-1">{card.title}</h3>
              <p className="text-xs leading-5 opacity-90 line-clamp-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
