"use client";

const cardData = [
  { title: "First-Time Buyer Guide", description: "Everything you need to know before applying for your first UAE home loan.", label: "Guides" },
  { title: "Self-Employed Mortgages", description: "Proven strategies to get approved with variable income.", label: "Tips" },
  { title: "Fixed vs Variable Rates", description: "Compare pros and cons to make an informed decision.", label: "Rates" },
  { title: "Dubai Property Market 2025", description: "Latest trends and what to expect when buying in the UAE.", label: "Market" },
  { title: "Down Payment Strategies", description: "How to save for your 20% down payment faster.", label: "Savings" },
  { title: "Refinancing Your Loan", description: "When and how to refinance for better rates.", label: "Refinance" },
];

const cardClass = "flex flex-col justify-between relative w-full p-5 rounded-[20px] border border-border bg-card text-foreground overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(40,48,58,0.1)]";

export function BlogGrid() {
  return (
    <div className="grid gap-2 sm:gap-3 p-3 max-w-[54rem] w-full grid-cols-1 sm:grid-cols-3"
      style={{ gridTemplateRows: "repeat(4, minmax(90px, 1fr))" }}>
      {/* Large: First-Time Buyer - 2 cols × 2 rows */}
      <div className={`${cardClass} col-span-2 row-span-2 min-h-[160px] sm:min-h-[200px]`}>
        <span className="text-sm font-medium text-muted-foreground">{cardData[0].label}</span>
        <div className="flex flex-col flex-1 mt-2">
          <h3 className="font-semibold text-base sm:text-lg line-clamp-1">{cardData[0].title}</h3>
          <p className="text-sm leading-5 text-muted-foreground line-clamp-3 mt-1">{cardData[0].description}</p>
        </div>
      </div>
      {/* Small: Self-Employed */}
      <div className={`${cardClass} min-h-[80px]`}>
        <span className="text-xs font-medium text-muted-foreground">{cardData[1].label}</span>
        <h3 className="font-semibold text-sm mt-0.5 line-clamp-1">{cardData[1].title}</h3>
        <p className="text-xs leading-4 text-muted-foreground line-clamp-2 mt-0.5">{cardData[1].description}</p>
      </div>
      {/* Small: Fixed vs Variable */}
      <div className={`${cardClass} min-h-[80px]`}>
        <span className="text-xs font-medium text-muted-foreground">{cardData[2].label}</span>
        <h3 className="font-semibold text-sm mt-0.5 line-clamp-1">{cardData[2].title}</h3>
        <p className="text-xs leading-4 text-muted-foreground line-clamp-2 mt-0.5">{cardData[2].description}</p>
      </div>
      {/* Medium: Down Payment - spans 2 cols */}
      <div className={`${cardClass} col-span-2 min-h-[80px]`}>
        <span className="text-xs font-medium text-muted-foreground">{cardData[4].label}</span>
        <h3 className="font-semibold text-sm mt-0.5 line-clamp-1">{cardData[4].title}</h3>
        <p className="text-sm leading-4 text-muted-foreground line-clamp-2 mt-0.5">{cardData[4].description}</p>
      </div>
      {/* Small: Dubai Market */}
      <div className={`${cardClass} min-h-[80px]`}>
        <span className="text-xs font-medium text-muted-foreground">{cardData[3].label}</span>
        <h3 className="font-semibold text-sm mt-0.5 line-clamp-1">{cardData[3].title}</h3>
        <p className="text-xs leading-4 text-muted-foreground line-clamp-2 mt-0.5">{cardData[3].description}</p>
      </div>
      {/* Medium: Refinancing - spans 2 cols */}
      <div className={`${cardClass} col-span-2 min-h-[80px]`}>
        <span className="text-xs font-medium text-muted-foreground">{cardData[5].label}</span>
        <h3 className="font-semibold text-sm mt-0.5 line-clamp-1">{cardData[5].title}</h3>
        <p className="text-sm leading-4 text-muted-foreground line-clamp-2 mt-0.5">{cardData[5].description}</p>
      </div>
    </div>
  );
}
